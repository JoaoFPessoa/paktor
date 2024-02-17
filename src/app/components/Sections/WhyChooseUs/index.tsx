import Card from './Card';

export default function WhyChooseUsSection() {
	return (
		<div>
			<h1 className="font-bold text-3xl tracking-tighter mt-4">
				Por que nos escolher?
			</h1>
			<div className="flex w-full mt-10 border gap-4">
				<Card title={'Experiência'} description="20+ anos" />
				<Card title={'Qualidade'} description="20+ anos" />
				<Card title={'Serviço'} description="20+ anos" />
			</div>
		</div>
	);
}