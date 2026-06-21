import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import { LanguageProvider } from '../contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
	return (
		<LanguageProvider>
			<AnimatePresence mode="wait">
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</AnimatePresence>
		</LanguageProvider>
	);
}

export default MyApp;
