// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: ['picsum.photos', 'dxrkzimpmgohrwwsezqr.supabase.co'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/dhzkmyrhb/image/upload/**',
			},
		],
	},
};

export default nextConfig;
