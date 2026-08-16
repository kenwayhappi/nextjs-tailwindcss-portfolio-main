import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero3DCanvas = dynamic(() => import('../canvas/Hero3DCanvas'), { ssr: false });

const TerminalSimulator = ({ lines }) => {
	const [visibleLines, setVisibleLines] = useState([]);
	const [currentLineIdx, setCurrentLineIdx] = useState(0);
	const [typedCmd, setTypedCmd] = useState('');
	const [showOutput, setShowOutput] = useState(false);
	const [phase, setPhase] = useState('typing');

	useEffect(() => {
		setVisibleLines([]);
		setCurrentLineIdx(0);
		setTypedCmd('');
		setShowOutput(false);
		setPhase('typing');
	}, [lines]);

	useEffect(() => {
		if (currentLineIdx >= lines.length) return;
		const line = lines[currentLineIdx];

		if (phase === 'typing') {
			if (typedCmd.length < line.cmd.length) {
				const t = setTimeout(() => setTypedCmd(line.cmd.slice(0, typedCmd.length + 1)), 50);
				return () => clearTimeout(t);
			} else {
				const t = setTimeout(() => setPhase('output'), 250);
				return () => clearTimeout(t);
			}
		}

		if (phase === 'output') {
			setShowOutput(true);
			const t = setTimeout(() => setPhase('next'), 850);
			return () => clearTimeout(t);
		}

		if (phase === 'next') {
			setVisibleLines((prev) => [...prev, { cmd: line.cmd, output: line.output }]);
			setTypedCmd('');
			setShowOutput(false);
			setCurrentLineIdx((i) => i + 1);
			setPhase('typing');
		}
	}, [phase, typedCmd, currentLineIdx, lines]);

	const currentLine = lines[currentLineIdx];

	return (
		<div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-dark-950/90 backdrop-blur-2xl shadow-2xl">
			<div className="flex items-center gap-2 px-4 py-3 bg-dark-800/80 border-b border-white/5">
				<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
				<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
				<div className="w-3 h-3 rounded-full bg-terminalGreen/80"></div>
				<span className="ml-2 text-xs text-slate-400 font-mono">happi@dev:~</span>
			</div>
			<div className="p-5 font-mono text-xs sm:text-sm min-h-[190px] space-y-3">
				{visibleLines.map((line, i) => (
					<div key={i} className="space-y-0.5">
						<div className="flex items-center gap-2">
							<span className="text-terminalGreen">❯</span>
							<span className="text-slate-200">{line.cmd}</span>
						</div>
						<div className="text-accent pl-5 text-xs font-semibold">{line.output}</div>
					</div>
				))}
				{currentLineIdx < lines.length && (
					<div className="space-y-0.5">
						<div className="flex items-center gap-2">
							<span className="text-terminalGreen">❯</span>
							<span className="text-slate-200">{typedCmd}</span>
							<span className="w-2 h-4 bg-accent animate-caret inline-block"></span>
						</div>
						{showOutput && (
							<div className="text-accent pl-5 text-xs font-semibold">{currentLine?.output}</div>
						)}
					</div>
				)}
				{currentLineIdx >= lines.length && (
					<div className="flex items-center gap-2">
						<span className="text-terminalGreen">❯</span>
						<span className="w-2 h-4 bg-accent animate-caret inline-block"></span>
					</div>
				)}
			</div>
		</div>
	);
};

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Hero = () => {
	const { t } = useLanguage();
	const h = t.hero;

	return (
		<section className="relative min-h-[82vh] flex items-center py-4 sm:py-8 lg:py-10 overflow-hidden">
			{/* 3D Three.js Background Canvas */}
			<Hero3DCanvas />

			<div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
					{/* Left column — Bio & CTA */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col items-center lg:items-start text-center lg:text-left"
					>
						{/* Status badge */}
						<motion.div variants={itemVariants} className="mb-3 sm:mb-6">
							<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terminalGreen/10 border border-terminalGreen/30 backdrop-blur-md">
								<span className="w-2 h-2 rounded-full bg-terminalGreen animate-pulse"></span>
								<span className="text-terminalGreen text-xs font-mono font-medium">{h.available}</span>
							</div>
						</motion.div>

						{/* Name */}
						<motion.h1
							variants={itemVariants}
							className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-2 sm:mb-4 text-slate-900 dark:text-white"
						>
							Happi <br className="hidden sm:inline" />
							<span className="text-gradient font-black"> Mathis</span>
						</motion.h1>

						{/* Role Subtitle */}
						<motion.p
							variants={itemVariants}
							className="text-sm sm:text-xl text-slate-700 dark:text-slate-300 font-mono font-semibold mb-2 sm:mb-4"
						>
							<span className="text-accent">{'<'}</span>
							{' '}{h.role}{' '}
							<span className="text-accent">{'/>'}</span>
						</motion.p>

						{/* Description */}
						<motion.p
							variants={itemVariants}
							className="text-xs sm:text-base text-slate-700 dark:text-slate-400 mb-4 sm:mb-8 max-w-lg leading-relaxed"
						>
							<strong className="text-slate-900 dark:text-slate-200">{h.location}</strong>.{' '}
							{h.description}
						</motion.p>

						{/* CTA Buttons — 1 Single Row on Mobile */}
						<motion.div
							variants={itemVariants}
							className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full max-w-md lg:max-w-none mb-5 lg:mb-0"
						>
							<a
								href="https://wa.me/237673563269"
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 lg:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-2.5 sm:py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 text-xs sm:text-base whitespace-nowrap group"
							>
								<FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 flex-shrink-0" />
								<span>{h.contactBtn}</span>
								<ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="/cv2026.pdf"
								download
								className="flex-1 lg:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-2.5 sm:py-3.5 bg-white dark:bg-dark-900/60 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md text-xs sm:text-base whitespace-nowrap"
							>
								<Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
								<span>{h.cvBtn}</span>
							</a>
						</motion.div>
					</motion.div>

					{/* Right column — Profile & Terminal */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
						className="flex flex-col gap-6 relative"
					>
						{/* Profile photo card */}
						<div className="relative mx-auto lg:mx-0 w-fit">
							<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/30 via-accent/20 to-violetAccent/20 blur-2xl scale-110 -z-10 animate-pulse-slow"></div>
							<div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-accent/40 shadow-2xl group">
								<Image
									src="/profile.jpg"
									alt="Happi Mathis — Fullstack Engineer"
									fill
									priority
									sizes="(max-width: 768px) 208px, 256px"
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent z-10"></div>
							</div>
						</div>

						{/* Interactive Terminal Simulator */}
						<TerminalSimulator lines={h.terminalLines} />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
