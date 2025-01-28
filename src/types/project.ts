import { StaticImageData } from 'next/image';

export interface Project {
	id?: number;
	title: string;
	description: string;
	main_image: string | StaticImageData;
	secondary_image: string | StaticImageData;
	additional_images: string[];
	sort_order?: number | null;
	created_at?: string;
}
