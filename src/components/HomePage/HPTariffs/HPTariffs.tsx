'use client'
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {Button} from "@nextui-org/react";

const tariffs = [
	{
		id: 1,
		title: 'Landing / Одностраничный',
		description: 'Тариф "Landing" предоставляет возможность создания эффективного одностраничного сайта, специально разработанного для привлечения и удержания внимания посетителей с целью максимизации конверсии',
		price: 'от 250 000 ₸',
		stepLink: '/steps/landing',
		includes: [
			{
				id: 1,
				title: 'Индивидуальный дизайн',
			},
			{
				id: 2,
				title: 'Интеграция контактных форм',
			},
			{
				id: 3,
				title: 'Секции с товарами и услугами',
			},
			{
				id: 4,
				title: 'Разнообразные информационные блоки',
			},
		]
	},
	{
		id: 2,
		title: 'Многостраничный',
		description: 'Тариф "Многостраничный" предоставляет возможность создания информативного и функционального многостраничного сайта, который поможет эффективно представить вашу компанию и ваши услуги',
		price: 'от 450 000 ₸',
		stepLink: '/steps/multi',
		includes: [
			{
				id: 1,
				title: 'Индивидуальный дизайн',
			},
			{
				id: 2,
				title: 'Многостраничная структура',
			},
			{
				id: 3,
				title: 'Функциональность и навигация',
			},
			{
				id: 4,
				title: 'Аналитика и отчетность',
			},
		]
	},
	{
		id: 3,
		title: 'Интернет-магазин',
		description: 'Тариф "Интернет-магазин" предоставляет возможность создания полнофункционального электронного магазина, который поможет вам продавать товары и услуги онлайн',
		price: 'от 700 000 ₸',
		stepLink: '/steps/shop',
		includes: [
			{
				id: 1,
				title: 'Индивидуальный дизайн',
			},
			{
				id: 2,
				title: 'Установка и настройка CMS',
			},
			{
				id: 3,
				title: 'Каталог товаров',
			},
			{
				id: 4,
				title: 'Система корзины и оформления заказа',
			},
			{
				id: 5,
				title: 'Управление заказами',
			},
			{
				id: 6,
				title: 'Интеграция платежных шлюзов',
			},
		]
	},
	{
		id: 4,
		title: 'Индивидуальная разработка',
		description: 'Тариф "Индивидуальная разработка" предназначен для тех, кто ценит уникальность и индивидуальный подход к созданию своего веб-проекта. Здесь мы не используем готовые решения, а создаём продукт, решающий все потребности клиента',
		price: 'от 2 000 000 ₸',
		stepLink: '/steps/shop',
		includes: [
			{
				id: 1,
				title: 'Подробное консультирование и анализ ваших потребностей',
			},
			{
				id: 2,
				title: 'Индивидуальный дизайн сайта, брендирование',
			},
			{
				id: 3,
				title: 'Пользовательский интерфейс как самого проекта, так и административной части',
			},
			{
				id: 4,
				title: 'Интеграция любых сторонних сервисов',
			},
			{
				id: 5,
				title: 'Тестирование и оптимизация для максимальной производительности и безопасности',
			},
			{
				id: 6,
				title: 'Видео и текстовые инструкции для администрирования проекта',
			},
		]
	},
]


const HPTariffs = () => {
	return (
        <div className="space-y-12">
            {tariffs.map(tariff => (
                <div className="relative" key={tariff.id}>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <div className="mx-auto max-w-lg overflow-hidden rounded-2xl lg:flex lg:max-w-none bg-white dark:bg-black">
                            <div className="flex-1 px-6 py-8 lg:p-12">
                                <h3 className="text-2xl font-bold text-black dark:text-white sm:text-3xl sm:tracking-tight">{tariff.title}</h3>
                                <p className="mt-6 text-base text-gray-500 dark:text-gray-400">
                                    {tariff.description}
                                </p>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <h4 className="flex-shrink-0 pr-4 text-base font-semibold text-mainBlueDarker">
                                            Что включено
                                        </h4>
                                    </div>
                                    <ul role="list" className="mt-4 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                                        {tariff.includes.map((include) => (
                                            <li key={include.id} className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                                </div>
                                                <p className="ml-3 text-sm text-gray-600 dark:text-gray-300">{include.title}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="py-8 px-6 lg:max-w-sm w-full lg:border-l border-gray-100 dark:border-zinc-900 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                                <div className="mt-4 flex items-center justify-center text-4xl font-bold tracking-tight text-black dark:text-white">
                                    <span>{tariff.price}</span>
                                </div>
                                <div className="mt-6">
                                    <Button
                                        as={Link}
                                        href="#flex-contact-form"
                                        color="primary"
                                        radius="sm"
                                        className="w-full text-base font-medium"
                                    >
                                        Заказать сайт
                                    </Button>
                                </div>
                                <div className="mt-4 text-sm">
                                    <Button
                                        as={Link}
                                        href="/projects"
                                        color="primary"
                                        radius="sm"
                                        variant="light"
                                        className="font-medium px-[10px] h-6"
                                    >
                                        Посмотреть проекты
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
	)
}
export default HPTariffs;
