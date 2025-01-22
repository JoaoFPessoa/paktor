import React from 'react';

export const Card = ({
	className,
	children,
	...props
}: {
	className?: any;
	children?: any;
}) => {
	return (
		<div
			className={`rounded-lg border bg-white shadow-sm ${className || ''}`}
			{...props}
		>
			{children}
		</div>
	);
};

export const CardContent = ({
	className,
	children,
	...props
}: {
	className: any;
	children: any;
}) => {
	return (
		<div className={`p-6 ${className || ''}`} {...props}>
			{children}
		</div>
	);
};

export default Card;
