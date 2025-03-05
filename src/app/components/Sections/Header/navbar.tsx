import { useState } from 'react';
import { Button } from '../../button';
import QuoteButton from '../../quoteButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ isSticky }: { isSticky: boolean }) {
	const [showMenu, setShowMenu] = useState(false);
	const pathname = usePathname();
	const textColor = pathname !== '/' ? 'text-black' : 'text-white';

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	function MobileMenu() {
		return (
			<div className="md:hidden  absolute left-2">
				{/* Burger Icon */}
				<div className="block">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								//@ts-ignore
								strokeLinecap="round"
								//@ts-ignore
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
					} md:hidden bg-white w-[220px] mt-2 rounded-md shadow-lg`}
				>
					<div
						onClick={toggleMenu}
						className={` flex flex-col text-center p-2 gap-1 `}
					>
						<Link href="/">Início</Link>
						<Link href="/sobre">Sobre</Link>
						<Link href="/#services">Serviços</Link>
						<Link href="/projetos">Projetos</Link>
						<Link href="/contato">Contato</Link>
						<QuoteButton />
					</div>
				</div>
			</div>
		);
	}

	const DesktopMenu = () => {
		return (
			<div
				className={`md:flex hidden gap-4 justify-between  items-center font-semibold ${
					isSticky ? '' : textColor
				}`}
			>
				<Link className=" hover:scale-105" href="/">
					Início
				</Link>
				<Link className=" hover:scale-105" href="/sobre">
					Sobre
				</Link>
				<Link className=" hover:scale-105" href="/#services">
					Serviços
				</Link>
				<Link className=" hover:scale-105" href="/projetos">
					Projetos
				</Link>
				<Link className=" hover:scale-105" href="/contato">
					Contato
				</Link>
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
