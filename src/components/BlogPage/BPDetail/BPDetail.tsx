'use client';
import Image from "next/image";
import sampleBg from './img/sample.png';
import {Button} from "@nextui-org/react";
import React from "react";
import {ArticleInterface} from "@/types/ArticlesTypes";

type Props = {
	article: ArticleInterface
}
const BPDetail = ({ article }: Props) => {

	const markup = { __html: article.content.rendered };

	const parsedDate = Date.parse(article.date_gmt);
	const date = new Date(parsedDate);
	const formattedDate = date.toLocaleString('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});

	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20 relative h-[460px] lg:pt-48">
				<div className="absolute h-full w-full object-cover top-0 left-0 bg-black/60 z-10"></div>
				<Image src={article.acf.backgroundpic.url} alt="Background Image" width={article.acf.backgroundpic.width} height={article.acf.backgroundpic.height} className="absolute h-full w-full object-cover top-0 left-0 z-0" />
				<div className="max-w-7xl mx-auto px-5 relative z-20 text-white ">
					<div className="max-w-4xl">
						<h1 className="text-4xl font-bold">{article.title.rendered}</h1>
						<p className="mt-4 text-lg text-gray-200">{article.acf.descr}</p>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto -mt-24 relative z-30 md:px-5 pb-12">
				<div className="rounded-xl bg-white dark:bg-zinc-900 shadow-xl p-4 md:p-9 flex flex-col gap-12 lg:grid grid-cols-10 lg:gap-7 relative">
					<div className="col-span-7">
						<div className="flex items-center justify-between gap-4">
							<div>
								<div className="text-black dark:text-white font-medium">{formattedDate}</div>
							</div>
							<div>
								<Button
									color="default"
									variant="light"
									size="md"
									className="min-w-0 text-black w-10 h-10 p-0 dark:text-white"
								>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
									</svg>
								</Button>
							</div>
						</div>
						<div className="prose blog-content text-gray-700 dark:text-gray-300 mt-8" dangerouslySetInnerHTML={markup}></div>
					</div>
					<div className="col-span-3">
						<div className="sticky rounded-md top-0">
							<div className="">
								<p className="uppercase text-sm font-bold">Узнай о новостях первым!</p>
								<p className="mt-2 text-gray-500 text-sm">Время от времени участники нашей команды обретают новый опыт и желают поделиться с остальными. Стань первым среди слушателей!</p>
								<Button
									color="primary"
									variant="solid"
									size="md"
									className="w-full mt-4"
								>
									Подписаться
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}
export default BPDetail;
