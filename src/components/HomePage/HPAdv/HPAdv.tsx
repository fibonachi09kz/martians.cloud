'use client'
import {
	UserIcon,
	AcademicCapIcon,
	CubeTransparentIcon,
	ClockIcon,
	Cog6ToothIcon,
	FaceSmileIcon
} from '@heroicons/react/24/outline'
import { FC, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
	name: string;
	description: string;
	icon: any;
}

const features: Feature[] = [
	{
		name: 'Профессиональный подход',
		description: 'Мы - команда опытных разработчиков и дизайнеров, готовых создать качественный и функциональный сайт',
		icon: AcademicCapIcon,
	},
	{
		name: 'Персонализированный подход',
		description: ' Мы прислушиваемся к вашим требованиям и желаниям, чтобы создать сайт, полностью соответствующий вашим бизнес-целям и визуальным предпочтениям',
		icon: UserIcon,
	},
	{
		name: 'Уникальный дизайн',
		description: 'Мы разрабатываем индивидуальный дизайн, который выделит ваш сайт из толпы, сделает его запоминающимся и привлекательным для посетителей',
		icon: CubeTransparentIcon,
	},
	{
		name: 'Соблюдение сроков',
		description: 'Мы ценим ваше время и работаем в соответствии с согласованными сроками. Вы можете быть уверены, что ваш сайт будет разработан и запущен вовремя',
		icon: ClockIcon,
	},
	{
		name: 'Поддержка и сопровождение',
		description: 'Мы предоставляем полную техническую поддержку и сопровождение после запуска вашего сайта',
		icon: Cog6ToothIcon,
	},
	{
		name: 'Клиентоориентированность',
		description: 'Ваше удовлетворение - наш главный приоритет. Мы стремимся установить долгосрочные отношения с нашими клиентами, предоставляя высокий уровень сервиса',
		icon: FaceSmileIcon,
	},
]
const HPAdv: FC = () => {

	const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openFeatureModal = (feature: Feature) => {
		setSelectedFeature(feature);
		setIsModalOpen(true);
	};

	const closeFeatureModal = () => {
		setSelectedFeature(null);
		setIsModalOpen(false);
	};

	return (
		<div className="relative bg-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Наши преимущества</h2>
						<p className="mt-4 text-xl text-gray-600">Почему вам стоит обратиться именно к нам</p>
					</div>
				</div>
				<div className="mt-12">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="pt-6"
								onClick={() => openFeatureModal(feature)}
							>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									layoutId={feature.name}
									className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8 cursor-pointer"
								>
									<div className="-mt-6">
										<div>
											<motion.span className="inline-flex items-center justify-center rounded-md bg-mainBlue p-3 shadow-lg">
												<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
											</motion.span>
										</div>
										<motion.h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
											{feature.name}
										</motion.h3>
										<motion.p className="mt-5 text-base text-gray-500">{feature.description}</motion.p>
									</div>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isModalOpen && selectedFeature && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute w-full h-full bg-black/60 z-0 top-0 left-0"
							onClick={closeFeatureModal}
						></motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							layoutId={selectedFeature.name}
							className="w-full max-w-xl rounded-lg bg-gray-50 px-6 pb-8 cursor-pointer z-10"
						>
							<motion.div className="-mt-6">
								<motion.div className="flex justify-center">
									<motion.span className="inline-flex items-center justify-center rounded-md bg-mainBlue p-3 shadow-lg">
										<selectedFeature.icon className="h-6 w-6 text-white" aria-hidden="true" />
									</motion.span>
								</motion.div>
								<motion.h3 className="mt-8 text-lg text-center font-medium tracking-tight text-gray-900">
									{selectedFeature.name}
								</motion.h3>
								<motion.p className="mt-5 text-base text-center text-gray-500">{selectedFeature.description}</motion.p>
							</motion.div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	)
}
export default HPAdv;
