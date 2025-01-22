/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card, { CardContent } from '../components/Cards';
import Image from 'next/image';
import Header from '../components/Sections/Header/header';

const AboutPage = () => {
	return (
		<>
			<Header />

			<div className="px-[10%] mx-auto p-8">
				<div className="  grid md:grid-cols-2 gap-12 items-center ">
					<div className="space-y-6">
						<div className="text-orange-500 font-medium">Nossa história</div>

						<h1 className="text-3xl md:text-5xl font-bold leading-tight">
							Referência no mercado da construção civil.
						</h1>

						<p className="text-sm md:text-base flex flex-col gap-2 text-gray-600 leading-relaxed">
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
						</p>
					</div>

					<div>
						<Image
							src={'/sobre/socios.jpg'}
							alt="Two people looking at laptop"
							height={400}
							width={600}
							className="rounded-lg object-cover"
							sizes="(max-width: 768px) 100vw, 600px"
						/>
					</div>
				</div>

				<div className="w-full grid md:grid-cols-3 gap-6 mt-12">
					<Card>
						<CardContent className="pt-6">
							<div className="text-2xl md:text-4xl font-bold">Missão</div>
							<div className="text-gray-600 mt-2 tracking-wide">
								Trabalhar utilizando técnicas específicas para cada tipo de
								obra, adequando as soluções para a necessidade de cada cliente,
								com o objetivo de construir relações transparentes, prestando
								serviços de qualidade e garantindo a satisfação do parceiro.
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<div className="text-2xl md:text-4xl  font-bold">Visão</div>
							<div className="text-gray-600 mt-2">
								Ser referência no mercado da construção civil, utilizando
								técnicas inovadoras de forma sustentável, minimizando
								desperdícios e prazo.
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<div className="text-2xl md:text-4xl  font-bold">Valores</div>
							<div className="text-gray-600 mt-2">
								<ul className="space-y-2 ">
									<li className="flex items-center gap-2">Integridade</li>
									<li className="flex items-center gap-2">
										Ética e transparência
									</li>
									<li className="flex items-center gap-2">
										Comprometimento e Responsabilidade
									</li>
									<li className="flex items-center gap-2">
										Atitude e Liderança
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
