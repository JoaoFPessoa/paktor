import { ReactNode } from 'react';

type Props = {
	title: string;
	description: string;
	children?: ReactNode;
};

export default function Card({ title, description, children }: Props) {
	return (
		<div className="w-full md:flex-1  rounded-lg p-4 bg-slate-50 border border-gray-100 shadow-lg">
			<h2 className="p-1 font-semibold">{title}</h2>
			<h1 className="font-bold text-lg p-2 md:py-0 md:text-xl tracking-tighter">
				{description}
			</h1>
			{children}
		</div>
	);
}
