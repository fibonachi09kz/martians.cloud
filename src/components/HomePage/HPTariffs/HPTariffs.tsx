import {CheckCircleIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

const includedFeatures = [
	'Индивидуальный дизайн',
	'Интеграция контактной формы',
	'Оптимизация сайта для поисковых систем',
	'Разнообразные информационные блоки',
]
const includedFeatures1 = [
	'Индивидуальный дизайн',
	'Многостраничная структура',
	'Функциональность и навигация',
	'Аналитика и отчетность',
]
const includedFeatures2 = [
	'Индивидуальный дизайн',
	'Установка и настройка CMS',
	'Каталог товаров',
	'Система корзины и оформления заказа',
	'Управление заказами и инвентарем',
	'Интеграция платежных шлюзов'
]
const HPTariffs = () => {
	return (
		<div className="bg-gray-100">
			<div className="pt-12 sm:pt-16 lg:pt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Наши тарифы
						</h2>
						<p className="mt-4 text-xl text-gray-600">
							Выберите план, который соответствует вашим потребностям
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28 space-y-12">
				<div className="relative">
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
							<div className="flex-1 bg-white px-6 py-8 lg:p-12">
								<h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Landing / Одностраничный</h3>
								<p className="mt-6 text-base text-gray-500">
									Тариф "Landing" предоставляет возможность создания эффективного одностраничного сайта, специально разработанного для привлечения и удержания внимания посетителей с целью максимизации конверсии
								</p>
								<div className="mt-8">
									<div className="flex items-center">
										<h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-mainBlueDarker">
											Что включено
										</h4>
										<div className="flex-1 border-t-2 border-gray-200" />
									</div>
									<ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
										{includedFeatures.map((feature) => (
											<li key={feature} className="flex items-start lg:col-span-1">
												<div className="flex-shrink-0">
													<CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
												</div>
												<p className="ml-3 text-sm text-gray-700">{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
								<div className="mt-4 flex items-center justify-center text-4xl font-bold tracking-tight text-gray-900">
									<span>от 150 000 ₸</span>
								</div>
								<p className="mt-4 text-sm">
									<Link href="/steps/landing" className="font-medium text-gray-500 underline">
										Подробнее о процессе разработки
									</Link>
								</p>
								<div className="mt-6">
									<div className="rounded-md shadow">
										<a
											href="#"
											className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-mainBlueDarker hover:text-white"
										>
											Заказать сайт
										</a>
									</div>
								</div>
								<div className="mt-4 text-sm">
									<a href="#" className="font-medium text-gray-900">
										Посмотреть примеры
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
							<div className="flex-1 bg-white px-6 py-8 lg:p-12">
								<h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Многостраничный</h3>
								<p className="mt-6 text-base text-gray-500">
									Тариф "Многостраничный" предоставляет возможность создания информативного и функционального многостраничного сайта, который поможет эффективно представить вашу компанию и ваши услуги.
								</p>
								<div className="mt-8">
									<div className="flex items-center">
										<h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-mainBlueDarker">
											Что включено
										</h4>
										<div className="flex-1 border-t-2 border-gray-200" />
									</div>
									<ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
										{includedFeatures1.map((feature) => (
											<li key={feature} className="flex items-start lg:col-span-1">
												<div className="flex-shrink-0">
													<CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
												</div>
												<p className="ml-3 text-sm text-gray-700">{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
								<div className="mt-4 flex items-center justify-center text-4xl font-bold tracking-tight text-gray-900">
									<span>от 250 000 ₸</span>
								</div>
								<p className="mt-4 text-sm">
									<Link href="/steps/multi" className="font-medium text-gray-500 underline">
										Подробнее о процессе разработки
									</Link>
								</p>
								<div className="mt-6">
									<div className="rounded-md shadow">
										<a
											href="#"
											className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-mainBlueDarker hover:text-white"
										>
											Заказать сайт
										</a>
									</div>
								</div>
								<div className="mt-4 text-sm">
									<a href="#" className="font-medium text-gray-900">
										Посмотреть примеры
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
							<div className="flex-1 bg-white px-6 py-8 lg:p-12">
								<h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Интернет-магазин</h3>
								<p className="mt-6 text-base text-gray-500">
									Тариф "Интернет-магазин" предоставляет возможность создания полнофункционального электронного магазина, который поможет вам продавать товары и услуги онлайн.
								</p>
								<div className="mt-8">
									<div className="flex items-center">
										<h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-mainBlueDarker">
											Что включено
										</h4>
										<div className="flex-1 border-t-2 border-gray-200" />
									</div>
									<ul role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
										{includedFeatures2.map((feature) => (
											<li key={feature} className="flex items-start lg:col-span-1">
												<div className="flex-shrink-0">
													<CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
												</div>
												<p className="ml-3 text-sm text-gray-700">{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
								<div className="mt-4 flex items-center justify-center text-4xl font-bold tracking-tight text-gray-900">
									<span>от 500 000 ₸</span>
								</div>
								<p className="mt-4 text-sm">
									<Link href="/steps/shop" className="font-medium text-gray-500 underline">
										Подробнее о процессе разработки
									</Link>
								</p>
								<div className="mt-6">
									<div className="rounded-md shadow">
										<a
											href="#"
											className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-mainBlueDarker hover:text-white"
										>
											Заказать сайт
										</a>
									</div>
								</div>
								<div className="mt-4 text-sm">
									<a href="#" className="font-medium text-gray-900">
										Посмотреть примеры
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>


			</div>
		</div>
	)
}
export default HPTariffs;
