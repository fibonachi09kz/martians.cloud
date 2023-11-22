import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next'
import TechMain from "@/components/TechPage/TechMain";

export const metadata: Metadata = {
	title: 'Технологии | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Контакты | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/tech',
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

const TechPage = () => {
	return (
		<Layout>
			<TechMain />
		</Layout>
	)
}
export default TechPage;
