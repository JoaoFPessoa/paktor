import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image, { StaticImageData } from 'next/image';

interface ImageCarouselProps {
	deviceType?: string;
	images: {
		src: StaticImageData;
		swappedImage?: StaticImageData;
		alt: string;
		title?: string;
		description?: string;
	}[];
	autoPlay?: boolean;
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

class ImageCarousel extends React.Component<ImageCarouselProps> {
	state = {
		hoveredIndex: -1,
	};

	handleMouseEnter = (index: number) => {
		this.setState({ hoveredIndex: index });
	};

	handleMouseLeave = () => {
		this.setState({ hoveredIndex: -1 });
	};

	render() {
		const { deviceType, images, autoPlay } = this.props;
		const { hoveredIndex } = this.state;

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
				{images.map((image, index) => (
					<div
						key={index}
						onMouseEnter={() => this.handleMouseEnter(index)}
						onMouseLeave={this.handleMouseLeave}
					>
						<Image
							className="grayscale-0 hover:grayscale transform hover:scale-105 transition duration-300"
							src={
								hoveredIndex === index && image.swappedImage
									? image.swappedImage
									: image.src
							}
							alt={image.alt}
							height={500}
							width={333}
							sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // Responsive sizes
							style={{
								width: '100%', // Make the image responsive
								height: 'auto', // Maintain aspect ratio
							}}
							priority={index < 3} // Prioritize the first 3 images
							loading={index >= 3 ? 'lazy' : 'eager'} // Lazy-load the rest
						/>
						{image.title && (
							<div className="mt-2 w-[80%]">
								<h1 className="font-semibold md:text-md">{image.title}</h1>
								<h2 className="text-gray-700 text-sm">{image.description}</h2>
							</div>
						)}
					</div>
				))}
			</Carousel>
		);
	}
}

export default ImageCarousel;
