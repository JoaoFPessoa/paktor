import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Sections/Footer';
import Head from 'next/head';
import { WhatsAppButton } from './components/Whatsappbutton';
import { Montserrat } from '@next/font/google';
import Header from './components/Sections/Header/header';

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
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</Head>
			<body className={montserrat.className}>
				<>
					<Header />
					{children}
					<WhatsAppButton />
					<Footer />
				</>
			</body>
		</html>
	);
}
