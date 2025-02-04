import Image from 'next/image';

export const WhatsAppButton = () => {
	const whatsappNumber = '5511999001074';
	const message = 'Olá, vim pelo site da Paktor e gostaria de bater um papo!';
	const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
		message,
	)}`;

	return (
		<a
			href={whatsappURL}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-5 right-5  shadow-lg z-50 transition-transform transform hover:scale-105"
		>
			<Image
				alt="redirect-to-whatsapp"
				src={'/whatsapp-icon.svg'}
				width={42}
				height={42}
			/>
		</a>
	);
};
