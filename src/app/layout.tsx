import './globals.css'
import React from "react";
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from "@/providers/theme";
import {Providers} from "@/app/providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
	subsets: ['cyrillic'],
	display: "auto"
})


export const metadata = {
	metadataBase: new URL('https://martians.cloud'),
	title: 'Главная | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<ThemeProviderWrapper>
					<Providers>
						{children}
					</Providers>
				</ThemeProviderWrapper>
			</body>
            <SpeedInsights />
			<Analytics />
		</html>
	)
}
