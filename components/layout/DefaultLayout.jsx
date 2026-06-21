import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import ScrollToTop from '../shared/ScrollToTop';
import Head from 'next/head';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Happi Mathis | Développeur Web & Mobile</title>
				<meta name="description" content="Portfolio de Happi Mathis, Développeur Web et Mobile professionnel basé à Douala, Cameroun. Solutions web modernes avec Next.js, Laravel et Flutter." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="flex flex-col min-h-screen relative font-sans text-slate-300 bg-dark-950 bg-dot-pattern">
				{/* Background decorative elements */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
					<div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-primary-600/10 blur-[140px] animate-pulse-slow"></div>
					<div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
					<div className="absolute top-[40%] left-[10%] w-[35%] h-[35%] rounded-full bg-violetAccent/5 blur-[130px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
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
