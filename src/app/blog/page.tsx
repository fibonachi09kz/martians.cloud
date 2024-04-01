import BPMain from "@/components/BlogPage/BPMain/BPMain";
import Layout from "@/components/Layout/Layout";
import {API_ENDPOINTS} from "@/constants/API";

async function getArticles() {
	const res = await fetch(`${API_ENDPOINTS.ARTICLES}?acf&acf_format=standard&per_page=100`, { next: { revalidate: 1800 } });
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}
	return res.json()
}


const Blog = async () => {

	const articles = await getArticles();

	return (
		<Layout>
			<BPMain articles={articles} />
		</Layout>
	)
}

export default Blog;
