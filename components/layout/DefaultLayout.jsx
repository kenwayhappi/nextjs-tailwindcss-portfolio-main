import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import ScrollToTop from '../shared/ScrollToTop';
import Head from 'next/head';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Happi Mathis | Élève Ingénieur Génie Logiciel — Polytechnique Douala</title>
				<meta name="description" content="Portfolio de Happi Mathis, Élève Ingénieur en Génie Logiciel (M1 - Polytechnique Douala) et Développeur Fullstack (Next.js, Expo React Native, Laravel 12, Flutter). Solutions logicielles haute performance." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="flex flex-col min-h-screen relative font-sans text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-dark-950 transition-colors duration-500 bg-dot-pattern">
				{/* Background decorative glowing elements */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
					<div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-primary-600/10 blur-[140px] animate-pulse-slow"></div>
					<div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
					<div className="absolute top-[40%] left-[10%] w-[35%] h-[35%] rounded-full bg-violetAccent/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
				</div>

				<AppHeader />
				<main className="flex-grow pt-20 md:pt-28">{children}</main>
				<AppFooter />

				{/* Floating scroll-to-top button */}
				<ScrollToTop />
			</div>
		</>
	);
};

export default DefaultLayout;
