'use client';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

interface Project {
	id?: number;
	title: string;
	main_image: string | StaticImageData;
	description?: string;
}

interface Props {
	project: Project;
}

const ImageContainer = memo(function ImageContainer({ project }: Props) {
	const router = useRouter();

	if (!project.main_image) return null;

	return (
		<div
			onClick={() => router.push(`/projetos/${project.id}`)}
			className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg"
		>
			<Image
				src={project.main_image}
				alt={project.title}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover transition duration-300 group-hover:scale-105 group-hover:grayscale"
				quality={75}
			/>

			<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
				{project.description && (
					<p className="mt-2 text-sm text-white/90 text-center">
						{project.description}
					</p>
				)}
			</div>
		</div>
	);
});

export default ImageContainer;
