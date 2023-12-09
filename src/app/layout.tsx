import './globals.css'
import React from "react";
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from "@/providers/theme";
import {NextUIProvider} from "@nextui-org/react";
import {Providers} from "@/app/providers";

const inter = Inter({
	subsets: ['cyrillic'],
	display: "auto"
})


export const metadata = {
	metadataBase: new URL('https://martians.kz'),
	title: 'Главная | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProviderWrapper>
					<Providers>
						{children}
					</Providers>
				</ThemeProviderWrapper>
			</body>
			<Analytics />
		</html>
	)
}
