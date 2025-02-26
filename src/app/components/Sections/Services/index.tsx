import CarouselClientPage from '@/app/carouselClientPage';
import ImageOne from '../../../../../public/services_photos/ImageOne.jpg';
import ImageTwo from '../../../../../public/services_photos/ImageTwo.jpg';
import ImageThree from '../../../../../public/services_photos/ImageThree.jpg';
import ImageFour from '../../../../../public/services_photos/ImageFour.jpg';
import ImageFive from '../../../../../public/services_photos/ImageFive.jpg';
import ImageSix from '../../../../../public/services_photos/ImageSix.jpg';
import ImageSeven from '../../../../../public/services_photos/ImageSeven.jpg';
import ImageEight from '../../../../../public/services_photos/ImageEight.jpg';
import ImageNine from '../../../../../public/services_photos/ImageNine.jpg';
import ImageTen from '../../../../../public/services_photos/ImageTen.jpg';
import ImageEleven from '../../../../../public/services_photos/ImageEleven.jpg';
import ImageTwelve from '../../../../../public/services_photos/ImageTwelve.jpg';
import { Project } from '@/types/project';

export default function ServicesSection() {
	const servicesImages: Project[] = [
		{
			main_image: ImageOne,
			title: 'Construção Residencial e Comercial',
			description: '',
			additional_images: [''],
			secondary_image: ImageTwo,
		},
		{
			main_image: ImageThree,
			additional_images: [''],
			secondary_image: ImageFour,
			title: 'Reformas e Ampliações',
			description: '',
		},
		{
			main_image: ImageFive,
			additional_images: [''],
			secondary_image: ImageSix,
			title: 'Retrofit de Apartamentos',
			description: '',
		},
		{
			main_image: ImageSeven,
			additional_images: [''],
			secondary_image: ImageEight,
			title: 'Projetos Arquitetonicos',
			description: '',
		},
		{
			main_image: ImageNine,
			additional_images: [''],
			secondary_image: ImageTen,
			title: 'Projetos de Engenharia',
			description: '',
		},
		{
			main_image: ImageEleven,
			additional_images: [''],
			secondary_image: ImageTwelve,
			title: 'Energia Solar Fotovoltaica',
			description: '',
		},
	];

	return (
		<div className="pt-4 max-w-7xl" id="services">
			<h1 className="leading-45 text-2xl font-extrabold tracking-tight md:text-4xl">
				Nossos serviços
			</h1>
			<h2 className=" text-gray-800 text-base  md:text-lg md:w-[50%] py-3">
				Soluções especializadas em reformas de casas, apartamentos e salas
				comerciais, bem como a construção de imóveis desde a fundação até o
				acabamento final.
			</h2>
			<CarouselClientPage
				isServiceSectionCarousel
				definedProjects={servicesImages}
				autoPlay={false}
			/>
		</div>
	);
}
