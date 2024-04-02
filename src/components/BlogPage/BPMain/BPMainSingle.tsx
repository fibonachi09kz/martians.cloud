import Image from "next/image";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {ArticleInterface} from "@/types/ArticlesTypes";


type Props = {
	article: ArticleInterface
}

const BPMainSingle = ({ article }: Props) => {
	return (
		<Button
			as={Link}
			href={`/blog/${article.slug}`}
			className="p-0 m-0 h-auto items-start whitespace-pre-wrap !opacity-100 bg-white group flex flex-col !transition-all overflow-hidden rounded-xl shadow-md active:shadow-xl hover:shadow-xl dark:bg-zinc-900"
		>
			<div className="flex items-center justify-center p-4">
				<Image src={article.acf.mainpic.url} className="w-full aspect-[715/384] rounded-md overflow-hidden" width={715} height={384} alt={article.acf.mainpic.alt} />
			</div>
			<div className="flex-1 flex flex-col rounded-t-xl px-4 pb-5">
				<h2 className="text-black dark:text-white mb-2 text-2xl font-semibold">{article.title.rendered}</h2>
				<p className="text-base text-gray-600 mb-5 dark:text-gray-400 line-clamp-3">{article.acf.descr}</p>
				<div className="h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased justify-end gap-2">
					<div className="px-4 py-2 bg-zinc-100 rounded-md text-black dark:bg-zinc-800 dark:text-white">Читать далее</div>
				</div>
			</div>
		</Button>
	)
}
export default BPMainSingle;
