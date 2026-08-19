/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Terminal, CheckCircle2, ShieldCheck, Camera, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const projectsMeta = [
	{
		id: 'smartcollect',
		category: 'Mobile & API',
		color: '#10b981',
		gradient: 'from-emerald-600/30 via-teal-800/20 to-dark-950',
		link: null,
		featured: true,
		tech: ['Laravel 12 (REST API)', 'Expo React Native', 'MySQL', 'Leaflet.js', 'GPS Geolocation'],
		images: ['/images/mobile-project-1.jpg', '/images/mobile-project-2.jpg'],
	},
	{
		id: 'almanac',
		category: 'Fullstack Web',
		color: '#3b82f6',
		gradient: 'from-blue-600/30 via-indigo-800/20 to-dark-950',
		link: 'https://almanac-4yt5.onrender.com/',
		featured: false,
		tech: ['Laravel 11', 'PostgreSQL', 'Docker', 'Nginx', 'Supervisord'],
		images: ['/ac.png', '/DAS.png'],
	},
	{
		id: 'slz',
		category: 'Fullstack Web',
		color: '#06b6d4',
		gradient: 'from-cyan-600/30 via-blue-800/20 to-dark-950',
		link: 'https://slz-seven.vercel.app/',
		featured: false,
		tech: ['Next.js', 'React', 'TailwindCSS', 'Vercel Cloud'],
		images: ['/ac1.png', '/dash1.png'],
	},
	{
		id: 'laravel-voting',
		category: 'Fullstack Web',
		color: '#6366f1',
		gradient: 'from-indigo-600/30 via-purple-800/20 to-dark-950',
		link: null,
		featured: false,
		tech: ['Laravel Sanctum', 'MySQL', 'Audit Anti-Fraude', 'PDF Reports'],
		images: ['/images/web-project-1.jpg'],
	},
	{
		id: 'r-shiny',
		category: 'Data Analytics',
		color: '#a855f7',
		gradient: 'from-purple-600/30 via-violet-800/20 to-dark-950',
		link: 'https://kenwaydev.shinyapps.io/ACM-teste/',
		featured: false,
		tech: ['R Language', 'R Shiny', 'ggplot2', 'Cloud Deploy'],
		images: ['/images/web-project-2.jpg'],
	},
	{
		id: 'defgi',
		category: 'WordPress',
		color: '#f97316',
		gradient: 'from-orange-600/30 via-amber-800/20 to-dark-950',
		link: 'https://defgi.org/',
		featured: false,
		tech: ['WordPress', 'Elementor', 'SEO Tuning', 'Responsive'],
		images: ['/images/ui-project-1.jpg'],
	},
	{
		id: 'awatechno',
		category: 'WordPress',
		color: '#0ea5e9',
		gradient: 'from-sky-600/30 via-cyan-800/20 to-dark-950',
		link: 'https://awatechno.com/',
		featured: false,
		tech: ['Next.js', 'WordPress API', 'TailwindCSS', 'Web Design'],
		images: ['/images/ui-project-2.jpg'],
	},
];

const categoryColors = {
	'Mobile & API': 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
	'Fullstack Web': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30',
	'Data Analytics': 'text-purple-600 dark:text-violetAccent bg-purple-50 dark:bg-violetAccent/10 border-purple-200 dark:border-violetAccent/30',
	WordPress: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30',
};

const filterCategories = ['Mobile & API', 'Fullstack Web', 'Data Analytics', 'WordPress'];

const getImageLabel = (projectId, index) => {
	if (projectId === 'almanac' || projectId === 'slz') {
		return index === 0 ? "📸 Page d'accueil" : "📊 Dashboard Admin";
	}
	return `Aperçu ${index + 1}`;
};

const ProjectCard = ({ project, onClick, index }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.08, duration: 0.5 }}
		className={`glass-card flex flex-col h-full cursor-pointer group overflow-hidden bg-white dark:bg-dark-900/60 border border-slate-200 dark:border-white/10 shadow-md transition-all duration-300 hover:-translate-y-1 ${
			project.featured ? 'md:col-span-2 border-accent/40 shadow-xl shadow-accent/5' : ''
		}`}
		onClick={() => onClick(project)}
		role="button"
		tabIndex={0}
		onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
	>
		{/* Terminal header */}
		<div className={`flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-dark-950 text-white`}>
			<span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
			<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
			<span className="w-2.5 h-2.5 rounded-full bg-terminalGreen/80"></span>
			<span className="ml-2 text-xs font-mono text-slate-300 truncate flex-1 font-bold">
				{project.id}.app
			</span>
			{project.isLocal ? (
				<span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">
					Local
				</span>
			) : (
				<span className="text-[10px] font-mono px-2 py-0.5 rounded bg-terminalGreen/20 text-terminalGreen font-bold">
					En Ligne
				</span>
			)}
			<Terminal className="w-3.5 h-3.5 text-slate-400" />
		</div>

		{/* Project Image Banner */}
		{project.images && project.images.length > 0 && (
			<div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-white/10 group">
				<img
					src={project.images[0]}
					alt={project.title}
					className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
				<div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-dark-950/85 text-white text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-md border border-white/15 shadow-lg">
					<Camera size={12} className="text-accent" />
					<span>{project.images.length} {project.images.length > 1 ? 'captures' : 'capture'}</span>
				</div>
			</div>
		)}

		{/* Content Body */}
		<div className="p-5 flex-1 flex flex-col justify-between space-y-4">
			<div>
				<div className="flex items-start justify-between gap-2 mb-2">
					<h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg leading-snug group-hover:text-primary-600 dark:group-hover:text-accent transition-colors duration-300">
						{project.title}
					</h3>
					<span className={`flex-shrink-0 px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full border ${categoryColors[project.category] || ''}`}>
						{project.category}
					</span>
				</div>
				{project.subtitle && (
					<p className="text-xs font-mono text-primary-600 dark:text-primary-400 font-semibold mb-2">{project.subtitle}</p>
				)}
				<p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{project.summary}</p>
			</div>

			<div>
				<div className="flex flex-wrap gap-1.5 mb-4">
					{project.tech.map((t, i) => (
						<span key={i} className="text-[10px] sm:text-xs px-2.5 py-1 bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-white/10 font-mono font-medium">
							{t}
						</span>
					))}
				</div>

				<div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-white/10">
					<span className="text-primary-600 dark:text-accent text-xs font-mono font-bold group-hover:underline flex items-center gap-1">
						<Camera size={13} /> Voir les images & détails →
					</span>
					<Code className="w-4 h-4 text-slate-500 group-hover:text-accent transition-colors duration-300" />
				</div>
			</div>
		</div>
	</motion.div>
);

const Projects = () => {
	const { t } = useLanguage();
	const p = t.projects;

	const [selectedProject, setSelectedProject] = useState(null);
	const [activeFilter, setActiveFilter] = useState('ALL');
	const [activeImageIdx, setActiveImageIdx] = useState(0);
	const [lightboxImage, setLightboxImage] = useState(null);
	const projectRef = useRef(null);

	const isOpen = selectedProject !== null;
	if (selectedProject) projectRef.current = selectedProject;

	const closeModal = () => {
		setSelectedProject(null);
		setActiveImageIdx(0);
		setLightboxImage(null);
		document.body.style.overflow = '';
		document.body.style.pointerEvents = '';
	};

	const handleOpenProject = (proj) => {
		setSelectedProject(proj);
		setActiveImageIdx(0);
	};

	useEffect(() => {
		if (isOpen || lightboxImage) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			document.body.style.pointerEvents = '';
		}
		return () => {
			document.body.style.overflow = '';
			document.body.style.pointerEvents = '';
		};
	}, [isOpen, lightboxImage]);

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
					<p className="font-mono text-accent text-sm mb-2 tracking-widest">{p.sectionNum}</p>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
						{p.title} <span className="text-gradient">{p.titleHighlight}</span>
					</h2>
				</div>

				{/* Filter tabs */}
				<div className="flex flex-wrap gap-2 mb-10">
					<button
						onClick={() => setActiveFilter('ALL')}
						className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all duration-300 border ${
							activeFilter === 'ALL'
								? 'bg-primary-600 text-white border-primary-600'
								: 'bg-white dark:bg-dark-800/40 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white'
						}`}
					>
						{p.filterAll}
					</button>
					{filterCategories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveFilter(cat)}
							className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all duration-300 border ${
								activeFilter === cat
									? 'bg-primary-600 text-white border-primary-600'
									: 'bg-white dark:bg-dark-800/40 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white'
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							onClick={handleOpenProject}
							index={index}
						/>
					))}
				</div>
			</motion.div>

			{/* Project Technical Sheet & Gallery Modal */}
			<AnimatePresence>
				{isOpen && displayedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, pointerEvents: 'none' }}
						transition={{ duration: 0.15 }}
						style={isOpen ? {} : { pointerEvents: 'none' }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 dark:bg-dark-950/90 backdrop-blur-md"
						onClick={closeModal}
					>
						<motion.div
							initial={{ scale: 0.94, opacity: 0, y: 10 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.94, opacity: 0, y: 10 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
							onClick={(e) => e.stopPropagation()}
							className="bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
						>
							{/* Modal Header */}
							<div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-900 text-white">
								<button
									onClick={closeModal}
									className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors flex items-center justify-center"
									aria-label="Fermer"
								>
									<X size={10} className="text-black" />
								</button>
								<span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></span>
								<span className="w-3.5 h-3.5 rounded-full bg-terminalGreen/80"></span>
								<span className="ml-4 text-xs font-mono font-bold text-slate-300">
									{displayedProject.id}.spec
								</span>
							</div>

							{/* Modal Body */}
							<div className="p-5 md:p-7 overflow-y-auto flex flex-col gap-5">
								<div>
									<h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{displayedProject.title}</h3>
									{displayedProject.subtitle && (
										<p className="text-sm font-mono text-primary-600 dark:text-primary-400 font-semibold mb-3">{displayedProject.subtitle}</p>
									)}
									<span className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full border ${categoryColors[displayedProject.category] || ''}`}>
										{displayedProject.category}
									</span>
								</div>

								{/* Image Gallery Viewer */}
								{displayedProject.images && displayedProject.images.length > 0 && (
									<div className="space-y-3">
										{/* Image selection tabs */}
										{displayedProject.images.length > 1 && (
											<div className="flex items-center gap-2 flex-wrap">
												<span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
													<Camera size={13} /> Captures :
												</span>
												{displayedProject.images.map((img, idx) => (
													<button
														key={idx}
														onClick={() => setActiveImageIdx(idx)}
														className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
															activeImageIdx === idx
																? 'bg-accent/20 border-accent text-accent font-bold shadow'
																: 'bg-slate-100 dark:bg-dark-800 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
														}`}
													>
														{getImageLabel(displayedProject.id, idx)}
													</button>
												))}
											</div>
										)}

										{/* Active Main Image Display */}
										<div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-md">
											<img
												src={displayedProject.images[activeImageIdx] || displayedProject.images[0]}
												alt={`${displayedProject.title} screenshot`}
												className="w-full max-h-72 sm:max-h-80 object-contain bg-slate-950 cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
												onClick={() => setLightboxImage(displayedProject.images[activeImageIdx] || displayedProject.images[0])}
											/>
											<button
												onClick={() => setLightboxImage(displayedProject.images[activeImageIdx] || displayedProject.images[0])}
												className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-dark-950/85 hover:bg-black text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md border border-white/20 shadow-lg transition-all"
											>
												<Maximize2 size={13} className="text-accent" />
												<span>Agrandir</span>
											</button>
										</div>
									</div>
								)}

								{/* Tech Tags */}
								<div className="flex flex-wrap gap-2">
									{displayedProject.tech.map((tech, idx) => (
										<span key={idx} className="px-3 py-1 bg-primary-50 dark:bg-primary-600/10 text-primary-700 dark:text-primary-300 text-xs rounded-full font-mono font-bold border border-primary-200 dark:border-primary-500/20">
											{tech}
										</span>
									))}
								</div>

								{/* Status Alert Badge */}
								{displayedProject.isLocal ? (
									<div className="p-3.5 rounded-xl bg-amber-50 dark:bg-accent/10 border border-amber-200 dark:border-accent/30 flex items-start gap-3">
										<ShieldCheck className="w-5 h-5 text-amber-600 dark:text-accent flex-shrink-0 mt-0.5" />
										<p className="text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
											<strong className="text-amber-600 dark:text-accent">Projet Local (Démo sur demande) :</strong> Démonstration interactive en direct disponible sur demande.
										</p>
									</div>
								) : (
									<div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-terminalGreen/10 border border-emerald-200 dark:border-terminalGreen/30 flex items-start gap-3">
										<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-terminalGreen flex-shrink-0 mt-0.5" />
										<p className="text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed">
											<strong className="text-emerald-600 dark:text-terminalGreen">Projet en Ligne :</strong> Application déployée et accessible au public.
										</p>
									</div>
								)}

								{/* Description */}
								<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{displayedProject.description}</p>

								{/* Actions */}
								<div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
									{displayedProject.link && displayedProject.link !== '#' ? (
										<a
											href={displayedProject.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-md text-sm"
										>
											{p.visitProject}
											<ExternalLink size={15} />
										</a>
									) : (
										<a
											href="https://wa.me/237673563269?text=Bonjour%20Happi,%20j'aimerais%20une%20démonstration%20en%20direct%20de%20votre%20projet%20"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-md text-sm"
										>
											Demander une Démo Directe
											<ExternalLink size={15} />
										</a>
									)}
									<button
										onClick={closeModal}
										className="px-6 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all text-sm ml-auto"
									>
										{p.close}
									</button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Fullscreen Lightbox Image Zoom */}
			<AnimatePresence>
				{lightboxImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setLightboxImage(null)}
						className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
					>
						<button
							onClick={() => setLightboxImage(null)}
							className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
							aria-label="Fermer"
						>
							<X size={24} />
						</button>
						<img
							src={lightboxImage}
							alt="Agrandissement capture d'écran"
							className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
							onClick={(e) => e.stopPropagation()}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Projects;
