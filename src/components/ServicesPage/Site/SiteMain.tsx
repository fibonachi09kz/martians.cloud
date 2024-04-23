import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";
import Widget from "@/components/Blocks/Widget/Widget";
import SiteFeatures from "@/components/ServicesPage/Site/SiteFeatures";

const SiteMain = () => {
	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Разработка сайтов</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Создаем уникальные онлайн-решения для вашего бизнеса</p>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto">
				<div className="mb-24">
					<HPTariffs />
				</div>

				<SiteFeatures />
			</div>
			<div className="md:px-4 max-w-7xl mx-auto">
				<Widget
					subHeader="А ещё вы можете..."
					title="Заказать мобильное приложение"
					subTitle="Мы свяжем ваш сайт с мобильным приложением, расширив удобство использования вашими клиентами"
					btnLinkHref="#flex-contact-form"
				/>
			</div>
			<div className="px-4">
				<FlexContactForm service="Разработка сайтов" />
			</div>

		</section>
	)
}
export default SiteMain;
