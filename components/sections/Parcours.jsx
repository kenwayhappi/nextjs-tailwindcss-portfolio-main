import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Parcours = () => {
	const education = [
		{ degree: 'Master 1 - Génie Logiciel', school: 'Polytechnique', year: '2025 - 2026' },
		{ degree: 'Diplôme d\'Ingénieur', school: 'Institut Africain d\'Informatique (IAI), Douala', year: '2020 - 2023' },
		{ degree: 'Licence en Informatique', school: 'Institut Africain d\'Informatique (IAI), Douala', year: '2020 - 2023' },
		{ degree: 'Baccalauréat Scientifique', school: 'Lycée Joss, Douala', year: '2017' },
	];

	const experience = [
		{
			title: 'Analyste et Développeur Web',
			company: 'Awatechno, Douala',
			year: 'De nov. 2025 à ce jour',
			tasks: [
				'Personnalisation et maintenance de sites WordPress premium',
				'Développement d\'applications web avec Next.js',
				'Communication continue avec les clients à chaque étape du projet',
				'Respect des délais et du budget définis en début de mission',
				'Analyse des besoins, optimisation des interfaces et mise en production',
			],
		},
		{
			title: 'Stagiaire Développeur',
			company: 'AFRICAN WINDOWS SARL',
			year: '2022',
			tasks: [
				'Conception d\'une application web de gestion avec Laravel',
				'Optimisation des performances des bases de données',
				'Travail en méthode agile : livraisons itératives et points réguliers avec l\'équipe',
				'Collaboration étroite avec le client pour valider chaque étape',
			],
		},
		{
			title: 'Stagiaire IT',
			company: 'Mairie de Douala',
			year: '2021',
			tasks: [
				'Gestion de projets de numérisation',
				'Support technique et formation des utilisateurs',
			],
		},
		{
			title: 'Stagiaire Mobile & Multimédia',
			company: 'CIJ',
			year: '2020',
			tasks: [
				'Développement d\'une application mobile avec Flutter',
				'Création de montages vidéo et infographies pour campagnes numériques',
				'Tests unitaires et déploiement',
			],
		},
	];

	return (
		<section id="parcours" className="scroll-mt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-white">
					Mon <span className="text-gradient">Parcours</span>
				</h2>

				<div className="grid md:grid-cols-2 gap-12 mt-8 md:mt-0">
					{/* Education Timeline */}
					<div>
						<div className="flex items-center gap-3 mb-8">
							<div className="p-3 bg-primary-600/20 text-primary-400 rounded-xl">
								<GraduationCap className="w-8 h-8" />
							</div>
							<h3 className="text-2xl font-bold text-white">Éducation</h3>
						</div>

						<div className="relative border-l-2 border-slate-700/50 ml-6 space-y-10 pb-8">
							{education.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.5 }}
									className="relative pl-8"
								>
									<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-primary-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
									<h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
									<div className="text-primary-400 text-sm font-semibold mb-2">{item.school}</div>
									<div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-400 font-medium">
										{item.year}
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Experience Timeline */}
					<div>
						<div className="flex items-center gap-3 mb-8">
							<div className="p-3 bg-accent/20 text-accent rounded-xl">
								<Briefcase className="w-8 h-8" />
							</div>
							<h3 className="text-2xl font-bold text-white">Expérience</h3>
						</div>

						<div className="relative border-l-2 border-slate-700/50 mt-8 ml-6 space-y-10 pb-8">
							{experience.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.5 }}
									className="relative pl-8"
								>
									<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-accent shadow-[0_0_10px_rgba(56,189,248,0.5)]"></span>
									<h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
									<div className="text-accent text-sm font-semibold mb-2">{item.company}</div>
									<div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-400 font-medium mb-4">
										{item.year}
									</div>
									<ul className="list-disc list-inside text-sm text-slate-400 space-y-1 leading-relaxed">
										{item.tasks.map((task, i) => (
											<li key={i}>{task}</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Parcours;
