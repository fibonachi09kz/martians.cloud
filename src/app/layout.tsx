import './globals.css'
import React from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	display: "auto"
})


export const metadata = {
	title: 'Martians | Web-студия разработки сайтов в Казахстане',
	description: 'Web-студия разработки сайтов в Казахстане',
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} min-h-screen flex flex-col`}>{children}</body>
		</html>
	)
}
