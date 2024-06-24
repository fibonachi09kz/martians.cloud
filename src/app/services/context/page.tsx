import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import ContextMain from "@/components/ServicesPage/Context/ContextMain/ContextMain";

export const metadata: Metadata = {
	title: 'Контекстная реклама | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Контекстная реклама | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/serviсes/context',
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

const DesignPage = () => {
	return (
		<Layout>
            <ContextMain />
		</Layout>
	)
}
export default DesignPage;
