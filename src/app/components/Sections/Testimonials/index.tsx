import { FaUserCircle } from 'react-icons/fa';
import Star from '../../../../../public/starts.png';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
	return (
		<div className="w-full mt-10 flex flex-col gap-5 ">
			<TestimonialCard
				name="Mariana Souza"
				description="Contratamos a Paktor para nosso projeto de renovação residencial e não poderíamos estar mais felizes com os resultados. Sua atenção aos detalhes e excelência técnica são verdadeiramente louváveis. Recomendo muito seus serviços."
				stars={5}
				date="Out 28 2024"
			/>

			<TestimonialCard
				name="Olavo Silva"
				description="A Paktor transformou nosso banheiro desatualizado em um oásis moderno. Sua equipe foi cortês, profissional e concluiu o projeto no prazo. Estou emocionado com o resultado e definitivamente os contrataria novamente."
				stars={5}
				date="Jun 12 2023"
			/>

			<TestimonialCard
				name="Julio Almeida"
				description="Da concepção à conclusão, a Paktor demonstrou profissionalismo e experiência excepcionais. Eles ouviram nossas ideias e as transformaram em realidade, superando nossas expectativas. Recomendo muito seus serviços."
				stars={5}
				date="Mai 19 2023"
			/>

			<TestimonialCard
				name="Patrícia Lima"
				description="A Paktor fez um trabalho excepcional na renovação de nossa área de porão. Sua atenção aos detalhes e comprometimento com a qualidade foram evidentes durante todo o projeto. Estou muito satisfeita com os resultados e os contrataria novamente sem hesitação."
				stars={5}
				date="Ago 7 2022"
			/>
		</div>
	);
}
