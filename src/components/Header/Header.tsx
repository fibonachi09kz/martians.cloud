import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import Link from "next/link";
import { navigation } from "@/data/navigation";
import {NavigationItem} from "@/types/NavigationTypes";
import {RocketLaunchIcon} from "@heroicons/react/24/outline";
import Logo from "@/components/Logo/Logo";

const Header = () => {

	const pathname = usePathname();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="w-full fixed top-0 left-0 backdrop-blur z-50 border-b border-gray-200">
			<div className="w-full max-w-7xl mx-auto px-5">
				<nav className="flex items-center justify-between py-4" aria-label="Global">
					<div className="flex lg:flex-1 items-center gap-3 mr-3">
						<Logo withTitle={false} />
						<p className="text-sm text-gray-600 leading-5">Web-студия разработки сайтов в Казахстане</p>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item: NavigationItem) => {
							const isActive = pathname === item.href
							return (
								<Link key={item.name} href={item.href} className={`text-base px-4 py-2 border border-transparent transition-all leading-6 rounded-lg hover:border-gray-400 ${isActive ? 'text-mainBlue font-medium' : 'text-gray-900'}`}>
									{item.name}
								</Link>
							)
						})}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link href="#" className="button button-blue">
							<RocketLaunchIcon className="h-5 w-5 text-white transition-all group-hover:text-black" aria-hidden="true"  />
							Заказать
						</Link>
					</div>
				</nav>
				<Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-950 px-5 py-4 lg:hidden">
						<div className="flex items-center justify-between">
							<Link href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Fibonachi</span>
								<svg className="h-8" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0">
									<defs>
										<clipPath id="8e0a6ebe1f">
											<path d="M 56.015625 0 L 319 0 L 319 375 L 56.015625 375 Z M 56.015625 0 " clipRule="nonzero"/>
										</clipPath>
									</defs>
									<path fill="#ffffff" d="M 318.507812 210.9375 L 318.507812 140.625 L 189.464844 140.625 L 189.464844 210.9375 L 318.507812 210.9375 " fillOpacity="1" fillRule="nonzero"/>
									<g clipPath="url(#8e0a6ebe1f)"><path fill="#ffffff" d="M 56.511719 375 L 56.511719 0 L 318.507812 0 L 318.507812 70.3125 L 126.898438 70.3125 L 126.898438 375 L 56.511719 375 " fillOpacity="1" fillRule="nonzero"/></g>
								</svg>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-400"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/25">
								<div className="space-y-2 py-6">
									{navigation.map((item: NavigationItem) => {
										const isActive = pathname === item.href
										return (
											<Link
												key={item.name}
												href={item.href}
												className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10 ${isActive ? 'text-cyan-400' : 'text-white'}`}
											>
												{item.name}
											</Link>
										)
									})}
								</div>
								<div className="py-6">
									<Link
										href="#"
										className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
									>
										Hire me!
									</Link>
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
