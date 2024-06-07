'use client'
import React from "react";
import {usePathname} from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieBar from "@/components/UI/CookieBar";


type PropsType = {
	children: React.ReactNode
}
const Layout = ({ children }: PropsType) => {
	const pathName = usePathname();

	return (
		<div className="isolate flex-grow bg-white dark:bg-black flex-1 flex flex-col pt-[61px] overflow-x-hidden">
			<Header />
			<main className="flex-1 flex flex-col">
				{children}
			</main>
			<CookieBar />
			<Footer />
		</div>
	)
}

export default Layout;
