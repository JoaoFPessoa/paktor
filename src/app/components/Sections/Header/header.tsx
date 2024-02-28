'use client';
import Image from 'next/image';
import Logo from '../../../../../public/logo-verde-branco.png';
import Navbar from './navbar';
export default function Header() {
	return (
		<div className="h-[90px] max-w-[100vw] border md:h-[100px] sticky border-b border-gray-200 bg-grayBackground top-0 left-0 w-full z-50">
			<header className="flex justify-between py-8 md:px-10 md:py-5">
				<div className="hidden md:block">
					<Image width={200} height={200} alt="logo-paktor" src={Logo} />
				</div>
				<div className="px-2 md:px-0 w-full md:w-[40%] ">
					<Navbar />
				</div>
			</header>
		</div>
	);
}
