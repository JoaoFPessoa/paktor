'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image, { StaticImageData } from 'next/image';
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
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 3,
		slidesToSlide: 1,
		partialVisibilityGutter: 40,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1,
		partialVisibilityGutter: 30,
	},
	mobile: {
		breakpoint: { max: 463, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 30,
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
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(-1);
	};

	return (
		<Carousel
			swipeable={deviceType === 'mobile' ? true : false}
			draggable={deviceType === 'mobile' ? true : false}
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
			itemClass="carousel-item" // Add a class for each item
			deviceType={deviceType}
			pauseOnHover={true}
			focusOnSelect
		>
			{project?.map((image, index) => (
				<div
					key={index}
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={handleMouseLeave}
					className={`mt-8  ${
						isServiceSectionCarousel ? 'cursor-default' : 'cursor-pointer'
					}`}
					onClick={() =>
						isServiceSectionCarousel
							? console.log('')
							: router.push(`/projetos/${image.id}`)
					}
				>
					<Image
						className="grayscale-0  object-cover w-[350px] h-[230px] hover:grayscale transform hover:scale-105 transition duration-300 rounded-lg"
						src={
							hoveredIndex === index && image.secondary_image
								? image.secondary_image
								: image.main_image
						}
						alt={image.title}
						height={400}
						width={333}
						priority={index < 3} // Prioritize the first 3 images
						loading={index >= 3 ? 'lazy' : 'eager'} // Lazy-load the rest
					/>
					{image.title && (
						<div className="mt-2 w-[80%]">
							<h1 className="font-semibold md:text-md">{image.title}</h1>
						</div>
					)}
				</div>
			))}
		</Carousel>
	);
};

export default ImageCarousel;
