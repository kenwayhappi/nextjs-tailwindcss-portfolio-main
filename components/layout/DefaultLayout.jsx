import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import Head from 'next/head';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Happi Mathis | Developer Portfolio</title>
				<meta name="description" content="Portfolio of Happi Mathis, Software Developer based in Douala." />
			</Head>
			<div className="flex flex-col min-h-screen relative font-sans text-slate-300">
				{/* Background decorative elements */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
					<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-600/10 blur-[120px]"></div>
					<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]"></div>
				</div>

				<AppHeader />
				<main className="flex-grow pt-16 md:pt-20">{children}</main>
				<AppFooter />
			</div>
		</>
	);
};

export default DefaultLayout;
