"use client";
import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/**
 * PartnershipTrust — Rotating collaboration quotes (no generic testimonials)
 * -------------------------------------------------------------------------
 * • Auto-rotates, pauses on hover/focus, manual prev/next controls
 * • Collaboration tone + brand glow accents
 * • Accessible (aria-live, buttons labeled)
 * • Drop-in: components/site/PartnershipTrust.tsx
 */
export default function PartnershipTrust() {
	const quotes: Quote[] = [
		{
			text: "VR Tech Forz helped us achieve 10x faster API delivery.",
			author: "Founder, Biz Network",
		},
		{
			text: "They don’t just code. They innovate with you.",
			author: "CEO, NGVNS",
		},
	];

	const [index, setIndex] = React.useState(0);
	const [paused, setPaused] = React.useState(false);
	const reduceMotion = useReducedMotion();

	React.useEffect(() => {
		if (paused) return;
		const id = setInterval(
			() => setIndex((i) => (i + 1) % quotes.length),
			5500
		);
		return () => clearInterval(id);
	}, [paused, quotes.length]);

	const go = (dir: -1 | 1) =>
		setIndex((i) => (i + dir + quotes.length) % quotes.length);

	return (
		<section id="partners" className="relative bg-[#030712] py-16 sm:py-24">
			{/* subtle backdrop grid */}
			<div
				aria-hidden
				className="absolute inset-0 opacity-[0.08]"
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
				<div className="mx-auto mb-8 max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						Partnership & Trust
					</div>
					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
						Built together.{" "}
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Ship faster.
						</span>
					</h2>
				</div>

				{/* Carousel */}
				<div
					className="mx-auto flex max-w-3xl items-stretch gap-4"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}>
					{/* Controls (left) */}
					<button
						aria-label="Previous quote"
						onClick={() => go(-1)}
						className="hidden h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 sm:grid">
						<ChevronLeft className="h-4 w-4" />
					</button>

					{/* Card stack */}
					<div className="relative flex-1">
						<div
							className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-70 blur-[10px]"
							style={{
								background:
									"linear-gradient(135deg, rgba(34,211,238,0.16), rgba(16,185,129,0.16))",
							}}
						/>

						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
							<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

							<div aria-live="polite" className="relative min-h-[140px]">
								<AnimatePresence mode="wait" initial={false}>
									<motion.blockquote
										key={index}
										initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
										transition={{ duration: 0.35 }}
										className="text-center">
										<p className="mx-auto max-w-2xl text-balance text-[17px] leading-relaxed text-white">
											“{quotes[index].text}”
										</p>
										<footer className="mt-4 text-sm text-white/70">
											— {quotes[index].author}
										</footer>
									</motion.blockquote>
								</AnimatePresence>
							</div>

							{/* pager dots */}
							<div className="mt-6 flex items-center justify-center gap-2">
								{quotes.map((_, i) => (
									<button
										key={i}
										aria-label={`Show quote ${i + 1}`}
										onClick={() => setIndex(i)}
										className={`h-2.5 w-2.5 rounded-full transition ${
											i === index
												? "bg-gradient-to-r from-cyan-400 to-emerald-400"
												: "bg-white/20 hover:bg-white/35"
										}`}
									/>
								))}
							</div>

							{/* pause / play */}
						</div>
					</div>

					{/* Controls (right) */}
					<button
						aria-label="Next quote"
						onClick={() => go(1)}
						className="hidden h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 sm:grid">
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</div>
		</section>
	);
}

/* --------------------------------- Types --------------------------------- */

type Quote = { text: string; author: string };
