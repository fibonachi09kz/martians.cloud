import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import Services from "@/components/ServicesPage/Services/Services";

export const metadata: Metadata = {
	title: 'Услуги | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Услуги | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/serviсes',
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

const ServicesPage = () => {
	return (
		<Layout>
			<Services />
		</Layout>
	)
}
export default ServicesPage;
