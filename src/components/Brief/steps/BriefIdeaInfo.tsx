import {Button, Input} from "@nextui-org/react";
import React, {useEffect, useRef} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import Link from "next/link";
import {RadioGroup, Radio, cn} from "@nextui-org/react";
import {AriaRadioProps} from "@react-types/radio";

type Props = {
	handleSetBriefData: (data: {}) => void;
	setNextStep: () => void;
	setPrevStep: () => void;
	currentStep: number;
}

export const CustomRadio = (props: any) => {
	const {children, ...otherProps} = props;

	return (
		<Radio
			{...otherProps}
			classNames={{
				base: cn(
					"flex m-0 bg-content1 hover:bg-gray-50 items-center justify-between",
					"flex-row-reverse w-full max-w-none sm:max-w-[400px] cursor-pointer rounded-lg gap-4 p-2 border border-gray-200",
					"data-[selected=true]:border-primary data-[selected=true]:bg-primary/5"
				),
				description: "font-light"
			}}
		>
			{children}
		</Radio>
	);
};

const BriefIdeaInfo = ({ handleSetBriefData, setNextStep, setPrevStep, currentStep }: Props) => {

	const form = useRef<HTMLFormElement | null>(null);
	const formik = useFormik({
		initialValues: {
			"project-name": '',
			"project-type": '',
		},
		validationSchema: Yup.object({
			"project-name": Yup.string()
				.required('Введите название проекта'),
			"project-type": Yup.string()
				.required('Выберите тип проекта'),
		}),
		onSubmit: (values, {resetForm}) => {
			if (form.current) {
				handleSetBriefData({ ideaInfo: values })
				setNextStep()
				localStorage.setItem('briefIdeaInfo', JSON.stringify(values));
			}
		},

	})

	useEffect(() => {
		const memorizedData = localStorage.getItem('briefIdeaInfo');
		if (memorizedData) {
			formik.setValues(JSON.parse(memorizedData));
		}
	}, [])

	return (
		<form ref={form} onSubmit={formik.handleSubmit} >
			<div className="mt-10 bg-white dark:bg-black border border-gray-300 dark:border-white/20 sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-xl font-medium leading-6 text-gray-900">Информация о вашем проекте</h3>
					<p className="mt-1 text-base text-gray-500">Расскажите немного детальнее о том, какой проект вы хотите реализовать</p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl className="sm:divide-y sm:divide-gray-200">
						<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 items-center">
							<dt className="text-base font-medium text-gray-500">Название проекта</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<Input
									size="sm"
									type="text"
									variant="bordered"
									placeholder="Simply App"
									id="project-name"
									name="project-name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values['project-name']}
									isInvalid={!!formik.touched['project-name'] && !!formik.errors['project-name']}
									classNames={{
										inputWrapper: 'border-1 sm:max-w-sm h-[40px]',
										input: 'text-base placeholder:text-slate-400 placeholder:font-light',
									}}
								/>
							</dd>
						</div>
						<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
							<dt className="text-base font-medium text-gray-500">Тип проекта</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<RadioGroup
									classNames={{
										wrapper: "grid md:grid-cols-2 gap-4"
									}}
									name="project-type"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values['project-type']}
									isInvalid={!!formik.touched['project-type'] && !!formik.errors['project-type']}
								>
									<CustomRadio value="site" description="Лендинг, интернет-магазин, корпоративный сайт, платформа и т.д.">
										Сайт
									</CustomRadio>
									<CustomRadio value="mobile-app" description="Интернет-магазин, сервис доставки, приложение для фитнеса и т.д.">
										Мобильное приложение
									</CustomRadio>
									<CustomRadio value="design" description="Логотип, бренд-бук, макет для сайта или приложение и т.д.">
										Дизайн
									</CustomRadio>
									<CustomRadio value="another" description="Сервис, разработка API, правки в проектах и т.д.">
										Другое
									</CustomRadio>
								</RadioGroup>
							</dd>
						</div>


					</dl>
				</div>

			</div>
			<div className="mt-5 flex items-center justify-between">
				<div className="flex justify-between gap-5 items-center">
					{currentStep >= 2 ?
						(
							<Button
								color="default"
								radius="sm"
								variant="bordered"
								className="text-base font-medium border-1"
								onClick={setPrevStep}
							>
								Назад
							</Button>
						)
						:
						null
					}
				</div>
				<Button
					color="primary"
					type="submit"
					radius="sm"
					className="text-base font-medium ml-auto"
				>
					Далее
				</Button>
			</div>
		</form>
	)
}
export default BriefIdeaInfo;
