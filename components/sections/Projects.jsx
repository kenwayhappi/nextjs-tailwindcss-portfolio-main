import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Terminal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Static project metadata (same for both languages)
const projectsMeta = [
	{
		id: 'almanac',
		category: 'Laravel',
		color: '#3b82f6',
		gradient: 'from-blue-600/30 to-blue-900/10',
		link: 'https://aw-cameroon.com',
		tech: ['Laravel', 'MySQL', 'PHP', 'Blade', 'Bootstrap'],
	},
	{
		id: 'laravel-voting',
		category: 'Laravel',
		color: '#10b981',
		gradient: 'from-emerald-600/30 to-emerald-900/10',
		link: null,
		tech: ['Laravel', 'Sanctum', 'MySQL', 'Tailwind CSS', 'Artisan Tasks'],
	},
	{
		id: 'r-shiny',
		category: 'R/Shiny',
		color: '#a855f7',
		gradient: 'from-purple-600/30 to-purple-900/10',
		link: 'https://kenwaydev.shinyapps.io/ACM-teste/',
		tech: ['R', 'R Shiny', 'ggplot2', 'Data Analysis', 'Cloud Deploy'],
	},
	{
		id: 'defgi',
		category: 'WordPress',
		color: '#f97316',
		gradient: 'from-orange-600/30 to-orange-900/10',
		link: 'https://defgi.org/',
		tech: ['WordPress', 'Elementor', 'SEO', 'Responsive', 'Yoast'],
	},
	{
		id: 'awatechno',
		category: 'WordPress',
		color: '#0ea5e9',
		gradient: 'from-sky-600/30 to-sky-900/10',
		link: 'https://awatechno.com/',
		tech: ['WordPress', 'Elementor', 'Web Design', 'Performance', 'Hébergement'],
	},
];

const categoryColors = {
	Laravel: 'text-red-400 bg-red-500/10 border-red-500/20',
	WordPress: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
	'R/Shiny': 'text-violetAccent bg-violetAccent/10 border-violetAccent/20',
};

const filterCategories = ['Laravel', 'WordPress', 'R/Shiny'];

const ProjectCard = ({ project, onClick, index }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.08, duration: 0.5 }}
		className="glass-card flex flex-col h-full cursor-pointer group overflow-hidden"
		onClick={() => onClick(project)}
		role="button"
		tabIndex={0}
		onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
	>
		{/* IDE-style header bar */}
		<div className={`flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-gradient-to-r ${project.gradient}`}>
			<span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
			<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
			<span className="w-2.5 h-2.5 rounded-full bg-terminalGreen/80"></span>
			<span className="ml-2 text-xs font-mono text-slate-400 truncate flex-1">{project.id}.js</span>
			<Terminal className="w-3.5 h-3.5 text-slate-500" />
		</div>

		{/* Content */}
		<div className="p-5 flex-1 flex flex-col">
			<div className="flex items-start justify-between gap-2 mb-3">
				<h3 className="text-white font-bold text-sm leading-snug group-hover:text-accent transition-colors duration-300">
					{project.title}
				</h3>
				<span className={`flex-shrink-0 px-2 py-0.5 text-[10px] font-mono rounded-full border ${categoryColors[project.category] || 'text-slate-400 bg-slate-800 border-slate-700'}`}>
					{project.category}
				</span>
			</div>

			<p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{project.summary}</p>

			<div className="flex flex-wrap gap-1.5 mb-4">
				{project.tech.slice(0, 3).map((t, i) => (
					<span key={i} className="text-[10px] px-2 py-0.5 bg-dark-800 text-slate-400 rounded-md border border-white/5 font-mono">
						{t}
					</span>
				))}
				{project.tech.length > 3 && (
					<span className="text-[10px] px-2 py-0.5 bg-dark-800 text-slate-500 rounded-md border border-white/5 font-mono">
						+{project.tech.length - 3}
					</span>
				)}
			</div>

			<div className="flex justify-between items-center pt-3 border-t border-white/5">
				<span className="text-primary-400 text-xs font-semibold group-hover:text-accent transition-colors duration-300">
					{project.viewDetails}
				</span>
				<Code className="w-4 h-4 text-slate-600 group-hover:text-primary-400 transition-colors duration-300" />
			</div>
		</div>
	</motion.div>
);

const Projects = () => {
	const { t } = useLanguage();
	const p = t.projects;

	const [selectedProject, setSelectedProject] = useState(null);
	const [activeFilter, setActiveFilter] = useState('ALL');
	const projectRef = useRef(null);

	const isOpen = selectedProject !== null;
	if (selectedProject) projectRef.current = selectedProject;

	const closeModal = () => {
		setSelectedProject(null);
		document.body.style.overflow = '';
		document.body.style.pointerEvents = '';
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			document.body.style.pointerEvents = '';
		}
		return () => {
			document.body.style.overflow = '';
			document.body.style.pointerEvents = '';
		};
	}, [isOpen]);

	// Merge meta (static) with translated text
	const projects = projectsMeta.map((meta) => {
		const translated = p.data.find((d) => d.id === meta.id) || {};
		return { ...meta, ...translated, viewDetails: p.viewDetails };
	});

	const filteredProjects = activeFilter === 'ALL'
		? projects
		: projects.filter((proj) => proj.category === activeFilter);

	const displayedProject = projectRef.current;

	return (
		<section id="projects" className="scroll-mt-24 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				{/* Section Header */}
				<div className="mb-10 text-center lg:text-left">
					<p className="font-mono text-accent text-sm mb-3 tracking-widest">{p.sectionNum}</p>
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						{p.title} <span className="text-gradient">{p.titleHighlight}</span>
					</h2>
				</div>

				{/* Filter tabs */}
				<div className="flex flex-wrap gap-2 mb-10">
					{/* "All" button */}
					<button
						onClick={() => setActiveFilter('ALL')}
						className={`px-4 py-2 rounded-xl text-sm font-medium font-mono transition-all duration-300 border ${
							activeFilter === 'ALL'
								? 'bg-primary-600/30 border-primary-500/50 text-primary-300'
								: 'bg-dark-800/40 border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
						}`}
					>
						{p.filterAll}
					</button>
					{filterCategories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveFilter(cat)}
							className={`px-4 py-2 rounded-xl text-sm font-medium font-mono transition-all duration-300 border ${
								activeFilter === cat
									? 'bg-primary-600/30 border-primary-500/50 text-primary-300'
									: 'bg-dark-800/40 border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							onClick={setSelectedProject}
							index={index}
						/>
					))}
				</div>
			</motion.div>

			{/* Modal */}
			<AnimatePresence>
				{isOpen && displayedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, pointerEvents: 'none' }}
						transition={{ duration: 0.15 }}
						style={isOpen ? {} : { pointerEvents: 'none' }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md"
						onClick={closeModal}
					>
						<motion.div
							initial={{ scale: 0.94, opacity: 0, y: 10 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.94, opacity: 0, y: 10 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
							onClick={(e) => e.stopPropagation()}
							className="bg-dark-900 border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
						>
							{/* Modal header */}
							<div className={`flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-gradient-to-r ${displayedProject.gradient}`}>
								<button
									onClick={closeModal}
									className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors group"
									aria-label="Fermer"
								>
									<span className="hidden group-hover:block">
										<X size={8} className="text-red-900 mx-auto" />
									</span>
								</button>
								<span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
								<span className="w-3 h-3 rounded-full bg-terminalGreen/80"></span>
								<span className="ml-4 text-xs font-mono text-slate-300">{displayedProject.id}.js</span>
							</div>

							{/* Modal body */}
							<div className="p-6 md:p-7 overflow-y-auto flex flex-col gap-5">
								<div>
									<h3 className="text-xl md:text-2xl font-bold text-white mb-2">{displayedProject.title}</h3>
									<span className={`inline-block px-3 py-1 text-xs font-mono rounded-full border ${categoryColors[displayedProject.category] || ''}`}>
										{displayedProject.category}
									</span>
								</div>

								<div className="flex flex-wrap gap-2">
									{displayedProject.tech.map((tech, idx) => (
										<span key={idx} className="px-3 py-1 bg-primary-600/10 text-primary-300 text-xs rounded-full font-mono border border-primary-500/20">
											{tech}
										</span>
									))}
								</div>

								<p className="text-slate-400 leading-relaxed text-sm">{displayedProject.description}</p>

								<div className="flex flex-wrap items-center gap-3 mt-2">
									{displayedProject.link ? (
										<a
											href={displayedProject.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 text-sm"
										>
											{p.visitProject}
											<ExternalLink size={15} />
										</a>
									) : (
										<span className="px-6 py-2.5 bg-dark-800 text-slate-500 font-medium rounded-xl text-sm border border-white/5">
											{p.localProject}
										</span>
									)}
									<button
										onClick={closeModal}
										className="px-6 py-2.5 text-slate-400 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-all text-sm"
									>
										{p.close}
									</button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Projects;
