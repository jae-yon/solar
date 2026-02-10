import { Presence } from "@chakra-ui/react";

import { useInView } from '@/hooks/useInView';

interface SlideFadeProps {
  children: React.ReactNode;
  delay?: number;
}

export default function SlideFade(props: SlideFadeProps) {
  const { ref, inView } = useInView();
  
  return (
    <div ref={ref}>
      <Presence
        present={inView}
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