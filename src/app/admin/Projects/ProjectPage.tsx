'use client';
import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import ProjectForm from './ProjectForm';
import { Plus } from 'lucide-react';

const ProjectsPage: React.FC = () => {
	const [isAddingProject, setIsAddingProject] = useState(false);

	const handleRefreshPage = () => {
		window.location.reload();
	};

	return (
		<div className="container mx-auto p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold">Projetos</h1>
				<button
					onClick={() => setIsAddingProject(true)}
					className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
				>
					<Plus className="mr-2" /> Adicionar Projeto
				</button>
			</div>

			{isAddingProject && (
				<div className="mb-6">
					<ProjectForm
						onSave={handleRefreshPage}
						onCancel={() => setIsAddingProject(false)}
					/>
				</div>
			)}

			<ProjectsList />
		</div>
	);
};

export default ProjectsPage;
