'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Project {
	id: number;
	main_image: string;
	title: string;
	description: string;
	secondary_image: string;
}

export default function ProjectsCarousel() {
	const [projects, setProjects] = useState<Project[]>([]);
	const router = useRouter();

	useEffect(() => {
		fetch('/api/projects')
			.then((response) => response.json())
			.then((data) => setProjects(data.data));
	}, []);

	const handleRedirect = (id: number) => {
		router.push(`/projetos/${id}`);
	};

	return (
		<div className="w-full max-w-4xl md:max-w-7xl mx-auto py-8 px-4 md:py-12 md:px-8">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
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
				{projects?.map((item) => (
					<SwiperSlide
						key={item.id}
						className="flex flex-col items-center p-4 md:p-6"
						onClick={() => handleRedirect(item.id)}
					>
						<div className="w-11/12 h-48 md:h-60 relative group">
							<Image
								src={item.main_image}
								alt={item.title}
								layout="fill"
								objectFit="cover"
								className="rounded-lg shadow-md md:shadow-lg"
							/>
							<Image
								src={item.secondary_image}
								alt={`${item.title} - Before`}
								layout="fill"
								objectFit="cover"
								className="rounded-lg shadow-md md:shadow-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:grayscale transition-opacity duration-300"
							/>
						</div>
						<p className="my-3 text-center font-semibold text-sm md:text-lg">
							{item.title}
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
