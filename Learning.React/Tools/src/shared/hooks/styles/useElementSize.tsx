import {
  useEffect, useState, MutableRefObject, useRef,
} from 'react';

export interface ElementSize {
  elementWidth: number;
  elementHeight: number;
}

interface useElementSizeResponse<T> {
  elementSize : ElementSize,
  elementReference : MutableRefObject<T>
}

// Optimisation possible : passer en paramètre un throttleValue, valeur par défault = 300, mais créera une dépendance à Lodash.
export default <T extends HTMLElement>(): useElementSizeResponse<T> => {
  const [elementSize, setElementSize] = useState<ElementSize>({ elementWidth: 0, elementHeight: 0 });
  const elementReference = useRef<T>() as MutableRefObject<T>;

  const getElementSize = (): ElementSize => ({
    elementWidth: elementReference?.current?.offsetWidth ?? 0,
    elementHeight: elementReference?.current?.offsetHeight ?? 0,
  });
  const handleResize = () => setElementSize(getElementSize());

  useEffect(() => { new ResizeObserver(handleResize).observe(elementReference?.current); }, []);
  useEffect(() => {
    if (elementReference?.current) handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, [elementReference?.current]);

  return { elementSize, elementReference };
};
