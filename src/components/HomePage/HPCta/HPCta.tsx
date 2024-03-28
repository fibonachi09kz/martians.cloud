'use client'
import HPCtaForm from "@/components/HomePage/HPCta/HPCtaForm";

interface Props {
	isLastBlock?: boolean
}
const HPCta = ({ isLastBlock }: Props) => {
	return (
		<div className={`border-y border-gray-300 dark:border-white/20 bg-white dark:bg-black ${isLastBlock ? "border-b-0" : ""}`}>
			<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
				<div className="lg:w-0 lg:flex-1 max-w-[550px] mr-auto">
					<h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl" id="order-site">
						Закажите сайт сегодня
					</h2>
					<p className="mt-3 max-w-3xl text-lg leading-6 text-gray-600 dark:text-gray-300">
						Закажите профессиональный сайт, который привлечет внимание и поможет достичь ваших целей!
					</p>
				</div>
				<div className="mt-8 lg:mt-0 lg:ml-8 w-full max-w-[470px]">
					<HPCtaForm />
				</div>
			</div>
		</div>
	)
}
export default HPCta;
