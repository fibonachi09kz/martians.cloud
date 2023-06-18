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
		<div className="isolate bg-white flex-1 flex flex-col pt-[81px]">
			<Header />

			<Footer />
		</div>
	)
}

export default Layout;
