'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../../../../public/logo-verde-branco.png';
import Navbar from './navbar';

export default function Header() {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 100); // Adjust threshold if needed
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={`h-fit max-w-[100vw] top-0 left-0 w-full z-50 transition-all duration-300 ${
				isSticky
					? 'fixed bg-black shadow-md  opacity-90'
					: 'absolute bg-transparent'
			}`}
		>
			<header className={`flex justify-between py-8 md:px-10 md:py-5 `}>
				<a href="/" className="hidden md:block">
					<Image width={200} height={200} alt="logo-paktor" src={Logo} />
				</a>
				<div className="px-2 flex justify-end md:px-0 w-full md:w-[40%]">
					<Navbar isSticky={isSticky} />
				</div>
			</header>
		</div>
	);
}
