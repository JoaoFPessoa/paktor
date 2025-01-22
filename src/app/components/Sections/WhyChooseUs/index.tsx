import Card from './Card';

export default function WhyChooseUsSection() {
	return (
		<div>
			<h1 className="font-bold text-2xl md:text-3xl tracking-tighter md:mt-4">
				Por que nos escolher?
			</h1>
			<div className="flex w-full flex-wrap md:flex-nowrap  mt-3 md:mt-10  gap-4">
				<Card title={'Experiência'} description="20+ anos" />
				<Card title={'Qualidade'} description="5 estrelas pelos clientes">
					<div
						style={{
							display: 'flex',
							gap: '8px',
							marginTop: '8px',
							marginLeft: '4px',
						}}
					>
						{Array(5).fill(
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="#FFD700"
								stroke="#FFD700"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
							</svg>,
						)}
					</div>
				</Card>
				<Card
					title={'Serviço'}
					description="Contato direto com proprietários"
				/>
			</div>
		</div>
	);
}
