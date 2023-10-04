'use client';

import {Cog6ToothIcon, EnvelopeIcon, ExclamationTriangleIcon, PhoneIcon} from '@heroicons/react/24/outline'
import Input from "@/components/UI/Input";
import Textarea from "@/components/UI/Textarea";
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import * as Yup from 'yup';
import {useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import wp from './media/socials/wp.svg';
import tg from './media/socials/tg.svg';
import {CheckCircleIcon} from "@heroicons/react/20/solid";


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

const ContactsForm = () => {

    const form = useRef<HTMLFormElement | null>(null);

    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Введите имя'),
            email: Yup.string()
                .email('Введите корректный email')
                .required('Введите email'),
            phone: Yup.string()
                .required('Введите телефон'),
            message: Yup.string()
                .required('Введите сообщение'),
        }),
        onSubmit: (values, { resetForm }) => {
            if (form.current) {
                setSending(true);
                emailjs.sendForm('service_quusgcr', 'template_4d15206', form.current, 'xcwo1QmAs0v-GIw8-')
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
        <div className="relative bg-white dark:bg-black my-12 sm:my-24 sm:border rounded-md border-gray-300 dark:border-white/20 max-w-7xl mx-auto">
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="sm:py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12 sm:border-r border-gray-300 dark:border-white/20">
                    <div className="mx-auto max-w-lg">
                        <h1 className="text-3xl font-bold text-black dark:text-white tracking-tight sm:text-4xl">Связаться с нами</h1>
                        <p className="mt-3 text-lg leading-6 text-gray-600 dark:text-gray-400">
                            Мы поможем вам подобрать правильный тарифный план и стратегию для вашего бизнеса.
                        </p>
                        {/*<dl className="mt-8 text-base text-gray-600 dark:text-gray-400">*/}
                        {/*    <div className="mt-6">*/}
                        {/*        <dt className="sr-only">Phone number</dt>*/}
                        {/*        <dd className="flex">*/}
                        {/*            <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-gray-400" aria-hidden="true" />*/}
                        {/*            <Link href="tel:+77773003560" className="ml-3">+7 (777) 300-35-60</Link>*/}
                        {/*        </dd>*/}
                        {/*    </div>*/}
                        {/*    <div className="mt-3">*/}
                        {/*        <dt className="sr-only">Email</dt>*/}
                        {/*        <dd className="flex">*/}
                        {/*            <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-gray-400" aria-hidden="true" />*/}
                        {/*            <Link href="mailto:top@martians.cloud" className="ml-3">top@martians.cloud</Link>*/}
                        {/*        </dd>*/}
                        {/*    </div>*/}
                        {/*</dl>*/}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
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
                <div className="py-12 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form ref={form} onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-y-6" >
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Ваше имя
                                </label>
                                <Input
                                    id="full-name"
                                    name="name"
                                    placeholder="Ваше имя"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className={formik.errors.name ? 'border-red-500 dark:!border-red-500' : ''}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-sm text-red-500">{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Ваш Email
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Ваш Email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={formik.errors.email ? 'border-red-500 dark:!border-red-500' : ''}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-sm text-red-500">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="Ваш телефон"
                                    type="tel"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    className={formik.errors.phone ? 'border-red-500 dark:!border-red-500' : ''}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className="text-sm text-red-500">{formik.errors.phone}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Ваше сообщение"
                                    rows={4}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                    className={formik.errors.message ? 'border-red-500 dark:!border-red-500' : ''}
                                />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="text-sm text-red-500">{formik.errors.message}</div>
                                ) : null}
                            </div>
                            <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">Отправляя данную форму, вы подтверждаете, что согласны с <a href="" className="text-mainBlue hover:text-mainBlueDarker ">политикой конфиденциальности</a></p>
                            <div className="flex-col sm:flex-row gap-5 flex items-center justify-between">
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

                                <button
                                    type="submit"
                                    className="button button-blue disabled:cursor-not-allowed sm:ml-auto"
                                    disabled={sending}
                                >
                                    {sending ? (
                                        <Cog6ToothIcon className="h-6 w-6 animate-spin duration-700" />
                                    ): null}
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsForm;
