'use client';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {Button, Input, Textarea, Select, SelectItem} from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import * as Yup from 'yup';
import {useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import wp from '@/components/ContactsPage/media/socials/wp.svg';
import tg from '@/components/ContactsPage/media/socials/tg.svg';
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import {Service} from "@/types/Services";
import {services} from "@/data/services";
import {useMaskito} from '@maskito/react';
import options from '@/data/mask';
import {contactTypeValues} from "@/data/contactTypes";
import {Icon} from "@iconify/react";


const socials = [
	{
		id: 1,
		title: 'WhatsApp',
		subtitle: '+7 (777) 300-35-60',
		link: 'https://wa.me/77773003560',
		image: wp
	},
	{
		id: 2,
		title: 'Telegram',
		subtitle: '@MartiansStudio',
		link: 'https://t.me/MartiansStudio',
		image: tg
	},
]

interface IFlexContactFormProps {
	service?: Service;
	contactType?: string;
}

const FlexContactForm = ({service = 'Разработка сайтов', contactType = 'Написать в WhatsApp'}: IFlexContactFormProps) => {

	const form = useRef<HTMLFormElement | null>(null);

	const [sending, setSending] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const maskedInputRef = useMaskito({options});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			telegram: '',
			service: service || '',
			contactType: contactType || ''
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Введите имя'),
			email: Yup.string()
				.email('Введите корректный email')
				.required('Введите email'),
			phone: Yup.string()
				.min(15, 'Введите правильный номер телефона')
				.required('Введите телефон'),
			telegram: Yup.string(),
			service: Yup.string()
				.required('Выберите услугу'),
			contactType: Yup.string()
				.required('Выберите вариант связи'),
		}),
		onSubmit: (values, { resetForm }) => {
			if (form.current) {
				setSending(true);
				console.log(values)
				emailjs.sendForm('service_quusgcr', 'template_2n2rjn6', form.current, 'xcwo1QmAs0v-GIw8-')
					.then((result) => {
						setSending(false)
						setError(false)
						setSuccess(true)
						resetForm();
					}, (error) => {
						setSending(false)
						setError(true)
						setSuccess(false)
					});
			}
		}
	});


	return (
		<div className="relative bg-white dark:bg-black my-12 sm:my-24 sm:border rounded-md border-gray-200 dark:border-white/20 max-w-7xl mx-auto" id="flex-contact-form">
			<div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-6">
				<div className="sm:py-12 px-0 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12 sm:border-r border-gray-300 dark:border-white/20">
					<div className="mx-auto max-w-lg">
						<h1 className="text-3xl font-bold text-black dark:text-white tracking-tight sm:text-4xl">Оставить заявку</h1>
						<p className="mt-3 text-lg leading-6 text-gray-600 dark:text-gray-400">
							Оставьте заявку и наш менеджер свяжется с вами в ближайшее время
						</p>
						<div className="grid grid-cols-1 gap-4 mt-8">
							{socials.map((social) => (
								<div
									key={social.id}
									className="relative transition-all flex items-center space-x-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-black px-3 py-2 focus-within:ring-2 focus-within:ring-mainBlue focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-black hover:border-gray-400 dark:hover:border-gray-400"
								>
									<div className="flex-shrink-0">
										<Image className="h-8 w-8 rounded-md" width={32} height={32} src={social.image} alt="Social image" />
									</div>
									<div className="min-w-0 flex-1">
										<Link href={social.link} rel="noorefferer" target="_blank" className="focus:outline-none">
											<span className="absolute inset-0" aria-hidden="true" />
											<p className="text-sm font-medium text-gray-900 dark:text-white">{social.title}</p>
											<p className="truncate text-sm text-gray-600 dark:text-gray-400">{social.subtitle}</p>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="py-12 sm:px-6 lg:col-span-4 lg:px-8 xl:pl-12">
					<div className="mx-auto max-w-lg lg:max-w-none">
						<form ref={form} onSubmit={formik.handleSubmit} className="grid lg:grid-cols-2 gap-6" >
							<div>
								<label htmlFor="name" className="sr-only">
									Ваше имя
								</label>
								<Input
									aria-labelledby="Ваше имя"
									size="sm"
									variant="bordered"
									id="full-name"
									name="name"
									placeholder="Ваше имя"
									type="text"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.name}
									isInvalid={!!formik.touched.name && !!formik.errors.name}
									classNames={{
										inputWrapper: 'border-1',
										input: 'text-base'
									}}
								/>
								{formik.touched.name && formik.errors.name ? (
									<div className="text-sm text-danger">{formik.errors.name}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="email" className="sr-only">
									Ваш Email
								</label>
								<Input
									aria-labelledby="Ваш Email"
									size="sm"
									variant="bordered"
									id="email"
									name="email"
									placeholder="Ваш Email"
									type="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									isInvalid={!!formik.touched.email && !!formik.errors.email}
									classNames={{
										inputWrapper: 'border-1',
										input: 'text-base'
									}}
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className="text-sm text-danger">{formik.errors.email}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="phone" className="sr-only">
									Phone
								</label>
								<Input
									aria-labelledby="Ваш телефон"
									size="sm"
									variant="bordered"
									id="phone"
									name="phone"
									placeholder="Ваш телефон"
									type="tel"
									onInput={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phone}
									isInvalid={!!formik.touched.phone && !!formik.errors.phone}
									classNames={{
										inputWrapper: 'border-1',
										input: 'text-base'
									}}
									ref={maskedInputRef}
								/>
								{formik.touched.phone && formik.errors.phone ? (
									<div className="text-sm text-danger">{formik.errors.phone}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="telegram" className="sr-only">
									Telegram
								</label>
								<Input
									aria-labelledby="Ваш Telegram"
									size="sm"
									variant="bordered"
									id="telegram"
									name="telegram"
									placeholder="Ваш Telegram"
									type="text"
									startContent={<Icon icon="ph:at" className="w-5 h-5 flex-none text-gray-700 dark:text-gray-50" />}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.telegram}
									isInvalid={!!formik.touched.telegram && !!formik.errors.telegram}
									classNames={{
										inputWrapper: 'border-1',
										input: 'text-base'
									}}
								/>
								{formik.touched.telegram && formik.errors.telegram ? (
									<div className="text-sm text-danger">{formik.errors.telegram}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="service" className="sr-only">
									Услуга
								</label>
								<Select
									aria-labelledby="Выберите услугу"
									size="sm"
									variant="bordered"
									placeholder="Выберите услугу"
									className=""
									name="service"
									selectionMode="single"
									defaultSelectedKeys={[service]}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={[formik.values.service]}
									isInvalid={!!formik.touched.service && !!formik.errors.service}
									classNames={{
										trigger: 'border-1',
										value: 'text-base text-gray-900 dark:text-gray-50',
										popoverContent: 'duration-150'
									}}
								>
									{services.map((service) => (
										<SelectItem key={service.name} textValue={service.name}>
											<div className="flex gap-1.5 items-center">
												{service.listIcon()}
												{service.name}
											</div>
										</SelectItem>
									))}
								</Select>
								{formik.touched.service && formik.errors.service ? (
									<div className="text-sm text-danger">{formik.errors.service}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="contactType" className="sr-only">
									Тип связи
								</label>
								<Select
									aria-labelledby="Как с вами связаться"
									size="sm"
									variant="bordered"
									placeholder="Как с вами связаться"
									className=""
									name="contactType"
									selectionMode="single"
									defaultSelectedKeys={[contactType]}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={[formik.values.contactType]}
									isInvalid={!!formik.touched.contactType && !!formik.errors.contactType}
									classNames={{
										trigger: 'border-1',
										value: 'text-base text-gray-900 dark:text-gray-50',
										popoverContent: 'duration-150'
									}}
								>
									{contactTypeValues.map(type => (
										<SelectItem key={type.title} value={type.title}>
											{type.title}
										</SelectItem>
									))}
								</Select>
								{formik.touched.contactType && formik.errors.contactType ? (
									<div className="text-sm text-danger">{formik.errors.contactType}</div>
								) : null}
							</div>

							<p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">Отправляя данную форму, вы подтверждаете, что согласны с <Link href="" className="text-primary">политикой конфиденциальности</Link></p>
							<div className="flex-col sm:flex-row gap-5 flex items-center justify-between">
								<Button
									color="primary"
									type="submit"
									isLoading={sending}
									className="ml-auto"
								>
									Отправить
								</Button>
							</div>
							{success && !sending ? (
								<p className="flex gap-1 items-center text-green-600 dark:text-green-500 py-1 px-2 w-fit text-sm rounded-md bg-green-100 dark:bg-green-950 border border-green-600 dark:border-green-500">
									<CheckCircleIcon className="h-5 w-5" />
									Сообщение успешно отправлено
								</p>
							): null}
							{error && !sending ? (
								<p className="flex gap-1 items-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-sm rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
									<ExclamationTriangleIcon className="h-5 w-5" />
									Сообщение не отправлено, попробуйте позднее
								</p>
							): null}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlexContactForm;
