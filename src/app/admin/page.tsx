'use client';
import { useState } from 'react';
import ProjectsPage from './Projects/ProjectPage';
import { Toaster } from 'react-hot-toast';

export default function AdminPanelPage() {
	const [selectedComponent, setSelectedComponent] = useState('projects');
	return (
		<>
			<Toaster />
			<nav className="w-full space-x-6 shadow-lg flex p-4  items-center justify-center">
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					onClick={() => setSelectedComponent('projects')}
				>
					Projetos
				</button>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					onClick={() => setSelectedComponent('services')}
				>
					Serviços
				</button>
			</nav>
			{selectedComponent === 'projects' && <ProjectsPage />}
		</>
	);
}
