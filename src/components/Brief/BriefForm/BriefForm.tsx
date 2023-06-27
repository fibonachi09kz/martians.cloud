'use client';

import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import BriefInput from "@/components/Brief/BriefInput/BriefInput";
import { fields } from "@/components/Brief/data";

const validationSchema = Yup.object({
	firstName: Yup.string().required('First Name is required'),
	lastName: Yup.string().required('Last Name is required'),
	projectName: Yup.string().required('Project Name is required'),
	projectDomain: Yup.string().required('Project Domain is required'),
});

const initialValues = {

}










const BriefForm = () => {

	const handleSubmit = () => {
		console.log('aa')
	}

	return (
		<div className="bg-white flex-1">
			<div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="pt-12 sm:pt-16 lg:pt-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
								Заполнение брифа
							</h2>
							<p className="mt-4 text-xl text-gray-400">
								Расскажите нам о вашем проекте
							</p>
						</div>
					</div>
				</div>
				<p className="my-4 text-sm text-gray-500 text-left">
					<span className="text-mainBlue font-medium">Бриф</span> - это документ, который поможет нам лучше понять ваши потребности, цели и ожидания от проекта. Он содержит основную информацию о вашей компании, целевой аудитории, предпочтениях дизайна, функциональных требованиях и других важных аспектах. Заполняя бриф, вы помогаете нам создать наиболее точное представление о том, каким должен быть ваш сайт или проект. Это ключевой инструмент, который обеспечивает успешное взаимодействие между вами и нашей командой, чтобы достичь ваших целей и создать продукт, который отвечает вашим ожиданиям.
				</p>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{ ( formik ) => (
						<Form className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
							{fields.map(field => (
								<BriefInput key={field.id} field={field} />
							))}
							<div className="flex col-span-2">
								<button type="submit" className="button button-blue ml-auto">Отправить бриф</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default BriefForm;
