'use client';
type Props = {
	children: React.ReactNode;
};
export default function ClientComponent({ children }: Props) {
	return <div>{children}</div>;
}
