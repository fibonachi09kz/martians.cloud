'use client'
import {Button, Checkbox, Input, Link} from "@nextui-org/react";

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
					<form action="#" className="">
						<div className="sm:flex">
							<div className="min-w-0 flex-1">
								<Input
									size="sm"
									type="email"
									placeholder="Введите свой email"
									variant="bordered"
									classNames={{
										inputWrapper: 'border-1',
										input: 'text-base'
									}}
								/>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<Button
									size="lg"
									radius="sm"
									color="primary"
									className="text-base font-medium"
									type="button"
								>
									Заказать сайт
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default HPCta;
