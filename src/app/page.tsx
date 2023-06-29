import Layout from "@/components/Layout/Layout";
import HPPromo from "@/components/HomePage/HPPromo/HPPromo";
import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";
import HPDops from "@/components/HomePage/HPDops/HPDops";
import HPCta from "@/components/HomePage/HPCta/HPCta";

function HomePage() {
	return (
		<Layout>
			<HPPromo />
			<HPTariffs />
			<HPDops />
			<HPCta />
		</Layout>
	)
}

export default HomePage;
