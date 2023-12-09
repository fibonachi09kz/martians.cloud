import Layout from "@/components/Layout/Layout";
import HPPromo from "@/components/HomePage/HPPromo/HPPromo";
import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";
import HPCta from "@/components/HomePage/HPCta/HPCta";
import Reviews from "@/components/Blocks/Reviews/Reviews";
import Stats from "@/components/Blocks/Stats/Stats";
import Features from "@/components/Blocks/Features/Features";

const HomePage = () => {
	return (
		<Layout>
			<HPPromo />
			<HPTariffs />
			<Stats />
			<Features />
			<HPCta />
			<Reviews />
		</Layout>
	)
}

export default HomePage;
