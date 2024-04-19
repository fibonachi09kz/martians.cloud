'use client'
import {Button, Link} from "@nextui-org/react";
import oneCodeBase from './img/onecode.png';
import Image from "next/image";
import Lottie from "react-lottie";
import * as animationData from './img/flexible.json';

const MobileDevSteps = () => {
	return (
		<section className="bg-white dark:bg-black">
			<div
				className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
				<Image className="w-full" src={oneCodeBase} alt="dashboard image"/>
				<div className="mt-4 md:mt-0">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Экономия
						времени и денег</h2>
					<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Наш подход к
						кроссплатформенной разработке позволяет сэкономить как время, так и ресурсы клиента, благодаря
						одной кодовой базе для обеих платформ</p>
					<Button
						href="/contacts"
						as={Link}
						color="primary"
						size="md"
						className="text-base font-medium"
					>
						Подробнее о React Native
					</Button>
				</div>
			</div>
			<div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
				<div className="mt-4 md:mt-0">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Гибкость</h2>
					<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Если вам нужно добавить функционал только на одну из платформ, мы с легкостью адаптируем код, чтобы соответствовать вашим потребностям, не затрагивая другую платформу</p>
					<Button
						href="/contacts"
						as={Link}
						color="primary"
						size="md"
						className="text-base font-medium"
					>
						Заказать приложение
					</Button>
				</div>
				{/*<Image className="w-full" src={oneCodeBase} alt="dashboard image"/>*/}
				<Lottie options={{
					loop: true,
					autoplay: true,
					animationData: animationData,
				}} isClickToPauseDisabled={true} />
			</div>
		</section>
	)
}
export default MobileDevSteps;
