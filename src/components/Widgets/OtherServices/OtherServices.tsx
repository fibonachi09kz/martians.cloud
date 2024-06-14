'use client'
import {services} from "@/data/services";
import Link from "next/link";

const OtherServices = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 py-24">
			<div className="max-w-3xl mx-auto mb-12">
				<h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Другие наши услуги</h2>
			</div>
			<div className="flex flex-wrap justify-center gap-4">
				{services.map(service => (
					<Link href={`/services${service.detailLink}`} key={service.id} className="px-3 py-2 rounded-2xl whitespace-nowrap flex items-center gap-1.5 text-base border bg-white dark:bg-black hover:border-primary dark:border-white/20 dark:hover:border-primary">
						{service.listIcon('w-6 h-6 flex-none text-current')}
						<span>{service.name}</span>
					</Link>
				))}
			</div>
		</section>
	)
}
export default OtherServices;
