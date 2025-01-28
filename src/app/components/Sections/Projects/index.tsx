import CarouselClientPage from '@/app/carouselClientPage';

export default function Projects() {
	return (
		<div className="pt-5 md:my-14" id="projects">
			<h1 className="leading-45 mb-8 text-2xl font-extrabold tracking-tight md:text-3xl">
				Nossos projetos
			</h1>
			<CarouselClientPage autoPlay={true} />
		</div>
	);
}
