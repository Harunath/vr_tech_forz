"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

import { Variants } from "framer-motion";
const fadeUp: Variants = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export default function ContactSection() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		business: "",
		message: "",
	});

	return (
		<section
			id="contact"
			className="relative min-h-screen overflow-hidden bg-[#030712] py-20 text-white">
			{/* Animated background: orbs + slow grid */}
			<AnimatedBG />

			{/* Section Heading */}
			<div className="relative z-10 text-center mb-16">
				<h2 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
					Contact Us
				</h2>
				<p className="mt-3 text-white/70 text-sm md:text-base max-w-2xl mx-auto">
					Let’s collaborate and create something exceptional — share your ideas
					and we’ll make them real.
				</p>
			</div>

			<div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
				{/* ---------- LEFT SIDE ---------- */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					className="relative h-[460px] md:h-[540px] overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(0,255,200,0.08)]">
					{/* parallax float */}
					<motion.div
						className="absolute inset-0 rounded-2xl will-change-transform"
						animate={{ y: [0, -6, 0] }}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1760774763/banner-redimensionat_cyqakm.jpg"
							alt="Contact background"
							fill
							className="rounded-2xl object-cover object-center brightness-[0.92]"
							priority
						/>
					</motion.div>

					{/* overlay */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#030712]/95 via-[#030712]/50 to-transparent" />

					{/* scanline gloss */}
					<motion.div
						aria-hidden
						className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
						animate={{ x: ["-50%", "160%"] }}
						transition={{
							duration: 2.2,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 1,
						}}
					/>

					{/* Text Card */}
					<div className="absolute bottom-6 left-6 right-6">
						<div className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
							<h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
								Let&apos;s Grow Your Business
							</h3>
							<p className="mt-2 max-w-sm text-sm text-white/70">
								We build product-grade software, modern websites, and growth
								systems.
							</p>

							<div className="mt-5 space-y-2 text-sm text-white/80">
								<ContactInfo
									icon={<Mail size={16} />}
									text="info@vrtechforz.com"
								/>
								<ContactInfo
									icon={<MapPin size={16} />}
									text="VR Tech Forz, Hyderabad, India"
								/>
								<ContactInfo
									icon={<Globe size={16} />}
									text="www.vrtechforz.com"
								/>
							</div>
						</div>
					</div>
				</motion.div>

				{/* ---------- RIGHT SIDE (FORM) ---------- */}
				<motion.form
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className="relative z-10 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_0_30px_rgba(0,255,200,0.1)] backdrop-blur-xl md:px-10 md:py-10"
					onSubmit={(e) => e.preventDefault()}>
					{/* animated gradient ring */}
					<div
						aria-hidden
						className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[1.1rem] opacity-20 [mask:linear-gradient(black,transparent_60%)]">
						<motion.div
							className="absolute inset-0 rounded-[1.1rem] bg-[conic-gradient(from_var(--tw-gradient-from-angle),theme(colors.cyan.400),theme(colors.emerald.400),theme(colors.sky.400),theme(colors.cyan.400))]"
							animate={{ rotate: 360 }}
							transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
						/>
					</div>

					<motion.h2
						variants={fadeUp}
						custom={0}
						className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-3xl font-semibold text-transparent">
						Get in Touch
					</motion.h2>
					<motion.p
						variants={fadeUp}
						custom={1}
						className="mt-2 text-sm text-white/70">
						Tell us what you’re building—we’ll make it real.
					</motion.p>

					<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<Field i={2}>
							<Input placeholder="Full Name" />
						</Field>
						<Field i={3}>
							<Input placeholder="E-mail" type="email" />
						</Field>
						<Field i={4}>
							<Input placeholder="Phone Number" type="tel" />
						</Field>
						<Field i={5}>
							<Input placeholder="Business Name" />
						</Field>
					</div>

					<Field i={6}>
						<textarea
							placeholder="Your Message"
							rows={4}
							className="mt-4 w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-emerald-400"
						/>
					</Field>

					<motion.div variants={fadeUp} custom={7} className="mt-6">
						<CTA>Let’s Grow Your Business</CTA>
					</motion.div>
				</motion.form>
			</div>
		</section>
	);
}

/* ---------- Animated BG ---------- */
function AnimatedBG() {
	return (
		<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
			{/* moving mesh */}
			<motion.div
				className="absolute inset-0 opacity-20"
				style={{
					background:
						"radial-gradient(120% 80% at 50% -10%, #22d3ee 0%, transparent 60%), radial-gradient(120% 80% at 50% 110%, #10b981 0%, transparent 60%)",
				}}
				animate={{ backgroundPosition: ["0% 0%", "20% 10%", "0% 0%"] }}
				transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
			/>
			{/* floating orbs */}
			<motion.div
				className="absolute -left-8 top-1/4 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl"
				animate={{ y: [0, -16, 0] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute -right-8 top-2/3 h-72 w-72 rounded-full bg-emerald-400/12 blur-3xl"
				animate={{ y: [0, 16, 0] }}
				transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
			/>
			{/* subtle grid */}
			<motion.svg
				className="absolute inset-0 h-full w-full opacity-10"
				xmlns="http://www.w3.org/2000/svg"
				animate={{ x: [0, -20, 0] }}
				transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
				<defs>
					<pattern id="g" width="42" height="42" patternUnits="userSpaceOnUse">
						<path
							d="M 42 0 L 0 0 0 42"
							fill="none"
							stroke="rgba(163,230,216,0.35)"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#g)" />
			</motion.svg>
			{/* vignette */}
			<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,rgba(2,6,23,0.94))]" />
		</div>
	);
}

/* ---------- Reusable wrappers ---------- */
function Field({ children, i }: { children: React.ReactNode; i: number }) {
	return (
		<motion.div variants={fadeUp} custom={i}>
			{children}
		</motion.div>
	);
}

function Input({
	placeholder,
	type = "text",
}: {
	placeholder: string;
	type?: string;
}) {
	return (
		<div className="group relative">
			<input
				type={type}
				placeholder={placeholder}
				className="peer w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-cyan-400"
			/>
			{/* focus glow ring */}
			<span className="pointer-events-none absolute inset-0 -z-10 rounded-md opacity-0 transition group-focus-within:opacity-100 group-hover:opacity-100 shadow-[0_0_24px_rgba(34,211,238,0.25)]" />
		</div>
	);
}

/* ---------- CTA with animated glow sweep ---------- */
function CTA({ children }: { children: React.ReactNode }) {
	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_14px_rgba(0,255,200,0.25)]">
			<span className="relative z-10">{children}</span>
			{/* sweep */}
			<motion.span
				aria-hidden
				className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
				animate={{ x: ["-20%", "160%"] }}
				transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
			/>
		</motion.button>
	);
}

/* ---------- Contact Info line (with soft pulse) ---------- */
function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
	return (
		<motion.div className="flex items-center gap-3">
			<motion.div
				className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-cyan-400"
				animate={{
					boxShadow: [
						"0 0 0 rgba(0,0,0,0)",
						"0 0 16px rgba(34,211,238,0.25)",
						"0 0 0 rgba(0,0,0,0)",
					],
				}}
				transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
				{icon}
			</motion.div>
			<span className="text-white/80">{text}</span>
		</motion.div>
	);
}
