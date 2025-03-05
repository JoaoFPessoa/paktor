import Card from './Sections/WhyChooseUs/Card';

export default function OurDifferencesSection() {
	return (
		<div className="p-4 pl-8 max-w-7xl w-full">
			<h1 className="font-bold text-xl md:text-3xl  tracking-tighter md:mt-4">
				Cumprimento de Prazos e Agilidade
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
						Executamos obras dentro dos prazos estabelecidos, garantindo a
						qualidade e gerando economia para os nossos clientes.
					</div>
				</Card>
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
						Trabalhamos com fornecedores de confiança e materiais de alta
						qualidade, garantindo o melhor resultado em cada projeto.
					</div>
				</Card>
				<Card title={'⦁	Controle de Qualidade Rigoroso'} description="">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						Cada etapa da obra é monitorada para garantir que os mais altos
						padrões sejam seguidos, assegurando a total satisfação do cliente.
					</div>
				</Card>
			</div>
		</div>
	);
}
