type Props = {
	title: string;
	description: string;
};

export default function Card({ title, description }: Props) {
	return (
		<div className="flex-1 md:h-[140px] rounded-lg p-4 bg-slate-50 border border-gray-100">
			<h2 className="p-1">{title}</h2>
			<h1 className="font-bold text-xl p-2 md:py-0 md:text-3xl tracking-tighter">
				{description}
			</h1>
		</div>
	);
}
