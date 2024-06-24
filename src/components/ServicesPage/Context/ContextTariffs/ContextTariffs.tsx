'use client'
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {Button} from "@nextui-org/react";

const tariffs = [
	{
		id: 1,
		title: 'Тариф «СТАРТ»',
		description: 'Выводите новый продукт на рынок или никогда не запускали контекстную рекламу? Попробуйте на стартовом тарифе!',
		price: 'от 100 000 ₸',
		includes: [
			{
				id: 1,
				title: 'Базовая SEO оптимизация лендинга/сайта, адаптиция тегов сайта под поисковые системы и добавление в поисковые системы для скорейшей индексации',
			},
			{
				id: 2,
				title: '2 поисковые кампании в Гугл Рекламе и Яндекс Директ до 50 ключевых слов',
			},
			{
				id: 3,
				title: 'Настройка веб-аналитики (Google Analytics & Яндекс Метрика, Google Tag Manager), настройка конверсионных действий (позвонить, отправка формы, написать в месседжер)',
			},
			{
				id: 4,
				title: '2 дашборда для руководителя в Google Looker Studio',
			},
		]
	},
	{
		id: 2,
		title: 'Тариф «Популярный»',
		description: 'Создаем воронку продаж и автоматизируем ее на всем пути клиента. Самый часто покупаемы тариф. Попробуйте и вы!',
		price: 'от 300 000 ₸',
		includes: [
			{
				id: 1,
				title: 'Работы с предыдущего тарифа, до 200 ключевых слов',
			},
			{
				id: 2,
				title: 'Отрисовка всей сетки баннеров для контекстно-медийной сети Google и Партнерской сети Яндекса, ваша реклама на всех устройствах видна интересующимся людям, даже если они пока не были на вашем сайте и не искали вас',
			},
			{
				id: 3,
				title: 'Ретаргетинговые и ремаркетинговые кампании Google и Яндекс. Преследуем и возвращаем теплых потенциальных клиентов на ваш сайт, подталкивая к покупке',
			},
		]
	},
	{
		id: 3,
		title: 'Тариф «Премиум»',
		description: 'Вы буквально везде в интернете, клиенты от вас не смогут уйти. Попробуйте тариф «Премиум»! Вам понравится)',
		price: 'от 1 000 000 ₸',
		includes: [
			{
				id: 1,
				title: 'Работы с предыдущего тарифа, максимум целевых ключевых слов, что можно собрать разными средствами',
			},
			{
				id: 2,
				title: 'Динамический ремаркетинг/ретаргетинг для интернет магазинов, Google Performance Max',
			},
			{
				id: 3,
				title: 'Динамическая поисковая кампания',
			},
			{
				id: 4,
				title: 'Реклама в Google Shopping через Google Merchant Centre для интернет магазинов',
			},
			{
				id: 5,
				title: 'Реклама в Youtube (In-stream, Discovery)',
			},
			{
				id: 6,
				title: 'Ремаркетинг в Facebook, Instagram (сбор аудиторий, Look-a-like)',
			},
		]
	},
]


const ContextTariffs = () => {
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
                                    <ul role="list" className="mt-4 space-y-5 lg:grid lg:gap-x-8 lg:gap-y-3 lg:space-y-0">
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
                                <p className="m-0 text-black text-center text-sm font-medium leading-5 dark:text-gray-400">+ бюджет рекламных систем</p>
                                <div className="mt-6">
                                    <Button
                                        as={Link}
                                        href="#flex-contact-form"
                                        color="primary"
                                        radius="sm"
                                        className="w-full text-base font-medium"
                                    >
                                        Заказать рекламу
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
export default ContextTariffs;
