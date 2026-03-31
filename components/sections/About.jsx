import { motion } from 'framer-motion';
import { Layers, Smartphone, Code2, Database, BarChart3, Terminal, Coffee } from 'lucide-react';

const skills = [
	{ title: 'Backend', tech: 'Laravel, PHP, Node.js', icon: <Terminal className="w-6 h-6 text-primary-400" /> },
	{ title: 'Mobile', tech: 'Flutter, Dart', icon: <Smartphone className="w-6 h-6 text-accent" /> },
	{ title: 'Frontend', tech: 'HTML, CSS, JS, Tailwind, Next.js', icon: <Code2 className="w-6 h-6 text-primary-400" /> },
	{ title: 'Bases de données', tech: 'MySQL, Firebase', icon: <Database className="w-6 h-6 text-accent" /> },
	{ title: 'Analyse de données', tech: 'R, R Shiny', icon: <BarChart3 className="w-6 h-6 text-primary-400" /> },
	{ title: 'Java (Junior)', tech: 'POO, Spring Boot basics', icon: <Coffee className="w-6 h-6 text-accent" /> },
	{ title: 'Python (Junior)', tech: 'Scripts, automatisation, pandas', icon: <Layers className="w-6 h-6 text-primary-400" /> },
];

const About = () => {
	return (
		<section id="about" className="scroll-mt-24">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center md:text-left text-white">
					À propos de <span className="text-gradient">moi</span>
				</h2>

				<div className="grid md:grid-cols-2 gap-8 md:gap-16">
					<div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
						<p>
							Basé à <strong className="text-slate-200">Douala, Cameroun</strong>, je suis un développeur passionné par la création d’applications web et mobiles qui simplifient la vie des utilisateurs.
						</p>
						<p>
							Avec une formation d’ingénieur en informatique et plusieurs années d’expérience, je combine créativité et rigueur technique pour livrer des projets d’exception.
						</p>
						<p>
							Mon approche est centrée sur le client : je m’assure que chaque projet reflète vos besoins tout en intégrant les meilleures pratiques de développement pour un code propre, performant et évolutif.
						</p>
						
						<div className="pt-6 border-t border-slate-800/50 mt-8">
							<h3 className="text-xl font-semibold text-white mb-4">Informations supplémentaires</h3>
							<ul className="space-y-3">
								<li className="flex gap-3">
									<span className="text-primary-400 font-medium">Langues :</span>
									<span>Français (natif), Anglais (C1 - courant)</span>
								</li>
								<li className="flex gap-3">
									<span className="text-primary-400 font-medium">Intérêts :</span>
									<span>Football, jeux vidéo (FIFA, COD), lecture tech</span>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-bold text-white mb-6">Compétences</h3>
						<div className="grid sm:grid-cols-2 gap-4">
							{skills.map((skill, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.5 }}
									className="glass-card p-5"
								>
									<div className="mb-3 p-3 bg-dark-900/50 rounded-lg inline-block">{skill.icon}</div>
									<h4 className="text-white font-medium mb-1">{skill.title}</h4>
									<p className="text-sm text-slate-400">{skill.tech}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
