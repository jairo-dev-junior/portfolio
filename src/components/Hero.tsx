import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  btnView: string;
  btnSite: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <motion.div variants={heroVariants} initial="hidden" animate="show" className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-left">
            <h1 className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="h-40 w-40 overflow-hidden rounded-full ring-4 ring-[color:var(--color-primary)]/40 sm:h-48 sm:w-48 md:h-56 md:w-56">
              <motion.img
                src="/images/perfil.jpeg"
                alt="Foto de perfil"
                className="h-full w-full object-cover"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero; 