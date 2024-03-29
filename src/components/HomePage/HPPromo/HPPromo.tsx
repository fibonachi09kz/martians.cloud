'use client'
import {Button, Checkbox, Input, Link} from "@nextui-org/react";
import Image from "next/image";

import googleCloudImg from './img/google-cloud.png';
import awsImg from './img/aws.png';
import yandexImg from './img/yandex.png';

const HPPromo = () => {
	return (
		<section className="bg-white dark:bg-black">
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
				<Link href="/about" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-12 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
					<span className="text-sm bg-primary rounded-full text-white px-4 py-1 mr-3">Martians.cloud</span>
					<span className="text-sm font-medium">Подробнее о компании</span>
					<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
					</svg>
				</Link>
				<h1 className="mb-6 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Разработка IT решений</h1>
				<p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Martians - место, где каждая идея становится потрясающим онлайн-проектом. Доверьте нам ваш проект, и мы превратим мечту в цифровую реальность.</p>
				<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
					<Button
						href="/services"
						as={Link}
						color="primary"
						size="md"
						className="text-base font-medium"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
						</svg>
						Наши услуги
					</Button>
					<Button
						href="/technologies"
						as={Link}
						color="primary"
						variant="flat"
						size="md"
						className="text-base font-medium"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
						</svg>
						Технологии
					</Button>
				</div>
				<div className="px-4 mx-auto text-center max-w-4xl w-full">
					<span className="font-semibold text-gray-400 uppercase">Мы партнёры</span>
					<div className="mx-auto max-w-[250px] sm:max-w-none grid grid-cols-1 sm:grid-cols-3 mt-8 text-gray-500 gap-10">
						<a href="https://cloud.google.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-12 grayscale hover:grayscale-0 transition-all">
							<Image src={googleCloudImg} quality={100} className="h-full w-full object-contain" alt="Google Cloud" />
						</a>
						<a href="https://aws.amazon.com" target="_blank" rel="noreferrer" className="flex justify-center items-center h-12 grayscale hover:grayscale-0 transition-all">
							<Image src={awsImg} quality={100} className="h-full w-full object-contain" alt="AWS" />
						</a>
						<a href="https://cloud.google.com/" target="_blank" rel="noreferrer" className="flex justify-center items-center h-12 grayscale hover:grayscale-0 transition-all">
							<Image src={yandexImg} quality={100} className="h-full w-full object-contain" alt="Yandex Cloud" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HPPromo;
