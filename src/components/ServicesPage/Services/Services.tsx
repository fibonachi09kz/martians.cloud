'use client'
import {services} from "@/data/services";
import ServiceSingle from "@/components/ServicesPage/Services/ServiceSingle";

const Services = () => {

	let colorsGenerator = [
		'bg-blue-700 bg-blue-200 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
		'bg-purple-700 bg-purple-200 dark:bg-purple-950 text-purple-700 dark:text-purple-300',
		'bg-emerald-700 bg-emerald-200 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
		'bg-rose-700 bg-rose-200 dark:bg-rose-950 text-rose-700 dark:text-rose-300',
		'bg-orange-700 bg-orange-200 dark:bg-orange-950 text-orange-700 dark:text-orange-300',
		'bg-sky-700 bg-sky-200 dark:bg-sky-950 text-sky-700 dark:text-sky-300',
		'w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-12',
		'md:w-14 md:h-14'
	]

	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sr-only">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Услуги</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Наша команда готова предложить обширный список решений</p>
					</div>
				</div>

				<div className="px-5 max-w-screen-2xl mx-auto">

					{services.map(service => (
						<ServiceSingle key={service.id} service={service}/>
					))}

				</div>
			</div>
		</section>
	)
}
export default Services;
