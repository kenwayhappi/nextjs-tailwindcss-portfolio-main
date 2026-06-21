import Head from 'next/head';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Parcours from '../components/sections/Parcours';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-40">
			<Hero />
			<About />
			<Parcours />
			<Projects />
			<Contact />
		</div>
	);
}
