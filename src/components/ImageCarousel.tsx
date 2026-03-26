import React from 'react';

const images = [
  '/images/perfil.jpeg',
  '/images/1716259245388.jpeg',
  '/images/500980828_4049105518641923_2263129607884802242_n.jpg',
  '/images/1648592896808.jpeg',
  '/images/image2.jpeg',
  '/images/1747268028527.jpeg',
  '/images/1747268028125.jpeg'
];

export function ImageCarousel() {
  const loop = [...images, ...images];

  return (
    <section id="galeria" className="parallax-section relative border-b border-slate-300/80 py-12 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">galeria</h2>
        <div className="overflow-hidden py-2">
          <div className="flex min-w-max animate-[marquee_28s_linear_infinite] items-center gap-5">
            {loop.map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt="Foto pessoal"
                className="gallery-item h-24 w-24 rounded-full border border-cyan-500/40 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;
