import React from 'react';
import Image from 'next/image';

const OurPartners = () => {
	// Sample partner logos - replace with actual partner logos
	const partners = [
		{ id: 1, name: 'Partner 1', logo: '/api/placeholder/200/80' },
		{ id: 2, name: 'Partner 2', logo: '/api/placeholder/200/80' },
		{ id: 3, name: 'Partner 3', logo: '/api/placeholder/200/80' },
		{ id: 4, name: 'Partner 4', logo: '/api/placeholder/200/80' },
		{ id: 5, name: 'Partner 5', logo: '/api/placeholder/200/80' },
		{ id: 6, name: 'Partner 6', logo: '/api/placeholder/200/80' },
		// Duplicate partners to create seamless loop
		{ id: 7, name: 'Partner 1', logo: '/api/placeholder/200/80' },
		{ id: 8, name: 'Partner 2', logo: '/api/placeholder/200/80' },
		{ id: 9, name: 'Partner 3', logo: '/api/placeholder/200/80' },
		{ id: 10, name: 'Partner 4', logo: '/api/placeholder/200/80' },
		{ id: 11, name: 'Partner 5', logo: '/api/placeholder/200/80' },
		{ id: 12, name: 'Partner 6', logo: '/api/placeholder/200/80' },
	];

	return (
		<div className="w-full py-16">
			<div className=" mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Nossos parceiros
				</h2>

				<div className="relative overflow-hidden w-full">
					{/* First row of scrolling logos */}
					<div className="flex gap-12 animate-scroll">
						<div className="flex gap-12 items-center">
							{partners.slice(0, 6).map((partner) => (
								<div
									key={partner.id}
									className="flex-shrink-0 w-[200px] h-20 relative bg-white rounded-lg shadow-sm"
								>
									<Image
										src={'/logo-preto.png'}
										alt={partner.name}
										fill
										className="object-contain p-4"
									/>
								</div>
							))}
						</div>
						{/* Duplicate set for seamless loop */}
						<div className="flex gap-12 items-center">
							{partners.slice(6).map((partner) => (
								<div
									key={partner.id}
									className="flex-shrink-0 w-[200px] h-20 relative bg-white rounded-lg shadow-sm"
								>
									<Image
										src={'/logo-preto.png'}
										alt={partner.name}
										fill
										className="object-contain p-4"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurPartners;
