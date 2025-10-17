"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/**
 * InnovationShowcase — Carousel of mockups/live previews
 * -----------------------------------------------------
 * • Smooth horizontal scroll with scroll‑snap
 * • Keyboard & button controls (Prev/Next)
 * • Subtle neon glow on hover
 * • Lightweight SVG previews (no heavy images required)
 * • Drop-in: components/site/InnovationShowcase.tsx
 */
export default function InnovationShowcase() {
	const projects: Project[] = [
		{
			title: "Smart Commerce Platform",
			subtitle: "Omnichannel storefront + realtime inventory",
			tags: ["Next.js", "Stripe", "Webhooks"],
			href: "#contact",
			preview: <PreviewCommerce />,
		},
		{
			title: "AI Health Insights Engine",
			subtitle: "Clinical notes → insights with guardrails",
			tags: ["Python", "LLM/RAG", "FastAPI"],
			href: "#contact",
			preview: <PreviewHealth />,
		},
		{
			title: "Cloud-Native Data Hub",
			subtitle: "Unified data lake with event pipelines",
			tags: ["AWS", "Kafka", "dbt"],
			href: "#contact",
			preview: <PreviewDataHub />,
		},
	];

	const scrollerRef = React.useRef<HTMLDivElement | null>(null);

	const scrollBy = (dir: -1 | 1) => {
		const el = scrollerRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-card]");
		const width = card ? card.offsetWidth : 320;
		el.scrollBy({ left: dir * (width + 24), behavior: "smooth" });
	};

	return (
		<section id="#innovation" className="relative bg-[#030712] py-16 sm:py-24">
			{/* backdrop grid */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.10]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, rgba(255,255,255,0.25) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 28px)",
					maskImage:
						"radial-gradient(1200px 600px at 50% 35%, rgba(0,0,0,0.92), transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(1200px 600px at 50% 35%, rgba(0,0,0,0.92), transparent 70%)",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
							<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
							Innovation Showcase
						</div>
						<h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
							Selected{" "}
							<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
								Projects
							</span>
						</h2>
					</div>

					<div className="hidden items-center gap-2 sm:flex">
						<button
							aria-label="Previous"
							onClick={() => scrollBy(-1)}
							className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:bg-white/10">
							<ChevronLeft className="h-4 w-4" />
						</button>
						<button
							aria-label="Next"
							onClick={() => scrollBy(1)}
							className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:bg-white/10">
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>
				</div>

				{/* Carousel */}
				<div
					ref={scrollerRef}
					className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
					style={{ scrollbarWidth: "none" } as React.CSSProperties}>
					{/* hide webkit scrollbar */}
					<style>{`
		[data-showcase]::-webkit-scrollbar {
			display: none;
		}
	`}</style>

					<div data-showcase className="contents" />
					{projects.map((p, i) => (
						<Card key={p.title} index={i} {...p} />
					))}
				</div>

				{/* Mobile controls */}
				<div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
					<button
						aria-label="Previous"
						onClick={() => scrollBy(-1)}
						className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:bg-white/10">
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button
						aria-label="Next"
						onClick={() => scrollBy(1)}
						className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:bg-white/10">
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</div>
		</section>
	);
}

/* --------------------------------- Types --------------------------------- */

type Project = {
	title: string;
	subtitle: string;
	tags: string[];
	href?: string;
	preview: React.ReactNode;
	index?: number;
};

/* --------------------------------- Card ---------------------------------- */

function Card({
	title,
	subtitle,
	tags,
	href = "#contact",
	preview,
	index = 0,
}: Project) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, delay: 0.04 * index }}
			className="group relative h-[320px] w-[320px] shrink-0 snap-center rounded-2xl p-[1px]"
			data-card>
			{/* Glow frame */}
			<div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/35 to-emerald-500/35 opacity-70 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />

			{/* Body */}
			<div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
				{/* Preview area */}
				<div className="relative h-[58%] w-full border-b border-white/10">
					{preview}
				</div>
				{/* Content */}
				<div className="flex flex-1 flex-col justify-between p-4">
					<div>
						<h3 className="text-[15px] font-semibold text-white">{title}</h3>
						<p className="mt-1 text-[12.5px] text-white/70">{subtitle}</p>
						<ul className="mt-3 flex flex-wrap gap-2">
							{tags.map((t) => (
								<li
									key={t}
									className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/75">
									{t}
								</li>
							))}
						</ul>
					</div>
					<div className="mt-3">
						<Link
							href={href}
							className="inline-flex items-center gap-1 text-[12.5px] font-medium text-cyan-300 hover:text-emerald-300">
							View project <ExternalLink className="h-3.5 w-3.5" />
						</Link>
					</div>
				</div>
			</div>
		</motion.article>
	);
}

/* ---------------------------- SVG Previews ---------------------------- */
function PreviewCommerce() {
	return (
		<div className="h-full w-full bg-[#0b1424]">
			<div className="absolute right-4 top-3 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
				Demo
			</div>
			<svg
				viewBox="0 0 600 200"
				className="h-full w-full"
				preserveAspectRatio="none"
				aria-hidden>
				<defs>
					<linearGradient id="st" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.5" />
					</linearGradient>
				</defs>
				{/* header bar */}
				<rect x="0" y="0" width="600" height="30" fill="#0f1c2f" />
				<rect x="12" y="8" width="80" height="12" rx="3" fill="#16314d" />
				{/* product grid */}
				{Array.from({ length: 6 }).map((_, i) => (
					<g
						key={i}
						transform={`translate(${20 + (i % 3) * 190}, ${
							50 + Math.floor(i / 3) * 90
						})`}>
						<rect
							width="170"
							height="70"
							rx="8"
							fill="#0f1c2f"
							stroke="url(#st)"
							strokeWidth="1"
						/>
						<rect x="8" y="8" width="60" height="40" rx="6" fill="#13233a" />
						<rect x="74" y="10" width="86" height="8" rx="2" fill="#16314d" />
						<rect x="74" y="24" width="66" height="6" rx="2" fill="#132c49" />
						<rect x="74" y="38" width="46" height="6" rx="2" fill="#132c49" />
					</g>
				))}
			</svg>
		</div>
	);
}

function PreviewHealth() {
	return (
		<div className="h-full w-full bg-[#0b1424]">
			<div className="absolute right-4 top-3 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
				Demo
			</div>
			<svg
				viewBox="0 0 600 200"
				className="h-full w-full"
				preserveAspectRatio="none"
				aria-hidden>
				<defs>
					<linearGradient id="st2" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.5" />
					</linearGradient>
				</defs>
				<rect x="0" y="0" width="600" height="30" fill="#0f1c2f" />
				{/* vitals chart */}
				<polyline
					points="0,160 50,140 100,150 150,120 200,130 250,110 300,125 350,105 400,115 450,95 500,120 550,90 600,110"
					fill="none"
					stroke="url(#st2)"
					strokeWidth="2"
				/>
				{/* side panel */}
				<rect
					x="460"
					y="40"
					width="120"
					height="130"
					rx="10"
					fill="#0f1c2f"
					stroke="url(#st2)"
					strokeWidth="1"
				/>
				{Array.from({ length: 5 }).map((_, i) => (
					<rect
						key={i}
						x="472"
						y={52 + i * 22}
						width="96"
						height="10"
						rx="3"
						fill="#16314d"
					/>
				))}
			</svg>
		</div>
	);
}

function PreviewDataHub() {
	return (
		<div className="h-full w-full bg-[#0b1424]">
			<div className="absolute right-4 top-3 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
				Demo
			</div>
			<svg
				viewBox="0 0 600 200"
				className="h-full w-full"
				preserveAspectRatio="none"
				aria-hidden>
				<defs>
					<linearGradient id="st3" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#67e8f9" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.5" />
					</linearGradient>
				</defs>
				{/* pipelines */}
				{Array.from({ length: 4 }).map((_, i) => (
					<g key={i} transform={`translate(${40 + i * 140}, 40)`}>
						<rect
							width="100"
							height="28"
							rx="6"
							fill="#0f1c2f"
							stroke="url(#st3)"
							strokeWidth="1"
						/>
						<rect
							y="44"
							width="100"
							height="28"
							rx="6"
							fill="#0f1c2f"
							stroke="url(#st3)"
							strokeWidth="1"
						/>
						<rect
							y="88"
							width="100"
							height="28"
							rx="6"
							fill="#0f1c2f"
							stroke="url(#st3)"
							strokeWidth="1"
						/>
					</g>
				))}
				{/* arrows */}
				{Array.from({ length: 3 }).map((_, i) => (
					<polygon
						key={i}
						points={`${140 + i * 140},54 ${160 + i * 140},54 ${
							160 + i * 140
						},50 ${176 + i * 140},58 ${160 + i * 140},66 ${160 + i * 140},62 ${
							140 + i * 140
						},62`}
						fill="#12314a"
					/>
				))}
			</svg>
		</div>
	);
}
