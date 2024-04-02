import Layout from "@/components/Layout/Layout";
import {API_ENDPOINTS} from "@/constants/API";
import BPDetail from "@/components/BlogPage/BPDetail/BPDetail";


async function getArticleBySlug(slug: string) {
	const res = await fetch(`${API_ENDPOINTS.ARTICLES}?slug=${slug}&acf&acf_format=standard`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const ArticleDetailPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const article = await getArticleBySlug(slug);

	return (
		<Layout>
			<BPDetail article={article[0]} />
		</Layout>
	)
}
export default ArticleDetailPage;
