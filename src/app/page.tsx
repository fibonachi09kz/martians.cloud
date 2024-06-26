import Layout from "@/components/Layout/Layout";
import HPPromo from "@/components/HomePage/HPPromo/HPPromo";
import HPTariffs from "@/components/HomePage/HPTariffs/HPTariffs";
import HPCta from "@/components/HomePage/HPCta/HPCta";
import Reviews from "@/components/Blocks/Reviews/Reviews";
import Stats from "@/components/Blocks/Stats/Stats";
import Features from "@/components/Blocks/Features/Features";
import HPServices from "@/components/HomePage/HPServices/HPServices";
import React from "react";
import Widget from "@/components/Blocks/Widget/Widget";

const HomePage = () => {
	return (
		<Layout>
			<HPPromo />
			<HPServices />
			{/*<HPTariffs />*/}
			{/*<div className="-mt-24">*/}
			{/*	<Widget />*/}
			{/*</div>*/}
			<Stats />
			<Features />
			<HPCta isLastBlock={true} />
			{/*<Reviews />*/}
		</Layout>
	)
}

export default HomePage;
