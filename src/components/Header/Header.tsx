'use client'
import { useState} from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import Link from "next/link";
import { navigation } from "@/data/navigation";
import {NavigationItem} from "@/types/NavigationTypes";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";
import Logo from "@/components/Logo/Logo";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher";
import {Button} from "@nextui-org/react";

const Header = () => {

	const pathname = usePathname();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="w-full fixed bg-white/80 dark:bg-black/80 top-0 left-0 backdrop-blur z-50 border-b border-gray-200 dark:border-white/20">
			<div className="w-full max-w-7xl mx-auto px-5">
				<nav className="flex items-center justify-between py-2" aria-label="Global">
					<div className="flex xl:flex-1 items-center gap-3 mr-3">
						<Logo withTitle={false} isDark={false} />
						{/*<p className="text-sm text-gray-300 leading-4.5">Development Studio</p>*/}
					</div>
					<div className="flex xl:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 dark:text-gray-300"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
						<Button color="primary">
							Button
						</Button>
					</div>
					<div className="hidden xl:flex lg:gap-x-12">
						{navigation.map((item: NavigationItem) => {
							const isActive = pathname === item.href
							return (
								<Link key={item.name} href={item.href} className={`text-base px-4 py-1 text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white font-normal transition-all leading-6 rounded-xl ${isActive ? 'bg-gray-200/60 dark:bg-gray-800/80 text-gray-900 dark:!text-white' : ''}`}>
									{item.name}
								</Link>
							)
						})}
					</div>
					<div className="hidden xl:flex xl:flex-1 xl:justify-end">
						<Link href="#" className="button button-blue">
							<RocketLaunchIcon className="h-5 w-5 text-white transition-all" aria-hidden="true"  />
							Заказать
						</Link>
					</div>
					<div className="ml-4 hidden xl:block">
						<ThemeSwitcher />
					</div>

				</nav>
				<Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-black px-5 py-2 xl:hidden">
						<div className="flex items-center justify-between">
							<Logo withTitle={true} isDark={false} />
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-800 dark:text-gray-300"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6">
								<div className="space-y-2 py-6">
									{navigation.map((item: NavigationItem) => {
										const isActive = pathname === item.href
										return (
											<Link
												key={item.name}
												href={item.href}
												className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-800/60 ${isActive ? 'text-mainBlue' : 'text-gray-900 dark:text-white'}`}
											>
												{item.name}
											</Link>
										)
									})}
								</div>
								<div className="pb-2 flex justify-center">
									<ThemeSwitcher />
								</div>

							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</div>
		</header>

	);
};

export default Header;
