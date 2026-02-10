import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Presence } from "@chakra-ui/react";

interface SlideFadeProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

export default function SlideFade(props: SlideFadeProps) {
  const ref = useRef(null);
  const isView = useInView(ref);

  const animationName = {
    openLeft: 'slide-from-left-custom, fade-in',
    openRight: 'slide-from-right-custom, fade-in',
    openTop: 'slide-from-top-custom, fade-in',
    openBottom: 'slide-from-bottom-custom, fade-in',
    closeLeft: 'slide-to-left-custom, fade-out',
    closeRight: 'slide-to-right-custom, fade-out',
    closeTop: 'slide-to-top-custom, fade-out',
    closeBottom: 'slide-to-bottom-custom, fade-out',
  };

  const animationStart = () => {
    if (props.direction === 'left') {
      return animationName.openLeft;
    } else if (props.direction === 'right') {
      return animationName.openRight;
    } else if (props.direction === 'top') {
      return animationName.openTop;
    } else if (props.direction === 'bottom') {
      return animationName.openBottom;
    } else {
      return animationName.openBottom;
    }
  }

  const animationEnd = () => {
    if (props.direction === 'left') {
      return animationName.closeLeft;
    } else if (props.direction === 'right') {
      return animationName.closeRight;
    } else if (props.direction === 'top') {
      return animationName.closeTop;
    } else if (props.direction === 'bottom') {
      return animationName.closeBottom;
    } else {
      return animationName.closeTop;
    }
  }

  return (
    <div ref={ref}>
      <Presence
        present={isView}
        animationName={{
          _open: `${animationStart()}, fade-in`,
          _closed: `${animationEnd()}, fade-out`,
        }}
        animationDuration={`${props.delay ?? 0.5}s`}
        animationTimingFunction='ease-out'
      >
        {props.children}
      </Presence>
    </div>
  );
}