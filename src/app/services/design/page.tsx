import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import DesignMain from "@/components/ServicesPage/Design/DesignMain/DesignMain";

export const metadata: Metadata = {
	title: 'Индивидуальный дизайн | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Индивидуальный дизайн | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/serviсes/design',
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
			<DesignMain />
		</Layout>
	)
}
export default DesignPage;
