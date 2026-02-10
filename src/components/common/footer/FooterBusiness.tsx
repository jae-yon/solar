import { Link, Stack, Text } from '@chakra-ui/react';

export default function FooterBusiness() {
  return (
    <Stack gap='20px' align={{ base: 'center', md: 'stretch' }}>
      <Text fontSize='lg' fontWeight='500' color='gray.300' letterSpacing='-0.02em'>사업소개</Text>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        사업 개요
      </Link>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        주요 사업
      </Link>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        성공사례
      </Link>
      <Link
        href='#'
        fontSize='sm'
        color='gray.400'
        _hover={{ color: 'gray.100', textDecoration: 'none' }}
        transition='color 0.15s ease'
      >
        파트너십
      </Link>
    </Stack>
  );
}
