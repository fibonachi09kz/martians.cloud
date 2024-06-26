const Stats = () => {
	return (
		<section className="py-8 bg-white dark:bg-black border-y border-gray-300 dark:border-white/20">
			<div className="max-w-7xl mx-auto">
				<dl className="rounded-lg grid gap-8 md:gap-0 md:grid-cols-3 divide-gray-300 dark:divide-white/20 md:divide-x-2">
					<div className="flex flex-col px-6 text-center">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400 uppercase">Опыта</dt>
						<dd className="order-1 text-6xl font-bold tracking-tight text-black dark:text-white">3 года</dd>
					</div>
					<div className="flex flex-col px-6 text-center">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400 uppercase">Проектов</dt>
						<dd className="order-1 text-6xl font-bold tracking-tight text-black dark:text-white">20+</dd>
					</div>
					<div className="flex flex-col px-6 text-center">
						<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400 uppercase">Экипаж</dt>
						<dd className="order-1 text-6xl font-bold tracking-tight text-black dark:text-white">6</dd>
					</div>
				</dl>
			</div>
		</section>
	)
}

export default Stats;
