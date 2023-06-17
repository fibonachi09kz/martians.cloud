'use client'
import React from "react";
import {usePathname} from "next/navigation";
import Header from "@/components/Header/Header";


type PropsType = {
	children: React.ReactNode
}
const Layout = ({ children }: PropsType) => {
	const pathName = usePathname();

	return (
		<div className="isolate bg-background flex-1 flex flex-col">
			<Header />
		</div>
	)
}

export default Layout;
