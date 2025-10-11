"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-[#030712] pt-32 pb-24 md:pt-40 md:pb-36">
			{/* ===== Background: Animated SVG Globe ===== */}
			<div className="pointer-events-none absolute left-1/2 top-24 -z-0 -translate-x-1/2 sm:top-12">
				<AnimatedGlobe size={560} className="opacity-70" />
			</div>

			{/* ===== Background: Tech wave grid ===== */}
			<motion.div
				aria-hidden
				className="absolute inset-0 opacity-[0.15]"
				initial={{ backgroundPosition: "0% 0%" }}
				animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
				transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
				style={{
					backgroundImage:
						"repeating-linear-gradient( to bottom, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 28px ), repeating-linear-gradient( to right, rgba(255,255,255,0.28) 0px, rgba(255,255,255,0.28) 1px, transparent 1px, transparent 28px )",
					maskImage:
						"radial-gradient(1200px 600px at 50% 40%, rgba(0,0,0,0.9), transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(1200px 600px at 50% 40%, rgba(0,0,0,0.9), transparent 70%)",
				}}
			/>

			{/* ===== Soft gradient glows ===== */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -top-40 -right-24 h-[42rem] w-[42rem] rounded-full"
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 80, ease: "linear", repeat: Infinity }}
				style={{
					background:
						"radial-gradient(closest-side, rgba(34,211,238,0.22), transparent 60%), radial-gradient(closest-side, rgba(16,185,129,0.18), transparent 60%)",
					boxShadow: "0 0 120px rgba(0,255,200,0.18)",
				}}
			/>
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -bottom-32 -left-24 h-[36rem] w-[36rem] rounded-full"
				initial={{ rotate: 0 }}
				animate={{ rotate: -360 }}
				transition={{ duration: 90, ease: "linear", repeat: Infinity }}
				style={{
					background:
						"radial-gradient(closest-side, rgba(34,211,238,0.16), transparent 60%), radial-gradient(closest-side, rgba(16,185,129,0.14), transparent 60%)",
					boxShadow: "0 0 120px rgba(0,255,200,0.14)",
				}}
			/>

			{/* ===== Content ===== */}
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						VR Tech Forz • Division of The VR Group
					</div>

					<h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
						Engineering Tomorrow’s{" "}
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Tech
						</span>
						, Today.
					</h1>

					<p className="mx-auto mt-5 max-w-2xl text-balance text-base text-white/70 md:text-lg">
						We design AI‑powered, cloud‑native software that scales with your
						vision. From concept to launch — secure, fast, and future‑ready.
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link
							href="#contact"
							className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_14px_rgba(0,255,200,0.25)] hover:shadow-[0_0_18px_rgba(0,255,200,0.4)] transition">
							Get a Free Consultation
						</Link>
						<Link
							href="#work"
							className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
							View Our Work
						</Link>
					</div>
				</div>
			</div>

			{/* ===== Scroll indicator (optional) ===== */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#030712]" />
		</section>
	);
}

function AnimatedGlobe({
	size = 520,
	className = "",
}: {
	size?: number;
	className?: string;
}) {
	// Animated longitude/latitude lines with dash offset
	const rings = new Array(6).fill(0).map((_, i) => i);
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 200 200"
			className={className}
			style={{ filter: "drop-shadow(0 0 18px rgba(0,255,200,0.18))" }}>
			<defs>
				<radialGradient id="glow" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor="rgba(34,211,238,0.18)" />
					<stop offset="100%" stopColor="rgba(16,185,129,0.08)" />
				</radialGradient>
				<linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#67e8f9" />
					<stop offset="100%" stopColor="#6ee7b7" />
				</linearGradient>
			</defs>

			{/* Soft glow base */}
			<circle cx="100" cy="100" r="80" fill="url(#glow)" />
			<circle
				cx="100"
				cy="100"
				r="80"
				fill="none"
				stroke="url(#line)"
				strokeOpacity="0.35"
			/>

			{/* Latitude lines */}
			{rings.map((r) => (
				<AnimatedRing
					key={`lat-${r}`}
					cx={100}
					cy={100}
					rx={80}
					ry={80 - r * 10}
					rotate={0}
				/>
			))}

			{/* Longitude lines (rotating) */}
			{rings.map((r) => (
				<AnimatedRing
					key={`lon-${r}`}
					cx={100}
					cy={100}
					rx={80}
					ry={80}
					rotate={r * 15}
				/>
			))}
		</svg>
	);
}

function AnimatedRing({
	cx,
	cy,
	rx,
	ry,
	rotate = 0,
}: {
	cx: number;
	cy: number;
	rx: number;
	ry: number;
	rotate?: number;
}) {
	return (
		<motion.ellipse
			cx={cx}
			cy={cy}
			rx={rx}
			ry={ry}
			transform={`rotate(${rotate} ${cx} ${cy})`}
			stroke="url(#line)"
			strokeWidth={0.8}
			strokeOpacity={0.8}
			fill="none"
			style={{ strokeDasharray: 6, strokeLinecap: "round" }}
			initial={{ strokeDashoffset: 0 }}
			animate={{ strokeDashoffset: -24 }}
			transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
		/>
	);
}
