import {useRef, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {Button, Input, Link} from "@nextui-org/react";
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";

const HPCtaForm = () => {

	const form = useRef<HTMLFormElement | null>(null);

	const [sending, setSending] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Введите корректный email')
				.required('Введите email')
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
						setTimeout(() => {
							setSuccess(false)
						}, 3000)
					}, (error) => {
						setSending(false)
						setError(true)
						setSuccess(false)
					});
			}
		}
	});


	return (
		<form ref={form} onSubmit={formik.handleSubmit} action="#">
			<div className="sm:flex">
				<div className="min-w-0 flex-1">
					<Input
						size="sm"
						type="email"
						placeholder="Введите свой email"
						variant="bordered"
						id="email"
						name="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						isInvalid={!!formik.touched.email && !!formik.errors.email}
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
						className="text-base font-medium w-full sm:w-auto"
						type="submit"
						isLoading={sending}
						spinner={
							<div className="relative flex w-6 h-6"><i
								className="absolute w-full h-full rounded-full animate-spinner-ease-spin border-solid border-t-transparent border-l-transparent border-r-transparent border-2 border-b-current"></i><i
								className="absolute w-full h-full rounded-full opacity-75 animate-spinner-linear-spin border-dotted border-t-transparent border-l-transparent border-r-transparent border-2 border-b-current"></i>
							</div>
						}
					>
						Заказать сайт
					</Button>
				</div>
			</div>
			<div className="mt-2">
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
			</div>
			<p className="mt-3 text-sm text-gray-600 dark:text-gray-300 sm:mt-4">
				Оставьте свою почту, и мы отправим вам  <Link href="#" className="font-medium text-sm">бриф</Link> для заполнения, чтобы создать общее представление о вашем проекте
			</p>
		</form>
	)
}

export default HPCtaForm;
