import Card from './Sections/WhyChooseUs/Card';

export default function OurDifferencesSection() {
	return (
		<div className="p-4 pl-8 max-w-7xl w-full">
			<h1 className="font-bold text-xl md:text-3xl  tracking-tighter md:mt-4">
				Nossos diferenciais
			</h1>
			<div className="flex w-full flex-wrap md:flex-nowrap  mt-3 md:mt-10  gap-4">
				<Card title={'Agilidade e Eficiência'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						Somos reconhecidos por oferecer velocidade nos orçamentos e execução
						rápida, garantindo que as obras sejam entregues com qualidade e no
						menor tempo possível, gerando economia para nossos clientes.
					</div>
				</Card>
				<Card title={'Conhecimento e Experiência'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						Com profissionais que possuem mais de 30 anos de atuação no mercado,
						já executamos projetos complexos e de grande porte em diversos
						segmentos. Nossa expertise técnica nos permite oferecer soluções
						inteligentes, sempre com foco na excelência.
					</div>
				</Card>
				<Card title={'Confiança e Transparência'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						Relações duradouras com clientes e fornecedores são o alicerce da
						Modena Santos. Cumprimos rigorosamente os prazos e os contratos,
						construindo vínculos de longo prazo.
					</div>
				</Card>
			</div>
		</div>
	);
}
