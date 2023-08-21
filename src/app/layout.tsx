import './globals.css'
import React from "react";
import { Montserrat, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from "@/providers/theme";

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
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProviderWrapper>
					{children}
				</ThemeProviderWrapper>
			</body>
			<Analytics />
		</html>
	)
}
