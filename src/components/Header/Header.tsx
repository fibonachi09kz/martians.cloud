import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import Link from "next/link";
import { navigation } from "@/data/navigation";
import {NavigationItem} from "@/types/NavigationTypes";

const Header = () => {

	const pathname = usePathname();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="w-full fixed top-0 left-0 backdrop-blur z-50 border-b border-gray-200">
			<div className="w-full max-w-7xl mx-auto px-5">
				<nav className="flex items-center justify-between py-4" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Fibonachi</span>
							<svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" width="2000" height="2000" viewBox="0 0 2000 2000" fill="none">
								<mask id="mask0_1_2" maskUnits="userSpaceOnUse" x="257" y="129" width="1486" height="1742">
									<path d="M257.37 129.714H1742.49V1870.68H257.37V129.714Z" fill="white"/>
								</mask>
								<g mask="url(#mask0_1_2)">
									<path d="M1446.86 1374.72C1363.57 1487.33 1255.01 1599.92 1124.2 1709.4C1052.19 1769.65 947.677 1769.65 875.667 1709.4C744.859 1599.92 636.297 1487.33 553.005 1374.72C382.146 1143.74 330.146 885.464 410.344 666.073C499.484 422.214 741.896 249.432 999.927 245.792C1257.97 249.432 1500.37 422.214 1589.51 666.073C1669.72 885.464 1617.72 1143.74 1446.86 1374.72ZM1001.17 129.75C1000.77 129.724 1000.34 129.714 999.938 129.74C999.526 129.75 999.109 129.74 998.698 129.75C693.474 133.885 406.724 338.031 301.391 626.224C207.552 882.875 265.271 1180.86 459.745 1443.73C548.484 1563.72 663.38 1683.05 801.219 1798.4C858.797 1846.59 929.359 1870.69 999.938 1870.68C1070.51 1870.68 1141.1 1846.59 1198.66 1798.4C1336.5 1683.05 1451.38 1563.72 1540.14 1443.73C1734.6 1180.85 1792.32 882.875 1698.49 626.224C1593.14 338.031 1306.41 133.885 1001.17 129.75Z" fill="#0077FF"/>
								</g>
								<path id="leftEye" d="M827.018 869.681C757.676 808.713 668.694 778.522 576.638 784.819L536.548 787.535C512.178 789.178 493.583 810.338 495.085 834.731L498.054 883.195C503.335 969.272 541.9 1048.03 606.67 1104.95C665.848 1156.97 740.284 1184.97 818.316 1184.97C825.674 1184.97 833.079 1184.71 840.491 1184.2L903.436 1179.93C927.806 1178.28 946.402 1157.12 944.917 1132.75L943.344 1107.14C937.67 1014.97 896.377 930.643 827.018 869.681Z" fill="#0077FF"/>
								<path id="rightEye" d="M1464.82 787.538L1424.69 784.819C1332.43 778.517 1243.48 808.747 1174.08 869.76C1104.67 930.767 1063.33 1015.18 1057.66 1107.43L1056.08 1133.07C1054.59 1157.47 1073.21 1178.65 1097.59 1180.29L1160.61 1184.58C1168.03 1185.07 1175.42 1185.33 1182.79 1185.33C1260.89 1185.33 1335.41 1157.32 1394.63 1105.25C1459.47 1048.28 1498.08 969.444 1503.36 883.304L1506.34 834.761C1507.84 810.363 1489.21 789.183 1464.82 787.538Z" fill="#0077FF"/>
							</svg>
						</Link>
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
					<div className="hidden lg:flex lg:gap-x-16">
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
						<Link href="#" className="rounded-lg flex gap-2 items-center border border-gray-500 px-3.5 py-1.5 text-base leading-7 text-white shadow-sm transition-all hover:bg-white hover:text-black hover:border-white group hover:shadow-md hover:shadow-cyan-500 hover:-translate-y-[1px] active:translate-y-0 active:shadow-none">
							<LightBulbIcon className="h-5 w-5 text-white transition-all group-hover:text-black" aria-hidden="true" />
							Hire me!
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
