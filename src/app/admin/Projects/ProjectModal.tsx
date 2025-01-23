import React, { useState } from 'react';
import Image from 'next/image';
import { X, Edit, Trash2, Plus } from 'lucide-react';
import { ProjectData } from './project-types';
import { supabase } from '@/app/supabase';
import { uploadImageToCloudinary } from '@/app/utils/uploadToCloudinary';
import Button from '@/app/components/button';
import SubmitButton from '@/app/components/SubmitButton';
import toast from 'react-hot-toast';

interface ProjectModalProps {
	project: ProjectData;
	onClose: () => void;
	onSave: (updatedProject: ProjectData) => void;
	onDelete: (projectId: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
	project,
	onClose,
	onSave,
	onDelete,
}) => {
	const [mainImageFile, setMainImageFile] = useState<File | null>(null);
	const [secondaryImageFile, setSecondaryImageFile] = useState<File | null>(
		null,
	);
	const [updatedMainImageUrl, setUpdatedMainImageUrl] = useState<string>('');
	const [updatedSecondaryImageUrl, setUpdatedSecondaryImageUrl] =
		useState<string>('');
	const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editedProject, setEditedProject] = useState<ProjectData>({
		...project,
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setEditedProject((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: keyof ProjectData,
	) => {
		const file = e.target.files?.[0];
		if (file) {
			if (field === 'main_image') {
				setMainImageFile(file);
				// Generate a temporary URL for the selected file
				setUpdatedMainImageUrl(URL.createObjectURL(file));
			} else if (field === 'secondary_image') {
				setSecondaryImageFile(file);
				// Generate a temporary URL for the selected file
				setUpdatedSecondaryImageUrl(URL.createObjectURL(file));
			}
		}
	};

	const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setAdditionalImageFiles((prev) => [...prev, file]);

			// Display a preview of the new image
			const reader = new FileReader();
			reader.onloadend = () => {
				setEditedProject((prev) => ({
					...prev,
					additional_images: [
						...prev.additional_images,
						reader.result as string,
					],
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleRemoveImage = (index: number) => {
		setAdditionalImageFiles((prev) => prev.filter((_, i) => i !== index));
		setEditedProject((prev) => ({
			...prev,
			additional_images: prev.additional_images.filter((_, i) => i !== index),
		}));
	};

	const handleUpdate = async (projectId: string, updatedData: ProjectData) => {
		setIsLoading(true);
		try {
			// Upload main image if it's a new file
			let mainImageUrl = updatedData.main_image;
			if (mainImageFile) {
				mainImageUrl = await uploadImageToCloudinary(mainImageFile);
			}

			// Upload secondary image if it's a new file
			let secondaryImageUrl = updatedData.secondary_image;
			if (secondaryImageFile) {
				secondaryImageUrl = await uploadImageToCloudinary(secondaryImageFile);
			}

			// Upload new additional images
			const updatedAdditionalImages = await Promise.all(
				additionalImageFiles.map(async (file) => {
					const uploadedImage = await uploadImageToCloudinary(file);
					return uploadedImage;
				}),
			);

			// Combine existing additional images (URLs) with newly uploaded ones
			const allAdditionalImages = [
				...updatedData.additional_images.filter(
					(img) => !img.startsWith('data:'),
				),
				...updatedAdditionalImages,
			];

			// Prepare the payload for Supabase
			const projectPayload = {
				...updatedData,
				main_image: mainImageUrl,
				secondary_image: secondaryImageUrl,
				additional_images: allAdditionalImages,
			};

			// Update the project in Supabase
			const { data, error } = await supabase
				.from('projects')
				.update(projectPayload)
				.eq('id', projectId);

			if (error) {
				throw new Error(error.message);
			}

			// Call the onSave prop to update the parent component
			onSave(projectPayload);

			// Reset editing state and close the modal
			setIsEditing(false);
			toast.success('Projeto atualizado com sucesso');
			onClose();
		} catch (error) {
			console.error('Error updating project:', error);
			toast.error('Falha ao atualizar projeto');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="bg-white rounded-lg p-6 max-h-[90%] overflow-y-scroll w-[95%] pr-12 max-w-3xl relative">
				<button onClick={onClose} className="absolute top-2 right-2">
					<X className="text-gray-600 hover:text-gray-900" />
				</button>

				<div className="grid md:grid-cols-2 gap-4">
					{/* Main Image */}
					<div className="p-2 border flex flex-col justify-between rounded-lg">
						<label className="font-semibold my-2">Imagem de capa</label>
						<Image
							src={updatedMainImageUrl || editedProject.main_image}
							alt={editedProject.title}
							width={400}
							height={300}
							className="w-full h-auto rounded-lg"
						/>
						{isEditing && (
							<input
								type="file"
								accept="image/*"
								onChange={(e) => handleFileChange(e, 'main_image')}
								className="mt-2"
							/>
						)}
					</div>
					{/* Secondary Image */}
					<div className="p-2 border flex flex-col justify-between rounded-lg">
						<label className="font-semibold my-2">Imagem preto e branco</label>
						<Image
							src={updatedSecondaryImageUrl || editedProject.secondary_image}
							alt={'Imagem preto e branco'}
							width={300}
							height={200}
							className="w-full rounded-lg"
						/>
						{isEditing && (
							<input
								type="file"
								accept="image/*"
								onChange={(e) => handleFileChange(e, 'secondary_image')}
								className="mt-2"
							/>
						)}
					</div>
				</div>

				{/* Additional Images */}
				<div className="mt-6 ">
					{/* Project Details */}
					<div>
						{isEditing ? (
							<>
								<label className="font-bold" htmlFor="title">
									Título
								</label>
								<input
									type="text"
									name="title"
									value={editedProject.title}
									onChange={handleInputChange}
									className="text-xl mb-4 w-full p-2 border rounded"
								/>
								<label htmlFor="description">Descrição</label>
								<textarea
									name="description"
									value={editedProject.description}
									onChange={handleInputChange}
									className="text-gray-600 mb-4 w-full p-2 border rounded"
									rows={4}
								/>
							</>
						) : (
							<div className="border rounded-lg p-4">
								<label className="font-bold" htmlFor="">
									Título
								</label>
								<h2 className="mb-4">{editedProject.title}</h2>
								<label className="font-bold">Descrição</label>
								<p className="text-gray-600 mb-4">
									{editedProject.description}
								</p>
							</div>
						)}
					</div>
					<h3 className="text-xl font-semibold my-4">Imagens do projeto</h3>
					<div className="grid grid-cols-3 border rounded-lg p-4 md:grid-cols-4 gap-4">
						{editedProject.additional_images.map((img, index) => (
							<div key={index} className="relative">
								<Image
									src={img}
									alt={`Additional image ${index + 1}`}
									width={200}
									height={200}
									className="w-full  rounded-lg border p-2 h-full"
								/>
								{isEditing && (
									<button
										onClick={() => handleRemoveImage(index)}
										className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
									>
										<Trash2 size={16} />
									</button>
								)}
							</div>
						))}
						{isEditing && (
							<label className="flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
								<input
									type="file"
									accept="image/*"
									onChange={handleAddImage}
									className="hidden"
								/>
								<Plus className="text-gray-400" size={24} />
							</label>
						)}
					</div>
				</div>
				{/* Action Buttons */}
				<div className="flex space-x-4 mt-4">
					{isEditing ? (
						<SubmitButton
							disabled={isLoading}
							onClick={() => handleUpdate(project.id, editedProject)}
							className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
						>
							Salvar
						</SubmitButton>
					) : (
						<button
							disabled={isEditing}
							onClick={() => setIsEditing(true)}
							className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						>
							<Edit className="mr-2" size={20} /> Editar
						</button>
					)}
					<SubmitButton
						disabled={isLoading}
						onClick={() => onDelete(project.id)}
						className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
					>
						<Trash2 className="mr-2" size={20} /> Remover
					</SubmitButton>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;
