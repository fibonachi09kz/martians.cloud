'use client'
import Link from "next/link";
import {Icon} from "@iconify/react";
import {Button} from "@nextui-org/react";

const services = [
  {
    name: 'Разработка логотипа',
    href: '#',
    description:
      'Разработка уникальных логотипов, которые идеально отражают идеи и ценности вашего бренда',
      icon: (classes?: string) => <Icon icon="icon-park-outline:graphic-design-two" className={classes} />
  },
  {
    name: 'Разработка фирменного стиля',
    href: '#',
    description:
      'Комплексное создание фирменного стиля, включая логотип, цветовую палитру, типографику и другие элементы',
      icon: (classes?: string) => <Icon icon="material-symbols:style-outline" className={classes} />
  },
  {
    name: 'Дизайн презентаций',
    href: '#',
    description:
      'Создание эффективных презентаций, помогая вам профессионально и убедительно представить вашу информацию и идеи',
      icon: (classes?: string) => <Icon icon="mingcute:presentation-1-line" className={classes} />
  },
]

const DesignAlso = () => {
    return (
        <div className="bg-white dark:bg-black">
            <div className="relative pb-32 bg-gray-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-zinc-800 mix-blend-multiply" aria-hidden="true"/>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Фирменный дизайн</h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Создаем уникальный и запоминающийся облик вашего бренда. Это поможет вашему бизнесу выделиться на фоне конкурентов и запомниться клиентам
                    </p>
                </div>
            </div>

            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Фирменный дизайн
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {services.map((service) => (
                        <div key={service.name} className="flex flex-col bg-white rounded-2xl shadow-xl dark:bg-zinc-900">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-3 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">
                                    {service.icon('w-8 h-8 text-white')}
                                </div>
                                <h3 className="text-xl font-medium text-black dark:text-white">{service.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{service.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <Button
                                    href="#flex-contact-form"
                                    as={Link}
                                    color="primary"
                                    size="md"
                                    variant="flat"
                                    className="text-base font-medium"
                                >
                                    Заказать
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default DesignAlso;
