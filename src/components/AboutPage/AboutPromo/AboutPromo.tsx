'use client'
import { Link, Button } from "@nextui-org/react";
const AboutPromo = () => {
	return (
		<div className="relative bg-white flex items-center dark:bg-black min-h-[50vh] md:min-h-[60vh] overflow-hidden">
			<div className="absolute z-0 top-0 left-0 right-0 bottom-0 overflow-hidden blur-[50px] sm:blur-[100px] select-none pointer-events-none" role="region">
				<div className="grad grad-1"></div>
				<div className="grad grad-2"></div>
				<div className="grad grad-3"></div>
			</div>
			<div className="relative max-w-7xl mx-auto py-24 z-10 px-5">
				<div className="text-center">
					<h1 className="text-4xl xs:text-5xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-7xl">
						Наша команда и история
					</h1>
					<p className="mx-auto mt-6 max-w-md text-lg text-gray-800 dark:text-white sm:text-lg md:mt-8 md:max-w-3xl md:text-2xl">
						Мы - команда экспертов в IT сфере, с фокусом на создание потрясающих и инновационных решений
					</p>
					<div className="mx-auto mt-8 flex-col sm:flex-row flex justify-center gap-3 sm:gap-5 md:mt-12">
						<Button
							variant="flat"
							size="md"
							className="text-base font-medium bg-white dark:bg-black"
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
							</svg>
							Узнать больше
						</Button>
						<Button
							href="/contacts"
							as={Link}
							color="primary"
							size="md"
							className="text-base font-medium"
						>
							Связаться с нами
						</Button>
					</div>
				</div>
			</div>
			<div className="blob"></div>
		</div>
	)
}
export default AboutPromo;
