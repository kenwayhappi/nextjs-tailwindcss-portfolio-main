import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const AppHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'À propos', href: '#about' },
		{ name: 'Parcours', href: '#parcours' },
		{ name: 'Projets', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? 'glass py-3' : 'bg-transparent py-5'
			}`}
		>
			<div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="text-2xl font-bold font-mono text-white tracking-widest">
					<span className="text-primary-400">&lt;</span>HM<span className="text-primary-400">/&gt;</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
						>
							{link.name}
						</a>
					))}
					<a
						href="/cv2026.pdf"
						download
						className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-600/20 text-primary-400 border border-primary-500/30 hover:bg-primary-500/30 transition-all text-sm font-semibold"
					>
						<Download size={16} />
						Mon CV
					</a>
				</nav>

				{/* Mobile Nav Toggle */}
				<button
					className="md:hidden text-slate-300 hover:text-white"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Nav Menu */}
			{isOpen && (
				<motion.nav
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="absolute top-full left-0 w-full glass-card border-x-0 border-t-0 rounded-none shadow-2xl flex flex-col p-6 gap-4 md:hidden"
				>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="text-lg font-medium text-slate-300 hover:text-white"
						>
							{link.name}
						</a>
					))}
					<a
						href="/cv2026.pdf"
						download
						className="flex items-center justify-center gap-2 px-6 py-3 mt-4 rounded-xl bg-primary-600 text-white font-semibold"
					>
						<Download size={18} />
						Télécharger mon CV
					</a>
				</motion.nav>
			)}
		</header>
	);
};

export default AppHeader;
