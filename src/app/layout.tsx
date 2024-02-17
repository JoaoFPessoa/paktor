import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Paktor - Engenharia e construção',
	description: 'Empresa de engenharia, construção e reforma',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
