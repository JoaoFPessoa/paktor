'use client';
import { StaticImageData } from 'next/image';
import ImageCarousel from './components/Carousel';
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

export default function CarouselClientPage({
	images,
	autoPlay,
}: ImageCarouselProps) {
	return (
		<div>
			<ImageCarousel images={images} autoPlay={autoPlay} />
		</div>
	);
}
