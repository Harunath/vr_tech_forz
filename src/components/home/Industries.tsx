"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
	CreditCard,
	Sprout,
	GraduationCap,
	HeartPulse,
	ShoppingBag,
	BrainCircuit,
	Zap,
	CheckCircle2,
	GaugeCircle,
	PhoneCall,
	Calendar,
} from "lucide-react";

type Industry = {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	blurb: string;
	points: string[];
};

const INDUSTRIES: Industry[] = [
	{
		icon: CreditCard,
		title: "FinTech",
		blurb: "Secure, compliant payment and banking platforms.",
		points: ["Razorpay / Stripe", "KYC & Compliance", "Ledger & Payouts"],
	},
	{
		icon: Sprout,
		title: "AgriTech",
		blurb: "Smart tools for farmers, distributors, and cooperatives.",
		points: ["Soil & Yield Data", "Supply Chains", "Farmer Networks"],
	},
	{
		icon: GraduationCap,
		title: "EduTech",
		blurb: "Modern LMS and scalable learning platforms.",
		points: ["Live Classes", "Assessments", "Progress Analytics"],
	},
	{
		icon: HeartPulse,
		title: "HealthTech",
		blurb: "Patient-first systems with privacy by design.",
		points: ["Telehealth", "EHR Integrations", "Consent & Security"],
	},
	{
		icon: ShoppingBag,
		title: "E-Commerce",
		blurb: "High-conversion, performance-first stores.",
		points: ["Custom Checkout", "Subscriptions", "Logistics APIs"],
	},
	{
		icon: BrainCircuit,
		title: "AI & Data",
		blurb: "Insights, automation, and intelligent agents.",
		points: ["RAG & Assistants", "ETL Pipelines", "Realtime Dashboards"],
	},
];

export default function IndustriesSectionBalanced() {
	return (
		<section
			id="industries"
			className="relative overflow-hidden bg-[#0B1020] py-16 sm:py-20">
			{/* subtle grid bg */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 28px)",
				}}
			/>
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
					{/* LEFT: now fills height and balances content */}
					<aside className="lg:col-span-4 xl:col-span-3">
						<div className="lg:sticky lg:top-14">
							<div className="flex min-h-[calc(100vh-4rem)] flex-col justify-between">
								{/* Top block */}
								<div>
									<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] text-white/80 backdrop-blur">
										<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
										Industries We Empower
									</div>

									<h2 className="mt-4 text-[26px] font-semibold leading-tight text-white sm:text-4xl">
										Built for{" "}
										<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
											real-world impact
										</span>
									</h2>

									<p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/85">
										AI-powered, cloud-native systems that scale with your vision
										— secure, fast, and future-ready.
									</p>

									{/* Compact CTAs */}
									<div className="mt-6 flex flex-wrap gap-3">
										<a
											href="#contact"
											className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15">
											Discuss your industry
										</a>
										<a
											href="#work"
											className="rounded-lg border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:from-cyan-500/30 hover:to-emerald-500/30">
											View case studies
										</a>
									</div>

									{/* KPIs */}
									<div className="mt-6 grid grid-cols-3 gap-3">
										<KPI value="20+" label="Projects" />
										<KPI value="98" suffix="/100" label="Lighthouse" />
										<KPI value="0.25" suffix="s" label="TTFB avg" />
									</div>

									{/* Highlights */}
									<ul className="mt-6 space-y-2 text-[13px] text-white/80">
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-cyan-400" />{" "}
											Security-first engineering
										</li>
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
											AI-ready architectures
										</li>
										<li className="flex items-center gap-2">
											<span className="h-2 w-2 rounded-full bg-cyan-300" />{" "}
											Performance at scale
										</li>
									</ul>

									{/* FAQ micro-accordion (adds vertical weight without clutter) */}
									<div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-slate-900/70">
										<details className="group p-4 open:bg-white/5">
											<summary className="flex cursor-pointer list-none items-center justify-between text-[13.5px] text-white/85">
												Do you handle compliance (PCI, HIPAA)?
												<span className="ml-3 text-white/60 transition group-open:rotate-180">
													▾
												</span>
											</summary>
											<p className="mt-2 text-[13px] text-white/70">
												Yes — secure design, data minimization, scoped access,
												and audit trails are built into our process.
											</p>
										</details>
										<details className="group p-4 open:bg-white/5">
											<summary className="flex cursor-pointer list-none items-center justify-between text-[13.5px] text-white/85">
												Can you migrate my legacy system?
												<span className="ml-3 text-white/60 transition group-open:rotate-180">
													▾
												</span>
											</summary>
											<p className="mt-2 text-[13px] text-white/70">
												We plan zero-downtime migrations with phased rollouts,
												data sync, and fallbacks.
											</p>
										</details>
									</div>
								</div>

								{/* Bottom: Book a Call mini-card (anchors the column bottom) */}
								<div className="mt-8">
									<div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-4 backdrop-blur">
										<div className="flex items-center gap-3">
											<div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
												<Calendar className="h-5 w-5 text-cyan-300" />
											</div>
											<div className="min-w-0">
												<div className="text-[13px] font-semibold text-white">
													Book a Free Consultation
												</div>
												<div className="text-[12.5px] text-white/75">
													15-minute discovery call
												</div>
											</div>
										</div>
										<div className="mt-3 flex gap-2">
											<a
												href="#contact"
												className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-[12.5px] font-medium text-white hover:bg-white/15">
												<PhoneCall className="h-4 w-4" />
												Talk to us
											</a>
											<a
												href="#work"
												className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 px-3 py-1.5 text-[12.5px] font-medium text-white hover:from-cyan-500/30 hover:to-emerald-500/30">
												See work
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</aside>

					{/* RIGHT: rail + cards */}
					<div className="relative lg:col-span-8 xl:col-span-9">
						<div className="pointer-events-none absolute left-1 top-0 hidden h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-white/30 to-emerald-400 lg:block" />
						<div className="space-y-5">
							{INDUSTRIES.map((item, i) => (
								<IndustryCard key={item.title} index={i} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

/* -------------------------------- Subparts -------------------------------- */

function KPI({
	value,
	label,
	suffix,
}: {
	value: string;
	label: string;
	suffix?: string;
}) {
	return (
		<div className="rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-center backdrop-blur">
			<div className="flex items-center justify-center gap-1 text-lg font-semibold text-white">
				<span>{value}</span>
				{suffix ? (
					<span className="text-sm text-white/70">{suffix}</span>
				) : null}
			</div>
			<div className="text-[11px] text-white/70">{label}</div>
		</div>
	);
}

function IndustryCard({
	icon: Icon,
	title,
	blurb,
	points,
	index,
}: Industry & { index: number }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.45, delay: 0.05 * index }}
			className="group relative grid grid-cols-[20px_1fr] gap-3 rounded-2xl lg:pl-0">
			<div className="relative hidden items-start lg:flex">
				<div className="relative z-10 mt-3 grid h-4 w-4 place-items-center rounded-full bg-slate-950 ring-2 ring-white/25">
					<div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
				</div>
			</div>

			<div className="relative">
				<div className="absolute -left-1 top-4 hidden h-[calc(100%-2rem)] w-[3px] rounded-full bg-gradient-to-b from-cyan-400/90 to-emerald-400/90 lg:block" />
				<div className="relative rounded-2xl border border-white/15 bg-slate-900/85 p-5 shadow-[0_0_24px_rgba(0,0,0,0.25)] backdrop-blur">
					<div className="flex items-start gap-3">
						<div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 ring-1 ring-white/15">
							<div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 blur-md" />
							<Icon className="relative h-6 w-6 text-cyan-300" />
						</div>

						<div className="min-w-0">
							<h3 className="text-[16px] font-semibold leading-snug text-white">
								{title}
							</h3>
							<p className="mt-1 text-[13.5px] leading-relaxed text-white/85">
								{blurb}
							</p>

							<ul className="mt-3 flex flex-wrap gap-2">
								{points.map((p) => (
									<li
										key={p}
										className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11.5px] text-white/85">
										{p}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* tiny trust row */}
					<div className="mt-4 flex items-center gap-3 text-[11.5px] text-white/70">
						<span className="inline-flex items-center gap-1">
							<CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
							ISO-style practices
						</span>
						<span className="inline-flex items-center gap-1">
							<GaugeCircle className="h-3.5 w-3.5 text-cyan-400" />
							Perf budgeted
						</span>
						<span className="inline-flex items-center gap-1">
							<Zap className="h-3.5 w-3.5 text-cyan-300" />
							CI/CD
						</span>
					</div>
				</div>
			</div>
		</motion.article>
	);
}
