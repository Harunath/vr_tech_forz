"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const links = [
		{ label: "Home", href: "#" },
		{ label: "Services", href: "#services" },
		{ label: "Work", href: "#work" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-[#030712]/90 backdrop-blur-lg shadow-lg border-b border-cyan-400/10"
					: "bg-transparent"
			}`}>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				{/* --- Logo --- */}
				<Link href="/" className="flex items-center gap-2">
					<div className="relative flex items-center justify-center">
						<div className="absolute h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 blur-lg opacity-40"></div>
						<div className="relative h-10 w-10 rounded-xl bg-[#0A192F] border border-cyan-400/50 flex items-center justify-center shadow-[0_0_12px_rgba(0,255,255,0.3)]">
							<span className="text-cyan-300 font-bold text-lg tracking-tight">
								V
							</span>
							<span className="text-emerald-300 font-bold text-lg tracking-tight">
								R
							</span>
						</div>
					</div>
					<div className="ml-2">
						<h1 className="font-semibold text-white text-base tracking-wide">
							VR <span className="text-cyan-300">Tech</span>{" "}
							<span className="text-emerald-300">Forz</span>
						</h1>
					</div>
				</Link>

				{/* --- Desktop Nav --- */}
				<nav className="hidden md:flex items-center gap-8">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="relative text-white/80 hover:text-white text-sm font-medium transition">
							{link.label}
							<motion.span
								whileHover={{ width: "100%" }}
								transition={{ duration: 0.3 }}
								className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
							/>
						</Link>
					))}
				</nav>

				{/* --- CTA + Mobile Menu --- */}
				<div className="flex items-center gap-4">
					<Link
						href="#contact"
						className="hidden md:inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm px-4 py-2 rounded-md font-medium shadow-[0_0_12px_rgba(0,255,200,0.25)] hover:shadow-[0_0_16px_rgba(0,255,200,0.4)] transition">
						Get a Quote
					</Link>

					<button
						className="md:hidden text-white"
						onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			{/* --- Mobile Menu --- */}
			{menuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="md:hidden bg-[#030712]/95 backdrop-blur-lg border-t border-cyan-400/10 shadow-inner">
					<div className="flex flex-col items-start px-6 py-4 gap-3">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className="text-white/80 text-sm font-medium hover:text-cyan-300 transition">
								{link.label}
							</Link>
						))}
						<Link
							href="#contact"
							onClick={() => setMenuOpen(false)}
							className="mt-2 w-full text-center bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm px-4 py-2 rounded-md font-medium shadow-[0_0_12px_rgba(0,255,200,0.25)] hover:shadow-[0_0_16px_rgba(0,255,200,0.4)] transition">
							Get a Quote
						</Link>
					</div>
				</motion.div>
			)}
		</header>
	);
}
