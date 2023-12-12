'use client'
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import HPGlobe from "@/components/HomePage/HPPromo/HPGlobe";
import {Button, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from "@nextui-org/shared-icons";
import HPPromoForm from "@/components/HomePage/HPPromo/HPPromoForm";

const HPPromo = () => {
	return (
		<div className="bg-white dark:bg-black pt-10 sm:pt-16 overflow-hidden lg:pt-8 lg:pb-14">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8">
					<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
						<div className="lg:py-24">
							<Link
								href="/about"
								className="inline-flex items-center border border-gray-300 dark:border-gray-800 rounded-full p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
							>
								<span className="rounded-full bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white">
								  	Martians.kz
								</span>
								<span className="ml-4 text-sm text-black dark:text-white">Подробнее о компании</span>
								<ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
							</Link>
							<h1 className="mt-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
								<span className="block">Разработка сайтов</span>
								<span className="block text-primary">по всему миру</span>
							</h1>
							<p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								Наша компания специализируется на создании современных, быстрых, а главное - индивидуальных сайтов
							</p>
							<div className="mt-10 sm:mt-12">
								<HPPromoForm />
							</div>
						</div>
					</div>
					<div className="mt-12 mb-0 lg:relative lg:m-0">
						<div className="max-w-full h-[300px] overflow-hidden relative border-b border-gray-300 dark:border-white/20 sm:border-0 sm:h-auto mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
							{/*<svg className="w-full h-auto lg:w-auto" width="764" height="690" viewBox="0 0 764 690" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
							{/*	<path opacity="0.07" d="M507.3 105.6C509.4 106.8 511.3 109.7 511.6 112.3L558.3 498.6C558.7 501.9 556.7 503.4 554 501.9L299.9 355.2C297.3 353.7 295.2 349.8 295.6 347L342.4 14.7C342.7 12.4 344.5 11.7 346.7 12.9L507.3 105.6Z" fill="url(#paint0_linear_291_5495)"/>*/}
							{/*	<path opacity="0.4" d="M441.6 111.1C441.6 70.5 417.8 23.8 388.5 6.80001C359.2 -10.1 335.4 9.10002 335.4 49.7L346.9 56.3V56.2C346.9 24.3 365.6 9.20002 388.6 22.5C411.6 35.8 430.3 72.5 430.3 104.4V104.5L441.6 111.1Z" fill="url(#paint1_linear_291_5495)"/>*/}
							{/*	<path opacity="0.4" d="M473.1 133.6C472.8 131 471 128.1 468.8 126.9L308.1 34.1C306 32.9 304.1 33.6 303.8 35.9L257 368.2C256.6 371 258.6 374.9 261.3 376.4L515.5 523.1C518.1 524.6 520.2 523.1 519.8 519.8L473.1 133.6Z" fill="url(#paint2_linear_291_5495)"/>*/}


							{/*	<g className="group">*/}
							{/*		<path className="group-hover:fill-gray-100 transition-all" opacity="0.3" d="M329.5 184.4L31.8999 12.6001L31.9999 167.7L303.3 324.3L329.6 363.2L329.5 184.4Z" fill="url(#paint3_linear_291_5495)"/>*/}
							{/*		<path d="M0.200195 73.1V31L112.5 95.8V137.9L0.200195 73.1Z" fill="#0064de"/>*/}
							{/*		<path className="group-hover:-translate-x-1 group-hover:translate-y-[3px] group-hover:fill-mainBlue group-hover:opacity-80 transition-all" opacity="0.15" d="M253 178L187.8 140.4V154L253 191.6V178Z" fill="white"/>*/}
							{/*		<path className="group-hover:-translate-x-2 group-hover:translate-y-[5px] group-hover:fill-green-500 group-hover:opacity-80 transition-all" opacity="0.15" d="M253 205.2L127.3 132.7V146.3L253 218.9V205.2Z" fill="white"/>*/}
							{/*		<path className="group-hover:-translate-x-3 group-hover:translate-y-[7px] group-hover:fill-red-500 group-hover:opacity-80 transition-all" opacity="0.15" d="M253 232.5L100.7 144.6V158.2L253 246.1V232.5Z" fill="white"/>*/}
							{/*		<path d="M269 201.4C269 214.2 276.6 228.9 285.9 234.3C295.2 239.7 302.8 233.7 302.8 220.9C302.8 208.1 295.2 193.4 285.9 188C276.6 182.6 269 188.6 269 201.4Z" fill="#0064de"/>*/}
							{/*	</g>*/}




							{/*	<g className="group">*/}
							{/*		<path className="group-hover:fill-gray-100 transition-all" opacity="0.3" d="M364.2 362.3L661.7 534L661.8 689.1L390.5 532.5L364.3 541.1L364.2 362.3Z" fill="url(#paint4_linear_291_5495)"/>*/}
							{/*		<path d="M575.2 561.4V519.3L687.5 584.1V626.2L575.2 561.4Z" fill="#07f"/>*/}
							{/*		<path className="group-hover:-translate-x-1 group-hover:translate-y-[3px] group-hover:fill-mainBlue group-hover:opacity-80 transition-all" opacity="0.15" d="M440.7 444.2L505.9 481.8V495.4L440.7 457.8V444.2Z" fill="white"/>*/}
							{/*		<path className="group-hover:-translate-x-2 group-hover:translate-y-[5px] group-hover:fill-red-500 group-hover:opacity-80 transition-all" opacity="0.15" d="M440.7 471.5L558.4 539.4V553L440.7 485.1V471.5Z" fill="white"/>*/}
							{/*		<path className="group-hover:-translate-x-3 group-hover:translate-y-[7px] group-hover:fill-green-500 group-hover:opacity-80 transition-all" opacity="0.15" d="M440.7 498.7L593 586.6V600.2L440.7 512.3V498.7Z" fill="white"/>*/}
							{/*		<path d="M424.6 449.1C424.6 461.9 417 467.9 407.7 462.5C398.4 457.1 390.8 442.4 390.8 429.6C390.8 416.8 398.4 410.8 407.7 416.2C417.1 421.6 424.6 436.4 424.6 449.1Z" fill="#07f"/>*/}
							{/*	</g>*/}


							{/*	<g className="group">*/}
							{/*		<path className="group-hover:fill-gray-100 transition-all" opacity="0.2" d="M52.2002 321.7L256 439.3V331.9L52.2002 214.3V321.7Z" fill="url(#paint5_linear_291_5495)"/>*/}
							{/*		<path d="M214.5 341.3C214.5 332.4 219.7 328.3 226.1 331.9C232.5 335.6 237.7 345.8 237.7 354.6C237.7 363.5 232.5 367.6 226.1 364C219.7 360.3 214.5 350.2 214.5 341.3Z" fill="#0064de"/>*/}
							{/*		<path className="group-hover:-translate-x-2 group-hover:translate-y-[5px] group-hover:fill-mainBlue group-hover:opacity-80 transition-all" opacity="0.15" d="M204.1 369.8L73.1001 294.2V280.6L204.1 356.2V369.8Z" fill="white"/>*/}
							{/*		<path className="group-hover:-translate-x-1 group-hover:translate-y-[3px] group-hover:fill-green-500 group-hover:opacity-80 transition-all" opacity="0.15" d="M203.7 341.9L144.1 307.5V293.9L203.7 328.3V341.9Z" fill="white"/>*/}
							{/*	</g>*/}




							{/*	<g className="group">*/}
							{/*		<path className="group-hover:fill-gray-100 transition-all" opacity="0.2" d="M763.9 464.9L560.2 347.3V454.7L764 572.3L763.9 464.9Z" fill="url(#paint6_linear_291_5495)"/>*/}
							{/*		<path className="group-hover:-translate-x-1 group-hover:translate-y-[3px] group-hover:fill-mainBlue group-hover:opacity-80 transition-all" opacity="0.15" d="M612 403.8L662 432.7V446.3L612 417.4V403.8Z" fill="white"/>*/}
							{/*		<path className="group-hover:-translate-x-2 group-hover:translate-y-[5px] group-hover:fill-red-500 group-hover:opacity-80 transition-all" opacity="0.15" d="M612.4 430.7L719.9 492.8V506.4L612.4 444.3V430.7Z" fill="white"/>*/}
							{/*		<path d="M601.6 405.7C601.6 414.6 596.4 418.7 590 415.1C583.6 411.4 578.4 401.2 578.4 392.4C578.4 383.5 583.6 379.4 590 383C596.4 386.6 601.6 396.8 601.6 405.7Z" fill="#07f"/>*/}
							{/*	</g>*/}



							{/*	<path className="hover:fill-red-500 hover:opacity-80 hover:translate-y-[-10px] transition-all" opacity="0.2" d="M243.9 587.3C176.3 500.5 225.2 469.3 243.9 520.1C262.7 491 311.6 578.6 243.9 587.3Z" fill="url(#paint7_linear_291_5495)"/>*/}
							{/*	<path className="hover:fill-gray-100 hover:opacity-80 hover:translate-y-[-10px] transition-all" opacity="0.2" d="M621 183.4C627 186.8 631.8 195.2 631.8 202.1V232.6L652 244.2C658 247.6 662.8 256 662.8 263C662.8 269.9 658 272.7 652 269.3L631.8 257.7V288.2C631.8 295.1 627 297.9 621 294.5C615 291.1 610.2 282.7 610.2 275.7V245.2L590 233.5C584 230.1 579.2 221.7 579.2 214.8C579.2 207.9 584 205.1 590 208.5L610.2 220.1V189.6C610.2 182.7 615 179.9 621 183.4Z" fill="url(#paint8_linear_291_5495)"/>*/}
							{/*	<defs>*/}
							{/*		<linearGradient id="paint0_linear_291_5495" x1="568.941" y1="209.117" x2="305.434" y2="316.397" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint1_linear_291_5495" x1="413.822" y1="42.9682" x2="243.13" y2="197.634" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint2_linear_291_5495" x1="530.152" y1="171.353" x2="359.46" y2="326.018" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint3_linear_291_5495" x1="264.588" y1="122.257" x2="110.938" y2="242.561" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint4_linear_291_5495" x1="492.009" y1="367.297" x2="530.48" y2="679.328" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint5_linear_291_5495" x1="130.843" y1="367.092" x2="177.357" y2="286.507" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white" stopOpacity="0"/>*/}
							{/*			<stop offset="1" stopColor="white"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint6_linear_291_5495" x1="685.343" y1="419.532" x2="638.843" y2="500.093" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint7_linear_291_5495" x1="258.139" y1="523.387" x2="208.301" y2="566.537" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*		<linearGradient id="paint8_linear_291_5495" x1="641.925" y1="222.391" x2="589.568" y2="263.711" gradientUnits="userSpaceOnUse">*/}
							{/*			<stop stopColor="white"/>*/}
							{/*			<stop offset="1" stopColor="white" stopOpacity="0"/>*/}
							{/*		</linearGradient>*/}
							{/*	</defs>*/}
							{/*</svg>*/}
							<HPGlobe />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HPPromo;
