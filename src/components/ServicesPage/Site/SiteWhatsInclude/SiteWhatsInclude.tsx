'use client'
import {Icon} from "@iconify/react";
import Image from "next/image";

const SiteWhatsInclude = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 py-24">
			<div className="max-w-3xl mx-auto mb-12">
				<h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Что входит в разработку</h2>
				<p className="text-gray-500 text-center sm:text-xl dark:text-gray-400">3 главных фактора, которые смогут выделить ваш сайт среди конкурентов и завоевать доверие клиентов</p>
			</div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-2 dark:bg-black">
                    <Icon icon="ri:seo-line" className="text-primary w-10 h-10 flex-none mb-5"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">SEO-оптимизация</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">На разработанном сайте будет проведена SEO-оптимизация, позволяющая получить первые позиции в поисковых системах и завоевать доверие клиентов</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="fluent:design-ideas-16-regular" className="text-primary w-10 h-10 flex-none mb-5"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Исходники дизайна</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">К разработанному сайта будут прилагаться все изготовленные макеты в Figma</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="solar:server-path-linear" className="text-primary w-10 h-10 flex-none mb-5"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Хостинг</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Дарим 1 год бесплатного хостинга на серверах наших партнёров</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon className="text-primary w-10 h-10 flex-none mb-5" icon="iconoir:www"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Домен</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Дарим домен в зонах .kz, .ru, .com сроком на 1 год. Другие зоны и особые домены согласовываются на этапе разработки</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="fluent:person-support-16-regular" className="text-primary w-10 h-10 flex-none mb-5" />
                    <h3 className="text-black dark:text-white text-2xl font-bold">Поддержка</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">В течение 3-ёх месяцев наша команда будет готова устранить любые неполадки на сайте</p>
                </div>
            </div>
        </section>
    )
}
export default SiteWhatsInclude;
