import { v2 as cloudinary } from 'cloudinary';
import { supabase } from '@/app/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const {
			main_image,
			secondary_image,
			additional_images,
			title,
			description,
		} = await request.json();

		const { data, error } = await supabase
			.from('projects')
			.insert([
				{
					main_image,
					secondary_image,
					additional_images,
					title,
					description,
				},
			])
			.select();

		if (error) {
			throw error;
		}

		return new Response(JSON.stringify({ success: true, data }), {
			status: 200,
		});
	} catch (error) {
		console.error('Erro ao adicionar imagens:', error);
		return new Response(JSON.stringify({ success: false, message: error }), {
			status: 500,
		});
	}
}

export async function GET() {
	try {
		// Fetch projects
		const { data: projects, error: projectsError } = await supabase
			.from('projects')
			.select('*')
			.order('id', { ascending: true });

		if (projectsError) {
			console.error('Error fetching projects:', projectsError);
			throw projectsError;
		}

		// Respond with the combined data
		return NextResponse.json({ status: 200, data: projects });
	} catch (error) {
		console.error('Error in GET route:', error);
		return NextResponse.json({ status: 500, error: error });
	}
}

export async function DELETE(req: Request) {
	const { projectId } = await req.json();

	if (!projectId) {
		return NextResponse.json(
			{ success: false, message: 'Project ID is missing' },
			{ status: 500 },
		);
	}

	try {
		// Fetch the project data from Supabase
		const { data: project, error: fetchError } = await supabase
			.from('projects')
			.select('*')
			.eq('id', projectId)
			.single();

		if (fetchError) {
			throw new Error(fetchError.message);
		}

		if (!project) {
			return NextResponse.json(
				{ success: false, message: 'Projeto não encontrado no banco de dados' },
				{ status: 500 },
			);
		}

		// Delete images from Cloudinary
		const deleteImage = async (url: string) => {
			const publicId = url.split('/').slice(-1)[0].split('.')[0]; // Extract public ID from URL
			if (publicId) {
				await cloudinary.uploader.destroy(publicId);
			}
		};

		// Delete main image
		if (project.main_image) {
			await deleteImage(project.main_image);
		}

		// Delete secondary image
		if (project.secondary_image) {
			await deleteImage(project.secondary_image);
		}

		// Delete additional images
		if (project.additional_images && project.additional_images.length > 0) {
			await Promise.all(
				project.additional_images.map((img: string) => deleteImage(img)),
			);
		}

		// Delete the project from Supabase
		const { error: deleteError } = await supabase
			.from('projects')
			.delete()
			.eq('id', projectId);

		if (deleteError) {
			throw new Error(deleteError.message);
		}

		return NextResponse.json({
			success: true,
			message: 'Project and images deleted successfully',
		});
	} catch (error) {
		console.error('Error deleting project:', error);
		return NextResponse.json(
			{ success: false, message: 'Error deleting project', error },
			{ status: 500 },
		);
	}
}
