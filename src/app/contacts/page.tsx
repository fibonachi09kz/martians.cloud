import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next'
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";

export const metadata: Metadata = {
    title: 'Контакты | Web-студия Martians',
    description: 'Web-студия разработки сайтов',
    openGraph: {
        title: 'Контакты | Web-студия Martians',
        description: 'Web-студия разработки сайтов',
        url: '/contacts',
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

const ContactsPage = () => {
    return (
        <Layout>
            {/*<ContactsForm />*/}
            <div className="px-4">
                <FlexContactForm />
            </div>
        </Layout>
    )
}
export default ContactsPage;
