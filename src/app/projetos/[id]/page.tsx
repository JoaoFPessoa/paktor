'use client';

import { FocusCards } from '@/app/components/Cards/FocusCards';
import Footer from '@/app/components/Sections/Footer';
import Header from '@/app/components/Sections/Header/header';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ProjectData {
	id: string;
	title: string;
	description: string;
	additional_images: string[];
	main_image: string;
}

const LoadingSkeleton = () => (
	<div className="gallery-item w-full h-full skeleton-item">
		<div className="skeleton-image bg-gray-200 animate-pulse gallery-item w-full h-full rounded-lg"></div>
	</div>
);

const ProjectDetails = () => {
	const params = useParams();
	const id = params.id;

	const [project, setProject] = useState<ProjectData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const response = await fetch(`/api/projects/${id}`);
				if (!response.ok) {
					throw new Error('Failed to fetch project data');
				}

				const data: ProjectData = await response.json();
				setProject(data);
				setError(false);
			} catch (error) {
				console.error('Error fetching project:', error);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, [id]);

	if (error) {
		return (
			<div className="text-center mt-16">
				Falha ao carregar dados do projeto.
			</div>
		);
	}

	if (!project && !loading) {
		return <div className="text-center mt-16">Projeto não encontrado</div>;
	}

	return (
		<div>
			<Header />
			<section className="p-4  px-[10%]">
				<div className="flex flex-col lg:flex-row lg:mt-0 mb-36 items-center h-[600px] w-full justify-between">
					<div>
						<h1 className="w-[90%] text-5xl font-bold mb-4 black-underline-animation transition-transform duration-300">
							{project?.title || 'Projeto'}
						</h1>
						<p className="max-w-[400px] font-medium mb-6">
							{project?.description || 'Carregando descrição do projeto...'}
						</p>
					</div>

					<div className="w-full lg:w-[50%] h-[90%] relative">
						{loading ? (
							<LoadingSkeleton />
						) : (
							<>
								<Image
									priority
									src={project?.main_image || ''}
									alt={project?.title || ''}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover rounded-lg"
									quality={75}
								/>
							</>
						)}
					</div>
				</div>
				<FocusCards cards={project?.additional_images!} />
			</section>
		</div>
	);
};

export default ProjectDetails;
