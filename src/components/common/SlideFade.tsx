import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { Presence } from "@chakra-ui/react";

interface SlideFadeProps {
  children: React.ReactNode;
  delay?: number;
}

export default function SlideFade(props: SlideFadeProps) {
  const ref = useRef(null);
  const isView = useInView(ref);

  return (
    <div ref={ref}>
      <Presence
        present={isView}
        animationName={{
          _open: 'slide-from-bottom-custom, fade-in',
          _closed: 'slide-to-top-custom, fade-out',
        }}
        animationDuration={`${props.delay ?? 0.5}s`}
        animationTimingFunction='ease-out'
      >
        {props.children}
      </Presence>
    </div>
  );
}