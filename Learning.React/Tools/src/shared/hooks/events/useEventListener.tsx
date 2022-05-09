import { MutableRefObject, useEffect } from 'react';

const useEventListener = <T extends HTMLElement>(
  eventName : string,
  eventHandler : (event: Event) => void,
  reference : MutableRefObject<T>) => {
  useEffect(() => {
    reference?.current?.addEventListener(eventName, eventHandler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => reference?.current?.removeEventListener(eventName, eventHandler);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [reference?.current]);
};

export default useEventListener;