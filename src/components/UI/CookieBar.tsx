import React, {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import Link from "next/link";

const CookieBar = () => {

	const [isCookieAllowed, setIsCookieAllowed] = useState(false);

	const allowCookieHandler = () => {
		setIsCookieAllowed(false);
		localStorage.setItem('userAllowToUseCookie', 'yes');
	}

	useEffect(() => {
		const cookieStatus = localStorage.getItem('userAllowToUseCookie');
		if (!cookieStatus) {
			setIsCookieAllowed(true)
		}
	}, [])

	if (!isCookieAllowed) {
		return
	}

	return (
		<div className="fixed bottom-0 w-full left-0 z-20 bg-black dark:bg-zinc-900 py-5 sm:py-3">
			<div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center gap-5 justify-center sm:pr-[60px] xl:pr-5">
				<p className="text-base text-white pr-10 sm:p-0">Мы собираем данные для аналитики, используя ваши Cookie. Примите согласие с этим, либо покиньте сайт</p>
				<Button
					onClick={allowCookieHandler}
					color="primary"
					variant="solid"
					size="sm"
					className="text-base bg-white text-black w-full sm:w-fit px-3 flex-none"
				>
					Принять
				</Button>
				<Button
					color="primary"
					variant="flat"
					size="md"
					className="text-white min-w-0 w-10 h-10 p-0 top-3 bg-transparent hover:bg-white/10 absolute right-3 sm:top-auto"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
					</svg>
				</Button>
			</div>
		</div>
	)
}
export default CookieBar;
