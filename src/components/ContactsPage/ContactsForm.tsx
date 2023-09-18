import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Input from "@/components/UI/Input";
import Textarea from "@/components/UI/Textarea";

const ContactsForm = () => {
    return (
        <div className="relative bg-white dark:bg-black my-24 border rounded-md border-white/20 max-w-7xl mx-auto">
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 border-r border-white/20">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight sm:text-4xl">Связаться с нами</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-400">
                            Мы поможем вам подобрать правильный тарифный план и стратегию для вашего бизнеса.
                        </p>
                        <dl className="mt-8 text-base text-gray-400">
                            <div>
                                <dt className="sr-only">Postal address</dt>
                                <dd>
                                    <p>742 Evergreen Terrace</p>
                                    <p>Springfield, OR 12345</p>
                                </dd>
                            </div>
                            <div className="mt-6">
                                <dt className="sr-only">Phone number</dt>
                                <dd className="flex">
                                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">+1 (555) 123-4567</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">support@example.com</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Ваше имя
                                </label>
                                <Input id="full-name" name="full-name" placeholder="Ваше имя" type="text" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Ваш Email
                                </label>
                                <Input id="email" name="email" placeholder="Ваш Email" type="email" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">
                                    Phone
                                </label>
                                <Input id="phone" name="phone" placeholder="Ваш телефон" type="tel" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <Textarea id="message" name="message" placeholder="Ваше сообщение" rows={4} />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-green-500 py-1 px-2 w-fit text-sm rounded-md bg-green-950 border border-green-500">Сообщение успешно отправлено</p>
                                <button
                                    type="submit"
                                    className="button button-blue"
                                >
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