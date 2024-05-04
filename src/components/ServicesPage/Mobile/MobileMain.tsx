import MobileCrossPlatform from "@/components/ServicesPage/Mobile/MobileCrossPlatform";
import MobileDevList from "@/components/ServicesPage/Mobile/MobileDevList";
import MobileDevSteps from "@/components/ServicesPage/Mobile/MobileDevSteps";
import FlexContactForm from "@/components/Widgets/ContactForm/FlexContactForm";
import OtherServices from "@/components/Widgets/OtherServices/OtherServices";

const MobileMain = () => {
	return (
		<section className="flex-1 bg-white dark:bg-black">
			<div className="py-12 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Разработка мобильных приложений</h1>
						<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Вам нужно приложение, работающее на IOS и Android? Мы разрабатываем качественные кроссплатформенные мобильные приложения, используя передовые технологии и современные тенденции.</p>
					</div>
				</div>
			</div>
			<div className="px-5 max-w-7xl mx-auto">

				<MobileCrossPlatform />
				<div className="mt-24">
					<MobileDevSteps />
				</div>
				<div className="mt-24">
					<MobileDevList />
				</div>
				<OtherServices />
				<FlexContactForm service="Разработка мобильных приложений" />

			</div>
		</section>
	)
}
export default MobileMain;
