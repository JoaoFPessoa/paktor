'use client';
import { cn } from '@/app/utils/cn';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
		onClick,
	}: {
		card: string;
		index: number;
		hovered: number | null;
		setHovered: React.Dispatch<React.SetStateAction<number | null>>;
		onClick: (index: number) => void;
	}) => {
		return (
			<div
				onMouseEnter={() => setHovered(index)}
				onMouseLeave={() => setHovered(null)}
				onClick={() => onClick(index)}
				className={cn(
					'rounded-lg relative bg-gray-100 overflow-hidden aspect-[16/7] w-full transition-all duration-300 ease-out cursor-pointer',
					hovered !== null && hovered !== index && 'blur-sm',
				)}
			>
				{card && (
					<Image
						src={card}
						alt={`Imagem ${index + 1}`}
						fill
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
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	// Load initial images
	useEffect(() => {
		const initialCards = cards?.slice(0, imagesPerPage);
		setVisibleCards(initialCards);
		setHasMore(cards?.length > imagesPerPage);
	}, [cards, imagesPerPage]);

	// Load more images when scrolled to the bottom
	const loadMoreImages = useCallback(() => {
		const currentLength = visibleCards.length;
		const nextCards = cards.slice(currentLength, currentLength + imagesPerPage);

		if (nextCards.length > 0) {
			setVisibleCards((prev) => [...prev, ...nextCards]);
		}

		// Check if all images are loaded
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

	// Handle modal navigation
	const goToNext = () => {
		if (selectedIndex !== null && selectedIndex < cards.length - 1) {
			setSelectedIndex((prev) => (prev !== null ? prev + 1 : null));
		}
	};

	const goToPrev = () => {
		if (selectedIndex !== null && selectedIndex > 0) {
			setSelectedIndex((prev) => (prev !== null ? prev - 1 : null));
		}
	};

	const closeModal = () => setSelectedIndex(null);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (selectedIndex !== null) {
				if (event.key === 'ArrowRight') goToNext();
				if (event.key === 'ArrowLeft') goToPrev();
				if (event.key === 'Escape') closeModal();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [selectedIndex]);

	return (
		<div className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12 w-full">
				{visibleCards?.map((card, index) => (
					<Card
						key={card ?? index}
						card={card}
						index={index}
						hovered={hovered}
						setHovered={setHovered}
						onClick={setSelectedIndex}
					/>
				))}
			</div>

			{/* Modal */}
			{selectedIndex !== null && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
					<button
						onClick={closeModal}
						className="absolute top-4 right-4 text-white text-3xl"
					>
						×
					</button>

					<button
						onClick={goToPrev}
						className="absolute left-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-3"
						disabled={selectedIndex === 0}
					>
						←
					</button>

					<div className="relative w-[80vw] max-w-[1000px] h-[80vh]">
						<Image
							src={cards[selectedIndex]}
							alt={`Imagem ${selectedIndex + 1}`}
							fill
							className="object-contain"
						/>
					</div>

					<button
						onClick={goToNext}
						className="absolute right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-3"
						disabled={selectedIndex === cards.length - 1}
					>
						→
					</button>
				</div>
			)}
		</div>
	);
}
