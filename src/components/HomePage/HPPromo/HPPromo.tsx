import {ChevronRightIcon} from "@heroicons/react/20/solid";

const HPPromo = () => {
	return (
		<div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8">
					<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
						<div className="lg:py-24">
							<a
								href="#"
								className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
							>
								<span className="rounded-full bg-mainBlue px-3 py-0.5 text-sm font-semibold leading-5 text-white">
								  Martians.kz
								</span>
								<span className="ml-4 text-sm">Подробнее о компании</span>
								<ChevronRightIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
							</a>
							<h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
								<span className="block">Разработка сайтов</span>
								<span className="block text-mainBlue">в Казахстане</span>
							</h1>
							<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								Наша компания специализируется на создании современных, быстрых, а главное - индивидуальных сайтов
							</p>
							<div className="mt-10 sm:mt-12">
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
												Оставить заявку
											</button>
										</div>
									</div>
									<p className="mt-3 text-sm text-gray-300 sm:mt-4">
										Оставьте свою почту, и мы отправим вам <a href="#" className="font-medium text-white">бриф</a> для заполнения, чтобы создать общее представление о вашем проекте
									</p>
								</form>
							</div>
						</div>
					</div>
					<div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
						<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
							{/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
							<img
								className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
								src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HPPromo;
