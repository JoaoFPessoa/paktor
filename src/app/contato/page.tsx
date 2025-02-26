'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/Sections/Header/header';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
});

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const [status, setStatus] = useState('');

	const handleWhatsAppClick = () => {
		window.open('https://wa.me/5511999001074', '_blank');
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setStatus('sending');
		toast.loading('Enviando mensagem...');

		emailjs
			.send(
				'service_jpm0zfr',
				'template_rpq643m',
				{
					to_email: 'paktor.engenharia@gmail.com',
					from_name: formData.name,
					from_email: formData.email,
					phone: formData.phone,
					message: formData.message,
				},
				'qz-4_1LAeaG1EeYCn',
			)
			.then(() => {
				setStatus('success');
				setFormData({ name: '', email: '', phone: '', message: '' });
				toast.dismiss();
				toast.success('Mensagem enviada com sucesso!');
			})
			.catch((error) => {
				setStatus('error');
				toast.dismiss();
				toast.error(`Erro: ${error}`);
			});
	};

	return (
		<div className={montserrat.className}>
			<Toaster position="top-right" />
			<h1 className="text-4xl font-bold mb-12 mt-24 text-center pt-12">
				Contatos
			</h1>

			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 mb-12">
					<div className="bg-white rounded-lg p-8 shadow-lg">
						<h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
						<div className="space-y-8 text-xl">
							<div>
								<h3 className="font-bold text-gray-700">Endereço</h3>
								<p className="text-gray-600">
									Av Trindade 254, Sala 1113 - Bethaville I
								</p>
								<p className="text-gray-600">Barueri, SP</p>

								<div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
									<h3 className="font-bold text-gray-700 mb-3">
										Atendimento via WhatsApp
									</h3>
									<div className="flex flex-col space-y-3">
										<button
											onClick={handleWhatsAppClick}
											className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg w-fit text-lg font-semibold"
										>
											Iniciar Conversa no WhatsApp
										</button>
									</div>
								</div>
							</div>
							<div>
								<h3 className="font-bold text-gray-700">Telefone</h3>
								<p className="text-gray-600">(11) 99900-1074</p>
							</div>
							<div>
								<h3 className="font-bold text-gray-700">Email</h3>
								<p className="text-gray-600">paktor.engenharia@gmail.com</p>
							</div>
							<div>
								<h3 className="font-bold text-gray-700">
									Horário de Atendimento
								</h3>
								<p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
								<p className="text-gray-600">Sábado: 9h às 13h</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg p-8 shadow-lg">
						<h2 className="text-xl font-bold mb-6">Fale Conosco</h2>
						<form className="text-xl" onSubmit={handleSubmit}>
							<div className="mb-6">
								<label className="block text-gray-700 mb-2">Nome</label>
								<input
									type="text"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 mb-2">Email</label>
								<input
									type="email"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 mb-2">Telefone</label>
								<input
									type="tel"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 mb-2">Mensagem</label>
								<textarea
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500 h-32"
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
							>
								Enviar Mensagem
							</button>
						</form>
					</div>
				</div>

				<div className="bg-white rounded-lg p-8 shadow-lg">
					<h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
					<div className="w-full h-[600px] rounded-lg overflow-hidden">
						<iframe
							src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-46.8684596!3d-23.5061645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzIyLjIiUyA0NsKwNTInMDYuNSJX!5e0!3m2!1spt-BR!2sbr!4v1619799829619!s=AIzaSyYourAPIKey`}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
