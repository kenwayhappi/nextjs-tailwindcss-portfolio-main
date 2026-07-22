import { motion } from 'framer-motion';
import {
	Smartphone, Code2, Database, BarChart3,
	Layers, MapPin, Globe, Monitor, Users, Lock, Bot, ShieldCheck, Cpu
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const skillIcons = [
	<Cpu key="cpu" className="w-5 h-5 text-primary-500" />,
	<Smartphone key="smartphone" className="w-5 h-5 text-accent" />,
	<Code2 key="code2" className="w-5 h-5 text-violet-500" />,
	<Database key="database" className="w-5 h-5 text-indigo-500" />,
	<BarChart3 key="barchart3" className="w-5 h-5 text-emerald-500" />,
	<Layers key="layers" className="w-5 h-5 text-amber-500" />,
];

const aiTools = ['Cursor AI', 'GitHub Copilot', 'Claude 3.5', 'ChatGPT Pro'];

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
	}),
};

const About = () => {
	const { t } = useLanguage();
	const a = t.about;

	return (
		<section id="about" className="scroll-mt-24 py-8">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-80px' }}
			>
				{/* Section Header */}
				<motion.div variants={fadeUp} className="mb-12 text-center lg:text-left">
					<p className="font-mono text-accent text-sm mb-2 tracking-widest">{a.sectionNum}</p>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
						{a.title} <span className="text-gradient">{a.titleHighlight}</span>
					</h2>
				</motion.div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

					{/* 1 — Qui suis-je ? */}
					<motion.div
						custom={0} variants={fadeUp}
						className="md:col-span-2 xl:col-span-2 glass-card p-7 space-y-4 bg-white dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 shadow-md"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="w-1.5 h-8 bg-gradient-to-b from-primary-500 to-accent rounded-full"></div>
							<h3 className="text-xl font-bold text-slate-900 dark:text-white">{a.whoTitle}</h3>
						</div>
						<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
							{a.whoP1} <strong className="text-slate-900 dark:text-white">{a.whoP1Bold}</strong>{a.whoP1Rest}
						</p>
						<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
							{a.whoP2Start} <strong className="text-slate-900 dark:text-white">{a.whoP2Bold}</strong>{a.whoP2End}
						</p>

						<div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
							<div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-mono">
								<MapPin className="w-4 h-4 text-accent" />
								<span>{a.locationLabel}</span>
							</div>
							<div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-mono">
								<Globe className="w-4 h-4 text-primary-500" />
								<span>{a.languagesLabel}</span>
							</div>
							<div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-mono">
								<Monitor className="w-4 h-4 text-violet-500" />
								<span>{a.hobbiesLabel}</span>
							</div>
						</div>
					</motion.div>

					{/* 2 — IA & Vibe Coding */}
					<motion.div
						custom={1} variants={fadeUp}
						className="glass-card p-7 flex flex-col justify-between relative overflow-hidden group bg-white dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 shadow-md"
					>
						<div>
							<div className="p-3 bg-accent/10 rounded-xl border border-accent/20 w-fit mb-5">
								<Bot className="w-6 h-6 text-accent" />
							</div>
							<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{a.aiTitle}</h3>
							<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{a.aiText}</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{aiTools.map((tool) => (
								<span
									key={tool}
									className="px-2.5 py-1 text-xs font-mono font-bold text-indigo-600 dark:text-accent bg-indigo-50 dark:bg-accent/10 border border-indigo-200 dark:border-accent/20 rounded-full"
								>
									{tool}
								</span>
							))}
						</div>
					</motion.div>

					{/* 3 — Compétences techniques */}
					<motion.div
						custom={2} variants={fadeUp}
						className="md:col-span-3 glass-card p-7 bg-white dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 shadow-md"
					>
						<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
							<Lock className="w-5 h-5 text-primary-500" />
							{a.skillsTitle}
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{a.skills.map((skill, index) => (
								<motion.div
									key={index}
									custom={index * 0.1} variants={fadeUp}
									className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-dark-950/60 transition-all duration-300 hover:-translate-y-0.5"
								>
									<div className="flex-shrink-0 p-2 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10">
										{skillIcons[index]}
									</div>
									<div>
										<p className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{skill.title}</p>
										<p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono leading-tight">{skill.tech}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;