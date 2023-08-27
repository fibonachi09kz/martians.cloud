import Layout from "@/components/Layout/Layout";
import AboutPromo from "@/components/AboutPage/AboutPromo/AboutPromo";
import AboutFeatures from "@/components/AboutPage/AboutFeatures/AboutFeatures";
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'О нас | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'О нас | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/about',
		siteName: 'Martians',
		images: [
			{
				url: 'https://nextjs.org/og.png',
				width: 800,
				height: 600,
			},
			{
				url: 'https://nextjs.org/og-alt.png',
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
}

const AboutPage = () => {
	return (
		<Layout>
			<AboutPromo />
			{/*<AboutFeatures />*/}
		</Layout>
	)
}
export default AboutPage;
