"use client";
import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Bot, Cloud, Smartphone, Palette, Cable } from "lucide-react";

export default function CoreCapabilities() {
	const items: Capability[] = [
		{
			icon: Cpu,
			title: "Custom Software Systems",
			blurb: "Scalable business infrastructure",
			bullets: ["Event‑driven", "Microservices", "PostgreSQL/Prisma"],
		},
		{
			icon: Bot,
			title: "AI & Automation",
			blurb: "LangChain, GPT, predictive AI",
			bullets: ["RAG/Agents", "Workflows", "Analytics"],
		},
		{
			icon: Cloud,
			title: "Cloud Solutions",
			blurb: "AWS, Azure, Edge",
			bullets: ["Serverless", "Containers", "CDN/Edge"],
		},
		{
			icon: Smartphone,
			title: "Mobile & Web",
			blurb: "Native & cross‑platform excellence",
			bullets: ["Next.js/React", "iOS/Android", "PWAs"],
		},
		{
			icon: Palette,
			title: "UI/UX Design",
			blurb: "Interfaces that perform and delight",
			bullets: ["Design systems", "Accessibility", "Motion"],
		},
		{
			icon: Cable,
			title: "APIs & Integration",
			blurb: "Secure & lightning fast",
			bullets: ["REST/GraphQL", "Webhooks", "Auth/SSO"],
		},
	];

	return (
		<section id="services" className="relative bg-[#030712] py-16 sm:py-24">
			{/* subtle grid backdrop */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.12]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 28px)",
					maskImage:
						"radial-gradient(900px 480px at 50% 30%, rgba(0,0,0,0.85), transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(900px 480px at 50% 30%, rgba(0,0,0,0.85), transparent 70%)",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						What We Engineer
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Core{" "}
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Capabilities
						</span>
					</h2>
					<p className="mt-3 text-white/70">
						From AI to cloud‑native systems — engineered for scale, security,
						and speed.
					</p>
				</div>

				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((cap, i) => (
						<TiltCard key={cap.title} index={i} {...cap} />
					))}
				</div>
			</div>
		</section>
	);
}

/* ------------------------------- Tilt Card ------------------------------- */

type Capability = {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	blurb: string;
	bullets: string[];
};

function TiltCard({
	icon: Icon,
	title,
	blurb,
	bullets,
	index,
}: Capability & { index: number }) {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), {
		stiffness: 200,
		damping: 20,
	});
	const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
		stiffness: 200,
		damping: 20,
	});
	const scale = useSpring(1, { stiffness: 200, damping: 20 });

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = ref.current!.getBoundingClientRect();
		const px = e.clientX - rect.left - rect.width / 2;
		const py = e.clientY - rect.top - rect.height / 2;
		x.set(px / 4);
		y.set(py / 4);
	};

	const handleLeave = () => {
		x.set(0);
		y.set(0);
		scale.set(1);
	};

	const delay = 0.05 * index;

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={handleLeave}
			onMouseEnter={() => scale.set(1.02)}
			style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5, delay }}
			className="group relative rounded-2xl p-[1px] [perspective:1000px]">
			{/* Gradient frame */}
			<div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/35 to-emerald-500/35 blur-[1.5px] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

			{/* Card body */}
			<div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-[0_0_24px_rgba(0,255,200,0.05)] backdrop-blur-xl">
				<div className="flex items-start gap-3">
					<div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/25 to-emerald-400/25 ring-1 ring-white/10">
						<div className="absolute inset-0 -z-0 rounded-xl blur-md bg-gradient-to-br from-cyan-400/25 to-emerald-400/25" />
						<Icon className="relative h-5 w-5 text-cyan-300" />
					</div>
					<div>
						<h3 className="text-[15px] font-semibold text-white">{title}</h3>
						<p className="text-[12.5px] text-white/70">{blurb}</p>
					</div>
				</div>

				<ul className="mt-4 flex flex-wrap gap-2">
					{bullets.map((b) => (
						<li
							key={b}
							className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/75">
							{b}
						</li>
					))}
				</ul>

				{/* glow line at bottom */}
				<div className="pointer-events-none mt-4 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400/70 to-emerald-400/70 opacity-70" />
			</div>
		</motion.div>
	);
}
