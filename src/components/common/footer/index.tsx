import { Box, Separator } from '@chakra-ui/react';

import FooterCopyRight from './FooterCopyRight';
import FooterContents from './FooterContents';

export default function Footer() {
  return (
    <Box
      as={'footer'}
      bg={'gray.950'}
      borderTop={'1px solid'}
      borderColor={'gray.800'}
    >
      <Box
        maxW='1200px'
        mx='auto'
        px={{ base: '24px', md: '40px' }}
        pt={{ base: '48px', md: '64px' }}
        pb={{ base: '40px', md: '56px' }}
      >
        <FooterContents />
      </Box>
      {/* separator */}
      <Box
        maxW='1200px'
        mx='auto'
        px={{ base: '24px', md: '40px' }}
      >
        <Separator borderColor='gray.700' />
      </Box>
      {/* copyright */}
      <FooterCopyRight />
    </Box>
  );
}