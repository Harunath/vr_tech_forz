"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layout, Code2, Globe2, CheckCircle2 } from "lucide-react";

const steps = [
	{
		icon: <Lightbulb className="h-7 w-7 text-cyan-400" />,
		title: "Discover",
		desc: "We collaborate to deeply understand your goals, audience, and challenges — forming the blueprint of your success.",
	},
	{
		icon: <Layout className="h-7 w-7 text-emerald-400" />,
		title: "Design",
		desc: "Turning insights into wireframes and interactive prototypes, we shape intuitive, stunning interfaces.",
	},
	{
		icon: <Code2 className="h-7 w-7 text-cyan-400" />,
		title: "Develop",
		desc: "We engineer robust, scalable, and secure software with clean architecture and performance at its core.",
	},
	{
		icon: <Globe2 className="h-7 w-7 text-emerald-400" />,
		title: "Deploy",
		desc: "Continuous delivery pipelines and cloud infrastructure ensure seamless deployment and zero downtime.",
	},
	{
		icon: <CheckCircle2 className="h-7 w-7 text-cyan-400" />,
		title: "Deliver",
		desc: "We launch, monitor, and refine — empowering your digital presence with long-term stability and growth.",
	},
];

export default function Process() {
	return (
		<section className="relative overflow-hidden bg-[#030712] py-32 text-white">
			{/* === Animated gradient background === */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#22d3ee_0%,transparent_60%),radial-gradient(120%_80%_at_50%_110%,#10b981_0%,transparent_60%)] opacity-[0.22]" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08]" />
				<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(2,6,23,0.85))]" />
			</div>

			{/* === Header === */}
			<div className="relative z-10 text-center mb-20 px-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
					<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
						How We Work
					</span>
				</motion.h2>
				<p className="max-w-2xl mx-auto text-white/70">
					Our end-to-end process ensures every project is executed with
					strategy, innovation, and precision.
				</p>
			</div>

			{/* === Vertical glowing connector === */}
			<div className="absolute left-1/2 top-40 bottom-20 w-[3px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-400 blur-sm">
				<motion.div
					className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent via-white/30 to-transparent blur-[4px]"
					animate={{ y: ["0%", "100%"] }}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</div>

			{/* === Step cards === */}
			<div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center gap-24">
				{steps.map((step, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.15 }}
						className={`relative flex flex-col items-center text-center ${
							i % 2 === 0 ? "md:self-start" : "md:self-end"
						}`}>
						{/* Floating card */}
						<div className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-[#030712]/60 backdrop-blur-md p-8 md:p-10 shadow-[0_0_35px_rgba(6,182,212,0.12)] hover:shadow-[0_0_45px_rgba(16,185,129,0.25)] transition-all duration-300 w-[90vw] max-w-[380px]">
							<div className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-emerald-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

							{/* Icon */}
							<div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
								{step.icon}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 blur-lg" />
							</div>

							<h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
								{step.title}
							</h3>
							<p className="mt-3 text-sm text-white/70 leading-relaxed">
								{step.desc}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
