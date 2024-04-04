import {ServiceInterface} from "@/types/ServicesTypes";
import {Button, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

type Props = {
	service: ServiceInterface
}
const ServiceSingle = ({service}: Props) => {

	return (
		<div key={service.id} className="mb-12 bg-gray-100 dark:bg-zinc-900 rounded-2xl p-6 md:p-12 relative overflow-hidden">
			{service.id % 2 === 1 ? (
				<>
					<span className={`absolute w-48 h-48 right-0 bottom-0 bg-${service.mainColor}-700 blur-3xl translate-x-16 translate-y-16 opacity-80`}></span>
					<span className={`absolute w-48 h-48 left-0 top-0 bg-${service.mainColor}-700 blur-3xl -translate-x-16 -translate-y-16 opacity-80`}></span>
				</>
			) : (
				<>
					<span className={`absolute w-48 h-48 right-0 top-0 bg-${service.mainColor}-700 blur-3xl translate-x-16 -translate-y-16 opacity-80`}></span>
					<span className={`absolute w-48 h-48 left-0 bottom-0 bg-${service.mainColor}-700 blur-3xl -translate-x-16 translate-y-16 opacity-80`}></span>
				</>
			)}
			<div className="max-w-4xl mx-auto z-20 relative">
				{service.icon()}
				<h2 className="text-2xl md:text-4xl text-black dark:text-white font-extrabold text-center uppercase">{service.name}</h2>
				<p className="text-sm md:text-lg mt-3 md:mt-5 text-gray-700 dark:text-gray-300 text-center">{service.description}</p>
			</div>
			<div
				className="flex flex-col mt-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
				<Button
					href={service.detailLink}
					as={Link}
					color="default"
					variant="flat"
					size="md"
					className={`bg-${service.mainColor}-200 text-base font-medium text-${service.mainColor}-700 dark:bg-${service.mainColor}-950 dark:text-${service.mainColor}-300`}
				>
					Подробнее
					<Icon className="text-xl" icon="icon-park-outline:more-app"/>
				</Button>
				<Button
					href="/technologies"
					as={Link}
					color="default"
					size="md"
					className={`bg-${service.mainColor}-700 text-base font-medium text-white`}
				>
					Заказать
					<Icon className="text-2xl" icon="solar:cart-large-2-bold-duotone"/>
				</Button>
			</div>
		</div>
	)
}
export default ServiceSingle;
