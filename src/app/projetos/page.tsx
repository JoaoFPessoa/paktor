'use client';
import { Project } from '@/types/project';
import { useState, useEffect } from 'react';
import Header from '../components/Sections/Header/header';
import SkeletonGrid from '../components/SkeletonGrid';
import ImageContainer from './ImageContainer';
import Footer from '../components/Sections/Footer';

export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState('all');

	async function getData() {
		try {
			const response = await fetch('/api/projects');
			if (!response.ok) {
				throw new Error('Failed to fetch projects');
			}
			const { data } = await response.json();
			setProjects(data);
		} catch (error) {
			console.error('Error fetching projects:', error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="min-h-screen w-full flex flex-col items-center">
			<Header />

			<main className="w-full max-w-[80%] px-4 mt-24 lg:mt-20">
				<h1 className="text-center text-4xl font-bold mb-12">
					Nossos projetos
				</h1>

				{loading ? (
					<SkeletonGrid />
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mb-32">
						{projects?.map((project, index) => (
							<ImageContainer key={project.id || index} project={project} />
						))}
					</div>
				)}
			</main>
		</div>
	);
}
