import Header from './components/Sections/Header/header';
import Projects from './components/Sections/Projects';
import BannerClientPage from './bannerClientPage';
import CarouselClientPage from './carouselClientPage';
import WhyChooseUsSection from './components/Sections/WhyChooseUs';
import Testimonials from './components/Sections/Testimonials';
import ServicesSection from './components/Sections/Services';
import ImageOne from '../../public/services-image-1.png';
import ImageTwo from '../../public/services-image-2.png';
import ImageThree from '../../public/services-image-3.png';
import Contact from './components/Sections/Contact';

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

export default function Home() {
	return (
		<div>
			<Header />
			<div className="px-[10%] gap-10 flex flex-col py-5" id="body">
				<div>
					<BannerClientPage />
				</div>
				<ServicesSection />
				<CarouselClientPage images={servicesImages} autoPlay={false} />
				<Projects />
				<CarouselClientPage images={projectsImages} autoPlay={true} />
				<WhyChooseUsSection />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}
