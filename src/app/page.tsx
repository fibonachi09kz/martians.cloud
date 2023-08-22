import Layout from "@/components/Layout/Layout";
import HPPromo from "@/components/HomePage/HPPromo/HPPromo";
import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";
import HPCta from "@/components/HomePage/HPCta/HPCta";
import HPAdv from "@/components/HomePage/HPAdv/HPAdv";

const HomePage = () => {
	return (
		<Layout>
			<HPPromo />
			<HPTariffs />
			<HPCta />
			{/*<HPAdv />*/}
		</Layout>
	)
}

export default HomePage;
