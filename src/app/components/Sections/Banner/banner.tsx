import { useEffect, useState } from 'react';
import City from '../../../../../public/city.jpg';
import Image from 'next/image';
import QuoteButton from '../../quoteButton';

export default function Banner() {
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setOffsetY(window.pageYOffset);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className="rounded-2xl overflow-hidden h-[80vh] left-[calc(-4%)] md:[left:calc(-6%)] lg:[left:calc(-13%)]"
			style={{
				position: 'relative',
				width: 'calc(100vw)', // Full viewport width
			}}
		>
			<div className="absolute inset-0 overflow-hidden">
				<div
					style={{
						transform: `translateY(${offsetY * 0.5}px)`,
						height: '100%',
						width: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				>
					<video
						src="/main_video_drone.mp4"
						autoPlay
						loop
						muted
						poster="/main_video_cover_image.JPG"
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
			</div>
			<div className="absolute inset-0 bg-black opacity-40"></div>
			<div className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center text-white z-10">
				<h1 className="text-5xl font-bold">Paktor Engenharia e Construções</h1>
				<h2 className="text-2xl mb-10">
					A obra do seu jeito, com a qualidade que você merece.
				</h2>
			</div>
		</div>
	);
}
