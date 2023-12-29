import {PaperClipIcon} from "@heroicons/react/20/solid";
import {Button, Input} from "@nextui-org/react";
import Link from "next/link";
import React, {useEffect, useRef} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

type Props = {
	handleSetBriefData: (data: {}) => void;
	setNextStep: () => void;
	setPrevStep: () => void;
	currentStep: number;
}

const BriefMainInfo = ({ handleSetBriefData, setNextStep, setPrevStep, currentStep }: Props) => {
	const form = useRef<HTMLFormElement | null>(null);
	const formik = useFormik({
		initialValues: {
			"company-name": '',
			fio: '',
			email: '',
			"company-type": ''
		},
		validationSchema: Yup.object({
			"company-name": Yup.string()
				.required('Введите название компании'),
			fio: Yup.string()
				.required('Введите фио'),
			email: Yup.string()
				.email('Введите корректный email')
				.required('Введите email'),
			"company-type": Yup.string()
				.required('Введите направление деятельности'),

		}),
		onSubmit: (values, {resetForm}) => {
			if (form.current) {
				handleSetBriefData({ mainInfo: values })
				setNextStep()
				localStorage.setItem('briefMainInfo', JSON.stringify(values));
			}
		},

	})

	useEffect(() => {
		const memorizedData = localStorage.getItem('briefMainInfo');
		if (memorizedData) {
			formik.setValues(JSON.parse(memorizedData));
		}
	}, [])


	return (
		<form ref={form} onSubmit={formik.handleSubmit} >
			<div className="mt-10 bg-white dark:bg-black border border-gray-300 dark:border-white/20 sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-xl font-medium leading-6 text-gray-900">Информация о компании</h3>
					<p className="mt-1 text-base text-gray-500">Расскажите немного детальнее о том, чем вы занимаетесь</p>
					<p className="mt-2 text-sm text-gray-500">* Заполняя данную форму, вы автоматически соглашаетесь с условиями <Link href="/" className="text-primary">политики конфиденциальности</Link></p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl className="sm:divide-y sm:divide-gray-200">
						<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 items-center">
							<dt className="text-base font-medium text-gray-500">Название компании</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<Input
									size="sm"
									type="text"
									variant="bordered"
									placeholder="ТОО ОптПром "
									id="company-name"
									name="company-name"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values['company-name']}
									isInvalid={!!formik.touched['company-name'] && !!formik.errors['company-name']}
									classNames={{
										inputWrapper: 'border-1 max-w-sm h-[40px]',
										input: 'text-base placeholder:text-slate-400 placeholder:font-light',
									}}
								/>
							</dd>
						</div>
						<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 items-center">
							<dt className="text-base font-medium text-gray-500">Ваше ФИО</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<Input
									size="sm"
									type="text"
									variant="bordered"
									placeholder="Иван Петров"
									id="fio"
									name="fio"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.fio}
									isInvalid={!!formik.touched.fio && !!formik.errors.fio}
									classNames={{
										inputWrapper: 'border-1 max-w-sm h-[40px]',
										input: 'text-base placeholder:text-slate-400 placeholder:font-light',
									}}
								/>
							</dd>
						</div>
						<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 items-center">
							<dt className="text-base font-medium text-gray-500">Ваш email</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<Input
									size="sm"
									type="email"
									placeholder="test@email.com"
									variant="bordered"
									id="email"
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									isInvalid={!!formik.touched.email && !!formik.errors.email}
									classNames={{
										inputWrapper: 'border-1 max-w-sm h-[40px]',
										input: 'text-base placeholder:text-slate-400 placeholder:font-light',
									}}
								/>
							</dd>
						</div>
						<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6 items-center">
							<dt className="text-base font-medium text-gray-500">Направление деятельности</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<Input
									size="sm"
									type="text"
									placeholder="Логистика"
									variant="bordered"
									id="company-type"
									name="company-type"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values['company-type']}
									isInvalid={!!formik.touched['company-type'] && !!formik.errors['company-type']}
									classNames={{
										inputWrapper: 'border-1 max-w-sm h-[40px]',
										input: 'text-base placeholder:text-gray-400 placeholder:font-light',
									}}
								/>
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
export default BriefMainInfo;
