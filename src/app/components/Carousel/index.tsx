// components/ImageCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import your images (adjust the paths as needed)
import ImageOne from '../../../../public/services_photos/ImageOne.jpg';
import ImageTwo from '../../../../public/services_photos/ImageTwo.jpg';
import ImageThree from '../../../../public/services_photos/ImageThree.jpg';
import ImageFour from '../../../../public/services_photos/ImageFour.jpg';
import ImageFive from '../../../../public/services_photos/ImageFive.jpg';
import ImageSix from '../../../../public/services_photos/ImageSix.jpg';
import ImageSeven from '../../../../public/services_photos/ImageSeven.jpg';
import ImageEight from '../../../../public/services_photos/ImageEight.jpg';
import ImageNine from '../../../../public/services_photos/ImageNine.jpg';
import ImageTen from '../../../../public/services_photos/ImageTen.jpg';
import ImageEleven from '../../../../public/services_photos/ImageEleven.jpg';
import ImageTwelve from '../../../../public/services_photos/ImageTwelve.jpg';
import Image from 'next/image';

interface Project {
	main_image: any;
	title: string;
	description: string;
	additional_images: string[];
	secondary_image: any;
}

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

export default function ImageCarousel() {
	return (
		<div className="w-full max-w-4xl md:max-w-7xl mx-auto py-8 px-4 md:py-12 md:px-8">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={2}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				breakpoints={{
					480: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className="rounded-lg overflow-hidden px-6"
			>
				{servicesImages.map((item, index) => (
					<SwiperSlide
						key={index}
						className="flex flex-col items-center p-4 md:p-6"
					>
						<div className="w-11/12 h-48 md:h-60 relative">
							<Image
								src={item.main_image}
								alt={item.title}
								layout="fill"
								objectFit="cover"
								className="rounded-lg shadow-md md:shadow-lg"
							/>
						</div>
						<p className="mt-3 text-center font-semibold text-sm md:text-lg">
							{item.title}
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
