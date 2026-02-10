import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';

import logo from '@/assets/vite.svg';

import SocialButton from '../SocialButton';

export default function FooterInformation() {
  return (
    <Stack gap='20px' align={{ base: 'center', md: 'stretch' }}>
      {/* logo */}
      <Flex align='center' justify={{ base: 'center', md: 'flex-start' }} gap={2}>
        <Image src={logo} alt='logo' width={6} objectFit='cover' />
        <Text
          fontSize='md'
          fontWeight='700'
          color='gray.300'
          letterSpacing='-0.02em'
        >
          (주)태양광에너지
        </Text>
      </Flex>
      {/* introduction */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems={{ base: 'center', md: 'flex-start' }}
        gap={1}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text as='span' color='gray.400' fontSize='sm'>사업자번호: 123-45-67890</Text> 
        <Text as='span' color='gray.400' fontSize='sm'>대표: 홍길동</Text> 
        <Text as='span' color='gray.400' fontSize='sm'>주소: 서울특별시 강남구 역삼동 123-45 10층</Text> 
        <Text as='span' color='gray.400' fontSize='sm'>TEL: 02-123-4567 | FAX: 02-123-4567</Text>
        <Text as='span' color='gray.400' fontSize='sm'>E-MAIL: info@solarpartners.com</Text>
      </Box>

      {/* social Links */}
      <HStack justify={{ base: 'center', md: 'flex-start' }}>
        <SocialButton icon='github' href='#' label='GitHub' />
        <SocialButton icon='twitter' href='#' label='Twitter' />
        <SocialButton icon='linkedin' href='#' label='LinkedIn' />
      </HStack>
    </Stack>
  );
}