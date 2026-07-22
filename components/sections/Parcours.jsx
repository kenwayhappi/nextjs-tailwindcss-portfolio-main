import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TimelineItem = ({ item, isExperience, index, currentBadge }) => (
	<motion.div
		initial={{ opacity: 0, x: -20 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.1, duration: 0.5 }}
		className="relative pl-8 group"
	>
		{/* Dot */}
		<span
			className={`absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
				isExperience && item.current
					? 'bg-accent border-accent shadow-[0_0_12px_rgba(0,245,255,0.6)]'
					: isExperience
					? 'bg-white dark:bg-dark-950 border-accent/60 group-hover:border-accent'
					: 'bg-white dark:bg-dark-950 border-primary-500/60 group-hover:border-primary-500'
			}`}
		>
			{isExperience && item.current && (
				<span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-dark-950"></span>
			)}
		</span>

		<div className="glass-card p-5 space-y-3 group-hover:-translate-y-0.5 transition-transform duration-300 bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/10 shadow-md">
			<div className="flex flex-wrap items-start justify-between gap-2">
				<h4 className="text-slate-900 dark:text-white font-bold text-sm leading-tight">
					{isExperience ? item.title : item.degree}
				</h4>
				{isExperience && item.current && (
					<span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-mono font-bold text-terminalGreen bg-terminalGreen/10 border border-terminalGreen/30 rounded-full">
						{currentBadge}
					</span>
				)}
			</div>

			<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
				<span className={`font-semibold ${isExperience ? 'text-indigo-600 dark:text-accent font-bold' : 'text-primary-600 dark:text-primary-400 font-bold'}`}>
					{isExperience ? item.company : item.school}
				</span>
				<span className="flex items-center gap-1 font-mono">
					<Building2 className="w-3 h-3" />
					{item.location}
				</span>
				<span className="flex items-center gap-1 font-mono">
					<Calendar className="w-3 h-3" />
					{item.year}
				</span>
			</div>

			{isExperience && item.tasks && (
				<ul className="space-y-1 border-t border-slate-200 dark:border-white/10 pt-2 mt-2">
					{item.tasks.map((task, i) => (
						<li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
							<span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent"></span>
							{task}
						</li>
					))}
				</ul>
			)}

			{item.tags && (
				<div className="flex flex-wrap gap-1.5 pt-1">
					{item.tags.map((tag) => (
						<span
							key={tag}
							className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full border ${
								isExperience
									? 'text-indigo-600 dark:text-accent bg-indigo-50 dark:bg-accent/10 border-indigo-200 dark:border-accent/20'
									: 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/20'
							}`}
						>
							{tag}
						</span>
					))}
				</div>
			)}
		</div>
	</motion.div>
);

const Parcours = () => {
	const { t } = useLanguage();
	const p = t.parcours;

	return (
		<section id="parcours" className="scroll-mt-24 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				{/* Section Header */}
				<div className="mb-12 text-center lg:text-left">
					<p className="font-mono text-primary-500 text-sm mb-2 tracking-widest">{p.sectionNum}</p>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
						{p.title} <span className="text-gradient">{p.titleHighlight}</span>
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-6">
					{/* Education */}
					<div>
						<div className="flex items-center gap-3 mb-8">
							<div className="p-2.5 bg-primary-500/10 border border-primary-500/20 rounded-xl">
								<GraduationCap className="w-6 h-6 text-primary-500" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.formationTitle}</h3>
						</div>
						<div className="relative border-l-2 border-primary-500/30 ml-[9px] space-y-6 pb-6">
							{p.education.map((item, index) => (
								<TimelineItem key={index} item={item} isExperience={false} index={index} currentBadge={p.currentBadge} />
							))}
						</div>
					</div>

					{/* Experience */}
					<div>
						<div className="flex items-center gap-3 mb-8">
							<div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl">
								<Briefcase className="w-6 h-6 text-accent" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.experienceTitle}</h3>
						</div>
						<div className="relative border-l-2 border-accent/30 ml-[9px] space-y-6 pb-6">
							{p.experience.map((item, index) => (
								<TimelineItem key={index} item={item} isExperience={true} index={index} currentBadge={p.currentBadge} />
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Parcours;
