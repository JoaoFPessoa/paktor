import React from 'react';

interface ButtonProps {
	children: React.ReactNode; // Or React.ElementType if you expect a specific type of children
	href: string;
}

export default function Button({ children, href }: ButtonProps) {
	return (
		<a
			href={href}
			className="transform text-sm md:text-base hover:scale-105 transition duration-300"
		>
			{children}
		</a>
	);
}
