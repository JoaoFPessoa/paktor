import Link from 'next/link';

type ButtonProps = {
	as?: React.ElementType; // Support for rendering as different elements
	href?: string; // For navigation
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
	as: Component = 'button',
	href,
	children,
	...props
}: ButtonProps) {
	if (href) {
		// Use Next.js Link for client-side navigation
		return (
			<Link
				href={href}
				className="transform md:text-lg p-1 border md:text-white rounded-md lg:border-0 hover:scale-105 transition duration-300"
			>
				{children}
			</Link>
		);
	}

	// Default to rendering as a button
	return (
		<Component
			className="transform md:text-lg p-1 border md:text-white rounded-md lg:border-0 hover:scale-105 transition duration-300"
			{...props}
		>
			{children}
		</Component>
	);
}
