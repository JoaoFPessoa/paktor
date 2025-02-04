import CarouselClientPage from '@/app/carouselClientPage';
import ImageOne from '../../../../../public/services-image-1.png';
import ImageTwo from '../../../../../public/services-image-2.png';
import ImageThree from '../../../../../public/services-image-3.png';
import { Project } from '@/types/project';

export default function ServicesSection() {
	const servicesImages: Project[] = [
		{
			main_image: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			additional_images: [''],
			secondary_image: ImageTwo,
		},
		{
			main_image: ImageOne,
			additional_images: [''],
			secondary_image: ImageTwo,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
		{
			main_image: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			additional_images: [''],
			secondary_image: ImageTwo,
		},
		{
			main_image: ImageOne,
			additional_images: [''],
			secondary_image: ImageTwo,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
		{
			main_image: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			additional_images: [''],
			secondary_image: ImageTwo,
		},
		{
			main_image: ImageOne,
			additional_images: [''],
			secondary_image: ImageTwo,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
		{
			main_image: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			additional_images: [''],
			secondary_image: ImageTwo,
		},
		{
			main_image: ImageOne,
			additional_images: [''],
			secondary_image: ImageTwo,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
	];

	return (
		<div className="pt-4 md:pt-10" id="services">
			<h1 className="leading-45 text-2xl font-extrabold tracking-tight md:text-3xl">
				Nossos serviços
			</h1>
			<h2 className=" text-gray-800 text-base  md:w-[60%] py-3">
				Soluções especializadas em reformas de casas, apartamentos e salas
				comerciais, bem como a construção de imóveis desde a fundação até o
				acabamento final. A Paktor Engenharia transforma projetos em realidade
				com agilidade, qualidade e transparência. Entregando sempre dentro dos
				prazos e com custos planejados, construindo relações transparentes e
				garantindo a satisfação do parceiro.
			</h2>
			<CarouselClientPage
				isServiceSectionCarousel
				definedProjects={servicesImages}
				autoPlay={false}
			/>
		</div>
	);
}
