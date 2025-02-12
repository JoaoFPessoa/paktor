import { FaUserCircle } from 'react-icons/fa';
import Star from '../../../../../public/starts.png';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
	return (
		<div className="w-full max-w-7xl mt-10 flex flex-col gap-12 md:gap-2 ">
			<h1 className="font-bold text-2xl md:text-3xl tracking-tighter mt-4 mb-2">
				Veja o que nossos clientes falam
			</h1>
			<div className="flex flex-wrap gap-2">
				<TestimonialCard
					name="Karine A."
					description="A Paktor realizou o retrofit do meu apartamento, obra com acabamentos de 1ª linha, dentro do prazo e ótima tratativa com eles!"
					stars={5}
					date="26 Jul 2024"
				/>

				<TestimonialCard
					name="Sergio P"
					description="Reformei minha sala comercial com a Paktor e fizeram uma obra rápida, organizada, limpa e com o custo de acordo com a trabalho que eles entregam"
					stars={5}
					date="24 08 2023"
				/>

				<TestimonialCard
					name="Jorge F"
					description="Solicitei a Paktor para fazer uma área gourmet no quintal da minha casa e durante o estudo inicial eles propuseram utilizar um deck de madeira plástica, que é sustentável e não precisa de manutenção. Como fizeram um trabalho muito bom, solicitei também para realizarem a reforma da minha suíte"
					stars={5}
					date="Mai 19 2023"
				/>

				<TestimonialCard
					name="Silvia V"
					description="Contratei a Paktor para construir a minha casa e ficou igual ao projeto 3D inicial, o que eu e meu marido adoramos. Acompanhei o serviço deles de perto e sempre me deram a tranquilidade e transparência de cada etapa do projeto, desde a explicação da fundação até a sugestão de revestimento e acabamentos mais em conta e de qualidade. Nota 10 !"
					stars={5}
					date="Jul 06 2022"
				/>
				<TestimonialCard
					name="Emerson B"
					description="Fiz a reforma do meu novo ateliê com a Paktor, e entregaram antes do prazo e com uma qualidade excelente"
					stars={5}
					date="Dez 06 2021"
				/>
			</div>
		</div>
	);
}
