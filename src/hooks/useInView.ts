import { useEffect, useRef, useState } from 'react';

/**
 * 컴포넌트가 화면에 보이는지 여부를 추적하는 훅
 * @param options - IntersectionObserver 옵션
 * @returns {ref, inView} - 컴포넌트 레퍼런스와 보이는지 여부
 */

export const useInView = (
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};