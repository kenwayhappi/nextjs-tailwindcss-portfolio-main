import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence mode="wait">
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
		</AnimatePresence>
	);
}

export default MyApp;
