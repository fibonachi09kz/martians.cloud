import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import Projects from "@/components/ProjectsPage/Projects";
import {API_ENDPOINTS} from "@/constants/API";
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";

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

async function getProjects() {
	const res = await fetch(`${API_ENDPOINTS.PROJECTS}?&acf&acf_format=standard&per_page=100`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const ProjectsPage = async () => {
	const initialProjects = await getProjects();

	return (
		<Layout>
            <div className="bg-gray-100 dark:bg-zinc-900">
                <Projects initialProjects={initialProjects} />
                <div className="px-4">
                    <FlexContactForm />
                </div>
            </div>
		</Layout>
	)
}
export default ProjectsPage;
