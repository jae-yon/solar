import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';

export default function FooterCopyRight() {
  return (
    <Box
      maxW='1200px'
      mx='auto'
      px={{ base: '24px', md: '40px' }}
      py='20px'
    >
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify={{ base: 'center', sm: 'space-between' }}
        align={{ base: 'center', sm: 'center' }}
        gap='12px'
        textAlign={{ base: 'center', sm: 'left' }}
      >
        <Text fontSize='xs' color='gray.400'>
          © {new Date().getFullYear()} Solar Partners. All rights reserved.
        </Text>

        <HStack gap='20px' justify={{ base: 'center', sm: 'flex-start' }}>
          {['이용약관', '개인정보처리방침'].map((item) => (
            <Link
              key={item}
              href='#'
              fontSize='xs'
              color='gray.400'
              _hover={{ color: 'gray.200', textDecoration: 'none' }}
              transition='color 0.15s ease'
            >
              {item}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}