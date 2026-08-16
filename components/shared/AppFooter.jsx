import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const AppFooter = () => {
	const { t } = useLanguage();
	const f = t.footer;

	return (
		<footer className="relative border-t border-slate-200 dark:border-white/10 mt-32 py-10 bg-slate-100 dark:bg-dark-950/80">
			{/* Glow line */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"></div>

			<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
				{/* Logo + copyright */}
				<div className="flex flex-col items-center md:items-start gap-1">
					<span className="font-mono text-sm font-bold">
						<span className="text-slate-900 dark:text-white">mathis</span>
						<span className="text-accent">.</span>
						<span className="text-primary-500">dev</span>
					</span>
					<p className="text-slate-600 dark:text-slate-400 text-xs font-mono">
						&copy; {new Date().getFullYear()} Happi Mathis — {f.rights}
					</p>
				</div>

				{/* Tagline */}
				<p className="text-slate-600 dark:text-slate-400 text-xs font-mono text-center hidden md:block">
					{f.tagline}
				</p>

				{/* Social links */}
				<div className="flex items-center gap-4">
					<a
						href="https://github.com/kenwayhappi"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 text-slate-700 dark:text-slate-400 hover:text-primary-600 dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300 group"
						aria-label="GitHub"
					>
						<FaGithub size={18} className="group-hover:scale-110 transition-transform" />
					</a>
					<a
						href="https://www.linkedin.com/feed/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 text-slate-700 dark:text-slate-400 hover:text-primary-600 hover:bg-primary-500/10 rounded-lg transition-all duration-300 group"
						aria-label="LinkedIn"
					>
						<FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
					</a>
					<a
						href="https://wa.me/237673563269"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 text-slate-700 dark:text-slate-400 hover:text-terminalGreen hover:bg-terminalGreen/10 rounded-lg transition-all duration-300 group"
						aria-label="WhatsApp"
					>
						<FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
