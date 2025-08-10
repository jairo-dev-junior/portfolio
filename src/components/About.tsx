import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  title: string;
  text: string;
}

export function About({ title, text }: AboutProps) {
  const images = [
    '/images/1716259245388.jpeg',
    '/images/500980828_4049105518641923_2263129607884802242_n.jpg',
    '/images/1648592896808.jpeg',
    '/images/image2.jpeg',
  ];

  const mosaic = images.slice(0, 4);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function focusCarousel() {
    if (carouselRef.current) carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  return (
    <section id="sobre" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-slate-900/50">
          <div className="grid items-center gap-6 md:grid-cols-2">
            {/* Esquerda: Mosaico + Carrossel */}
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-3">
                {mosaic.map((src, i) => (
                  <motion.img
                    key={`${src}-${i}`}
                    src={src}
                    alt="Galeria"
                    className="h-32 w-full rounded-xl object-cover shadow-sm sm:h-36 md:h-40"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    loading="lazy"
                    onClick={focusCarousel}
                  />
                ))}
              </div>
            </div>

            {/* Direita: Título + Texto centralizados */}
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 md:text-4xl">{title}</h2>
              <p className="mt-3 max-w-prose text-base text-justify text-slate-700 dark:text-slate-300 md:text-lg">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About; 