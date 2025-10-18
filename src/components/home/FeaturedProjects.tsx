"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

/** ----------------------------------------------------------------
 *  DATA
 * ---------------------------------------------------------------- */
type Project = {
	title: string;
	domain: string;
	blurb: string;
	leftImg: string;
	rightImg: string;
};

const PROJECTS: Project[] = [
	{
		title: "VR KISAN PARIVAAR",
		domain: "vrkisanparivaar.com",
		blurb:
			"A digital initiative empowering farmers through knowledge sharing, sustainable practices, and direct access to agri resources and market networks. VR Kisan Parivaar aims to build a connected farming community promoting innovation and rural growth.",
		leftImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474531/Comp4_xlcf1s.jpg",
		rightImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1752474120/Agricultural-Systems-of-the-World_uf0f5q.jpg",
	},

	{
		title: "BUSINESS NETWORKING",
		domain: "bizn.in",
		blurb:
			"A professional networking platform connecting entrepreneurs, startups, and businesses—designed to foster collaborations, growth, and opportunities.",
		leftImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1760728872/0x0_pddjs8.jpg",
		rightImg:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1760728872/business-networking-1080x675_jhlsjo.jpg",
	},
];

export default function FeaturedProjectsCurtains() {
	return (
		<section className="relative overflow-hidden bg-[#030712] py-28 text-white">
			<TechBG />
			<SpotlightCursor />
			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<header className="mb-14 text-center">
					<h2 className="inline-block bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-5xl">
						Featured Projects
					</h2>

					{/* Tech chips / tags */}
					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{[
							"Next.js",
							"TypeScript",
							"Framer Motion",
							"Tailwind",
							"Cloudinary",
							"SEO",
							"Accessibility",
						].map((t) => (
							<span
								key={t}
								className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
								{t}
							</span>
						))}
					</div>
				</header>

				<div className="space-y-44">
					{PROJECTS.map((p, i) => (
						<CurtainBlock key={i} project={p} priority={i === 0} />
					))}
				</div>
			</div>

			{/* Subtle film grain overlay */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
				style={{
					backgroundImage:
						"radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 50%, transparent 51%), radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.3) 50%, transparent 51%), radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.25) 50%, transparent 51%)",
					backgroundSize: "3px 3px, 3px 3px, 3px 3px",
				}}
			/>
		</section>
	);
}

/** ----------------------------------------------------------------
 *  CURTAIN BLOCK
 * ---------------------------------------------------------------- */
function CurtainBlock({
	project,
	priority = false,
}: {
	project: Project;
	priority?: boolean;
}) {
	const ref = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 20%"],
	});

	// Curtain transforms
	const leftX = useTransform(scrollYProgress, [0, 1], ["-6vw", "-100vw"]);
	const leftRot = useTransform(scrollYProgress, [0, 1], [-4, 0]);
	const leftScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
	const leftGlow = useTransform(scrollYProgress, [0, 1], [0.25, 0.05]);

	const rightX = useTransform(scrollYProgress, [0, 1], ["6vw", "100vw"]);
	const rightRot = useTransform(scrollYProgress, [0, 1], [4, 0]);
	const rightScale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
	const rightGlow = useTransform(scrollYProgress, [0, 1], [0.25, 0.05]);

	const cardY = useTransform(scrollYProgress, [0, 1], [10, -10]);
	const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
	const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

	return (
		<div ref={ref} className="relative">
			{/* Desktop */}
			<div className="hidden md:block relative h-[92vh]">
				<motion.div
					style={{
						y: cardY as MotionValue<number>,
						opacity: cardOpacity as MotionValue<number>,
					}}
					className="group absolute left-1/2 top-1/2 z-10 w-[min(92vw,780px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-[#0b1220]/70 px-10 py-12 text-center shadow-[0_0_40px_rgba(6,182,212,0.08)] backdrop-blur-xl">
					<motion.div
						aria-hidden
						initial={{ rotate: 0 }}
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
						className="absolute -inset-[2px] rounded-[inherit] bg-[conic-gradient(from_var(--tw-gradient-from-angle),#22d3ee,#10b981,#38bdf8,#22d3ee)] opacity-20"
					/>

					<motion.div
						style={{ opacity: glowOpacity as MotionValue<number> }}
						className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-cyan-500/10 via-transparent to-emerald-500/10 blur-2xl"
					/>

					<p className="mb-2 inline-flex items-center justify-center gap-2 text-xs text-white/60">
						<Dot className="text-emerald-400/80" />
						<span className="font-medium tracking-wide text-white/80">
							{project.domain}
						</span>
					</p>
					<p className="mx-auto mb-5 max-w-[60ch] text-xs sm:text-base leading-relaxed text-white/70">
						{project.blurb}
					</p>
					<h3 className="mb-7 bg-gradient-to-br from-white to-white/70 bg-clip-text text-5xl md:text-7xl font-semibold tracking-[0.02em] text-transparent">
						{project.title}
					</h3>

					<div className="mt-8 flex items-center justify-center gap-3">
						<ButtonGlow size="sm">View case study</ButtonGlow>
						<GhostPill size="sm">Visit site</GhostPill>
					</div>
				</motion.div>

				<CurtainImage
					side="left"
					src={project.leftImg}
					alt={`${project.title} left`}
					priority={priority}
					style={{ x: leftX, rotate: leftRot, scale: leftScale }}
				/>
				<CurtainImage
					side="right"
					src={project.rightImg}
					alt={`${project.title} right`}
					style={{ x: rightX, rotate: rightRot, scale: rightScale }}
				/>
			</div>

			{/* Mobile */}
			<div className="md:hidden grid grid-cols-1 gap-6">
				<MobileTile
					src={project.leftImg}
					alt={`${project.title} left`}
					priority={priority}
				/>
				<motion.div
					className="relative mx-auto w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1220]/70 px-6 py-8 text-center shadow-[0_0_25px_rgba(34,211,238,0.15)] backdrop-blur-sm"
					style={{ y: cardY as MotionValue<number> }}>
					<p className="mb-2 text-xs text-white/60">{project.domain}</p>
					<p className="mb-4 text-sm text-white/70">{project.blurb}</p>
					<h3 className="text-2xl font-semibold text-white">{project.title}</h3>
				</motion.div>

				<MobileTile
					src={project.rightImg}
					alt={`${project.title} right`}
					priority={priority}
				/>
			</div>
		</div>
	);
}

/** ----------------------------------------------------------------
 *  Curtain image
 * ---------------------------------------------------------------- */
function CurtainImage({
	side,
	src,
	alt,
	style,
	priority = false,
}: {
	side: "left" | "right";
	src: string;
	alt: string;
	style: { [key: string]: MotionValue<string> | MotionValue<number> };
	priority?: boolean;
}) {
	const sidePos =
		side === "left" ? "left-[calc(50%_-_18vw)]" : "right-[calc(50%_-_18vw)]";
	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			style={style}
			whileHover={{ rotate: side === "left" ? -1.5 : 1.5, scale: 1.045 }}
			transition={{ type: "spring", stiffness: 130, damping: 18 }}
			className={`group absolute top-1/2 z-20 aspect-[4/5] min-w-[280px] w-[36vw] max-w-[520px] -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.35)] backdrop-blur-sm ${sidePos}`}>
			<div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-white/5" />
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				className="object-cover"
				sizes="36vw"
			/>
			<div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[radial-gradient(120%_60%_at_50%_50%,transparent,rgba(2,6,23,0.65))]" />
			<motion.div
				initial={false}
				animate={{ x: hovered ? "110%" : "-60%" }}
				transition={{ duration: 1.2, ease: "easeInOut" }}
				className="pointer-events-none absolute top-0 h-full w-[30%] -skew-x-12 bg-gradient-to-r from-white/5 via-white/20 to-transparent"
			/>
		</motion.div>
	);
}

/** ----------------------------------------------------------------
 *  Mobile tile helper
 * ---------------------------------------------------------------- */
function MobileTile({
	src,
	alt,
	priority = false,
}: {
	src: string;
	alt: string;
	priority?: boolean;
}) {
	return (
		<motion.div
			whileHover={{ scale: 1.02, rotate: 0.5 }}
			transition={{ type: "spring", stiffness: 140, damping: 18 }}
			className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm">
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				className="object-cover"
				sizes="100vw"
			/>
			<div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(120%_60%_at_50%_50%,transparent,rgba(2,6,23,0.6))]" />
		</motion.div>
	);
}

/** ----------------------------------------------------------------
 *  Background
 * ---------------------------------------------------------------- */
function TechBG() {
	return (
		<div aria-hidden className="absolute inset-0">
			<div className="absolute inset-0 opacity-[0.2]">
				<div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#22d3ee_0%,transparent_60%),radial-gradient(120%_80%_at_50%_110%,#10b981_0%,transparent_60%)]" />
			</div>
			<motion.div
				className="absolute -left-10 top-1/4 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
				animate={{ y: [0, -20, 0] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute -right-10 top-2/3 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl"
				animate={{ y: [0, 20, 0] }}
				transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
			/>
			<div className="absolute inset-0 opacity-[0.12]">
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
			<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(2,6,23,0.9))]" />
		</div>
	);
}

/** ----------------------------------------------------------------
 *  Spotlight cursor
 * ---------------------------------------------------------------- */
function SpotlightCursor() {
	const [pos, setPos] = useState({ x: -9999, y: -9999 });
	useEffect(() => {
		const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);

	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 z-[1]"
			style={{
				background: `radial-gradient(240px 240px at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.08), transparent 60%)`,
			}}
		/>
	);
}

/** ----------------------------------------------------------------
 *  UI Primitives
 * ---------------------------------------------------------------- */
function ButtonGlow({
	children,
	size = "md",
}: {
	children: React.ReactNode;
	size?: "sm" | "md";
}) {
	const cls = useMemo(
		() =>
			`relative inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-${
				size === "sm" ? 3 : 4
			} py-${size === "sm" ? 1.5 : 2} text-${
				size === "sm" ? "xs" : "sm"
			} font-medium text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.15)] backdrop-blur hover:border-cyan-400/50 hover:bg-cyan-400/15 active:scale-[0.98] transition`,
		[size]
	);
	return (
		<button className={cls}>
			<span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-emerald-400/0 blur-xl" />
			<span className="relative">{children}</span>
		</button>
	);
}

function GhostPill({
	children,
	size = "md",
}: {
	children: React.ReactNode;
	size?: "sm" | "md";
}) {
	return (
		<button
			className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-${
				size === "sm" ? 3 : 4
			} py-${size === "sm" ? 1.5 : 2} text-${
				size === "sm" ? "xs" : "sm"
			} text-white/80 backdrop-blur hover:bg-white/10 active:scale-[0.98] transition`}>
			{children}
		</button>
	);
}

function Dot({ className = "" }: { className?: string }) {
	return <span className={`inline-block h-2 w-2 rounded-full ${className}`} />;
}

// import React from "react";

// function FeaturedProjects() {
// 	return <div>FeaturedProjects</div>;
// }

// export default FeaturedProjects;
