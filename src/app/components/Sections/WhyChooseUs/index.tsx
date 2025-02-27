import Card from './Card';

export default function WhyChooseUsSection() {
	return (
		<div className="p-4 pl-8 max-w-7xl w-full">
			<h1 className="font-bold text-xl md:text-3xl  tracking-tighter md:mt-4">
				Por que escolher a Paktor Engenharia?
			</h1>
			<div className="flex w-full  flex-wrap md:flex-nowrap   mt-3 md:mt-10  gap-4">
				<Card title={'Cumprimento de Prazos e Agilidade'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<p>
							Executamos obras dentro dos prazos estabelecidos, garantindo a
							qualidade e gerando economia para os nossos clientes.
						</p>
					</div>
				</Card>{' '}
				<Card
					title={'Gerenciamento de Materiais e Fornecedores'}
					description=""
				>
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<p>
							Trabalhamos com fornecedores de confiança e materiais de alta
							qualidade, garantindo o melhor resultado em cada projeto.
						</p>
					</div>
				</Card>{' '}
				<Card title={'Controle de Qualidade Rigoroso'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						<p>
							Cada etapa da obra é monitorada para garantir que os mais altos
							padrões sejam seguidos, assegurando a total satisfação do cliente.
						</p>
					</div>
				</Card>{' '}
			</div>
		</div>
	);
}
