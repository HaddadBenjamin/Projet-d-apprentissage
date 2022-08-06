import React, { FC, MutableRefObject, useRef } from 'react';
import gsap from 'gsap';
import useOnVisibleFirstTime from '../../../hooks/styles/useOnVisibleFirstTime';

interface Props {
  vars: gsap.TweenVars
  children?: React.ReactNode
}

const OnVisibleFirstTime : FC<Props> = ({ children, vars }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useOnVisibleFirstTime(ref, () => { gsap.from(ref.current.children, vars); });

  return <span ref={ref}>{children}</span>;
};

export default OnVisibleFirstTime;
