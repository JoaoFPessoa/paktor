import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import toast from 'react-hot-toast';
import { ProjectData } from './project-types';
import { MoonLoader } from 'react-spinners';

const ProjectsList = () => {
	const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
	const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
		null,
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const handleOpenModal = (project: ProjectData) => {
		setSelectedProject(project);
	};

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	const handleGetProjects = async () => {
		try {
			const response = await fetch('/api/projects');
			if (!response.ok) {
				throw new Error('Failed to fetch projects');
			}
			const { data } = await response.json();
			setProjectsData(data);
		} catch (error) {
			setError(
				error instanceof Error ? error.message : 'An unexpected error occurred',
			);
			toast.error(
				error instanceof Error ? error.message : 'An unexpected error occurred',
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDeleteProject = async (projectId: string) => {
		setIsLoading(true);
		try {
			// Show a confirmation dialog to the user (optional but recommended)
			const confirmDelete = window.confirm(
				'Tem certeza que deseja remover este projeto? A ação não poderá ser desfeita.',
			);
			if (!confirmDelete) return;

			// Make a DELETE request to the API with the project ID
			const response = await fetch(`/api/projects`, {
				method: 'DELETE',
				body: JSON.stringify({ projectId }),
			});

			// Handle the response
			if (!response.ok) {
				throw new Error('Failed to delete the project');
			}

			// Remove the project from the local state after deletion
			setProjectsData((prevProjects) =>
				prevProjects.filter((project) => project.id !== projectId),
			);

			// Show a success message
			toast.success('Project deleted successfully');
		} catch (error) {
			// Handle errors
			setError(
				error instanceof Error ? error.message : 'An unexpected error occurred',
			);
			toast.error(
				error instanceof Error ? error.message : 'An unexpected error occurred',
			);
		} finally {
			setIsLoading(false);
			setSelectedProject(null);
		}
	};

	useEffect(() => {
		handleGetProjects();
	}, []);

	if (isLoading) {
		return (
			<div className="w-full mt-48 flex items-center justify-center">
				<MoonLoader />
			</div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{projectsData.length > 0 ? (
				projectsData.map((project) => (
					<div
						key={project.id}
						className="cursor-pointer hover:scale-105 transition-transform"
						onClick={() => handleOpenModal(project)}
					>
						<Image
							src={project.main_image}
							alt={project.title}
							width={300}
							height={200}
							className="w-full h-48 object-cover rounded-lg"
						/>
						<h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
					</div>
				))
			) : (
				<div>Nenhum projeto encontrado.</div>
			)}

			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onDelete={handleDeleteProject}
					onSave={handleGetProjects}
					onClose={handleCloseModal}
				/>
			)}
		</div>
	);
};

export default ProjectsList;
