import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import SiteMain from "@/components/ServicesPage/Site/SiteMain";

export const metadata: Metadata = {
	title: 'Разработка сайтов | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Разработка сайтов | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/serviсes/site',
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

const SiteDevelopmentPage = () => {
	return (
		<Layout>
			<SiteMain />
		</Layout>
	)
}
export default SiteDevelopmentPage;
