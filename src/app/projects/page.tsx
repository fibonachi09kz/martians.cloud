import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import Projects from "@/components/ProjectsPage/Projects";

export const metadata: Metadata = {
	title: 'Проекты | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
	openGraph: {
		title: 'Проекты | Web-студия Martians',
		description: 'Web-студия разработки сайтов',
		url: '/projects',
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

const ProjectsPage = () => {
	return (
		<Layout>
			<Projects />
		</Layout>
	)
}
export default ProjectsPage;
