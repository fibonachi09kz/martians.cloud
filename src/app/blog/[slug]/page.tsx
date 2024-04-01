'use client'
import Layout from "@/components/Layout/Layout";
import {API_ENDPOINTS} from "@/constants/API";
import BPDetail from "@/components/BlogPage/BPDetail/BPDetail";


async function getArticleById(id: number) {
	const res = await fetch(`${API_ENDPOINTS.SINGLE_ARTICLE}${id}`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

async function getArticles() {
	const res = await fetch(`${API_ENDPOINTS.ARTICLES}?acf&acf_format=standard&per_page=100`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const ArticleDetailPage = async ({ params }) => {
	console.log(params)
	const articles = await getArticles();
	const articleID = articles.filter(article => article.slug === params.slug).id;
	const article = await getArticleById(articleID);

	return (
		<Layout>
			<BPDetail article={article} />
		</Layout>
	)
}
export default ArticleDetailPage;
