"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stacks = [
	{
		name: "Next.js",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		desc: "React-based full-stack framework for modern web apps.",
	},
	{
		name: "React",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		desc: "Declarative, component-based UI library for the web.",
	},
	{
		name: "TypeScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		desc: "Type-safe JavaScript for large-scale applications.",
	},
	{
		name: "Prisma",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
		desc: "Next-generation ORM for Node.js and TypeScript.",
	},
	{
		name: "PostgreSQL",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		desc: "Reliable open-source relational database.",
	},
	{
		name: "Cloudflare",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
		desc: "Global CDN, DNS & security edge network.",
	},
];

export default function TechStackMarquee() {
	return (
		<section className="relative overflow-hidden bg-[#030712] py-24 sm:py-28 text-white">
			{/* Background layers */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#22d3ee_0%,transparent_60%),radial-gradient(120%_80%_at_50%_110%,#10b981_0%,transparent_60%)] opacity-[0.22]" />
				<div className="absolute left-[-10%] top-[-20%] h-[55vmax] w-[55vmax] rounded-full bg-cyan-400/15 blur-[90px] animate-float-slow" />
				<div className="absolute right-[-15%] top-[10%] h-[40vmax] w-[40vmax] rounded-full bg-emerald-400/15 blur-[100px] animate-float" />
				<div className="absolute left-[10%] bottom-[-10%] h-[45vmax] w-[45vmax] rounded-full bg-teal-300/15 blur-[80px] animate-float-medium" />
				<div className="absolute inset-0 opacity-[0.14]">
					<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern
								id="grid"
								width="42"
								height="42"
								patternUnits="userSpaceOnUse">
								<path
									d="M 42 0 L 0 0 0 42"
									fill="none"
									stroke="rgba(163,230,216,0.25)"
									strokeWidth="1"
								/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid)" />
					</svg>
				</div>
				<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(3,7,18,0.85))]" />
			</div>

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-7xl px-6 text-center space-y-8">
				{/* Header */}
				<div className="space-y-3 sm:space-y-4">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						Tech Ecosystem
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
						Trusted tools.{" "}
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Tailored innovation.
						</span>
					</h2>
				</div>

				{/* Marquee */}
				<div className="relative overflow-hidden mt-6 sm:mt-10">
					<motion.div
						className="flex gap-10"
						animate={{ x: ["0%", "-50%"] }}
						transition={{ repeat: Infinity, ease: "linear", duration: 35 }}>
						{[...stacks, ...stacks].map((stack, i) => (
							<div
								key={i}
								className="group relative flex min-w-[160px] sm:min-w-[180px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#030712]/60 px-6 py-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-emerald-400/10 opacity-0 blur-xl transition group-hover:opacity-100" />
								<div className="relative h-12 w-12 sm:h-14 sm:w-14 mb-3">
									<Image
										src={stack.logo}
										alt={stack.name}
										fill
										sizes="60px"
										className="object-contain opacity-80 group-hover:opacity-100 transition"
									/>
								</div>
								<p className="text-sm font-medium text-white/90">
									{stack.name}
								</p>
								<div className="absolute bottom-[115%] left-1/2 hidden w-48 -translate-x-1/2 rounded-lg border border-cyan-400/20 bg-[#0f172a]/95 p-2 text-xs text-white/80 shadow-lg group-hover:block">
									{stack.desc}
									<div className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-[#0f172a]/95" />
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Subtle moving glow */}
			<motion.div
				className="pointer-events-none absolute top-0 left-0 h-full w-[60%] bg-gradient-to-r from-cyan-500/10 via-emerald-400/10 to-transparent blur-3xl"
				animate={{ x: ["-30%", "130%"] }}
				transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
			/>

			{/* Floating animation keyframes */}
			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translate3d(0, 0, 0);
					}
					50% {
						transform: translate3d(-2%, 3%, 0);
					}
				}
				@keyframes float-slow {
					0%,
					100% {
						transform: translate3d(0, 0, 0) scale(1);
					}
					50% {
						transform: translate3d(2%, -2%, 0) scale(1.05);
					}
				}
				@keyframes float-medium {
					0%,
					100% {
						transform: translate3d(0, 0, 0) scale(1);
					}
					50% {
						transform: translate3d(-3%, 2%, 0) scale(1.03);
					}
				}
				.animate-float {
					animation: float 16s ease-in-out infinite;
				}
				.animate-float-slow {
					animation: float-slow 24s ease-in-out infinite;
				}
				.animate-float-medium {
					animation: float-medium 20s ease-in-out infinite;
				}
			`}</style>
		</section>
	);
}
