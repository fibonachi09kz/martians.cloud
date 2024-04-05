import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import MobileMain from "@/components/ServicesPage/Mobile/MobileMain";

export const metadata: Metadata = {
	title: 'Разработка мобильных приложений | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Разработка мобильных приложений | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/serviсes/mobile',
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

const MobileDevelopmentPage = () => {
	return (
		<Layout>
			<MobileMain />
		</Layout>
	)
}
export default MobileDevelopmentPage;
