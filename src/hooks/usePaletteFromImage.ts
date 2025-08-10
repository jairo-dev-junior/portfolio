import { useEffect } from 'react';
import Vibrant from 'node-vibrant';

export function usePaletteFromImage(imageSrc: string, isDark: boolean): void {
  useEffect(() => {
    let isCancelled = false;
    async function extract() {
      try {
        const palette = await Vibrant.from(imageSrc).getPalette();
        const primary = palette.Vibrant?.hex ?? '#2563eb';
        const accent = '#1d4ed8';
        const surface = palette.LightMuted?.hex ?? '#ffffff';
        const root = document.documentElement;
        root.style.setProperty('--color-primary', primary);
        root.style.setProperty('--color-accent', accent);
        root.style.setProperty('--color-surface', surface);
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) themeMeta.setAttribute('content', isDark ? '#0b0d12' : primary);
      } catch {
      }
    }
    if (!isCancelled) extract();
    return () => { isCancelled = true; };
  }, [imageSrc, isDark]);
}
export default usePaletteFromImage; 