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
			<Footer />
		</div>
	)
}

export default Layout;
