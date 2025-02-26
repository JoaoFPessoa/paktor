'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { Project } from '@/types/project';
import { useRouter } from 'next/navigation';

interface ImageCarouselProps {
	deviceType?: string;
	project: Project[];
	autoPlay?: boolean;
	isServiceSectionCarousel?: boolean;
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
		slidesToSlide: 1,
		partialVisibilityGutter: 30,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 20,
	},
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({
	deviceType,
	project,
	autoPlay,
	isServiceSectionCarousel,
}) => {
	const [hoveredIndex, setHoveredIndex] = React.useState(-1);
	const router = useRouter();

	const handleMouseEnter = (index: number) => {
		if (deviceType !== 'mobile') setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(-1);
	};

	return (
		<Carousel
			swipeable={deviceType === 'mobile'}
			draggable={deviceType === 'mobile'}
			showDots={false}
			responsive={responsive}
			ssr={true}
			infinite={true}
			autoPlay={autoPlay}
			autoPlaySpeed={2500}
			customTransition="transform 500ms ease-in-out"
			centerMode
			transitionDuration={200}
			containerClass="carousel-container"
			itemClass="carousel-item"
			deviceType={deviceType}
			pauseOnHover={true}
			focusOnSelect
		>
			{project?.map((image, index) => (
				<div
					key={index}
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={handleMouseLeave}
					className={`mt-8 bg-white pb-6 rounded-lg ${
						isServiceSectionCarousel ? 'cursor-default' : 'cursor-pointer'
					}`}
					onClick={() =>
						isServiceSectionCarousel
							? null
							: router.push(`/projetos/${image.id}`)
					}
				>
					<div className="relative w-[95%] h-[230px]">
						<Image
							className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-700"
							src={image.main_image}
							alt={image.title}
							fill
							priority={index < 3}
							loading={index >= 3 ? 'lazy' : 'eager'}
							style={{
								opacity:
									isServiceSectionCarousel && hoveredIndex === index ? 0 : 1,
							}}
						/>
						<Image
							className={`absolute top-0 left-0 w-full h-full rounded-lg object-cover transition-opacity duration-700 ${
								!isServiceSectionCarousel && 'grayscale'
							}`}
							src={image.secondary_image}
							alt={image.title}
							fill
							priority={index < 3}
							loading={index >= 3 ? 'lazy' : 'eager'}
							style={{ opacity: hoveredIndex === index ? 1 : 0 }}
						/>
					</div>
					{image.title && (
						<div className="flex items-center justify-center mt-2 text-center px-4 h-[50px]">
							<h1 className="font-semibold text-sm md:text-base">
								{image.title}
							</h1>
						</div>
					)}
				</div>
			))}
		</Carousel>
	);
};

export default ImageCarousel;
