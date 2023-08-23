import {
	AcademicCapIcon,
	ClockIcon,
	Cog6ToothIcon,
	CubeTransparentIcon,
	FaceSmileIcon,
	UserIcon
} from "@heroicons/react/24/outline";

const features = [
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
const Features = () => {
	return (
		<div className="bg-white dark:bg-black py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<p className="text-3xl font-bold leading-8 tracking-tight text-black dark:text-white sm:text-5xl">
						Почему мы?
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
						Наша команда постаралась над созданием максимально комфортной модели взаимодействия клиента и разработчиков
					</p>
				</div>

				<div className="mt-16">
					<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
						{features.map((feature) => (
							<div key={feature.name} className="relative">
								<dt>
									<div className="absolute flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white">
										<feature.icon className="h-7 w-7" aria-hidden="true" />
									</div>
									<p className="ml-16 text-lg font-medium leading-6 text-black dark:text-white">{feature.name}</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
export default Features;
