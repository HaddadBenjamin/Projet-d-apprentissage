import { useEffect, useState } from 'react';

interface ScreenSize {
  screenWidth: number;
  screenHeight: number;
}

// Optimisation possible : passer en paramètre un throttleValue, valeur par défault = 300, mais créera une dépendance à Lodash.
export default () : ScreenSize => {
  // "window" is not available during server side rendering.
  if (typeof window === 'undefined') return { screenWidth: 0, screenHeight: 0 };

  const getScreenSize = (): ScreenSize => ({
    screenWidth: window?.innerWidth,
    screenHeight: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState<ScreenSize>(getScreenSize());

  useEffect(() => {
    const onScreenResize = () => setWindowSize(getScreenSize());

    window.addEventListener('resize', onScreenResize);

    onScreenResize();

    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  return windowSize;
};
