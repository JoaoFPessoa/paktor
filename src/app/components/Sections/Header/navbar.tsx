import { useState } from 'react';
import Button from '../../button';
import QuoteButton from '../../quoteButton';

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	function MobileMenu() {
		return (
			<div className="md:hidden relative">
				{/* Burger Icon */}
				<div className="block">
					<button
						onClick={toggleMenu}
						className="text-gray-800 focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Navigation Links */}
				<div
					className={`${
						showMenu ? 'absolute block' : 'hidden'
					} md:hidden bg-white w-[180px] mt-2 rounded-md shadow-lg`}
				>
					<div
						onClick={toggleMenu}
						className=" flex flex-col text-center gap-4  p-3"
					>
						<Button href="#services">Serviços</Button>
						<Button href="#projects">Projetos</Button>
						<Button href="#contact">Contatos</Button>
						<QuoteButton />
					</div>
				</div>
			</div>
		);
	}

	const DesktopMenu = () => {
		return (
			<div className="md:flex hidden gap-3 justify-between md:px-5 items-center font-semibold">
				<Button href="#about">Sobre</Button>
				<Button href="#services">Serviços</Button>
				<Button href="#projects">Projetos</Button>
				<Button href="#contact">Contatos</Button>
				<QuoteButton />
			</div>
		);
	};

	return (
		<>
			<MobileMenu />
			<DesktopMenu />
		</>
	);
}
