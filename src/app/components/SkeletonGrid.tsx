// SkeletonGrid.tsx
const SkeletonGrid: React.FC = () => {
	// Define how many placeholders you want
	const skeletonItems = new Array(12).fill(0);

	return (
		<div className="gallery-grid w-full max-w-[90%] mb-32">
			{skeletonItems.map((_, index) => (
				<div
					key={index}
					className="gallery-item skeleton-item rounded-lg bg-slate-100 opacity-35 w-[300px] h-[300px]"
				></div>
			))}
		</div>
	);
};

export default SkeletonGrid;
