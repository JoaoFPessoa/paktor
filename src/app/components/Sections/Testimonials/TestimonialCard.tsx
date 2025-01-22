import { FaUserCircle } from 'react-icons/fa';
import Star from '../../../../../public/starts.png';
import Image from 'next/image';

type Props = {
	name: string;
	description: string;
	stars: number;
	date: string;
};

export default function TestimonialCard({
	name,
	description,
	date,
	stars,
}: Props) {
	const starElements = Array.from({ length: stars }, (_, index) => (
		<svg
			key={index}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="#FFD700"
			stroke="#FFD700"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
		</svg>
	));

	return (
		<div className="">
			<div id="profile" className="m-1 flex items-start">
				<FaUserCircle className=" w-[40px] h-[40px]" />
				<div className="ml-2">
					<h4 className="text-lg font-medium leading-6">{name}</h4>
					<span className="text-sm text-gray-500">{date}</span>
				</div>
			</div>
			<div id="rating" className="m-1 mt-3 flex">
				{starElements}
			</div>
			<div id="description" className="text-base md:text-xl mt-3">
				{description}
			</div>
		</div>
	);
}
