import Layout from "@/components/Layout/Layout";
import AboutPromo from "@/components/AboutPage/AboutPromo/AboutPromo";
import { Metadata } from 'next'
import AboutTeam from "@/components/AboutPage/AboutTeam/AboutTeam";
import AboutHistory from "@/components/AboutPage/AboutHistory/AboutHistory";
import {API_ENDPOINTS} from "@/constants/API";

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

async function getTeamMembers() {
	const res = await fetch(`${API_ENDPOINTS.TEAM_MEMBERS_POINT}?acf&acf_format=standard&per_page=100`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}


const AboutPage = async () => {
	const teamMembers = await getTeamMembers();
	return (
		<Layout>
			<AboutPromo />
			<AboutTeam teamMembers={teamMembers} />
			<AboutHistory />
		</Layout>
	)
}
export default AboutPage;
