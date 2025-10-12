"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Vision Section — “Our Purpose” (Meaningful, Calm, Professional)
 * ----------------------------------------------------------------
 * • No 3D/complex animation; gentle fade-in only
 * • Adds a simple, meaningful Ecosystem Diagram (SVG) instead of decorative banner
 * • Highlights 3 pillars (AI, Cloud, Automation) with concise outcomes
 * • Clean glass card with neon accent
 * • Drop-in: components/site/Vision.tsx
 */
export default function Vision() {
	return (
		<section
			id="about"
			className="relative overflow-hidden bg-[#030712] py-24 sm:py-32">
			{/* Background: very subtle grid with vignette mask */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.10]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, rgba(255,255,255,0.25) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 28px)",
					maskImage:
						"radial-gradient(1200px 600px at 50% 40%, rgba(0,0,0,0.92), transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(1200px 600px at 50% 40%, rgba(0,0,0,0.92), transparent 70%)",
				}}
			/>

			{/* Soft corner glows (static) */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-24 -top-24 h-[38rem] w-[38rem] rounded-full"
				style={{
					background:
						"radial-gradient(closest-side, rgba(34,211,238,0.18), transparent 60%)",
					filter: "blur(10px)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -left-24 -bottom-24 h-[34rem] w-[34rem] rounded-full"
				style={{
					background:
						"radial-gradient(closest-side, rgba(16,185,129,0.14), transparent 60%)",
					filter: "blur(12px)",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.45 }}
					className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_36px_rgba(0,255,200,0.06)] backdrop-blur-xl sm:p-10">
					{/* Neon edge */}
					<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
					<div className="pointer-events-none absolute -inset-[1px] -z-0 rounded-3xl bg-gradient-to-br from-cyan-500/16 to-emerald-500/16" />

					{/* Header */}
					<div className="mx-auto mb-3 flex w-full max-w-xs items-center gap-2">
						<span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						<span className="text-[12px] uppercase tracking-[0.18em] text-white/60">
							Our Purpose
						</span>
					</div>

					<h3 className="text-center text-[26px] font-semibold leading-tight text-white sm:text-3xl">
						We don’t just build apps — we
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							{" "}
							architect ecosystems
						</span>
						.
					</h3>
					<p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-white/75">
						At VR Tech Forz, innovation meets execution. We integrate AI, cloud,
						and automation to create products that redefine industries.
					</p>

					{/* Meaningful Ecosystem Diagram */}
					<div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
						<EcosystemDiagram />
					</div>

					{/* Pillars & Outcomes */}
					<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
						<Pillar title="AI" desc="Assistants • RAG • Insights" />
						<Pillar title="Cloud" desc="Scalable • Secure • Cost‑efficient" />
						<Pillar
							title="Automation"
							desc="Workflows • Integrations • CI/CD"
						/>
					</div>

					{/* Inline CTAs */}
					<div className="mt-7 flex flex-wrap items-center justify-center gap-3">
						<Link
							href="#work"
							className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition">
							View Case Studies
						</Link>
						<Link
							href="#contact"
							className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_14px_rgba(0,255,200,0.22)] hover:shadow-[0_0_18px_rgba(0,255,200,0.35)] transition">
							Talk to Us
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

/* ---------------------------- Ecosystem Diagram --------------------------- */
function EcosystemDiagram() {
	return (
		<div className="relative h-64 w-full bg-[#0a1424]">
			{/* gradient wash */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"linear-gradient(120deg, rgba(8,145,178,0.22), rgba(16,185,129,0.18), rgba(8,145,178,0.22))",
				}}
			/>

			<svg
				className="absolute inset-0 h-full w-full"
				viewBox="0 0 800 260"
				preserveAspectRatio="none"
				aria-hidden="true">
				<defs>
					<linearGradient id="s" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#67e8f9" stopOpacity="0.6" />
						<stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.6" />
					</linearGradient>
					<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
						<feDropShadow
							dx="0"
							dy="0"
							stdDeviation="6"
							floodColor="rgba(0,255,200,0.25)"
						/>
					</filter>
				</defs>

				{/* nodes */}
				<Node x={120} y={130} label="Users" />
				<Node x={320} y={80} label="Apps" />
				<Node x={320} y={180} label="Services" />
				<Node x={520} y={80} label="AI" accent />
				<Node x={520} y={180} label="Cloud" accent />
				<Node x={700} y={130} label="Data" />

				{/* links */}
				<Links />
			</svg>

			{/* legend */}
			<div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2 text-[11px] text-white/80">
				<span className="rounded-full bg-white/10 px-2 py-0.5">
					Secure APIs
				</span>
				<span className="rounded-full bg-white/10 px-2 py-0.5">
					Real‑time Events
				</span>
				<span className="rounded-full bg-white/10 px-2 py-0.5">
					Observability
				</span>
			</div>

			{/* label */}
			<div className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-cyan-400/70 to-emerald-400/70 px-2 py-1 text-[10px] text-white/90 ring-1 ring-white/10">
				Ecosystem Architecture
			</div>
		</div>
	);
}

function Node({
	x,
	y,
	label,
	accent = false,
}: {
	x: number;
	y: number;
	label: string;
	accent?: boolean;
}) {
	return (
		<g transform={`translate(${x}, ${y})`} filter="url(#shadow)">
			<rect
				x={-50}
				y={-18}
				width={100}
				height={36}
				rx={10}
				fill={accent ? "#0b1f2f" : "#0d1b2b"}
				stroke="url(#s)"
				strokeWidth={1}
			/>
			<text x={0} y={5} textAnchor="middle" fontSize="12" fill="#e6faff">
				{label}
			</text>
		</g>
	);
}

function Links() {
	return (
		<g stroke="url(#s)" strokeWidth={1} fill="none" opacity={0.8}>
			{/* Users -> Apps/Services */}
			<path d="M170 130 C 220 130, 260 100, 300 90" />
			<path d="M170 130 C 220 130, 260 160, 300 170" />
			{/* Apps/Services -> AI/Cloud */}
			<path d="M370 90 C 430 60, 460 60, 500 80" />
			<path d="M370 170 C 430 200, 460 200, 500 180" />
			{/* AI/Cloud -> Data */}
			<path d="M570 80 C 620 90, 650 110, 680 125" />
			<path d="M570 180 C 620 170, 650 150, 680 135" />
		</g>
	);
}

/* --------------------------------- Pillar -------------------------------- */
function Pillar({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
			<div className="flex items-center gap-2">
				<span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
				<p className="text-sm font-semibold text-white">{title}</p>
			</div>
			<p className="mt-1 text-[13px] text-white/70">{desc}</p>
		</div>
	);
}
