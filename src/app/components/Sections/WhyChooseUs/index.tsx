import Card from './Card';

export default function WhyChooseUsSection() {
	return (
		<div>
			<h1 className="font-bold text-2xl md:text-3xl tracking-tighter md:mt-4">
				Por que nos escolher?
			</h1>
			<div className="flex w-full flex-wrap md:flex-nowrap  mt-3 md:mt-10  gap-4">
				<Card title={'Experiência'} description="10+ anos" />
				<Card title={'Qualidade'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<ul>
							<li>
								- Serviços executados de acordo <br /> com as normas técnicas
								ABNT
							</li>
							<li> - Conclusão no prazo determinado</li>
							<li> - Garantia de obra</li>
						</ul>
					</div>
				</Card>
				<Card title={'Serviço'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<ul>
							<li>- Projetos e estudos iniciais</li>
							<li> - Planejamento e gestão da obra</li>
							<li> - Reforma de casas e apartamentos</li>
							<li>- Construção desde a fundação até a entrega das chaves</li>
						</ul>
					</div>
				</Card>
			</div>
		</div>
	);
}
