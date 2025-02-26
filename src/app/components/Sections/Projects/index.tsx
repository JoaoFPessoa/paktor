import CarouselClientPage from '@/app/carouselClientPage';

export default function Projects() {
	return (
		<div className="pt-5 md:my-14 max-w-7xl" id="projects">
			<h1 className="leading-45 mb-8 text-2xl font-extrabold tracking-tight md:text-3xl">
				Nossos projetos
			</h1>
			<h2 className=" text-gray-800 text-base  md:text-lg md:w-[50%] py-3">
				A Paktor Engenharia transforma projetos em realidade com agilidade,
				qualidade e transparência. Entregando sempre dentro dos prazos e com
				custos planejados, construindo relações transparentes e garantindo a
				satisfação do parceiro.
			</h2>
			<CarouselClientPage autoPlay={true} />
		</div>
	);
}
