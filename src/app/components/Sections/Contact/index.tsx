import QuoteButton from '../../quoteButton';

export default function Contact() {
	return (
		<div
			id="contact"
			className="flex flex-col items-center justify-center my-16"
		>
			<h1 className="text-4xl font-bold tracking-tighter">
				Pronto para começar seu projeto?
			</h1>
			<p className="mb-8 mt-2">Contate-nos hoje para uma consulta gratuita</p>
			<QuoteButton />
		</div>
	);
}
