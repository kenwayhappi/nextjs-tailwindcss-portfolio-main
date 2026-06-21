import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const TerminalSimulator = ({ lines }) => {
	const [visibleLines, setVisibleLines] = useState([]);
	const [currentLineIdx, setCurrentLineIdx] = useState(0);
	const [typedCmd, setTypedCmd] = useState('');
	const [showOutput, setShowOutput] = useState(false);
	const [phase, setPhase] = useState('typing');

	// Reset when lines change (language switch)
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
				const t = setTimeout(() => setTypedCmd(line.cmd.slice(0, typedCmd.length + 1)), 55);
				return () => clearTimeout(t);
			} else {
				const t = setTimeout(() => setPhase('output'), 300);
				return () => clearTimeout(t);
			}
		}

		if (phase === 'output') {
			setShowOutput(true);
			const t = setTimeout(() => setPhase('next'), 900);
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
		<div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-950/90 backdrop-blur-xl shadow-2xl shadow-black/50">
			<div className="flex items-center gap-2 px-4 py-3 bg-dark-800/60 border-b border-white/5">
				<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
				<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
				<div className="w-3 h-3 rounded-full bg-terminalGreen/80"></div>
				<span className="ml-2 text-xs text-slate-500 font-mono">happi@mathis:~</span>
			</div>
			<div className="p-5 font-mono text-sm min-h-[200px] space-y-3">
				{visibleLines.map((line, i) => (
					<div key={i} className="space-y-0.5">
						<div className="flex items-center gap-2">
							<span className="text-terminalGreen">❯</span>
							<span className="text-slate-300">{line.cmd}</span>
						</div>
						<div className="text-accent pl-5 text-xs">{line.output}</div>
					</div>
				))}
				{currentLineIdx < lines.length && (
					<div className="space-y-0.5">
						<div className="flex items-center gap-2">
							<span className="text-terminalGreen">❯</span>
							<span className="text-slate-300">{typedCmd}</span>
							<span className="w-2 h-4 bg-accent animate-caret inline-block"></span>
						</div>
						{showOutput && (
							<div className="text-accent pl-5 text-xs">{currentLine?.output}</div>
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
		<section className="relative min-h-[90vh] flex items-center py-8">
			<div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
					{/* Left column — text */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col items-center lg:items-start text-center lg:text-left"
					>
						{/* Status badge */}
						<motion.div variants={itemVariants}>
							<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terminalGreen/10 border border-terminalGreen/20 mb-6">
								<span className="w-2 h-2 rounded-full bg-terminalGreen animate-pulse"></span>
								<span className="text-terminalGreen text-xs font-mono font-medium">{h.available}</span>
							</div>
						</motion.div>

						{/* Name */}
						<motion.h1
							variants={itemVariants}
							className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-none mb-4"
						>
							<span className="text-white">Happi</span>
							<br />
							<span className="text-gradient">Mathis</span>
						</motion.h1>

						{/* Role */}
						<motion.p
							variants={itemVariants}
							className="text-lg sm:text-xl text-slate-400 font-mono mb-2"
						>
							<span className="text-accent">{'<'}</span>
							{' '}{h.role}{' '}
							<span className="text-accent">{'/>'}</span>
						</motion.p>

						{/* Description */}
						<motion.p
							variants={itemVariants}
							className="text-base text-slate-500 mb-10 max-w-lg leading-relaxed"
						>
							<span className="text-slate-300">{h.location}</span>.{' '}
							{h.description}{' '}
							<span className="text-primary-400">Next.js</span>,{' '}
							<span className="text-violetAccent">React (Expo)</span>,{' '}
							<span className="text-accent">Laravel</span>{' et '}
							<span className="text-primary-400">Flutter</span>.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							variants={itemVariants}
							className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
						>
							<a
								href="https://wa.me/237697486059"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5"
							>
								<FaWhatsapp size={18} />
								{h.contactBtn}
								<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="/cv2026.pdf"
								download
								className="flex items-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
							>
								<Download size={16} />
								{h.cvBtn}
							</a>
						</motion.div>
					</motion.div>

					{/* Right column — profile + terminal */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
						className="flex flex-col gap-6 relative"
					>
						{/* Profile card */}
						<div className="relative mx-auto lg:mx-0 w-fit">
							<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/30 via-accent/20 to-violetAccent/20 blur-2xl scale-110 -z-10 animate-pulse-slow"></div>
							<div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
								<img
									src="/profile.jpg"
									alt="Happi Mathis"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent"></div>
							</div>
							{/* Floating badge */}
							<div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 bg-dark-800/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
								<span className="text-base">🇨🇲</span>
								<span className="text-xs text-slate-300 font-mono">Douala</span>
							</div>
						</div>

						{/* Terminal simulator */}
						<TerminalSimulator lines={h.terminalLines} />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
