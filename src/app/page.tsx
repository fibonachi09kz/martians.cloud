import Image from 'next/image'
import Layout from "@/components/Layout/Layout";
import HPPromo from "@/components/HomePage/HPPromo/HPPromo";
import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";

function Home() {
	return (
		<Layout>
			<HPPromo />
			<HPTariffs />
		</Layout>
	)
}

export default Home;
