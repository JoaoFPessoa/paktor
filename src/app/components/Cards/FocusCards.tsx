'use client';
import { cn } from '@/app/utils/cn';
import Image from 'next/image';
import React, {
	useState,
	useMemo,
	useCallback,
	useEffect,
	useRef,
} from 'react';

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
	}: {
		card: string;
		index: number;
		hovered: number | null;
		setHovered: React.Dispatch<React.SetStateAction<number | null>>;
	}) => {
		return (
			<div
				onMouseEnter={() => setHovered(index)}
				onMouseLeave={() => setHovered(null)}
				className={cn(
					'rounded-lg relative bg-gray-100 overflow-hidden h-60 md:h-[550px] w-full transition-all duration-300 ease-out',
					hovered !== null && hovered !== index && 'blur-sm',
				)}
			>
				{card && (
					<Image
						src={card}
						alt={`Acabametno ${index + 1}`}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover"
						loading="lazy"
						quality={75}
					/>
				)}
			</div>
		);
	},
);

Card.displayName = 'Card';

interface FocusCardsProps {
	cards: string[];
	imagesPerPage?: number;
}

export function FocusCards({ cards, imagesPerPage = 6 }: FocusCardsProps) {
	const [hovered, setHovered] = useState<number | null>(null);
	const [visibleCards, setVisibleCards] = useState<string[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const loadMoreTriggerRef = useRef<HTMLDivElement>(null);

	// Load initial set of images
	useEffect(() => {
		const initialCards = cards?.slice(0, imagesPerPage);
		setVisibleCards(initialCards);
		setHasMore(cards?.length > imagesPerPage);
	}, [cards, imagesPerPage]);

	// Intersection Observer to load more images
	const loadMoreImages = useCallback(() => {
		const currentLength = visibleCards?.length;
		const nextCards = cards?.slice(
			currentLength,
			currentLength + imagesPerPage,
		);

		if (nextCards.length > 0) {
			setVisibleCards((prev) => [...prev, ...nextCards]);
		}

		// Check if we've loaded all images
		if (currentLength + nextCards.length >= cards.length) {
			setHasMore(false);
		}
	}, [visibleCards, cards, imagesPerPage]);

	// Setup Intersection Observer
	useEffect(() => {
		if (!hasMore || !loadMoreTriggerRef.current) return;

		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		};

		observerRef.current = new IntersectionObserver((entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				loadMoreImages();
			}
		}, options);

		if (loadMoreTriggerRef.current) {
			observerRef.current.observe(loadMoreTriggerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [hasMore, loadMoreImages]);

	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12 w-full">
				{visibleCards?.map((card, index) => (
					<Card
						key={card ?? index}
						card={card}
						index={index}
						hovered={hovered}
						setHovered={setHovered}
					/>
				))}
			</div>
		</div>
	);
}
