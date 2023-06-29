import {CheckCircleIcon} from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const services = [
	{
		id: 1,
		name: 'Визуальный редизайн',
		descr: 'Обновление внешнего вида и пользовательского интерфейса существующего сайта для повышения его эстетического впечатления и улучшения пользовательского опыта',
	},
	{
		id: 2,
		name: 'Мобильная оптимизация',
		descr: 'Адаптация существующего сайта для оптимального отображения и использования на мобильных устройствах',
	},
	{
		id: 3,
		name: 'Миграция и обновление',
		descr: 'Перенос существующего сайта на новую платформу или обновление до последней версии, чтобы улучшить производительность и безопасность',
	},
	{
		id: 4,
		name: 'SEO-оптимизация',
		descr: 'Аудит и оптимизация сайта для повышения его видимости в поисковых системах и привлечения большего количества органического трафика',
	}
]

const servicesSub = [
	{
		id: 1,
		name: 'Управление содержимым',
		descr: 'Предоставление услуг по регулярному обновлению и добавлению контента на сайте по запросу клиента',
	},
	{
		id: 2,
		name: 'Техническая поддержка',
		descr: 'Предоставление непрерывной технической поддержки, включая решение проблем, обновление и безопасность сайта',
	},
	{
		id: 3,
		name: 'Резервное копирование и восстановление',
		descr: 'Регулярное создание резервных копий сайта и возможность восстановления данных в случае сбоев или потери информации',
	},
	{
		id: 4,
		name: 'Обновление и обслуживание платформы',
		descr: 'Поддержка и обновление используемой платформы, включая установку новых обновлений и исправление возникающих проблем',
	}
]

const HPDops = () => {
	return (
		<div className="bg-gray-100">
			<div className="pt-12 sm:pt-16 lg:pt-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Дополнительные услуги
						</h2>
						<p className="mt-4 text-xl text-gray-600">
							Расширьте свой потенциал с нашими дополнительными услугами
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

				<p className="text-base font-meduim mb-4">Услуги, предоставляемые на условиях <span className="font-medium underline">единоразового платежа</span> </p>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">

					{services.map((service) => (
						<div
							key={service.id}
							className="relative group flex space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-mainBlue focus-within:ring-offset-2 hover:border-gray-400"
						>
							<div className="min-w-0 flex-1">
								<a href="#" className="focus:outline-none">
									<span className="absolute inset-0" aria-hidden="true" />
									<p className="text-base font-medium text-gray-900 mb-2 pr-10">{service.name}</p>
									<p className="text-sm text-gray-500">{service.descr}</p>
									<ArrowLongRightIcon className="absolute right-6 top-4 w-7 h-7 text-gray-400 group-hover:text-mainBlue group-hover:translate-x-1 transition-all" />
								</a>
							</div>
						</div>
					))}
				</div>

				<p className="text-base font-meduim mb-4">Услуги, предоставляемые на условиях <span className="font-medium underline">подписки (регулярных ежемесячных платежей)</span></p>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{servicesSub.map((service) => (
						<div
							key={service.id}
							className="relative group flex space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-mainBlue focus-within:ring-offset-2 hover:border-gray-400"
						>
							<div className="min-w-0 flex-1">
								<a href="#" className="focus:outline-none">
									<span className="absolute inset-0" aria-hidden="true" />
									<p className="text-base font-medium text-gray-900 mb-2 pr-10">{service.name}</p>
									<p className="text-sm text-gray-500">{service.descr}</p>
									<ArrowLongRightIcon className="absolute right-6 top-4 w-7 h-7 text-gray-400 group-hover:text-mainBlue group-hover:translate-x-1 transition-all" />
								</a>
							</div>
						</div>
					))}
				</div>

			</div>
		</div>
	)
}
export default HPDops;
