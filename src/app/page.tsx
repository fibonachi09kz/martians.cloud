import Layout from "@/components/Layout/Layout";
import HPPromo from "@/components/HomePage/HPPromo/HPPromo";
import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";

function HomePage() {
	return (
		<Layout>
			<HPPromo />
			<HPTariffs />
		</Layout>
	)
}

export default HomePage;
