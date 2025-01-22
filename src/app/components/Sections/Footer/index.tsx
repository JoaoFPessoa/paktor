/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className="  w-full bg-gray-50 border-t mt-20">
			<div className=" max-w-6xl mx-auto px-8 py-12">
				<div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="space-y-4">
						<Image src="/logo-preto.png" alt="logo" width={200} height={200} />
						<p className="text-gray-600">
							A obra do seu jeito, com a qualidade que você merece.
						</p>
					</div>

					<div className="text-center">
						<h3 className="font-semibold mb-4">Empresa</h3>
						<ul className="space-y-2  text-gray-600 flex flex-col gap-2">
							<a href="/">Início</a>
							<a href="/sobre">Sobre</a>
							<a href="#services">Serviços</a>
							<a href="#projects">Projetos</a>
							<a href="/contato">Contatos</a>
						</ul>
					</div>

					<div className="flex flex-col items-center">
						<h3 className="font-semibold mb-4">Redes</h3>
						<div className="flex flex-col space-y-4">
							<a
								target="_blank"
								href="https://www.instagram.com/paktor.engenharia/"
							>
								<Instagram className="h-5 w-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
							</a>

							<a target="_blank" href="https://wa.me/5511999001074">
								<BsWhatsapp className="h-5 w-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t mt-12 pt-8">
					<p className="text-center text-gray-600">
						© 2025 Paktor. All rights reserved.
					</p>
					<p className="text-center text-gray-600 mt-4">
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
