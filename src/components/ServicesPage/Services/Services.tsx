'use client'
import {services} from "@/data/services";
import ServiceSingle from "@/components/ServicesPage/Services/ServiceSingle";

const Services = () => {

	let flowers = "bg-blue-200 bg-blue-300 bg-blue-700 bg-blue-900 text-blue-200 text-blue-300 text-blue-700 text-blue-900"

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
						<ServiceSingle key={service.id} service={service} />
					))}

				</div>
			</div>
		</section>
	)
}
export default Services;
