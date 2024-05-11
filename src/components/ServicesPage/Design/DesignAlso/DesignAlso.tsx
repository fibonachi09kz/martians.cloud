import Link from "next/link";
import {Icon} from "@iconify/react";

const supportLinks = [
  {
    name: 'Разработка логотипа',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  },
  {
    name: 'Разработка фирменного стиля',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  },
  {
    name: 'Дизайн презентаций',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
  },
]

const DesignAlso = () => {
    return (
        <div className="bg-white dark:bg-black">
            {/* Header */}
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
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">А также...</h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
                        laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    А также ...
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl dark:bg-zinc-900">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">

                                </div>
                                <h3 className="text-xl font-medium text-black dark:text-white">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <Link href={link.href} className="text-base font-medium text-primary">
                                    Заказать
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-6 h-6 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default DesignAlso;
