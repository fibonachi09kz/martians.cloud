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
		<header className="w-full fixed bg-gray-900/80 top-0 left-0 backdrop-blur z-50 border-b border-gray-800 shadow-xl">
			<div className="w-full max-w-7xl mx-auto px-5">
				<nav className="flex items-center justify-between py-4" aria-label="Global">
					<div className="flex xl:flex-1 items-center gap-3 mr-3">
						<Logo withTitle={false} isDark={false} />
						<p className="text-sm text-gray-300 leading-4.5">Web-студия разработки сайтов в Казахстане</p>
					</div>
					<div className="flex xl:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden xl:flex lg:gap-x-12">
						{navigation.map((item: NavigationItem) => {
							const isActive = pathname === item.href
							return (
								<Link key={item.name} href={item.href} className={`text-base px-4 py-2 bg-transparent hover:bg-gray-400/10 hover:text-white transition-all leading-6 rounded-lg ${isActive ? 'text-mainBlue font-medium' : 'text-white font-normal'}`}>
									{item.name}
								</Link>
							)
						})}
					</div>
					<div className="hidden xl:flex xl:flex-1 xl:justify-end">
						<Link href="#" className="button button-blue">
							<RocketLaunchIcon className="h-5 w-5 text-white transition-all group-hover:text-black" aria-hidden="true"  />
							Заказать
						</Link>
					</div>
				</nav>
				<Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-5 py-4 xl:hidden">
						<div className="flex items-center justify-between">
							<Logo withTitle={true} isDark={false} />
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-300"
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
												className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10 ${isActive ? 'text-mainBlue' : 'text-white'}`}
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
										Заказать сайт
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
