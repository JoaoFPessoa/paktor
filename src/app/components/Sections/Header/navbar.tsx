import Button from '../../button';
import QuoteButton from '../../quoteButton';

export default function Navbar() {
	return (
		<div className="flex gap-3 justify-between md:px-5 items-center font-semibold">
			<Button href="#about">Sobre</Button>
			<Button href="#services">Serviços</Button>
			<Button href="#projects">Projetos</Button>
			<Button href="#contact">Contatos</Button>
			<QuoteButton />
		</div>
	);
}
