import { motion } from 'framer-motion';
import {
	Terminal, Smartphone, Code2, Database, BarChart3,
	Coffee, Zap, Layers, MapPin, Globe, Monitor, Users, Lock, Bot
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const skillIcons = [
	<Terminal key="terminal" className="w-5 h-5" />,
	<Smartphone key="smartphone" className="w-5 h-5" />,
	<Code2 key="code2" className="w-5 h-5" />,
	<Database key="database" className="w-5 h-5" />,
	<BarChart3 key="barchart3" className="w-5 h-5" />,
	<Coffee key="coffee" className="w-5 h-5" />,
	<Layers key="layers" className="w-5 h-5" />,
	<Zap key="zap" className="w-5 h-5" />,
];

const skillColors = [
	'text-primary-400 bg-primary-500/10 border-primary-500/20',
	'text-accent bg-accent/10 border-accent/20',
	'text-violetAccent bg-violetAccent/10 border-violetAccent/20',
	'text-primary-400 bg-primary-500/10 border-primary-500/20',
	'text-accent bg-accent/10 border-accent/20',
	'text-violetAccent bg-violetAccent/10 border-violetAccent/20',
	'text-primary-400 bg-primary-500/10 border-primary-500/20',
	'text-accent bg-accent/10 border-accent/20',
];

const aiTools = ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor'];

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
				<motion.div variants={fadeUp} className="mb-14 text-center lg:text-left">
					<p className="font-mono text-accent text-sm mb-3 tracking-widest">{a.sectionNum}</p>
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						{a.title} <span className="text-gradient">{a.titleHighlight}</span>
					</h2>
				</motion.div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-auto">

					{/* 1 — Qui suis-je ? */}
					<motion.div
						custom={0} variants={fadeUp}
						className="md:col-span-2 xl:col-span-2 glass-card p-7 space-y-4"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="w-1 h-8 bg-gradient-to-b from-primary-400 to-accent rounded-full"></div>
							<h3 className="text-xl font-bold text-white">{a.whoTitle}</h3>
						</div>
						<p className="text-slate-400 leading-relaxed">
							{a.whoP1} <strong className="text-white">{a.whoP1Bold}</strong>{a.whoP1Rest}
						</p>
						<p className="text-slate-400 leading-relaxed">
							{a.whoP2Start} <strong className="text-white">{a.whoP2Bold}</strong>{a.whoP2End}
						</p>
						<p className="text-slate-400 leading-relaxed">
							{a.whoP3Start} <strong className="text-white">{a.whoP3Bold}</strong>{a.whoP3End}
						</p>

						<div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
							<div className="flex items-center gap-2 text-slate-400 text-sm">
								<MapPin className="w-4 h-4 text-accent" />
								<span>{a.locationLabel}</span>
							</div>
							<div className="flex items-center gap-2 text-slate-400 text-sm">
								<Globe className="w-4 h-4 text-primary-400" />
								<span>{a.languagesLabel}</span>
							</div>
							<div className="flex items-center gap-2 text-slate-400 text-sm">
								<Monitor className="w-4 h-4 text-violetAccent" />
								<span>{a.hobbiesLabel}</span>
							</div>
						</div>
					</motion.div>

					{/* 2 — IA & Vibe Coding */}
					<motion.div
						custom={1} variants={fadeUp}
						className="glass-card p-7 flex flex-col justify-between relative overflow-hidden group"
					>
						<div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-x-4 -translate-y-4 group-hover:bg-accent/10 transition-all duration-500"></div>
						<div>
							<div className="p-3 bg-accent/10 rounded-xl border border-accent/20 w-fit mb-5">
								<Bot className="w-7 h-7 text-accent" />
							</div>
							<h3 className="text-lg font-bold text-white mb-3">{a.aiTitle}</h3>
							<p className="text-slate-400 text-sm leading-relaxed mb-5">{a.aiText}</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{aiTools.map((tool) => (
								<span

									key={tool}
									className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full"
								>
									{tool}
								</span>
							))}
						</div>
					</motion.div>

					{/* 3 — Méthode Agile */}
					<motion.div
						custom={2} variants={fadeUp}
						className="glass-card p-7 flex flex-col gap-5"
					>
						<div className="p-3 bg-violetAccent/10 rounded-xl border border-violetAccent/20 w-fit">
							<Users className="w-7 h-7 text-violetAccent" />
						</div>
						<div>
							<h3 className="text-lg font-bold text-white mb-2">{a.methodTitle}</h3>
							<p className="text-slate-400 text-sm leading-relaxed">{a.methodText}</p>
						</div>
						<div className="flex flex-col gap-2 mt-auto">
							{a.methodItems.map((item) => (
								<div key={item} className="flex items-center gap-2.5">
									<div className="w-1.5 h-1.5 rounded-full bg-violetAccent flex-shrink-0"></div>
									<span className="text-slate-400 text-sm">{item}</span>
								</div>
							))}
						</div>
					</motion.div>

					{/* 4 — Compétences techniques */}
					<motion.div
						custom={3} variants={fadeUp}
						className="md:col-span-2 glass-card p-7"
					>
						<h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
							<Lock className="w-5 h-5 text-primary-400" />
							{a.skillsTitle}
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
							{a.skills.map((skill, index) => (
								<motion.div
									key={index}

									custom={index * 0.1} variants={fadeUp}
									className={`flex items-start gap-3 p-3 rounded-xl border ${skillColors[index]} bg-opacity-10 transition-all duration-300 hover:-translate-y-0.5`}
								>
									<div className={`flex-shrink-0 p-1.5 rounded-lg ${skillColors[index]} border`}>
										{skillIcons[index]}
									</div>
									<div>
										<p className="text-white text-sm font-semibold leading-tight">{skill.title}</p>
										<p className="text-xs text-slate-500 mt-0.5 leading-tight">{skill.tech}</p>
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