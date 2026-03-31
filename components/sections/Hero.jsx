import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
	const texts = ['Analyse des projets.', 'Développeur Web.', 'Junior Mobile.'];
	const [textIndex, setTextIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [reverse, setReverse] = useState(false);

	// Typing effect
	useEffect(() => {
		if (subIndex === texts[textIndex].length + 1 && !reverse) {
			setTimeout(() => setReverse(true), 2000);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setTextIndex((prev) => (prev + 1) % texts.length);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 50 : 100, Math.random() * 150));

		return () => clearTimeout(timeout);
	}, [subIndex, textIndex, reverse]);

	return (
		<section className="relative pt-10 pb-12 md:pt-32 md:pb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
			<div className="flex-1 w-full z-10 text-center md:text-left">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
						Happi <span className="text-primary-400">Mathis</span>
					</h1>
					<h2 className="text-2xl md:text-4xl text-slate-300 font-medium mb-6 h-10">
						{texts[textIndex].substring(0, subIndex)}
						<span className="animate-ping inline-block w-[3px] h-8 bg-primary-400 ml-1 translate-y-1"></span>
					</h2>
					<p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
						Créateur de solutions web & mobiles passionné. Je transforme vos idées en réalité avec des technologies modernes telles que Next.js, Laravel et Flutter.
					</p>

					<div className="flex flex-wrap gap-4">
						<a
							href="#contact"
							className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-primary-500/50 flex items-center gap-2"
						>
							<Mail className="w-5 h-5" />
							Me contacter
						</a>
						<a
							href="/cv2026.pdf"
							download
							className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-full transition-all hover:bg-slate-800/50 flex items-center gap-2"
						>
							<Download className="w-5 h-5" />
							Télécharger CV
						</a>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="flex-1 w-full max-w-md relative z-10"
			>
				<div className="relative w-full aspect-square rounded-full p-2 bg-gradient-to-tr from-primary-600 via-accent to-dark-800 animate-[spin_10s_linear_infinite]">
					<div className="w-full h-full rounded-full overflow-hidden bg-dark-900 absolute inset-[2px] z-0 animate-[spin_10s_linear_infinite_reverse]">
						{/* Use regular img instead of next/image since we aren't completely sure about Next config, but we'll try standard img to avoid build issues */}
						<img
							src="/profile.jpg"
							alt="Happi Mathis"
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
				</div>
				{/* Decorative floating blurred orbs */}
				<div className="absolute top-10 -right-4 w-16 h-16 bg-primary-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
				<div className="absolute bottom-10 -left-4 w-20 h-20 bg-accent rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
			</motion.div>
		</section>
	);
};

export default Hero;
