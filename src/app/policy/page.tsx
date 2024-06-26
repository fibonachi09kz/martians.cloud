import {Metadata} from "next";
import Layout from "@/components/Layout/Layout";
import Projects from "@/components/ProjectsPage/Projects";
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";
import PolicyMain from "@/components/Policy/PolicyMain/PolicyMain";

export const metadata: Metadata = {
    title: 'Политика конфиденциальности | Web-студия Martians',
    description: 'Web-студия разработки сайтов',
    openGraph: {
        title: 'Политика конфиденциальности | Web-студия Martians',
        description: 'Web-студия разработки сайтов',
        url: '/policy',
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
            <div className="bg-gray-100 dark:bg-zinc-900 px-4">
                <PolicyMain />
            </div>
        </Layout>
    )
}
export default ProjectsPage;