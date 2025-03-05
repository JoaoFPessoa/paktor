'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Sections/Header/header';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/Cards';

const data = [
	{
		title: 'Missão',
		text: 'Trabalhar utilizando técnicas específicas para cada tipo de obra, adequando as soluções para a necessidade de cada cliente, com o objetivo de construir relações transparentes, prestando serviços de qualidade e garantindo a satisfação do parceiro.',
		image: '/sobre/missao.jpg',
	},
	{
		title: 'Visão',
		text: 'Ser referência no mercado da construção civil, utilizando técnicas inovadoras de forma sustentável, minimizando desperdícios e prazo.',
		image: '/sobre/visao.jpg',
	},
	{
		title: 'Valores',
		text: [
			'Integridade',
			'Ética e transparência',
			'Comprometimento e Responsabilidade',
			'Atitude e Liderança',
		],
		image: '/sobre/valores.jpg',
	},
];

const AboutPage = () => {
	return (
		<div className="min-h-screen mt-24">
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="grid md:grid-cols-2 gap-12 items-center mb-48"
				>
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900">
								Nossa história
							</h1>
							<div className="h-1 w-24 bg-buttonGreen rounded"></div>
						</div>

						<div className="space-y-6 text-gray-700 font-semibold">
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="text-lg leading-relaxed"
							>
								A Paktor Engenharia é uma empresa localizada em Barueri-SP,
								especializada no setor da construção civil, com atuação em
								diversos segmentos, como construção de residências, reforma
								residenciais e comerciais, projetos arquitetonicos, entre
								outros.
							</motion.p>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
								className="text-lg leading-relaxed"
							>
								Fundada em 2021, por meio da parceria entre os dois engenheiros,
								Fernando Padilha e Gabriel Modena, a Paktor foi criada com a
								missão de atender de forma eficiente às demandas do mercado.
							</motion.p>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="text-lg leading-relaxed"
							>
								Com o objetivo de se destacar no mercado, a Paktor adota os
								princípios do Lean Construction, buscando otimizar recursos,
								minimizar desperdícios e atender aos prazos de execução.
							</motion.p>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
					>
						<Image
							src="/sobre/socios.jpg"
							alt="Two people looking at laptop"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 600px"
							priority
						/>
					</motion.div>
				</motion.div>

				{/* Cards Section */}
				<div className="space-y-24">
					{data.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className={`flex flex-col font-semibold ${
								index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
							} gap-12 items-stretch h-[350px]`}
						>
							<div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>

							<Card className="w-full md:w-1/2 ">
								<CardContent className="h-full p-8 flex flex-col justify-center">
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 }}
										className="space-y-6"
									>
										<h2 className="text-3xl font-bold text-gray-900">
											{item.title}
										</h2>
										{Array.isArray(item.text) ? (
											<ul className="space-y-4">
												{item.text.map((val, i) => (
													<motion.li
														key={i}
														initial={{ opacity: 0, x: -20 }}
														whileInView={{ opacity: 1, x: 0 }}
														viewport={{ once: true }}
														transition={{ delay: 0.2 * i }}
														className="flex items-center text-gray-600 text-lg font-semibold"
													>
														<ChevronRight className="w-5 h-5 text-buttonGreen mr-2 flex-shrink-0" />
														{val}
													</motion.li>
												))}
											</ul>
										) : (
											<p className="text-gray-600 text-lg leading-relaxed">
												{item.text}
											</p>
										)}
									</motion.div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</main>
		</div>
	);
};

export default AboutPage;
