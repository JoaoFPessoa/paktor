'use client';
import React from 'react';
import Image from 'next/image';

const OurPartners = () => {
	const partners = [
		{ id: 1, name: 'Votorantim', logo: '/partners/votorantim.png' },
		{ id: 2, name: 'Andra', logo: '/partners/andra.png' },
		{
			id: 3,
			name: 'Casa do Construtor',
			logo: '/partners/casa-do-construto.png',
		},
		{ id: 4, name: 'Gerdau', logo: '/partners/gerdau.png' },
		{ id: 5, name: 'Leroy Merlin', logo: '/partners/leroy-merlin.png' },
		{ id: 6, name: 'Modena Santos', logo: '/partners/modena-santo.jpg' },
		{ id: 7, name: 'Pecau', logo: '/partners/pecau.jpg' },
		{ id: 8, name: 'Porto Bello', logo: '/partners/porto-bello.png' },
		{ id: 9, name: 'Proxx', logo: '/partners/proxx.png' },
		{ id: 10, name: 'Telha Norte', logo: '/partners/telha-norte.webp' },
		{ id: 11, name: 'Tigre', logo: '/partners/tigre.png' },
	];

	return (
		<div className="w-full py-16 ">
			<div className=" mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Nossos parceiros
				</h2>

				<div className="relative overflow-hidden">
					{/* Scrolling container */}
					<div className="flex animate-scroll gap-6">
						{/* Loop through partners twice for seamless scrolling */}
						{[...partners, ...partners].map((partner, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-36 h-24 flex items-center justify-center bg-white rounded-lg shadow-lg"
								aria-label={`Logo do parceiro ${partner.name}`}
							>
								<Image
									src={partner.logo}
									alt={partner.name}
									width={120}
									height={80}
									className="object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Add styles for smooth animation */}
			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-100%);
					}
				}
				.animate-scroll {
					display: flex;
					width: calc(200%); /* Ensures duplication for seamless loop */
					animation: scroll 60s linear infinite;
				}
				@media (max-width: 768px) {
					.animate-scroll div {
						width: 28%;
					}
				}
			`}</style>
		</div>
	);
};

export default OurPartners;
