import React, { useState, useEffect } from 'react';
import { uploadImageToCloudinary } from '@/app/utils/uploadToCloudinary';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/components/SubmitButton';
import { ProjectData } from './project-types';

interface ProjectFormProps {
	project?: ProjectData;
	onCancel: () => void;
	onSave: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
	project,
	onCancel,
	onSave,
}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [mainImageFile, setMainImageFile] = useState<File | null>(null);
	const [secondaryImageFile, setSecondaryImageFile] = useState<File | null>(
		null,
	);
	const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleFileChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: keyof ProjectData,
	) => {
		const file = e.target.files?.[0];
		if (file) {
			if (field === 'main_image') {
				setMainImageFile(file);
			} else if (field === 'secondary_image') {
				setSecondaryImageFile(file);
			}
		}
	};

	const handleAdditionalImagesChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const files = e.target.files;
		if (files) {
			setAdditionalImageFiles(Array.from(files));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			if (!mainImageFile || !secondaryImageFile || !additionalImageFiles) {
				alert('Por favor, adicione todas as imagens.');
				return;
			}

			// Upload main image if a new file is selected
			const mainImageUrl = await uploadImageToCloudinary(mainImageFile!);

			const secondaryImageUrl = await uploadImageToCloudinary(
				secondaryImageFile!,
			);

			const additionalImagesUrls = await Promise.all(
				additionalImageFiles.map((file) => uploadImageToCloudinary(file)),
			);

			const projectPayload = {
				title,
				description,
				main_image: mainImageUrl,
				secondary_image: secondaryImageUrl,
				additional_images: additionalImagesUrls,
			};

			const response = await fetch('/api/projects', {
				method: 'POST',
				body: JSON.stringify(projectPayload),
			});

			const result = await response.json();

			if (response.status === 200) {
				toast.success('Projeto adicionado com sucesso!');

				onSave();
				onCancel();
			} else {
				toast.error('Erro ao adicionar projeto.');
				throw new Error(result.message);
			}
		} catch (error) {
			toast.error('Erro ao adicionar projeto.');
			console.log('Error adding project:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full h-[70vh] flex justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="space-y-4 border-2 rounded-lg shadow-2xl bg-white w-fit p-4"
			>
				<input
					type="text"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Título"
					required
					className="w-full p-2 border rounded"
				/>
				<textarea
					name="description"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					placeholder="Descrição"
					required
					className="w-full p-2 border rounded"
				/>
				<div>
					<label htmlFor="main_image" className="font-semibold">
						Imagem de capa
					</label>
					<input
						type="file"
						name="main_image"
						onChange={(e) => handleFileChange(e, 'main_image')}
						placeholder="Imagem de capa"
						className="w-full  border rounded"
					/>
				</div>
				<div>
					<label htmlFor="secondary_image" className="font-semibold">
						Imagem preto e branco
					</label>
					<input
						type="file"
						name="secondary_image"
						onChange={(e) => handleFileChange(e, 'secondary_image')}
						placeholder="Imagem preto e branco"
						className="w-full  border rounded"
					/>
				</div>
				<div>
					<label htmlFor="additionalImages" className="font-semibold">
						Imagens do projeto
					</label>
					<input
						type="file"
						name="additionalImages"
						onChange={handleAdditionalImagesChange}
						placeholder="Imagens do projeto"
						multiple
						className="w-full  border rounded"
					/>
				</div>
				<div className="flex space-x-4">
					<SubmitButton type="submit" disabled={isSubmitting}>
						{project ? 'Atualizar Projeto' : 'Adicionar projeto'}
					</SubmitButton>
					<SubmitButton
						type="button"
						onClick={onCancel}
						disabled={isSubmitting}
						className="bg-red-500 text-gray-700 px-4 py-2 rounded hover:bg-red-800"
					>
						Cancelar
					</SubmitButton>
				</div>
			</form>
		</div>
	);
};

export default ProjectForm;
