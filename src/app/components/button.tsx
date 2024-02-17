import React from 'react';

interface ButtonProps {
	children: React.ReactNode; // Or React.ElementType if you expect a specific type of children
}

export default function Button({ children }: ButtonProps) {
	return (
		<button className="transform hover:scale-105 transition duration-300">
			{children}
		</button>
	);
}
