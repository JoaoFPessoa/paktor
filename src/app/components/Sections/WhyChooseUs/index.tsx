import Card from './Card';

export default function WhyChooseUsSection() {
	return (
		<div className="p-4 pl-8 max-w-7xl w-full">
			<h1 className="font-bold text-xl md:text-3xl  tracking-tighter md:mt-4">
				Por que escolher a Paktor Engenharia?
			</h1>
			<div className="flex w-full  flex-wrap md:flex-nowrap   mt-3 md:mt-10  gap-4">
				<Card title={'Experiência'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<p>10+ anos</p>
					</div>
				</Card>{' '}
				<Card title={'Qualidade'} description="">
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<li>Cumprimento de Prazos</li>
						<li>Gerenciamento de Materiais e Fornecedores</li>
						<li>Controle de Qualidade Rigoroso</li>
					</div>
				</Card>{' '}
				<Card title={'Serviços'} description="">
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<li> Projetos e estudos iniciais</li>
						<li> Planejamento e gestão da obra</li>
						<li> Reforma de casas e apartamentos</li>
						<li> Construção desde a fundação até a entrega das chaves</li>
					</div>
				</Card>{' '}
			</div>
		</div>
	);
}
