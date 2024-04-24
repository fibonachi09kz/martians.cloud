'use client'
import Link from "next/link";
import Image from "next/image";
import {useState} from 'react'
import {ArrowSmallRightIcon, GlobeAltIcon} from "@heroicons/react/24/outline";
import logoSample from './media/logo-sample.svg';
import {Tab, Tabs} from "@nextui-org/react";

const Projects = () => {

	const [selectedCategory, setSelectedCategory] = useState<any>('sites');

	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20 relative">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Наши проекты</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Просмотрите наши вдохновляющие проекты</p>
					</div>
				</div>
				<div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sticky top-20 z-100">
					<div className="overflow-auto">
						<Tabs
							variant="solid"
							color="primary"
							size="md"
							aria-label="Tabs variants"
							selectedKey={selectedCategory}
							onSelectionChange={setSelectedCategory}
							classNames={{
								base: 'min-w-full',
								tabList: 'w-full',
								tabContent: 'text-black dark:text-white'
							}}
						>
							<Tab key="sites" title="Сайты" />
							<Tab key="mobile" title="Мобильные приложения" />
							<Tab key="ai" title="Интеграция нейросетей" />
							<Tab key="context" title="Контекстная реклама" />
							<Tab key="design" title="Индивидуальная дизайн" />
							<Tab key="support" title="Техническая поддержка" />
						</Tabs>
					</div>
				</div>
				<div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						<Link href="" className="group flex flex-col transition-all overflow-hidden bg-gray-50 border rounded-xl shadow-sm hover:shadow-xl active:shadow-sm dark:bg-neutral-900 dark:border-white/20">
							<div className="h-32 flex items-center justify-center px-4">
								<Image src={logoSample} className="h-1/3 w-auto filter dark:invert" width={216} height={44} alt="Logo" />
							</div>
							<div className="flex-1 flex flex-col bg-white rounded-t-xl px-4 py-5 dark:bg-black">
								<h2 className="sr-only">Тестовый проект</h2>
								<p className="text-lg text-gray-900 mb-12 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<div className="flex gap-5 mt-auto justify-between">
									<div className="flex gap-2 items-center">
										<GlobeAltIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
										<p className="text-gray-900 dark:text-gray-200">martians.cloud</p>
									</div>
									<div className="transition-all rounded-full border border-300 dark:border-white/30 h-10 w-10 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:dark:bg-white group-hover:dark:border-white">
										<ArrowSmallRightIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-white group-hover:dark:text-black" />
									</div>
								</div>
							</div>
						</Link>
						<Link href="" className="group flex flex-col transition-all overflow-hidden bg-gray-50 border rounded-xl shadow-sm hover:shadow-xl active:shadow-sm dark:bg-neutral-900 dark:border-white/20">
							<div className="h-32 flex items-center justify-center px-4">
								<Image src={logoSample} className="h-1/3 w-auto filter dark:invert" width={216} height={44} alt="Logo" />
							</div>
							<div className="flex-1 flex flex-col bg-white rounded-t-xl px-4 py-5 dark:bg-black">
								<h2 className="sr-only">Тестовый проект</h2>
								<p className="text-lg text-gray-900 mb-12 dark:text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								<div className="flex gap-5 mt-auto justify-between">
									<div className="flex gap-2 items-center">
										<GlobeAltIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
										<p className="text-gray-900 dark:text-gray-200">martians.cloud</p>
									</div>
									<div className="transition-all rounded-full border border-300 dark:border-white/30 h-10 w-10 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:dark:bg-white group-hover:dark:border-white">
										<ArrowSmallRightIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-white group-hover:dark:text-black" />
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;
