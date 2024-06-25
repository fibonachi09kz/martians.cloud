import ServicePageTitle from "@/components/UI/ServicePageTitle";
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";
import ContextTariffs from "@/components/ServicesPage/Context/ContextTariffs/ContextTariffs";
import ContextExtended from "@/components/ServicesPage/Context/ContextExtended/ContextExtended";
import ContextFeatures from "@/components/ServicesPage/Context/ContextFeatures/ContextFeatures";
import ContextWidget from "@/components/ServicesPage/Context/ContextWidget/ContextWidget";
import ContextWhatsInclude from "@/components/ServicesPage/Context/ContextWhatsInclude/ContextWhatsInclude";

const ContextMain = () => {
    return (
        <section className="flex-1 bg-gray-100 dark:bg-zinc-900">
            <ServicePageTitle title="Настройка и ведение контекстной рекламы" subtitle="Управление контекстной рекламой — одно из наших главных направлений. Мы работаем как с большими кампаниями, так и беремся за интересные небольшие проекты."/>

            <ContextTariffs />

            <ContextExtended />

            <ContextFeatures />

            <ContextWidget />

            <ContextWhatsInclude />

            <div className="px-4">
                <FlexContactForm service="Контекстная реклама"/>
            </div>

        </section>
    )
}
export default ContextMain;
