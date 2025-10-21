"use client";
import * as React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="relative bg-[#030712] border-t border-white/10">
			<div className="mx-auto max-w-7xl px-6 py-12">
				{/* Top row */}
				<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
					{/* Logo + Brand */}
					<Link
						href="/"
						aria-label="VR Tech Forz — Home"
						className="group flex items-center gap-3">
						<BrandMark size={34} />
						<div className="leading-tight">
							<span className="block text-sm font-semibold tracking-wider text-white/90">
								VR <span className="text-cyan-300">Tech</span>{" "}
								<span className="text-emerald-300">Forz</span>
							</span>
							<span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">
								Engineering Tomorrow’s Tech, Today.
							</span>
						</div>
					</Link>

					{/* Contact + Social */}
					<nav className="flex flex-wrap items-center gap-3 text-sm">
						<a
							href="mailto:info@vrtechforz.com"
							className="rounded-md px-2 py-1 text-white/85 hover:text-white hover:bg-white/5 transition">
							info@vrtechforz.com
						</a>

						<span
							className="hidden h-4 w-px bg-white/15 md:block"
							aria-hidden
						/>

						<SocialLink
							href="https://www.linkedin.com/"
							label="LinkedIn"
							ariaLabel="VR Tech Forz on LinkedIn">
							<LinkedInIcon className="h-4 w-4" />
							<span className="ml-1.5">LinkedIn</span>
						</SocialLink>

						<SocialLink
							href="https://github.com/"
							label="GitHub"
							ariaLabel="VR Tech Forz on GitHub">
							<GitHubIcon className="h-4 w-4" />
							<span className="ml-1.5">GitHub</span>
						</SocialLink>

						<SocialLink
							href="https://twitter.com/"
							label="Twitter"
							ariaLabel="VR Tech Forz on Twitter/X">
							<XIcon className="h-4 w-4" />
							<span className="ml-1.5">Twitter</span>
						</SocialLink>
					</nav>
				</div>

				{/* Divider */}
				<div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

				{/* Bottom line */}
				<div className="mt-6 flex flex-col items-start justify-between gap-2 text-xs text-white/55 md:flex-row md:items-center">
					<p>© 2025 VR Tech Forz · Division of The VR Group</p>
					<p className="text-white/40">
						Trusted tools.{" "}
						<span className="text-white/60">Tailored innovation.</span>
					</p>
				</div>
			</div>
		</footer>
	);
}

/* --- Helpers --- */
function SocialLink({
	href,
	ariaLabel,
	children,
	label,
}: {
	href: string;
	ariaLabel: string;
	children: React.ReactNode;
	label: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={ariaLabel}
			className="inline-flex items-center rounded-md px-2 py-1 text-white/80 hover:text-white hover:bg-white/5 transition"
			title={label}>
			{children}
		</a>
	);
}

/* --- Logo (inline SVG, neon accent) --- */
function BrandMark({ size = 32 }: { size?: number }) {
	return (
		<div className="relative grid place-items-center">
			<span
				className="absolute inset-0 rounded-xl blur-[10px]"
				style={{
					background:
						"linear-gradient(135deg, rgba(34,211,238,0.40), rgba(16,185,129,0.40))",
				}}
				aria-hidden
			/>
			<svg
				width={size}
				height={size}
				viewBox="0 0 64 64"
				className="relative rounded-xl shadow-[0_0_24px_rgba(0,255,200,0.18)]"
				aria-hidden="true">
				<rect
					x="2"
					y="2"
					width="60"
					height="60"
					rx="14"
					fill="#0B1220"
					stroke="url(#g1)"
					strokeWidth="2"
				/>
				<path
					d="M14 18 L24 42 L34 18"
					stroke="#22d3ee"
					strokeWidth="3.2"
					strokeLinecap="round"
					fill="none"
				/>
				<path
					d="M36 18 L50 18 Q56 18 52 26 Q56 34 48 34 L36 34 Z"
					stroke="#34d399"
					strokeWidth="3"
					fill="none"
					strokeLinejoin="round"
				/>
				<path
					d="M36 38 L52 38"
					stroke="#22d3ee"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<path
					d="M44 38 L44 46 L52 46"
					stroke="#34d399"
					strokeWidth="3"
					strokeLinecap="round"
				/>
				<defs>
					<linearGradient id="g1" x1="0" y1="0" x2="64" y2="64">
						<stop offset="0%" stopColor="#22d3ee" />
						<stop offset="100%" stopColor="#34d399" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}

/* --- Minimal icons --- */
function LinkedInIcon({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.9V24H.5V8.5Zm7.6 0h4.7v2.1h.1c.6-1.1 2-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.9V24h-4.9v-6.6c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.6V24H8.1V8.5Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function GitHubIcon({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"
				fill="currentColor"
			/>
		</svg>
	);
}
function XIcon({ className = "" }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" className={className} aria-hidden="true">
			<path
				d="M18.2 2H21l-6.4 7.3L22 22h-6.8l-4.6-6-5.3 6H2.4l6.9-7.8L2 2h6.9l4.2 5.5L18.2 2Zm-2.4 18h1.8L8.4 4H6.5l9.3 16Z"
				fill="currentColor"
			/>
		</svg>
	);
}
