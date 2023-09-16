'use client';
import {MutableRefObject, useLayoutEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {StepsType} from "@/types/StepsTypes";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	steps: StepsType
}

const Steps = ({ steps }: Props) => {

	const root: MutableRefObject<null> = useRef(null);
	const wrapper: MutableRefObject<null> = useRef(null);
	const flyLine: MutableRefObject<null> = useRef(null);

	useLayoutEffect(() => {

		let ctx = gsap.context(() => {

			gsap.to(flyLine.current, {
				height: '100%',
				ease: 'none',
				scrollTrigger: {
					trigger: wrapper.current,
					scrub: true,
					start: 'top center',
					end: 'bottom center',
				},
			});

			const points = document.querySelectorAll('.scroll-point');
			if (points) {
				points.forEach((point) => {
					ScrollTrigger.create({
						trigger: point,
						onEnter: function (self) {
							self.trigger?.querySelector('.num')?.classList.add('!bg-mainBlue');
							self.trigger?.querySelector('.dot')?.classList.add('!border-mainBlue');
						},
						onEnterBack: function (self) {
							self.trigger?.querySelector('.num')?.classList.remove('!bg-mainBlue');
							self.trigger?.querySelector('.dot')?.classList.remove('!border-mainBlue');
						},
						start: '20px center',
						end: "20px center",
					});
				})
			}


		}, root);

		return () => ctx.revert();

	}, []);


	return (
		<div className="relative bg-white dark:bg-black py-16 sm:py-24 lg:py-32" ref={root}>
			<div className="mx-auto max-w-xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Процесс разработки лендинга</h2>
						<p className="mt-4 text-xl text-gray-500 dark:text-gray-400">Изучите наш подход к разработке вашего проекта</p>
					</div>
				</div>
				<div className="relative mt-12" ref={wrapper}>
					<div className="hidden md:block absolute h-full left-1/2 -translate-x-1/2 top-0">
						<hr className="h-full w-0.5 p-0 border border-dashed border-gray-500" />
						<span className="absolute w-0.5 -translate-x-1/2 top-0 bg-mainBlue" ref={flyLine}>
							<span className="absolute -translate-x-1/2 left-1/2 bottom-0 w-3 h-3 border-2 border-mainBlue rounded-full bg-white dark:bg-black block"></span>
						</span>
					</div>
					{steps.map(( {id, title, text}, index ) => {
						if (index % 2 === 1) {
							return (
								<div key={id} className="md:grid grid-cols-[1fr_110px_1fr] items-start w-full max-w-7xl mx-auto text-white text-left mb-8 scroll-point">
									<div className=""></div>
									<div className="hidden mt-[7px] md:block mx-auto w-3 h-3 z-10 rounded-[20px] border-2 border-solid border-gray-500 bg-white dark:bg-black dot"></div>
									<dd className="">
										<span className="flex justify-center items-center w-7 px-[11px] h-7 mb-[10px] font-semibold text-sm leading-7 text-center rounded-md bg-gray-800 num">{id}</span>
										<h3 className="font-medium text-xl leading-[150%] text-gray-800 dark:text-gray-200 mb-[10px]">{title}</h3>
										<div className="font-normal text-base leading-[160%] text-gray-500 dark:text-gray-400">{text()}</div>
									</dd>
								</div>
							)
						} else {
							return (
								<div key={id} className="md:grid grid-cols-[1fr_110px_1fr] items-start w-full max-w-7xl mx-auto text-white text-left md:text-right mb-8 scroll-point">
									<dd className="">
										<span className="flex justify-center items-center w-7 px-[11px] h-7 mb-[10px] font-semibold text-sm leading-7 text-center rounded-md bg-gray-800 md:ml-auto num">{id}</span>
										<h3 className="font-medium text-xl leading-[150%] text-gray-800 dark:text-gray-200 mb-[10px]">{title}</h3>
										<div className="font-normal text-base leading-[160%] text-gray-500 dark:text-gray-400">{text()}</div>
									</dd>
									<div className="hidden mt-[7px] md:block mx-auto w-3 h-3 z-10 rounded-[20px] border-2 border-solid border-gray-500 bg-white dark:bg-black dot"></div>
									<div className=""></div>
								</div>
							)
						}
					})}


				</div>
			</div>
		</div>
	)
}
export default Steps;
