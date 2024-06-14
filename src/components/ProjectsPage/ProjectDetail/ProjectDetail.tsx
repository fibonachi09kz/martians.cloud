'use client'
import {Project} from "@/types/Project";
import {Button, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import ProjectDetailSlider from "@/components/ProjectsPage/ProjectDetail/ProjectDetailSlider/ProjectDetailSlider";

interface IProjectDetailProps {
	project: Project
}
const ProjectDetail = ({ project }: IProjectDetailProps) => {
	return (
		<section className="py-8 md:py-16 antialiased">
			<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
					<div className="shrink-0 max-w-lg lg:max-w-none lg:w-full mx-auto">
						<ProjectDetailSlider images={project.acf.gallery} />
					</div>

					<div className="mt-6 sm:mt-8 lg:mt-0">
						<h1 className="text-xl font-semibold text-gray-900 sm:text-3xl dark:text-white uppercase">
							{project.title.rendered}
						</h1>
						<div className="text-base text-gray-800 dark:text-gray-400 mt-2">{project.acf["small-descr"]}</div>
						<div className="mt-6 sm:items-center sm:gap-4 sm:flex border-l-2 border-primary pl-2">
							<p className="text-base font-medium leading-none text-gray-500 dark:text-gray-400">
								ООО Югралифт
							</p>
							<Link href={project.acf.url} target="_blank" className="flex items-center gap-1">
								<Icon icon="radix-icons:link-1" className="w-5 h-5" />
								<span className="-translate-y-[1px]">{project.acf.domain}</span>
							</Link>
						</div>

						<div className="mt-4 gap-4 items-center flex sm:mt-6 flex-wrap">
							<Button
								href="#flex-contact-form"
								as={Link}
								color="primary"
								size="md"
								className="text-base font-medium"
							>
								Хочу такой же!

							</Button>
							<Button
								href={project.acf.url}
								target="_blank"
								as={Link}
								color="primary"
								variant="flat"
								size="md"
								className="text-base font-medium"
							>
								Перейти на сайт
								<Icon icon="gridicons:external" className="w-6 h-6" />
							</Button>
						</div>

						<hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

						<div className="mb-6 text-gray-500 dark:text-gray-400 prose blog-content" dangerouslySetInnerHTML={{ __html: project.acf["detail-descr"]}}></div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ProjectDetail;
