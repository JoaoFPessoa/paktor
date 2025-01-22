import CarouselClientPage from '@/app/carouselClientPage';
import ImageOne from '../../../../../public/services-image-1.png';
import ImageTwo from '../../../../../public/services-image-2.png';
import ImageThree from '../../../../../public/services-image-3.png';

export default function ServicesSection() {
	const servicesImages = [
		{
			src: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			swappedImage: ImageTwo,
			alt: '',
		},
		{
			src: ImageOne,
			swappedImage: ImageTwo,
			alt: '',
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
		{
			src: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			swappedImage: ImageTwo,
			alt: '',
		},
		{
			src: ImageOne,
			swappedImage: ImageTwo,
			alt: '',
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
		{
			src: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			swappedImage: ImageTwo,
			alt: '',
		},
		{
			src: ImageOne,
			swappedImage: ImageTwo,
			alt: '',
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
		},
		{
			src: ImageThree,
			title: 'Construção residencial e comercial',
			description:
				'Remember to mention the author and the source when using this image. Copy the attribution details below and include them on your project or website.',
			swappedImage: ImageTwo,
			alt: '',
		},
		{
			src: ImageOne,
			swappedImage: ImageTwo,
			alt: '',
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
				Executando reformas em <b>casas, apartamentos e salas comerciais</b>,
				bem como construindo empreendimentos desde a fundação até o acabamento
				final, possuindo um forte viés sustentável -{' '}
				<b>energia solar e água de reúso</b> - como principal diferencial em
				seus projetos, agregando valores da vivência em todas as etapas da obra,
				com o conhecimento técnico necessário para a elaboração dos mesmos, para
				oferecer ao cliente a
				<b> melhor experiência possível, sem dor de cabeça.</b>
			</h2>
			<CarouselClientPage images={servicesImages} autoPlay={false} />
		</div>
	);
}
