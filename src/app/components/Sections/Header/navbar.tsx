import Button from '../../button';
import QuoteButton from '../../quoteButton';

export default function Navbar() {
	return (
		<div className="flex gap-3 justify-between px-5 items-center font-semibold">
			<Button>Sobre</Button>
			<Button>Serviços</Button>
			<Button>Projetos</Button>
			<Button>Contatos</Button>
			<QuoteButton />
		</div>
	);
}
