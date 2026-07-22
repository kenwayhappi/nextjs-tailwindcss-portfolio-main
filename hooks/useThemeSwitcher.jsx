import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('dark');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const initialTheme = localStorage.theme || 'dark';
		setTheme(initialTheme);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		const root = window.document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
			root.classList.remove('light');
		} else {
			root.classList.add('light');
			root.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme, mounted]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	return { theme, toggleTheme, mounted };
};

export default useThemeSwitcher;
