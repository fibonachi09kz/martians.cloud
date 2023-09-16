import Layout from "@/components/Layout/Layout";
import AboutPromo from "@/components/AboutPage/AboutPromo/AboutPromo";
import { Metadata } from 'next'
import AboutTeam from "@/components/AboutPage/AboutTeam/AboutTeam";

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
			<AboutTeam />
		</Layout>
	)
}
export default AboutPage;
