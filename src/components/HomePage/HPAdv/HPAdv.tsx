import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	CogIcon,
	LockClosedIcon,
	ServerIcon,
	ShieldCheckIcon,
	UserIcon,
	AcademicCapIcon,
	CubeTransparentIcon,
	ClockIcon,
	Cog6ToothIcon,
	FaceSmileIcon
} from '@heroicons/react/24/outline'

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
const HPAdv = () => {
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
							<div key={feature.name} className="pt-6">
								<div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center rounded-md bg-mainBlue p-3 shadow-lg">
												<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
										<p className="mt-5 text-base text-gray-500">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default HPAdv;
