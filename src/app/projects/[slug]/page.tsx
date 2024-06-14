import Layout from "@/components/Layout/Layout";
import {API_ENDPOINTS} from "@/constants/API";
import ProjectDetail from "@/components/ProjectsPage/ProjectDetail/ProjectDetail";
import {Project} from "@/types/Project";
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";


export async function generateStaticParams() {
	const projects = await fetch(`${API_ENDPOINTS.PROJECTS}?&acf&acf_format=standard&per_page=100`).then((res) => res.json())

	return projects.map((project: Project) => ({
		slug: project.slug,
	}))
}

async function getProjectBySlug(slug: string) {
	const res = await fetch(`${API_ENDPOINTS.PROJECTS}?slug=${slug}&acf&acf_format=standard`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const ArticleDetailPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const project = await getProjectBySlug(slug);

	return (
		<Layout>
            <div className="bg-gray-100 dark:bg-zinc-900">
                <ProjectDetail project={project[0]} />
                <div className="px-4">
                    <FlexContactForm />
                </div>
            </div>
		</Layout>
	)
}
export default ArticleDetailPage;
