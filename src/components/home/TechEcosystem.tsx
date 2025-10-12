"use client";
import * as React from "react";
import { motion } from "framer-motion";

/**
 * TechEcosystem — Logo Grid (monotone → colored on hover)
 * -------------------------------------------------------
 * Stack: Next.js | FastAPI | AWS | LangChain | PostgreSQL | Docker | Prisma | Cloudflare
 * Drop-in: components/site/TechEcosystem.tsx
 */

// 1) Custom icon props that include fillGradient
type LogoIconProps = React.SVGProps<SVGSVGElement> & { fillGradient?: boolean };

// 2) Logo item uses the custom prop type (so <Icon fillGradient /> is allowed)
type LogoItem = {
	name: string;
	icon: (props: LogoIconProps) => React.JSX.Element;
};

export default function TechEcosystem() {
	const items: LogoItem[] = [
		{ name: "Next.js", icon: NextIcon },
		{ name: "FastAPI", icon: FastAPIIcon },
		{ name: "AWS", icon: AWSIcon },
		{ name: "LangChain", icon: LangChainIcon },
		{ name: "PostgreSQL", icon: PostgresIcon },
		{ name: "Docker", icon: DockerIcon },
		{ name: "Prisma", icon: PrismaIcon },
		{ name: "Cloudflare", icon: CloudflareIcon },
	];

	return (
		<section id="tech" className="relative bg-[#030712] py-16 sm:py-24">
			{/* backdrop grid */}
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
				<div className="mx-auto mb-8 max-w-2xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						Tech Ecosystem
					</div>
					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
						Trusted tools.{" "}
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Tailored innovation.
						</span>
					</h2>
				</div>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{items.map((it, i) => (
						<Tile key={it.name} index={i} {...it} />
					))}
				</div>
			</div>
		</section>
	);
}

/* --------------------------------- Tile ---------------------------------- */

function Tile({ name, icon: Icon, index }: LogoItem & { index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.45, delay: 0.03 * index }}
			className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
			{/* glow ring */}
			<div
				className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-60 blur-[6px] transition-opacity group-hover:opacity-90"
				style={{
					background:
						"linear-gradient(135deg, rgba(34,211,238,0.18), rgba(16,185,129,0.18))",
				}}
			/>

			{/* Icon: monotone -> gradient on hover (two layers) */}
			<div className="relative h-9 w-9">
				{/* monochrome */}
				<Icon className="absolute inset-0 h-9 w-9 text-white/70 opacity-100 transition-opacity group-hover:opacity-0" />
				{/* gradient */}
				<Icon
					className="absolute inset-0 h-9 w-9 opacity-0 transition-opacity group-hover:opacity-100"
					style={{ filter: "drop-shadow(0 0 10px rgba(0,255,200,0.25))" }}
					fillGradient
				/>
			</div>

			<span className="text-sm font-medium text-white/85">{name}</span>
		</motion.div>
	);
}

/* ------------------------------- Icons (SVG) ------------------------------ */
// Each icon supports two modes:
// - Default: currentColor strokes/fills (monotone)
// - With prop `fillGradient`, applies a cyan→green gradient

function gradientDefs(id: string) {
	return (
		<defs>
			<linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor="#67e8f9" />
				<stop offset="100%" stopColor="#6ee7b7" />
			</linearGradient>
		</defs>
	);
}

function NextIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="Next.js"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<circle
				cx="12"
				cy="12"
				r="10"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.5"
			/>
			<path
				d="M7.5 8v8"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
			<path
				d="M12 8l4.5 8"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function FastAPIIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="FastAPI"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<path
				d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.5"
			/>
			<path
				d="M12 6l4 6-4 6-4-6 4-6Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.5"
			/>
		</svg>
	);
}

function AWSIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg viewBox="0 0 24 24" className={className} aria-label="AWS" {...rest}>
			{fillGradient && gradientDefs(gid)}
			<path
				d="M4 10c2-4 14-4 16 0"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<path
				d="M6 14c3 2 9 2 12 0"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<path
				d="M8 17c2 1 6 1 8 0"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function LangChainIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="LangChain"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<path
				d="M7 12a3 3 0 0 1 3-3h2a3 3 0 1 1 0 6h-2a3 3 0 0 1-3-3Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.6"
			/>
			<path
				d="M10 9 14 15"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function PostgresIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="PostgreSQL"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<path
				d="M12 4c5 0 8 2 8 5s-3 5-8 5-8-2-8-5 3-5 8-5Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.4"
			/>
			<path
				d="M9 14c0 2 1 4 3 6 2-2 3-4 3-6"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function DockerIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="Docker"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<rect
				x="4"
				y="11"
				width="4"
				height="3"
				rx="0.6"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
			/>
			<rect
				x="9"
				y="11"
				width="4"
				height="3"
				rx="0.6"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
			/>
			<rect
				x="14"
				y="11"
				width="4"
				height="3"
				rx="0.6"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
			/>
			<rect
				x="9"
				y="7"
				width="4"
				height="3"
				rx="0.6"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
			/>
			<path
				d="M3 15c0 3 4 5 9 5s9-2 9-5H3Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
			/>
		</svg>
	);
}

function PrismaIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="Prisma"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<path
				d="M6 18 12 4l6 10-6 4-6-0Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeLinejoin="round"
				strokeWidth="1.6"
			/>
		</svg>
	);
}

function CloudflareIcon({ className, fillGradient, ...rest }: LogoIconProps) {
	const gid = React.useId();
	return (
		<svg
			viewBox="0 0 24 24"
			className={className}
			aria-label="Cloudflare"
			{...rest}>
			{fillGradient && gradientDefs(gid)}
			<path
				d="M7 15a4 4 0 1 1 2-7.5A5 5 0 1 1 17 15H7Z"
				fill="none"
				stroke={fillGradient ? `url(#${gid})` : "currentColor"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
