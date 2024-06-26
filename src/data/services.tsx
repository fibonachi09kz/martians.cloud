import {ServiceInterface} from "@/types/ServicesTypes";
import {Icon} from "@iconify/react";

export const services: ServiceInterface[] = [
	{
		id: 1,
		name: 'Разработка сайтов',
		icon: () => <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-12 text-blue-700" icon="gg:website" />,
		listIcon: (classes) => <Icon className={classes} icon="gg:website" />,
		description: 'Мы обеспечиваем полный цикл разработки, начиная с анализа ваших требований и заканчивая запуском и поддержкой вашего сайта.',
		detailLink: '/site',
		mainColor: 'blue',
		secondaryColor: ''
	},
	{
		id: 2,
		name: 'Разработка мобильных приложений',
		icon: () => <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-12 text-purple-700" icon="iconoir:dev-mode-phone" />,
		listIcon: (classes) => <Icon className={classes} icon="iconoir:dev-mode-phone" />,
		description: 'Независимо от того, нужно ли вам приложение для улучшения внутренних процессов, расширения вашего онлайн-присутствия или создания новых потоков дохода, мы гарантируем индивидуальный подход и результаты, которые превзойдут ваши ожидания.',
		detailLink: '/mobile',
		mainColor: 'purple',
		secondaryColor: ''
	},
	// {
	// 	id: 3,
	// 	name: 'Интеграция нейросетей',
	// 	icon: () => <Icon className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 md:mb-12 text-emerald-700" icon="fluent:brain-circuit-20-regular" />,
	// 	listIcon: (classes) => <Icon className={classes} icon="fluent:brain-circuit-20-regular" />,
	// 	description: 'Мы обеспечиваем гладкое внедрение и взаимодействие различных моделей и алгоритмов машинного обучения, чтобы ваша компания могла извлекать максимальную пользу из своих данных.',
	// 	detailLink: '/ai',
	// 	mainColor: 'emerald',
	// 	secondaryColor: ''
	// },
	{
		id: 4,
		name: 'Контекстная реклама',
		icon: () => <Icon className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 md:mb-12 text-rose-700" icon="ri:advertisement-fill" />,
		listIcon: (classes) => <Icon className={classes} icon="ri:advertisement-fill" />,
		description: 'Наша команда специалистов в области маркетинга проведет тщательный анализ вашей ниши и конкурентной среды, чтобы создать эффективные рекламные кампании, целенаправленно нацеленные на ваши ключевые аудитории. Мы используем передовые инструменты и технологии для точного таргетинга и оптимизации рекламных бюджетов, обеспечивая максимальный ROI (возврат инвестиций).',
		detailLink: '/context',
		mainColor: 'rose',
		secondaryColor: ''
	},
	{
		id: 5,
		name: 'Индивидуальный дизайн',
		icon: () => <Icon className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 md:mb-12 text-orange-700" icon="fluent:design-ideas-16-regular" />,
		listIcon: (classes) => <Icon className={classes} icon="fluent:design-ideas-16-regular" />,
		description: 'Мы создаем дизайн, который отражает вашу корпоративную идентичность и эффективно коммуницирует ваше сообщение. Независимо от того, нужен ли вам дизайн для веб-сайта, мобильного приложения, логотипа или корпоративного брендинга, мы разработаем уникальное решение, которое подчеркнет ваши преимущества и дифференцирует вас на рынке.',
		detailLink: '/design',
		mainColor: 'orange',
		secondaryColor: ''
	},
	// {
	// 	id: 6,
	// 	name: 'Техническая поддержка',
	// 	icon: () => <Icon className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 md:mb-12 text-sky-700" icon="ph:gear" />,
	// 	listIcon: (classes) => <Icon className={classes} icon="ph:gear" />,
	// 	description: 'Мы предлагаем широкий спектр услуг, включая мониторинг и обслуживание серверов, сетевую безопасность, управление облачными ресурсами, восстановление данных, а также консультации и обучение сотрудников. Наша цель - обеспечить вашему бизнесу стабильность и безопасность, чтобы вы могли сосредоточиться на своих стратегических целях, зная, что ваша техническая инфраструктура находится в надежных руках.',
	// 	detailLink: '/support',
	// 	mainColor: 'sky',
	// 	secondaryColor: ''
	// },
]
