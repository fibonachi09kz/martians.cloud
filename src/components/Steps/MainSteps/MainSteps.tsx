import Link from "next/link";

const stepsPages = [
	{
		id: 1,
		title: 'Landing / Одностраничный',
		descr: 'leslie.alexander@example.com',
		link: '/steps/landing',
	},
	{
		id: 2,
		title: 'Многостраничный',
		descr: 'leslie.alexander@example.com',
		link: '/steps/landing',
	},
	{
		id: 3,
		title: 'Интернет-магазин',
		descr: 'leslie.alexander@example.com',
		link: '/steps/landing',
	}
]
const MainSteps = () => {
	return (
		<div className="relative bg-white py-16 sm:py-24 lg:py-32 flex-1">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Процессы разработки
						</h2>
						<p className="mt-4 text-xl text-gray-600">
							Изучите более детально наши процессы разработки
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12">
					{stepsPages.map((stepsPage) => (
						<div
							key={stepsPage.id}
							className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
						>
							<div className="min-w-0 flex-1">
								<Link href={stepsPage.link} className="focus:outline-none text-left">
									<span className="absolute inset-0" aria-hidden="true" />
									<p className="text-lg font-medium text-gray-900">{stepsPage.title}</p>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default MainSteps;
