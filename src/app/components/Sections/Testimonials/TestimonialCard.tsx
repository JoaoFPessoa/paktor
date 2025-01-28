import { FaUserCircle } from 'react-icons/fa';

type Props = {
	name: string;
	description: string;
	stars: number;
	date: string;
};

export default function TestimonialCard({ name, description, date }: Props) {
	return (
		<div className="shadow-lg bg-white w-full md:w-1/3 rounded-lg p-2 my-2">
			<div id="profile" className="m-1 flex items-start">
				<FaUserCircle className=" w-[40px] h-[40px]" />
				<div className="ml-2">
					<h4 className="text-lg font-medium leading-6">{name}</h4>
					<span className="text-sm text-gray-500">{date}</span>
				</div>
			</div>
			<div id="description" className="px-2 md:px-0  mt-3 text-sm md:text-base">
				{description}
			</div>
		</div>
	);
}
