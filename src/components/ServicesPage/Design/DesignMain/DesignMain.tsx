import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";
import ServicePageTitle from "@/components/UI/ServicePageTitle";
import OtherServices from "@/components/Widgets/OtherServices/OtherServices";
import DesignCTAs from "@/components/ServicesPage/Design/DesignCTAs/DesignCTAs";
import DesignAlso from "@/components/ServicesPage/Design/DesignAlso/DesignAlso";
import DesignGallery from "@/components/ServicesPage/Design/DesignGallery/DesignGallery";

const DesignMain = () => {
	return (
		<section className="flex-1 bg-gray-100 dark:bg-zinc-900">
			<ServicePageTitle title="Индивидуальный дизайн" subtitle="Наша команда дизайнеров сделает ваш проект уникальным и привлекательным для клиентов" />

			<DesignCTAs />
            <DesignAlso />
            {/*<DesignGallery />*/}
			<OtherServices />
			<div className="px-4">
				<FlexContactForm service="Индивидуальный дизайн"/>
			</div>

		</section>
	)
}
export default DesignMain;
