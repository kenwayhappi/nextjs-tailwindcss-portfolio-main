import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Custom404() {
	const { t } = useLanguage();

	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent mb-4 font-mono">
				404
			</h1>
			<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
				Page introuvable / Page not found
			</h2>
			<p className="text-slate-600 dark:text-slate-400 max-w-md mb-8 text-sm">
				Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
			</p>
			<Link
				href="/"
				className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 transition-all"
			>
				<ArrowLeft size={18} />
				<span>Retour à l&apos;accueil</span>
			</Link>
		</div>
	);
}
