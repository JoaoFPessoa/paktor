import CarouselClientPage from '@/app/carouselClientPage';
import ImageOne from '../../../../../public/services-image-1.png';
import ImageTwo from '../../../../../public/services-image-2.png';
import ImageThree from '../../../../../public/services-image-3.png';

export default function Projects() {
	const projectsImages = [
		{
			src: ImageOne,
			swappedImage: ImageTwo,
			alt: '',
		},
		{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
		{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
		{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
		{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
		{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
		{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
		{ src: ImageThree, swappedImage: ImageTwo, alt: '' },
		{ src: ImageOne, swappedImage: ImageTwo, alt: '' },
	];
	return (
		<div className="pt-5 md:my-14" id="projects">
			<h1 className="leading-45 mb-8 text-2xl font-extrabold tracking-tight md:text-3xl">
				Nossos projetos
			</h1>
			<CarouselClientPage images={projectsImages} autoPlay={true} />
		</div>
	);
}
