import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className="relative pt-10 pb-12 md:pt-32 md:pb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 text-center md:text-left">
			<div className="flex-1 w-full z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center md:items-start"
				>
					<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
						Happi <span className="text-primary-400">Mathis</span>
					</h1>
					<div className="h-[64px] sm:h-[80px] md:h-auto md:min-h-[48px] flex items-center md:items-start justify-center md:justify-start w-full mb-4 md:mb-6">
						<h2 className="text-xl sm:text-2xl md:text-4xl text-slate-300 font-medium leading-snug">
							Analyste et Développeur Web
						</h2>
					</div>
					<p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
						Créateur de solutions web & mobiles passionné. Je transforme vos idées en réalité avec des technologies modernes telles que Next.js, Laravel et Flutter.
					</p>

					<div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
						<a
							href="#contact"
							className="px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-primary-500/50 flex items-center gap-2"
						>
							<Mail className="w-5 h-5" />
							Me contacter
						</a>
						<a
							href="/cv2026.pdf"
							download
							className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-full transition-all hover:bg-slate-800/50 flex items-center gap-2"
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
				className="flex-1 w-full max-w-[260px] sm:max-w-[320px] md:max-w-md mx-auto relative z-10"
			>
				{/* Wobble-free spinning border hack */}
				<div className="relative w-full aspect-square rounded-full flex items-center justify-center p-2">
					<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600 via-accent to-dark-800 animate-[spin_4s_linear_infinite]"></div>
					<div className="absolute inset-1 rounded-full bg-dark-900 z-0"></div>
					<img
						src="/profile.jpg"
						alt="Happi Mathis"
						className="relative z-10 w-full h-full object-cover rounded-full border-4 border-dark-900"
					/>
				</div>
                
				{/* Decorative floating blurred orbs */}
                <div className="absolute top-10 -right-4 w-12 h-12 md:w-16 md:h-16 bg-primary-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-10 -left-4 w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
			</motion.div>
		</section>
	);
};

export default Hero;
