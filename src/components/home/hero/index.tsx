import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import HeroContents from './HeroContents';

import heroImage1 from '@/assets/images/hero_img_01.jpg';
import heroImage2 from '@/assets/images/hero_img_02.jpg';
import heroImage3 from '@/assets/images/hero_img_03.jpeg';
import heroImage4 from '@/assets/images/hero_img_04.jpg';

const heroImages = [
  { image: heroImage1 },
  { image: heroImage2 },
  { image: heroImage3 },
  { image: heroImage4 },
];

const FADE_DURATION_MS = 2000;
const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      position='relative'
      w='100%'
      h='100vh'
      overflow='hidden'
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        w: '100%',
        h: '100%',
        bgGradient: 'to-b',
        gradientFrom: 'blackAlpha.600',
        gradientVia: 'whiteAlpha.400',
        gradientTo: 'whiteAlpha.600',
        opacity: 0.7,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      {/* images with fade in-out */}
      {heroImages.map((heroImage, index) => (
        <Box
          key={heroImage.image}
          position='absolute'
          top='0'
          left='0'
          width='100%'
          height='100%'
          opacity={index === currentIndex ? 1 : 0}
          transition={`opacity ${FADE_DURATION_MS}ms ease-in-out`}
          zIndex={0}
        >
          <Image
            src={heroImage.image}
            alt={`hero image ${index + 1}`}
            width='100%'
            height='100%'
            objectFit='cover'
          />
        </Box>
      ))}
      <HeroContents />
    </Box>
  );
}