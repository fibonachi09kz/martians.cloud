
 interface IServicePageTitleProps {
	title: string;
	subtitle?: string;
 }
const ServicePageTitle = ({title, subtitle}: IServicePageTitleProps) => {
	return (
		<div className="py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">{title}</h1>
					{subtitle && <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>}
				</div>
			</div>
		</div>
	)
}
 export default ServicePageTitle;
