'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { ArrowSmallRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Skeleton, Tab, Tabs } from "@nextui-org/react";
import { API_ENDPOINTS } from "@/constants/API";
import { Project } from "@/types/Project";
import { Card } from "@nextui-org/card";
import {IProjectCategory} from "@/types/ProjectCategory";

interface IProjectsProps {
	initialProjects: Project[]
}

const Projects = ({ initialProjects }: IProjectsProps) => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState<any>();
	const [projects, setProjects] = useState<Project[]>(initialProjects);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const res = await fetch(`${API_ENDPOINTS.PROJECTS}?&acf&acf_format=standard&per_page=100&project-categories=${selectedCategory}`);
				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await res.json();
				setProjects(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, [selectedCategory]);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const res = await fetch(`${API_ENDPOINTS.PROJECTS_CATEGORIES}`);
				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await res.json();
				console.log(data)
				setCategories(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20 relative">
				<div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Наши проекты</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Просмотрите наши вдохновляющие проекты</p>
					</div>
				</div>
				<div className="mt-8 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 sticky top-20 z-100">
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
							{categories.sort((a: IProjectCategory, b: IProjectCategory) => a.id - b.id).map((category: IProjectCategory) => (
								<Tab key={category.id} title={category.name} />
							))}
						</Tabs>
					</div>
				</div>
				<div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{isLoading ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
							{[1, 2, 3].map((_, index) => (
								<Card key={index} className="space-y-5 p-4 " radius="lg">
									<Skeleton className="rounded-lg">
										<div className="h-24 rounded-lg bg-default-300"></div>
									</Skeleton>
									<div className="space-y-3">
										<Skeleton className="w-3/5 rounded-lg">
											<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
										</Skeleton>
										<Skeleton className="w-4/5 rounded-lg">
											<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
										</Skeleton>
										<Skeleton className="w-2/5 rounded-lg">
											<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
										</Skeleton>
									</div>
								</Card>
							))}
						</div>
					) : projects.length === 0 ? (
						<p className="text-center my-24 font-bold text-2xl text-black dark:text-white">Проектов не найдено</p>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
							{projects.map(project => (
								<Link key={project.id} href={`/projects/${project.slug}`} className="group flex flex-col transition-all overflow-hidden bg-gray-50 border rounded-xl shadow-sm hover:shadow-xl active:shadow-sm dark:bg-neutral-900 dark:border-white/20">
									<div className="h-32 flex items-center justify-center px-4">
										<Image src={project.acf['main-img'].url} className="h-1/3 w-auto filter dark:invert" width={216} height={44} alt="Logo" />
									</div>
									<div className="flex-1 flex flex-col bg-white rounded-t-xl px-4 py-5 dark:bg-black">
										<h2 className="sr-only">{project.title.rendered}</h2>
										<p className="text-lg text-gray-900 mb-12 dark:text-gray-200">{project.acf['small-descr']}</p>
										<div className="flex gap-5 mt-auto justify-between">
											<div className="flex gap-2 items-center">
												<GlobeAltIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
												<p className="text-gray-900 dark:text-gray-200">{project.acf.domain ? project.acf.domain : 'У проекта нет ссылки'}</p>
											</div>
											<div className="transition-all rounded-full border border-300 dark:border-white/30 h-10 w-10 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:dark:bg-white group-hover:dark:border-white">
												<ArrowSmallRightIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-white group-hover:dark:text-black" />
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Projects;
