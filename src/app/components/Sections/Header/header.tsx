import Image from 'next/image';
import Logo from '../../../../../public/logo-verde-branco.png';
import MobileLogo from '../../../../../public/mobile-logo.png';
import Navbar from './navbar';
export default function Header() {
	return (
		<div className=" h-[100px] sticky border-b border-gray-200 bg-grayBackground top-0 left-0 w-full z-50">
			<header className="flex justify-between px-10 py-5">
				<div>
					<Image
						width={80}
						height={80}
						className="md:hidden"
						alt="logo-paktor"
						src={MobileLogo}
					/>
					<Image
						width={200}
						height={200}
						className="hidden"
						alt="logo-paktor"
						src={Logo}
					/>
				</div>
				<div className="w-[80%]  md:w-[40%] ">
					<Navbar />
				</div>
			</header>
		</div>
	);
}
