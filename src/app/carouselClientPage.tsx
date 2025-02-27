'use client';
import { Project } from '@/types/project';
import ImageCarousel from './components/Carousel';
import { useEffect, useState } from 'react';
interface ImageCarouselProps {
	deviceType?: string;
	autoPlay?: boolean;
	definedProjects?: Project[];
	isServiceSectionCarousel?: boolean;
}

export default function CarouselClientPage({}: ImageCarouselProps) {
	const [projects, setProjects] = useState<Project[]>([]);

	async function handleGetProjects() {
		const response = await fetch('/api/projects').then((res) => res.json());
		setProjects(response.data);
	}

	useEffect(() => {
		handleGetProjects();
	}, []);
	console.log({ projects });

	return (
		<div>
			{/* {' '}
			<ImageCarousel
				project={projects}
				autoPlay={autoPlay}
			/>{' '} */}
		</div>
	);
}
