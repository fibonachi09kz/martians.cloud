/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fibonachi.kz',
				port: '',
				pathname: '/wp-content/uploads/**',
			},
		],
	},
}

module.exports = nextConfig
