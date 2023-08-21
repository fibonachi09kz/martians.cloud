import './globals.css'
import React from "react";
import { Montserrat, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import {ThemeContextProvider} from "@/contexts/theme";

const inter = Inter({
	subsets: ['cyrillic'],
	display: "auto"
})


export const metadata = {
	title: 'Martians | Web-студия разработки сайтов',
	description: 'Web-студия разработки сайтов',
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
	return (
		<ThemeContextProvider>
			<html lang="en">
				<body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
				<Analytics />
			</html>
		</ThemeContextProvider>
	)
}
