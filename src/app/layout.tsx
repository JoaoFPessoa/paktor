import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Sections/Footer';
import Head from 'next/head';
import { WhatsAppButton } from './components/Whatsappbutton';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '700'],
});

export const metadata: Metadata = {
	title: 'Paktor - Engenharia e construção',
	description:
		'Empresa de engenharia, construção e reforma em Barueri, em São Paulo',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className={montserrat.className}>
				<>
					{children}
					<WhatsAppButton />
					<Footer />
				</>
			</body>
		</html>
	);
}
