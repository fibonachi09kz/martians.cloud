'use client'
import {Icon} from "@iconify/react";

const ContextFeatures = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24">
            <div className="max-w-3xl mx-auto mb-12">
                <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Преимущества вашего сайта</h2>
                <p className="text-gray-500 text-center sm:text-xl dark:text-gray-400">3 главных фактора, которые смогут выделить ваш сайт среди конкурентов и завоевать доверие клиентов</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="lets-icons:direction-alt-3-duotone" className="text-primary w-14 h-14 flex-none mx-auto"/>
                    <h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Баланс</h3>
                    <p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Мы движемся от ручной настройки через проверку гипотез к постепенной автоматизации</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="lets-icons:lightning-alt-duotone" className="text-primary w-14 h-14 flex-none mx-auto"/>
                    <h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Развитие</h3>
                    <p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Постоянное развитие компании: добавляем новые объявления, анализируем работу компании, настраиваем автостратегии и многое другое</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="lets-icons:road-finish-duotone" className="text-primary w-14 h-14 flex-none mx-auto"/>
                    <h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Забота</h3>
                    <p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Мы заботимся о том, чтобы вы получили результат: анализируем, проверяем, предлагаем решения по оптимизации конверсии</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="lets-icons:paper-duotone" className="text-primary w-14 h-14 flex-none mx-auto"/>
                    <h3 className="text-black dark:text-white text-2xl text-center font-bold mt-3">Прозрачность</h3>
                    <p className="m-0 text-base text-center text-gray-700 dark:text-gray-200 mt-2">Разделяем бюджет кампании и плату за нашу работу — работаем по предварительно выбранному тарифу</p>
                </div>
            </div>
        </section>
    )
}
export default ContextFeatures;
