import CoreCapabilities from "@/components/home/CoreCapabilities";
import Hero from "@/components/home/Hero";
import InnovationShowcase from "@/components/home/InnovationShowcase";
import PartnershipTrust from "@/components/home/PartnershipTrust";
import TechEcosystem from "@/components/home/TechEcosystem";
import Vision from "@/components/home/Vision";
import React from "react";

function page() {
	return (
		<>
			<Hero />
			<CoreCapabilities />
			<Vision />
			<InnovationShowcase />
			<TechEcosystem />
			<PartnershipTrust />
		</>
	);
}

export default page;
