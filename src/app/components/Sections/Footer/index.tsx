'use client';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { BsWhatsapp } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const Footer = () => {
	const pathname = usePathname();

	// Do not render the footer if the route is '/admin'
	if (pathname === '/admin') {
		return null;
	}

	return (
		<div className=" w-full bg-[#545454] border-t mt-20">
			<div className=" w-fit mx-auto p-4">
				<div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="flex flex-col justify-between ">
						<div>
							<Image
								src="/logo-verde-branco.png"
								alt="logo"
								width={300}
								height={300}
							/>
							<p className="text-white">
								A obra do seu jeito, com a qualidade que você merece.
							</p>
						</div>
						<div className="flex ">
							<div className="flex gap-8">
								<a
									target="_blank"
									className="flex items-center gap-2 text-sm text-white justify-center flex-col"
									href="https://www.instagram.com/paktor.engenharia/"
								>
									<Instagram className=" h-10 w-10 text-white  cursor-pointer" />
									@paktor.engenharia
								</a>
								<a target="_blank" href="https://wa.me/5511999001074">
									<BsWhatsapp className="h-10 w-10 text-white  cursor-pointer" />
								</a>
							</div>
						</div>
					</div>

					<div className="text-center text-white"></div>

					<div id="maps">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.729941800519!2d-46.8684646!3d-23.506234799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03d22402dcaf%3A0xdb60b0b06fe168e7!2sAv.%20Trindade%2C%20254%20-%20Bethaville%20I%2C%20Barueri%20-%20SP%2C%2006404-326!5e0!3m2!1spt-BR!2sbr!4v1737998113169!5m2!1spt-BR!2sbr"
							width="400"
							height="200"
							style={{ border: 0 }}
							loading="lazy"
						></iframe>
					</div>
				</div>

				<div className="border-t mt-12 pt-8">
					<p className="text-center text-white">
						© 2025 Paktor. All rights reserved.
					</p>
					<p className="text-center text-white mt-4">
						Desenvolvido por{' '}
						<a
							href="https://joaodev.vercel.app/"
							target="_blank"
							className="text-blue-500 hover:underline"
						>
							CodeByJoao
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
