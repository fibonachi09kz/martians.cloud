import './globals.css'
import React from "react";
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProviderWrapper } from "@/providers/theme";
import {Providers} from "@/app/providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const inter = Inter({
	subsets: ['cyrillic'],
	display: "auto"
})


export const metadata = {
	metadataBase: new URL('https://martians.cloud'),
	title: 'Главная | Web-студия Martians',
	description: 'Web-студия разработки сайтов',
}

const menuSchema = {
	"@context": "https://schema.org",
	"@type": "SiteNavigationElement",
	"name": "Главное меню",
	"url": "https://martians.cloud",
	"hasPart": [
		{
			"@type": "SiteNavigationElement",
			"name": "Главная",
			"url": "https://martians.cloud/home"
		},
		{
			"@type": "SiteNavigationElement",
			"name": "Услуги",
			"url": "https://martians.cloud/services"
		},
		{
			"@type": "SiteNavigationElement",
			"name": "Проекты",
			"url": "https://martians.cloud/projects"
		},
		{
			"@type": "SiteNavigationElement",
			"name": "Технологии",
			"url": "https://martians.cloud/technologies"
		},
		{
			"@type": "SiteNavigationElement",
			"name": "О нас",
			"url": "https://martians.cloud/about"
		},
		{
			"@type": "SiteNavigationElement",
			"name": "Контакты",
			"url": "https://martians.cloud/contact"
		}
	]
};

export default function RootLayout({ children }: {children: React.ReactNode }) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{__html: JSON.stringify(menuSchema)}}
				/>
				<ThemeProviderWrapper>
					<Providers>
						{children}
					</Providers>
				</ThemeProviderWrapper>
			</body>
			<SpeedInsights/>
			<Analytics/>
		</html>
	)
}
