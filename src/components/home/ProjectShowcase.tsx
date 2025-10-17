"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function ProjectShowcase() {
	const PROJECTS = useMemo(
		() => [
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1753431191/Screenshot_2025-07-25_134250_fzqtfb.png",
				title: "",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1758018684/Screenshot_2025-09-16_160111_hbgfvy.png",
				title: "",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1758018625/Screenshot_2025-09-16_160002_jisqhr.png",
				title: "",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1758019435/Screenshot_2025-09-16_161336_n2rrtd.png",
				title: "",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1742481482/Screenshot_2025-03-20_200747_g8lw3z.png",
				title: "",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1741339318/Screenshot_2025-03-07_145105_p5nwh5.png",
				title: "",
			},
			{
				src: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1744710608/Screenshot_2025-04-15_151906_w836vq.png",
				title: "",
			},
		],
		[]
	);

	const n = PROJECTS.length;
	const step = 360 / n;

	return (
		<section
			id="work"
			className="relative min-h-[90svh] w-full overflow-hidden bg-gradient-to-b from-[#030712] via-[#050227] to-[#00030f] text-white">
			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:py-20 md:gap-14 md:py-28">
				{/* Header */}
				<div className="text-center space-y-3 sm:space-y-4">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						Our Work
					</div>
					<h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Beautiful, Fast &amp; Scalable Websites
						</span>
					</h2>
					<p className="mx-auto max-w-xl text-sm sm:text-base text-white/70">
						Hand-crafted UI, performance-first engineering, SEO-ready, secure,
						and built to convert.
					</p>
				</div>

				{/* 3D Ring Carousel */}
				<div className="group relative mt-2 w-full select-none">
					<div className="mx-auto h-[260px] sm:h-[300px] md:h-[380px] lg:h-[440px] w-full max-w-6xl [perspective:1200px] sm:[perspective:1400px]">
						<div
							className="relative mx-auto h-full w-full [transform-style:preserve-3d]"
							style={{ animation: "spin3d 40s linear infinite" }}>
							{PROJECTS.map((p, i) => {
								const rotate = i * step;
								return (
									<figure
										key={i}
										className="absolute left-1/2 top-1/2 h-[120px] w-[200px] sm:h-[160px] sm:w-[260px] md:h-[200px] md:w-[340px] lg:h-[220px] lg:w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_0_24px_rgba(0,255,200,0.05)] backdrop-blur-md transition hover:scale-[1.05]"
										style={{
											transform: `rotateY(${rotate}deg) translateZ(clamp(160px,40vw,520px))`,
										}}>
										<Image
											src={p.src}
											alt="Project screenshot"
											fill
											className="object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
											sizes="(max-width:640px) 200px, (max-width:768px) 260px, (max-width:1024px) 340px, 380px"
										/>
									</figure>
								);
							})}
						</div>
					</div>

					{/* Reflection glow */}
					<div className="pointer-events-none absolute inset-x-0 -bottom-6 sm:-bottom-8 mx-auto h-20 sm:h-24 w-3/4 sm:w-2/3 rounded-[100%] bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-emerald-400/20 blur-2xl" />
				</div>

				{/* CTA */}
				<div className="mt-10 sm:mt-12">
					<Link
						href="#contact"
						className="relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-6 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-emerald-500/30 active:scale-[0.98]">
						Get Your Website Now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4 sm:h-5 sm:w-5">
							<path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-8.72 8.72a.75.75 0 1 0 1.06 1.06l8.72-8.72V15a.75.75 0 0 0 1.5 0V4.5h-11.25Z" />
						</svg>
					</Link>
				</div>
			</div>

			<style jsx>{`
				@keyframes spin3d {
					from {
						transform: rotateY(0deg);
					}
					to {
						transform: rotateY(-360deg);
					}
				}
			`}</style>
		</section>
	);
}
