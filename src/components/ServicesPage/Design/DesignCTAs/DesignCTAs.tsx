'use client'
import {Button, Link} from "@nextui-org/react";
import Lottie from "react-lottie";
import * as websiteDesignData from './media/website-design.json';
import * as mobileDesignData from './media/mobile-design.json';
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import {Icon} from "@iconify/react";

const DesignCTAs = () => {
	return (
		<section className="bg-white dark:bg-black px-4">
			<div className="flex flex-col-reverse items-center py-8 md:px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-8 md:mt-0">
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Дизайн сайтов</h2>
                    <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">Если вам нужно добавить функционал только на одну из платформ, мы с легкостью адаптируем код, чтобы соответствовать вашим потребностям, не затрагивая другую платформу</p>
                    <ul role="list" className="mb-6 space-y-3">
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Создание прототипа</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Разработка дизайн-системы</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Подбор шрифтов</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Разработка макетов сайта в Figma <Icon icon="logos:figma" className="h-5 w-5 inline" /></p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Создание светлой и тёмной темы</p>
                        </li>
                    </ul>
                    <Button
                        href="#flex-contact-form"
                        as={Link}
                        color="primary"
                        size="md"
                        variant="solid"
                        className="text-base font-medium"
                    >
                        Заказать дизайн
                    </Button>
                </div>
                <div className="lottie">
                    <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: websiteDesignData,
                    }} isClickToPauseDisabled={true}/>
                </div>
            </div>
            <div className="flex flex-col items-center py-8 md:px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="lottie">
                    <Lottie options={{
                        loop: true,
                        autoplay: true,
                        animationData: mobileDesignData,
                    }} isClickToPauseDisabled={true}/>
                </div>
                <div className="mt-8 md:mt-0">
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Дизайн мобильных приложений</h2>
                    <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">Наш подход к кроссплатформенной разработке позволяет сэкономить как время, так и ресурсы клиента, благодаря одной кодовой базе для обеих платформ</p>
                    <ul role="list" className="mb-6 space-y-3">
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Создание прототипа</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Разработка дизайн-системы</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Создание адаптивной иконки и Splash-экранов</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Разработка макетов приложения в Figma <Icon icon="logos:figma" className="h-5 w-5 inline"/></p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Создание светлой и тёмной темы</p>
                        </li>
                        <li className="flex items-center lg:col-span-1">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
                            </div>
                            <p className="ml-2 text-base text-gray-600 dark:text-gray-300">Подбор скриншотов и баннеров для публикации в маркетах</p>
                        </li>
                    </ul>
                     <Button
                        href="#flex-contact-form"
                        as={Link}
                        color="primary"
                        size="md"
                        variant="solid"
                        className="text-base font-medium"
                    >
                        Заказать дизайн
                    </Button>
                </div>
            </div>

        </section>
    );
}

export default DesignCTAs;
