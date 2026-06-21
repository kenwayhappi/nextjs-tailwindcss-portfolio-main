import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollUp}
          aria-label="Retour en haut"
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-12 h-12 rounded-2xl bg-dark-800/90 backdrop-blur-xl border border-white/10 shadow-xl hover:border-accent/40 hover:shadow-accent/20 transition-all duration-300"
        >
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ArrowUp
            size={18}
            className="relative z-10 text-slate-400 group-hover:text-accent group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
