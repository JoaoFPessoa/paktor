'use client';
import Image from 'next/image';
import Logo from '../../../../../public/logo-verde-branco.png';
import Navbar from './navbar';
export default function Header() {
	return (
		<div className="h-fit max-w-[100vw]   md:opacity-80 md:shadow-md bg-black sticky top-0 left-0 w-full z-50">
			<header className="flex justify-between py-8 md:px-10 md:py-5">
				<a href="/" className="hidden md:block">
					<Image width={200} height={200} alt="logo-paktor" src={Logo} />
				</a>
				<div className="px-2 flex justify-end  md:px-0 w-full md:w-[40%] ">
					<Navbar />
				</div>
			</header>
		</div>
	);
}
