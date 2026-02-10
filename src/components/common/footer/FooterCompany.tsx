import { Link, Stack, Text } from '@chakra-ui/react';

export default function FooterCompany() {
  return (
    <Stack gap='20px' align={{ base: 'center', md: 'stretch' }}>
      <Text fontSize='lg' fontWeight='500' color='gray.300' letterSpacing='-0.02em'>회사소개</Text>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        인사말
      </Link>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        조직도
      </Link>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        오시는 길
      </Link>
    </Stack>
  );
}