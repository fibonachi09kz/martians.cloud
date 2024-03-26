'use client'
import React from "react";
import {usePathname} from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


type PropsType = {
	children: React.ReactNode
}
const Layout = ({ children }: PropsType) => {
	const pathName = usePathname();

	return (
		<div className="isolate flex-grow bg-white dark:bg-black flex-1 flex flex-col pt-[65px] overflow-x-hidden">
			<Header />
			<main className="flex-1 flex flex-col">
				{children}
			</main>
			<div
				className="pointer-events-none fixed inset-x-0 bottom-0 w-full px-2 pb-2 sm:flex sm:justify-center sm:px-4 sm:pb-4 lg:px-8">
				<div
					className="pointer-events-auto flex items-center gap-x-3 rounded-large border-1 border-divider bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-6 py-2 sm:px-3.5">
					<div className="flex w-full items-center gap-x-3">
						<p className="text-small text-foreground">
							<a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-inherit" role="link" href="#">The Winter 2024 Release is here: new editor, analytics API, and so much more.&nbsp;</a>
						</p>
						<a className="tap-highlight-transparent no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-4 min-w-unit-20 gap-unit-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none border-default text-foreground data-[hover=true]:opacity-hover group relative h-9 overflow-hidden bg-transparent text-small font-normal" role="button" href="#">Explore
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</a>
					</div>
					<div className="flex flex-1 justify-end">
						<button
							className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny gap-unit-2 rounded-small px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40 min-w-unit-8 w-unit-8 h-unit-8 -m-1"
							type="button" aria-label="Close Banner">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Layout;
