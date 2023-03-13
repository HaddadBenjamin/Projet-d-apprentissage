import { useEffect, useRef } from 'react';

const usePageTitle = (pageTitle: string) => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;
    if (document.title !== pageTitle) document.title = pageTitle;

    // eslint-disable-next-line
    return () => { document.title = originalTitle.current!; };
  }, []);
};

export default usePageTitle;
