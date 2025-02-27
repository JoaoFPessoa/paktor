import CarouselClientPage from '@/app/carouselClientPage';
import ProjectsCarousel from '../../Carousel/projects-carousel';

export default function Projects() {
	return (
		<div
			className="pt-4 max-w-screen-sm md:max-w-7xl px-4 md:px-8"
			id="projects"
		>
			<h1 className="text-lg md:text-3xl font-extrabold tracking-tight text-center">
				Nossos projetos
			</h1>
			<h2 className="text-gray-800 text-xs md:text-lg w-[60%] mx-auto py-2 md:py-4 text-center">
				A Paktor Engenharia transforma projetos em realidade com agilidade,
				qualidade e transparência. Entregando sempre dentro dos prazos e com
				custos planejados, construindo relações transparentes e garantindo a
				satisfação do parceiro.
			</h2>
			<ProjectsCarousel />
		</div>
	);
}
