'use client';
import React from 'react';
import Header from '../components/Sections/Header/header';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<div className="w-full">
			<Header />

			{/* Top Container */}
			<div className="mt-12 max-w-[120rem] mx-auto px-4 flex flex-wrap justify-between items-center">
				{/* Text Section */}
				<div className="w-full lg:w-1/2 flex flex-col items-end ">
					<div>
						<h2 className="text-3xl font-bold mb-8 text-gray-800">
							Nossa História
						</h2>
						<div className="space-y-6 text-2xl font-medium max-w-[850px] text-gray-600 leading-relaxed">
							<p>
								A Paktor Engenharia é uma empresa localizada em Barueri-SP,
								especializada no setor da construção civil, com atuação em
								diversos segmentos, como construção de residências, reforma
								residenciais e comerciais, projetos arquitetonicos, entre
								outros.
							</p>
							<p>
								Fundada em 2021, por meio da parceria entre os dois engenheiros,
								Fernando Padilha e Gabriel Modena, a Paktor foi criada com a
								missão de atender de forma eficiente às demandas do mercado,
								utilizando soluções personalizadas, executando obras com a
								qualidade rigorosa exigida pelos clientes e sempre cumprindo os
								prazos acordados.
							</p>
							<p>
								Com o objetivo de se destacar no mercado, a Paktor adota os
								princípios do Lean Construction (obra como linha de produção),
								buscando otimizar recursos, minimizar desperdícios e atender aos
								prazos de execução. Além disso, a empresa se destaca pelo
								compromisso com o respeito aos contratos firmados, criando
								relacionamentos duradouros e parcerias de longo prazo com
								clientes e fornecedores.
							</p>
						</div>
					</div>
				</div>

				{/* Image Section */}
				<div className="w-full lg:w-1/2 flex justify-center">
					<Image
						alt="Sócios Fernando e Gabriel"
						width={650}
						height={650}
						objectFit="cover"
						src={'/sobre/socios.jpg'}
					/>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-[120rem] mx-auto px-4 py-16">
				{/* Mission, Vision, and Values */}
				<div className="grid md:grid-cols-3 gap-8">
					{/* Mission */}
					<div className="bg-white rounded-lg p-8 shadow-lg">
						<h3 className="text-3xl font-bold mb-4 text-gray-800">Missão</h3>
						<p className="text-xl gray-600">
							Trabalhar utilizando técnicas específicas para cada tipo de obra,
							adequando as soluções para a necessidade de cada cliente, com o
							objetivo de construir relações transparentes, prestando serviços
							de qualidade e garantindo a satisfação do parceiro.
						</p>
					</div>

					{/* Vision */}
					<div className="bg-white rounded-lg p-8 shadow-lg">
						<h3 className="text-3xl font-bold mb-4 text-gray-800">Visão</h3>
						<p className="text-gray-600 text-xl">
							Ser referência no mercado da construção civil, utilizando técnicas
							inovadoras de forma sustentável, minimizando desperdícios e prazo.
						</p>
					</div>

					{/* Values */}
					<div className="bg-white rounded-lg p-8 shadow-lg">
						<h3 className="text-3xl font-bold mb-4 text-gray-800">Valores</h3>
						<ul className="space-y-2 text-gray-600 text-xl">
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								Integridade
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								Ética e transparência
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								Comprometimento e Responsabilidade
							</li>
							<li className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								Atitude e Liderança
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
