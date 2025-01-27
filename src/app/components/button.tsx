import React from 'react';

interface ButtonProps {
	children: React.ReactNode; // Or React.ElementType if you expect a specific type of children
	href: string;
}

export default function Button({ children, href }: ButtonProps) {
	return (
		<a
			href={href}
			className="transform md:text-lg p-1 border text-white rounded-md lg:border-0 hover:scale-105 transition duration-300"
		>
			{children}
		</a>
	);
}
