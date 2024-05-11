import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";
import ServicePageTitle from "@/components/UI/ServicePageTitle";
import OtherServices from "@/components/Widgets/OtherServices/OtherServices";
import DesignCTAs from "@/components/ServicesPage/Design/DesignCTAs/DesignCTAs";
import DesignAlso from "@/components/ServicesPage/Design/DesignAlso/DesignAlso";

const DesignMain = () => {
	return (
		<section className="flex-1 bg-white dark:bg-black">
			<ServicePageTitle title="Индивидуальный дизайн" subtitle="Наша команда дизайнеров сделает ваш проект уникальным и привлекательным для клиентов" />

			<DesignCTAs />
            <DesignAlso />
			<OtherServices />
			<div className="px-4">
				<FlexContactForm service="Индивидуальный дизайн"/>
			</div>

		</section>
	)
}
export default DesignMain;
