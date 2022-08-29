import { IBaseAnimationsProps } from "../animation.model";
import React, {MutableRefObject, useEffect, useRef} from "react";
import useOnVisibleChange from "../../../../hooks/useOnIsVisibleChange";

interface IUseBaseAnimationResponse<TRef extends HTMLElement> {
  isVisible: boolean,
  ref: MutableRefObject<TRef>
}

const useBaseAnimation = <TRef extends HTMLElement>(
{
  duration,
  delay,
  offset,
  ease,
  animatedOnce
} : IBaseAnimationsProps) : IUseBaseAnimationResponse<TRef> => {
  const ref = useRef() as MutableRefObject<TRef>;
  const isVisible = useOnVisibleChange({ ref, stopToObserveWhenElementIsVisible: animatedOnce, offset });

  useEffect(() => {
    if (duration) ref?.current?.style?.setProperty('--duration', `${duration}ms`);
    if (delay) ref?.current?.style?.setProperty('--delay', `${delay}ms`);
    if (ease) ref?.current?.style?.setProperty('--ease', ease);
  }, []);

  return {
    ref,
    isVisible
  }
}

export default useBaseAnimation