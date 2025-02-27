import ImageCarousel from '../../Carousel';

export default function ServicesSection() {
	return (
		<div
			className="pt-4 max-w-screen-sm md:max-w-7xl px-4 md:px-8"
			id="services"
		>
			<h1 className="text-lg md:text-3xl font-extrabold tracking-tight text-center">
				Nossos serviços
			</h1>
			<h2 className="text-gray-800 text-xs md:text-lg w-[60%] mx-auto py-2 md:py-4 text-center">
				Soluções especializadas em reformas de casas, apartamentos e salas
				comerciais, bem como a construção de imóveis desde a fundação até o
				acabamento final.
			</h2>
			<ImageCarousel />
		</div>
	);
}
