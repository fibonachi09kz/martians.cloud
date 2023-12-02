'use client'
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {ArrowSmallRightIcon, GlobeAltIcon} from "@heroicons/react/24/outline";
import logoSample from './media/logo-sample.svg';

const people = [
	{ name: 'Все' },
	{ name: 'Магазины' },
	{ name: 'Ремонт' },
	{ name: 'Автомобили' },
	{ name: 'Развлекательные' },
	{ name: 'Медицина' },
	{ name: 'Спорт' },
]
const Projects = () => {

	const [selected, setSelected] = useState(people[0])

	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Наши проекты</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Просмотрите наши вдохновляющие веб-проекты</p>
					</div>
				</div>
				<div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<label className="block text-sm text-black dark:text-white mb-1">
						Категория
					</label>
					<Listbox value={selected} onChange={setSelected}>
						<div className="relative z-10">
							<Listbox.Button className="relative cursor-pointer w-full max-w-[250px] shadow-sm border border-gray-300 rounded-xl bg-white hover:bg-gray-50 py-2 pl-3 pr-10 text-left sm:text-sm dark:bg-black dark:border-white/20 dark:hover:bg-neutral-900">
								<span className="block truncate">{selected.name}</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<ChevronUpDownIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</span>
							</Listbox.Button>
							<Transition
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="absolute max-w-[250px] mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-gray-300 focus:outline-none sm:text-sm dark:bg-black dark:shadow-black dark:ring-white/20">
									{people.map((person, personIdx) => (
										<Listbox.Option
											key={personIdx}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
													active ? 'bg-gray-100 dark:bg-neutral-800' : 'text-gray-600'
												}`
											}
											value={person}
										>
											{({ selected }) => (
												<>
													<span
														className={`block truncate text-gray-600 dark:text-gray-400 ${
															selected ? 'font-medium text-gray-900 dark:text-white' : 'font-normal'
														}`}
													>
													{person.name}
													</span>
													{selected ? (
														<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-mainBlue">
															<CheckIcon className="h-5 w-5" aria-hidden="true" />
														</span>
													) : null}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</Listbox>
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
