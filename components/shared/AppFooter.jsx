import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AppFooter = () => {
	return (
		<footer className="border-t border-white/10 mt-24 py-8 relative">
			<div className="container mx-auto px-6 text-center md:flex md:justify-between md:items-center">
				<p className="text-slate-400 text-sm">
					&copy; {new Date().getFullYear()} Happi Mathis. Tous droits réservés.
				</p>
				<div className="flex justify-center gap-6 mt-4 md:mt-0">
					{/* Social links */}
					<a href="https://github.com/kenwayhappi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
						<FaGithub size={20} />
					</a>
					<a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
						<FaLinkedin size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
