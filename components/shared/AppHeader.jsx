import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const LogoSVG = () => (
	<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
		<polygon points="19,1 35,10 35,28 19,37 3,28 3,10" fill="none" stroke="url(#hexGrad)" strokeWidth="1.8" />
		<text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fill="url(#hexGrad)" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="800">{'</>'}</text>
		<defs>
			<linearGradient id="hexGrad" x1="3" y1="1" x2="35" y2="37" gradientUnits="userSpaceOnUse">
				<stop offset="0%" stopColor="#818cf8" />
				<stop offset="100%" stopColor="#00f5ff" />
			</linearGradient>
		</defs>
	</svg>
);

const AppHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { lang, t, toggleLang } = useLanguage();
	const { theme, toggleTheme, mounted } = useThemeSwitcher();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: t.nav.about, href: '#about' },
		{ name: t.nav.parcours, href: '#parcours' },
		{ name: t.nav.projects, href: '#projects' },
		{ name: t.nav.contact, href: '#contact' },
	];

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-500 ${
				scrolled
					? 'bg-white/85 dark:bg-dark-950/85 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 py-3 shadow-xl'
					: 'bg-transparent py-5'
			}`}
		>
			<div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2.5 group">
					<div className="relative">
						<div className="absolute inset-0 rounded-full bg-accent/20 blur-lg group-hover:bg-accent/40 transition-all duration-300"></div>
						<LogoSVG />
					</div>
					<span className="font-mono text-sm font-bold tracking-widest">
						<span className="text-slate-900 dark:text-white">mathis</span>
						<span className="text-accent">.</span>
						<span className="text-primary-400">dev</span>
					</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-7">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="relative text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors duration-300 group py-1"
						>
							{link.name}
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent group-hover:w-full transition-all duration-300"></span>
						</a>
					))}

					{/* Theme Switcher Button */}
					{mounted && (
						<button
							onClick={toggleTheme}
							aria-label="Toggle Dark/Light Mode"
							className="p-2 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-dark-800/40 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent hover:border-accent/40 transition-all duration-300 shadow-sm"
						>
							{theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-600" />}
						</button>
					)}

					{/* Language Toggle */}
					<button
						onClick={toggleLang}
						aria-label="Toggle language"
						className="relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-dark-800/40 hover:border-accent/40 text-slate-600 dark:text-slate-400 hover:text-accent transition-all duration-300"
					>
						<span className={`transition-all duration-200 ${lang === 'fr' ? 'text-accent font-bold' : 'text-slate-500'}`}>FR</span>
						<span className="text-slate-400 dark:text-slate-600">/</span>
						<span className={`transition-all duration-200 ${lang === 'en' ? 'text-accent font-bold' : 'text-slate-500'}`}>EN</span>
					</button>

					{/* Download CV */}
					<a
						href="/cv2026.pdf"
						download
						className="relative flex items-center gap-2 px-5 py-2 rounded-full overflow-hidden text-xs font-mono font-bold tracking-wide transition-all duration-300 group"
					>
						<span className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent/20 border border-primary-500/40 rounded-full group-hover:from-primary-500/40 group-hover:to-accent/40 transition-all duration-300"></span>
						<Download size={14} className="relative z-10 text-accent" />
						<span className="relative z-10 text-slate-900 dark:text-white">{t.nav.cvBtn}</span>
					</a>
				</nav>

				{/* Mobile Controls */}
				<div className="md:hidden flex items-center gap-2.5">
					{mounted && (
						<button
							onClick={toggleTheme}
							aria-label="Toggle Dark/Light Mode"
							className="p-2 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-dark-800/60 text-slate-700 dark:text-slate-300"
						>
							{theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-indigo-600" />}
						</button>
					)}

					<button
						onClick={toggleLang}
						aria-label="Toggle language"
						className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-dark-800/60 text-slate-600 dark:text-slate-400"
					>
						<span className={lang === 'fr' ? 'text-accent' : 'text-slate-500'}>FR</span>
						<span className="text-slate-400 dark:text-slate-600">/</span>
						<span className={lang === 'en' ? 'text-accent' : 'text-slate-500'}>EN</span>
					</button>

					<button
						className="relative z-10 p-2 text-slate-800 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle navigation"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Nav Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -10, height: 0 }}
						animate={{ opacity: 1, y: 0, height: 'auto' }}
						exit={{ opacity: 0, y: -10, height: 0 }}
						transition={{ duration: 0.25, ease: 'easeOut' }}
						className="md:hidden bg-white/95 dark:bg-dark-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl"
					>
						<div className="container mx-auto px-6 py-6 flex flex-col gap-4">
							{navLinks.map((link, i) => (
								<motion.a
									key={link.href}
									href={link.href}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.07 }}
									onClick={() => setIsOpen(false)}
									className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-white border-b border-slate-100 dark:border-white/5 pb-3 last:border-0 transition-colors"
								>
									{link.name}
								</motion.a>
							))}
							<a
								href="/cv2026.pdf"
								download
								className="flex items-center justify-center gap-2 px-6 py-3 mt-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg shadow-primary-500/20"
							>
								<Download size={18} />
								{t.nav.cvBtnFull}
							</a>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default AppHeader;
