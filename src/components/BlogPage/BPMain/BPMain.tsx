'use client';
import BPMainSingle from "@/components/BlogPage/BPMain/BPMainSingle";
import {ArticleInterface} from "@/types/ArticlesTypes";

type Props = {
	articles: any
}

const BPMain = ({ articles }: Props) => {

	console.log(articles)
	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Блог</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Статьи под авторством участников нашей команды</p>
					</div>
				</div>

				<div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{articles.length ? articles.map((article: ArticleInterface) => (
						<BPMainSingle key={article.id} article={article} />
					)) : (
						<p>У нас пока нет статей. Зайдите позднее.</p>
					)}
				</div>
			</div>
		</section>
	)
}

export default BPMain;
