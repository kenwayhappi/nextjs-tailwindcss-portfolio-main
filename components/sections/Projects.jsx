import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';

const projects = [
	{
		id: 'almanac',
		title: 'Site Web Almanac',
		color: 'from-blue-500 to-blue-700',
		summary: 'Application Laravel de gestion des villages et personnalités administratives au Cameroun.',
		description: 'Cette application web a été développée pour centraliser et structurer les données administratives du Cameroun : villages, groupements et personnalités locales. Elle permet aux administrateurs et citoyens de rechercher facilement un village (comme Balassie ou Ndongom), visualiser les hiérarchies administratives et consulter les informations sur les chefs et groupements. L\'apport principal : remplacer un système dispersé et papier par une plateforme digitale fiable, accessible et maintenable.',
		link: 'https://aw-cameroon.com',
		tech: ['Laravel', 'MySQL', 'PHP', 'Blade', 'Bootstrap'],
	},
	{
		id: 'bureau-vente',
		title: 'Système de Gestion Bureau de Vente',
		color: 'from-emerald-500 to-emerald-700',
		summary: 'Application locale de gestion des ventes, stocks et transactions commerciales.',
		description: 'Un outil interne développé sur-mesure pour un bureau de vente afin d\'automatiser le suivi des stocks, l\'enregistrement des ventes et la gestion des transactions. Avant cet outil, tout était géré manuellement avec des risques d\'erreurs et de pertes de données. Avec cette application, le responsable dispose en temps réel d\'un tableau de bord clair, d\'historiques de ventes et d\'alertes sur les niveaux de stock. Développé avec Laravel et MySQL, il est optimisé pour une utilisation en réseau local.',
		link: null,
		tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
	},
	{
		id: 'r-shiny',
		title: 'Application R Shiny — Analyse de Données',
		color: 'from-purple-500 to-purple-700',
		summary: 'Dashboard interactif R Shiny pour analyser les habitudes d\'utilisation des smartphones.',
		description: 'Cette application interactive permet d\'explorer et de visualiser les résultats du questionnaire NBMB sur l\'utilisation des smartphones. Grâce à des graphiques dynamiques, des tableaux récapitulatifs et des filtres interactifs, les chercheurs peuvent identifier des tendances comportementales, segmenter les utilisateurs et extraire des insights stratégiques. L\'outil transforme des données brutes en décisions éclairées. Déployé sur shinyapps.io pour un accès facile sans installation.',
		link: 'https://kenwaydev.shinyapps.io/ACM-teste/',
		tech: ['R', 'R Shiny', 'ggplot2', 'Data Analysis', 'Déploiement Cloud'],
	},
	{
		id: 'defgi',
		title: 'Site Vitrine WordPress — Defgi',
		color: 'from-orange-500 to-orange-700',
		summary: 'Site vitrine WordPress pour améliorer la visibilité en ligne de Defgi.',
		description: 'Réalisation d\'un site vitrine WordPress professionnel pour Defgi afin d\'accroître leur visibilité sur internet et d\'attirer de nouveaux clients. Le site présente clairement leurs activités, leurs valeurs et leurs contacts avec un design responsive adapté mobile. Des optimisations SEO de base ont été intégrées pour améliorer le référencement naturel sur les moteurs de recherche. Outils utilisés : WordPress, Elementor, plugins SEO (Yoast), hébergement optimisé.',
		link: 'https://defgi.org/',
		tech: ['WordPress', 'Elementor', 'SEO', 'Responsive Design', 'Yoast SEO'],
	},
	{
		id: 'awatechno',
		title: 'Site Vitrine WordPress — Awatechno',
		color: 'from-sky-500 to-sky-700',
		summary: 'Site vitrine WordPress pour renforcer la présence digitale d\'Awatechno.',
		description: 'Développement du site vitrine WordPress pour Awatechno, une agence tech de Douala. L\'objectif : leur donner une présence professionnelle sur le web pour se différencier de la concurrence et rassurer les clients potentiels. Le site présente leurs services avec une navigation claire, un design moderne adapté mobile et un temps de chargement optimisé. Ce projet illustre ma capacité à livrer des sites vitrines clé en main, de la mise en page à la mise en ligne.',
		link: 'https://awatechno.com/',
		tech: ['WordPress', 'Elementor', 'Web Design', 'Performance', 'Hébergement'],
	},
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	// Gardez une copie du projet pour l'afficher pendant l'animation de fermeture
	const projectRef = useRef(null);

	const isOpen = selectedProject !== null;

	// Met à jour la ref uniquement quand on ouvre un projet
	if (selectedProject) {
		projectRef.current = selectedProject;
	}

	const closeModal = () => {
		setSelectedProject(null);
	};

	// Bloque le scroll du body quand le modal est ouvert
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [isOpen]);

	const displayedProject = projectRef.current;

	return (
		<section id="projects" className="scroll-mt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-white">
					Mes <span className="text-gradient">Réalisations</span>
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="glass-card flex flex-col h-full overflow-hidden group cursor-pointer"
							onClick={() => setSelectedProject(project)}
						>
							<div className={`h-40 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center`}>
								<h3 className="text-2xl font-bold text-white mix-blend-overlay drop-shadow-md">{project.title}</h3>
							</div>
							<div className="p-6 flex-1 flex flex-col">
								<p className="text-slate-400 mb-6 flex-1 text-sm">{project.summary}</p>
								<div className="flex flex-wrap gap-1 mb-4">
									{project.tech.slice(0, 3).map((t, i) => (
										<span key={i} className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full border border-slate-700/50">
											{t}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50">
									<span className="text-primary-400 text-sm font-semibold group-hover:underline">Voir les détails</span>
									<Code className="w-5 h-5 text-slate-500 group-hover:text-primary-400 transition-colors" />
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Project Modal — toujours rendu, pointer-events coupés quand fermé */}
			<motion.div
				initial={false}
				animate={{ opacity: isOpen ? 1 : 0 }}
				transition={{ duration: 0.2 }}
				style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
				className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
				onClick={closeModal}
			>
				<motion.div
					initial={false}
					animate={{ scale: isOpen ? 1 : 0.95, opacity: isOpen ? 1 : 0 }}
					transition={{ duration: 0.2 }}
					onClick={(e) => e.stopPropagation()}
					className="bg-dark-800 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
				>
					{displayedProject && (
						<>
							<div className={`h-32 bg-gradient-to-br ${displayedProject.color} p-6 relative flex items-end justify-between`}>
								<button
									onClick={closeModal}
									className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-colors"
								>
									<X size={20} />
								</button>
							</div>

							<div className="p-8 overflow-y-auto">
								<h3 className="text-3xl font-bold text-white mb-4">{displayedProject.title}</h3>

								<div className="flex flex-wrap gap-2 mb-6">
									{displayedProject.tech.map((t, idx) => (
										<span key={idx} className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full font-medium border border-primary-500/20">
											{t}
										</span>
									))}
								</div>

								<p className="text-slate-300 leading-relaxed mb-8">{displayedProject.description}</p>

								<div className="flex items-center gap-4">
									{displayedProject.link ? (
										<a
											href={displayedProject.link}
											target="_blank"
											rel="noopener noreferrer"
											className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-primary-500/50 flex items-center gap-2"
										>
											Visiter le projet
											<ExternalLink size={18} />
										</a>
									) : (
										<span className="px-6 py-3 bg-slate-800 text-slate-400 font-semibold rounded-xl flex items-center gap-2">
											Projet Local (non publié)
										</span>
									)}
									<button
										onClick={closeModal}
										className="px-6 py-3 bg-transparent hover:bg-slate-800 text-white font-medium rounded-xl transition-all"
									>
										Fermer
									</button>
								</div>
							</div>
						</>
					)}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Projects;
