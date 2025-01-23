import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

const LoadingSpinner: React.FC = () => {
	return (
		<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
	);
};
export default function SubmitButton({
	children,
	disabled = false,
	type,
	onClick,
	className,
}: ButtonProps) {
	console.log({ className });
	return (
		<button
			type={type}
			className={`${
				className
					? className
					: 'transform md:text-lg px-2 py-2 rounded border  lg:border-0 hover:scale-105 transition duration-300'
			} ${
				disabled
					? 'bg-gray-300 cursor-not-allowed'
					: 'bg-blue-500 text-white hover:bg-blue-600'
			} flex items-center justify-center gap-2`}
			onClick={onClick}
		>
			{disabled ? <LoadingSpinner /> : children}{' '}
			{/* Show spinner if disabled */}
		</button>
	);
}
