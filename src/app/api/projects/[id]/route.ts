import { supabase } from '@/app/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const id = request.nextUrl.pathname.split('/').pop();
		if (!id) {
			return NextResponse.json(
				{ error: 'Project ID is required' },
				{ status: 400 },
			);
		}

		const { data: projectData, error: projectError } = await supabase
			.from('projects')
			.select('*')
			.eq('id', id)
			.single();

		if (projectError || !projectData) {
			return NextResponse.json(
				{ error: `Project with ID ${id} not found` },
				{ status: 404 },
			);
		}

		const unifiedData = {
			...projectData,
			images: projectData.additional_images,
		};

		return NextResponse.json(unifiedData);
	} catch (error) {
		console.error('Error fetching project:', error);
		return NextResponse.json({ error: String(error) }, { status: 500 });
	}
}
