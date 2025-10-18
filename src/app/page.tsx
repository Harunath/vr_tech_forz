import CoreCapabilities from "@/components/home/CoreCapabilities";
import Hero from "@/components/home/Hero";
import InnovationShowcase from "@/components/home/InnovationShowcase";
import PartnershipTrust from "@/components/home/PartnershipTrust";
import TechEcosystem from "@/components/home/TechEcosystem";
import Vision from "@/components/home/Vision";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import React from "react";
import Process from "@/components/home/Process";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactSection from "@/components/contact/ContactSection";

function page() {
	return (
		<>
			<Hero />

			<ProjectShowcase />

			<CoreCapabilities />
			<TechEcosystem />
			<FeaturedProjects />
			<Process />
			<Vision />
			<InnovationShowcase />

			<PartnershipTrust />
			<ContactSection />
		</>
	);
}

export default page;
