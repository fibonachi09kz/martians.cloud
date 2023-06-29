const HPCta = () => {
	return (
		<div className="bg-gray-900">
			<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
				<div className="lg:w-0 lg:flex-1 max-w-[550px] mr-auto">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
						Закажите сайт сегодня
					</h2>
					<p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
						Закажите профессиональный сайт, который привлечет внимание и поможет достичь ваших целей!
					</p>
				</div>
				<div className="mt-8 lg:mt-0 lg:ml-8 max-w-[470px]">
					<form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
						<div className="sm:flex">
							<div className="min-w-0 flex-1">
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input
									id="email"
									type="email"
									placeholder="Ваша почта"
									className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mainBlueDarker focus:ring-offset-2 focus:ring-offset-gray-900"
								/>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<button
									type="submit"
									className="block w-full rounded-md bg-mainBlue py-3 px-4 font-medium text-white shadow hover:bg-mainBlueDarker focus:outline-none focus:ring-2 focus:ring-mainBlueDarker focus:ring-offset-2 focus:ring-offset-gray-900"
								>
									Заказать сайт
								</button>
							</div>
						</div>
						<p className="mt-3 text-sm text-gray-300 sm:mt-2">
							Оставьте свою почту, и мы отправим вам <a href="#" className="font-medium text-white">бриф</a> для заполнения
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
export default HPCta;
