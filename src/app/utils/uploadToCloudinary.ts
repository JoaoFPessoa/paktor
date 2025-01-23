import toast from 'react-hot-toast';

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dhzkmyrhb/image/upload`;

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', 'paktor');

	try {
		const response = await fetch(CLOUDINARY_URL, {
			method: 'POST',
			body: formData,
		});
		const data = await response.json();

		if (data.secure_url) {
			return `${data.secure_url}?q=auto&f=auto`; // Return the image URL with auto quality params for better performance
		} else {
			throw new Error('Erro ao obter URL da imagem');
		}
	} catch (error) {
		console.error('Upload failed:', error);
		toast.error('Falha ao fazer upload da imagem.');
		throw error;
	}
};
