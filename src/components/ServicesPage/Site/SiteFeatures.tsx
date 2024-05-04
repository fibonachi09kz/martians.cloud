'use client'

import {Icon} from "@iconify/react";

const SiteFeatures = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 py-24">
			<div className="max-w-3xl mx-auto mb-12">
				<h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Преимущества вашего сайта</h2>
				<p className="text-gray-500 text-center sm:text-xl dark:text-gray-400">3 главных фактора, которые смогут выделить ваш сайт среди конкурентов и завоевать доверие клиентов</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8">
				<div>
					<Icon icon="solar:devices-bold-duotone" className="text-primary w-12 h-12 flex-none mx-auto" />
					<h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Уникальность</h3>
					<p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Сайт будет иметь уникальный дизайн и адаптивность под все платформы</p>
				</div>
				<div>
					<Icon icon="solar:atom-bold-duotone" className="text-primary w-12 h-12 flex-none mx-auto" />
					<h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Функциональность</h3>
					<p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Сайт будет разработан с учётом требований всех бизнес-процессов</p>
				</div>
				<div>
					<Icon icon="solar:shield-minimalistic-bold-duotone" className="text-primary w-12 h-12 flex-none mx-auto" />
					<h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Безопасность</h3>
					<p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Сайт будет защищен от самых распространённых вирусов и взломов</p>
				</div>
			</div>
		</section>
	)
}
export default SiteFeatures;
