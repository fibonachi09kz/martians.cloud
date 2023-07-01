'use client';
import {MutableRefObject, useLayoutEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
	{
		id: 1,
		title: 'Заявка и сбор требований',
		text: () => (
			<div className="space-y-2">
				<p>Клиент оставляет заявку на разработку интернет-магазина, предоставляя информацию о своем бизнесе, типе товаров и требованиях к функциональности</p>
				<p>Мы проводим встречу или собеседование с клиентом, чтобы подробнее обсудить его цели, целевую аудиторию, желаемый дизайн и особенности магазина</p>
			</div>
		)
	},
	{
		id: 2,
		title: 'Архитектура сайта и планирование',
		text: () => (
			<div className="space-y-2">
				<p>Мы разрабатываем структуру интернет-магазина, определяем категории товаров, фильтры, поиск, корзину и оформление заказа</p>
				<p>На основе требований и плана, мы создаем подробное техническое задание, в котором определяются особенности каждой страницы и функциональности</p>
			</div>
		)
	},
	{
		id: 3,
		title: 'Дизайн и визуальное оформление',
		text: () => (
			<div className="space-y-2">
				<p>Наша команда дизайнеров разрабатывает уникальный дизайн интернет-магазина, учитывая брендирование клиента, целевую аудиторию и лучшие практики пользовательского интерфейса</p>
				<p>Мы предоставляем клиенту предварительные варианты дизайна, согласовываем детали и вносим необходимые изменения, чтобы достичь оптимального результата</p>
			</div>
		)
	},
	{
		id: 4,
		title: 'Разработка и программирование',
		text: () => (
			<div className="space-y-2">
				<p>На основе утвержденного дизайна, наша команда разработчиков начинает создание интернет-магазина, используя современные технологии и платформы электронной коммерции</p>
				<p>Мы обеспечиваем интеграцию системы управления контентом, добавление товаров, настройку корзины, оплату, доставку и другие необходимые функциональности</p>
			</div>
		)
	},
	{
		id: 5,
		title: 'Тестирование и отладка',
		text: () => (
			<div className="space-y-2">
				<p>Мы проводим тестирование интернет-магазина на различных устройствах и браузерах, чтобы убедиться в его корректной работе, безопасности и удобстве использования</p>
				<p>Если выявляются ошибки или несоответствия требованиям, мы выполняем отладку и исправления, чтобы обеспечить высокое качество и надежность магазина</p>
			</div>
		)
	},
	{
		id: 6,
		title: 'Запуск и оптимизация',
		text: () => (
			<div className="space-y-2">
				<p>После успешного тестирования и утверждения клиентом, мы размещаем интернет-магазин на хостинге, настраиваем систему оплаты и доставки, и проводим финальные настройки</p>
				<p>Мы выполняем проверку работоспособности магазина, его быстродействия, а также оптимизируем его для лучшего показателя конверсии и пользовательского опыта</p>
			</div>
		)
	},
	{
		id: 7,
		title: 'Поддержка и обслуживание',
		text: () => (
			<div className="space-y-2">
				<p>Мы предоставляем техническую поддержку и обслуживание интернет-магазина, обновляем его платформу и модули, а также реагируем на любые вопросы и запросы клиента</p>
			</div>
		)
	},
]

const ShopSteps = () => {

	const root: MutableRefObject<null> = useRef(null);
	const wrapper: MutableRefObject<null> = useRef(null);
	const flyLine: MutableRefObject<null> = useRef(null);

	useLayoutEffect(() => {

		let ctx = gsap.context(() => {

			gsap.to(flyLine.current, {
				height: '100%',
				ease: 'none',
				scrollTrigger: {
					trigger: wrapper.current,
					scrub: true,
					start: 'top 700px',
					end: 'bottom 700px',
				},
			});

			const points = document.querySelectorAll('.scroll-point');
			if (points) {
				points.forEach((point) => {
					ScrollTrigger.create({
						trigger: point,
						onEnter: function (self) {
							self.trigger?.querySelector('.num')?.classList.add('!bg-mainBlue');
							self.trigger?.querySelector('.dot')?.classList.add('!border-mainBlue');
						},
						onEnterBack: function (self) {
							self.trigger?.querySelector('.num')?.classList.remove('!bg-mainBlue');
							self.trigger?.querySelector('.dot')?.classList.remove('!border-mainBlue');
						},
						start: '20px 700px',
						end: "20px 700px",
					});
				})
			}


		}, root);

		return () => ctx.revert();

	}, []);


	return (
		<div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-xl px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Процесс разработки интернет-магазина</h2>
						<p className="mt-4 text-xl text-gray-600">Изучите наш подход к разработке вашего проекта</p>
					</div>
				</div>
				<div className="relative mt-12" ref={wrapper}>
					<div className="hidden md:block absolute h-full left-1/2 -translate-x-1/2 top-0">
						<hr className="h-full w-0.5 p-0 border border-dashed border-gray-500" />
						<span className="absolute w-0.5 -translate-x-1/2 top-0 bg-mainBlue" ref={flyLine}>
							<span className="absolute -translate-x-1/2 left-1/2 bottom-0 w-3 h-3 border-2 border-mainBlue rounded-full bg-white block"></span>
						</span>
					</div>
					{steps.map(( {id, title, text}, index ) => {
						if (index % 2 === 1) {
							return (
								<div key={id} className="md:grid grid-cols-[1fr_110px_1fr] items-start w-full max-w-7xl mx-auto text-white text-left mb-8 scroll-point">
									<div className=""></div>
									<div className="hidden mt-[7px] md:block mx-auto w-3 h-3 z-10 rounded-[20px] border-2 border-solid border-gray-500 bg-white dot"></div>
									<dd className="">
										<span className="block w-fit px-[11px] h-7 mb-[10px] font-semibold text-sm leading-7 text-center rounded-md bg-gray-800 num">{id}</span>
										<h3 className="font-medium text-xl leading-[150%] text-gray-800 mb-[10px]">{title}</h3>
										<div className="font-normal text-base leading-[160%] text-gray-500">{text()}</div>
									</dd>
								</div>
							)
						} else {
							return (
								<div key={id} className="md:grid grid-cols-[1fr_110px_1fr] items-start w-full max-w-7xl mx-auto text-white text-left md:text-right mb-8 scroll-point">
									<dd className="">
										<span className="block w-fit px-[11px] h-7 mb-[10px] font-semibold text-sm leading-7 text-center rounded-md bg-gray-800 md:ml-auto num">{id}</span>
										<h3 className="font-medium text-xl leading-[150%] text-gray-800 mb-[10px]">{title}</h3>
										<div className="font-normal text-base leading-[160%] text-gray-500">{text()}</div>
									</dd>
									<div className="hidden mt-[7px] md:block mx-auto w-3 h-3 z-10 rounded-[20px] border-2 border-solid border-gray-500 bg-white dot"></div>
									<div className=""></div>
								</div>
							)
						}
					})}


				</div>
			</div>
		</div>
	)
}
export default ShopSteps;
