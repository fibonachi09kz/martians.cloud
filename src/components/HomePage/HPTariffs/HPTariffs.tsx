import {CheckCircleIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

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
				title: 'Интеграция контактной формы',
			},
			{
				id: 3,
				title: 'Оптимизация сайта для поисковых систем',
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
				title: 'Управление заказами и инвентарем',
			},
			{
				id: 6,
				title: 'Интеграция платежных шлюзов',
			},
		]
	},
]


const HPTariffs = () => {
	return (
		<div className="bg-white dark:bg-black">
			<div className="pt-12 sm:pt-16 lg:pt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
							Наши тарифы
						</h2>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
							Выберите план, который соответствует вашим потребностям
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28 space-y-12">
				{tariffs.map(tariff => (
					<div className="relative" key={tariff.id}>
						<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="mx-auto max-w-lg border border-gray-300 dark:border-white/20 overflow-hidden rounded-lg lg:flex lg:max-w-none">
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
										<ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
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
								<div className="py-8 px-6 max-w-sm w-full border-l border-gray-300 dark:border-white/20 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
									<div className="mt-4 flex items-center justify-center text-4xl font-bold tracking-tight text-black dark:text-white">
										<span>{tariff.price}</span>
									</div>
									<p className="mt-6 text-sm">
										<Link href={tariff.stepLink} className="font-medium text-gray-500 dark:text-gray-400 py-1 px-3 border rounded-full border-gray-300 dark:border-white/20">
											Изучить процесс разработки
										</Link>
									</p>
									<div className="mt-6">
										<div className="rounded-md shadow">
											<a
												href="#"
												className="button button-blue"
											>
												Заказать сайт
											</a>
										</div>
									</div>
									<div className="mt-4 text-sm">
										<a href="#" className="font-medium text-gray-600 dark:text-gray-400">
											Посмотреть кейсы
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}


			</div>
		</div>
	)
}
export default HPTariffs;
