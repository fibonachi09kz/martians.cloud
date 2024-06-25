'use client'
import {Icon} from "@iconify/react";

const ContextWhatsInclude = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24">
            <div className="max-w-3xl mx-auto mb-12">
                <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Что входит в настройку контекстной рекламы</h2>
                <p className="text-gray-500 text-center sm:text-xl dark:text-gray-400">5 главных факторов, которые смогут выделить ваш сайт среди конкурентов и завоевать доверие клиентов</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-2 dark:bg-black">
                    <Icon icon="ri:seo-line" className="text-primary w-10 h-10 flex-none mb-5"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Настройка кампаний</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Мы не полагаемся на автоматизацию, а тщательно прорабатываем каждое объявление, чтобы оно было максимально релевантным целевой аудитории. Но иногда мы используем автоматизацию для оптимизации ставок и показа объявлений, чтобы максимально эффективнорасходовать ваш рекламный бюджет</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="fluent:design-ideas-16-regular" className="text-primary w-10 h-10 flex-none mb-5"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Сопровождение</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Мы постоянно следим за эффективностью рекламных кампаний, анализируем полученные данные и оперативно вносим необходимые коррективы, чтобы оптимизировать результаты</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="solar:server-path-linear" className="text-primary w-10 h-10 flex-none mb-5"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Отчетность</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Мы предоставляем вам подробные отчеты о результатах рекламных кампаний, которые позволят отслеживать прогресс, анализировать результаты и принимать информированные решения</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon className="text-primary w-10 h-10 flex-none mb-5" icon="iconoir:www"/>
                    <h3 className="text-black dark:text-white text-2xl font-bold">Стратегия</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Разрабатываем стратегии рекламной кампании, контролируем ее выполнение, координируем работы всех участников проекта</p>
                </div>
                <div className="py-8 px-6 md:p-10 bg-white rounded-2xl md:col-span-1 dark:bg-black">
                    <Icon icon="fluent:person-support-16-regular" className="text-primary w-10 h-10 flex-none mb-5" />
                    <h3 className="text-black dark:text-white text-2xl font-bold">Креативы</h3>
                    <p className="m-0 text-base text-gray-700 dark:text-gray-200 mt-2">Наша команда опытных дизайнеров создает уникальные и эффективные креативы для рекламных кампаний, которые привлекают внимание целевой аудитории</p>
                </div>
            </div>
        </section>
    )
}
export default ContextWhatsInclude;
