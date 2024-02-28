import Card from './Card';

export default function WhyChooseUsSection() {
	return (
		<div>
			<h1 className="font-bold text-2xl md:text-3xl tracking-tighter md:mt-4">
				Por que nos escolher?
			</h1>
			<div className="flex w-full flex-wrap md:flex-nowrap  mt-3 md:mt-10  gap-4">
				<Card title={'Experiência'} description="20+ anos" />
				<Card title={'Qualidade'} description="5 estrelas pelos clientes" />
				<Card
					title={'Serviço'}
					description="Contato direto com proprietários"
				/>
			</div>
		</div>
	);
}
