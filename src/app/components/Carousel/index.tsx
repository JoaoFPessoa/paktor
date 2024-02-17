import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageOne from '../../../../public/services-image-1.png';
import ImageTwo from '../../../../public/services-image-2.png';
import ImageThree from '../../../../public/services-image-3.png';
import Image from 'next/image';

interface ImageCarouselProps {
	deviceType?: string;
}

const images = [
	{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
	{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
	{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
	{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
	{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
	{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
	{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
	{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
	{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
];

const responsive = {
	largeDesktop: {
		breakpoint: { max: 4000, min: 2000 },
		items: 4,
		slidesToSlide: 1,
	},
	desktop: { breakpoint: { max: 2000, min: 1024 }, items: 3, slidesToSlide: 1 },
	tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
	mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
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
		const { deviceType } = this.props;
		const { hoveredIndex } = this.state;
		return (
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true}
				infinite={true}
				autoPlay={deviceType !== 'mobile'}
				autoPlaySpeed={2500}
				customTransition="transform 500ms ease-in-out"
				centerMode
				transitionDuration={200}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				deviceType={deviceType}
				itemClass="carousel-item-padding-20-px"
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
							src={hoveredIndex === index ? image.swappedImage : image.src}
							alt={image.alt}
						/>
					</div>
				))}
			</Carousel>
		);
	}
}

export default ImageCarousel;
