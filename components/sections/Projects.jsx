import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';

const projects = [
	{
		id: 'almanac',
		title: 'Site Web Almanac',
		color: 'from-blue-500 to-blue-700',
		summary: 'Une application Laravel pour gérer les villages et personnalités administratives.',
		description: 'Une application web Laravel développée pour gérer les informations sur les villages, groupements et personnalités administratives au Cameroun. Elle permet de visualiser les hiérarchies administratives, rechercher des villages comme Balassie ou Ndongom, et afficher des détails sur les chefs et groupements.',
		link: 'https://aw-cameroon.com',
		tech: ['Laravel', 'MySQL', 'PHP'],
	},
	{
		id: 'bureau-vente',
		title: 'Système de Gestion de Bureau de Vente',
		color: 'from-emerald-500 to-emerald-700',
		summary: 'Application locale de gestion des ventes et stocks.',
		description: 'Un système local conçu pour gérer les ventes, les stocks et les transactions dans un bureau de vente. Développé avec Laravel et MySQL, il offre une interface simple pour le suivi interne des activités commerciales. Ce projet est utilisé en local et n’est pas accessible en ligne.',
		link: null,
		tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
	},
	{
		id: 'r-shiny',
		title: 'Application R Shiny pour Analyse de Données',
		color: 'from-purple-500 to-purple-700',
		summary: 'Application R Shiny pour analyser les données de smartphone.',
		description: 'Une application interactive R Shiny pour analyser les données du questionnaire NBMB sur l’utilisation des smartphones. Elle propose des tableaux récapitulatifs, des graphiques interactifs et des insights sur les habitudes des utilisateurs. Déployée sur shinyapps.io pour un accès facile.',
		link: 'https://kenwaydev.shinyapps.io/ACM-teste/',
		tech: ['R', 'R Shiny', 'Data Analysis'],
	},
	{
		id: 'defgi',
		title: 'Site WordPress Defgi',
		color: 'from-orange-500 to-orange-700',
		summary: 'Conception et intégration d’un site WordPress moderne pour Defgi.',
		description: 'Conception et intégration d’un site WordPress moderne pour Defgi avec un design responsive, optimisation SEO de base, et contenu structuré.',
		link: 'https://defgi.org/',
		tech: ['WordPress', 'SEO', 'Responsive Design'],
	},
	{
		id: 'awatechno',
		title: 'Site WordPress Awatechno',
		color: 'from-sky-500 to-sky-700',
		summary: 'Réalisation d’un site WordPress pour Awatechno.',
		description: 'Développement du site WordPress pour Awatechno, avec une mise en page adaptée mobile et une navigation claire pour présenter les services.',
		link: 'https://awatechno.com/',
		tech: ['WordPress', 'Elementor', 'Web Design'],
	},
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);

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
								<div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50">
									<span className="text-primary-400 text-sm font-semibold group-hover:underline">Détails</span>
									<Code className="w-5 h-5 text-slate-500 group-hover:text-primary-400 transition-colors" />
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Project Modal */}
			{selectedProject && (
				<motion.div
					key="project-modal"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
					onClick={() => setSelectedProject(null)}
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="bg-dark-800 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
					>
						<div className={`h-32 bg-gradient-to-br ${selectedProject.color} p-6 relative flex items-end justify-between`}>
							<button
								onClick={() => setSelectedProject(null)}
								className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-colors"
							>
								<X size={20} />
							</button>
						</div>
						
						<div className="p-8 overflow-y-auto">
							<h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
							
							<div className="flex flex-wrap gap-2 mb-6">
								{selectedProject.tech.map((t, idx) => (
									<span key={idx} className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full font-medium border border-primary-500/20">
										{t}
									</span>
								))}
							</div>
							
							<p className="text-slate-300 leading-relaxed mb-8">{selectedProject.description}</p>
							
							<div className="flex items-center gap-4">
								{selectedProject.link ? (
									<a
										href={selectedProject.link}
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-primary-500/50 flex items-center gap-2"
									>
										Visiter le projet
										<ExternalLink size={18} />
									</a>
								) : (
									<span className="px-6 py-3 bg-slate-800 text-slate-400 font-semibold rounded-xl flex items-center gap-2">
										Projet Local
									</span>
								)}
								<button
									onClick={() => setSelectedProject(null)}
									className="px-6 py-3 bg-transparent hover:bg-slate-800 text-white font-medium rounded-xl transition-all"
								>
									Fermer
								</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
};

export default Projects;
