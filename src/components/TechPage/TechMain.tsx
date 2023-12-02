import TechSingle from "@/components/TechPage/TechSingle";
import {TechnologyInterface} from "@/types/Technology";

type Props = {
	technologies: TechnologyInterface[]
}

const TechMain = ({ technologies }: Props) => {

	const typesSet: Set<string> = new Set(technologies.map((tech: TechnologyInterface) => {
		return tech.acf.type.name
	}))
	const types = [...typesSet];

	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Технологии</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Технологии, которые наша команда использует в разработке продуктов</p>
					</div>
				</div>

				<div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
					{types.map((type: string) => (
						<div>
							<h3 className="text-xl font-light mb-3">{type}</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-5">
								{technologies.filter((tech: TechnologyInterface) => tech.acf.type.name === type).map((technology: TechnologyInterface) => (
									<TechSingle key={technology.id} technology={technology} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default TechMain;
