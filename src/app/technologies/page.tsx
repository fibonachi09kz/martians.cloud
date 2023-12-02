import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next'
import TechMain from "@/components/TechPage/TechMain";
import {API_ENDPOINTS} from "@/constants/API";

export const metadata: Metadata = {
	title: 'Технологии | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Технологии | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/technologies',
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

async function getData() {
	const res = await fetch(`${API_ENDPOINTS.TECHNOLOGIES_POINT}?acf&acf_format=standard`, { next: { revalidate: 3600 } });
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const TechPage = async () => {
	const data = await getData()

	return (
		<Layout>
			<TechMain technologies={data} />
		</Layout>
	)
}
export default TechPage;
