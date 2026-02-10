import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { LucidePhone } from 'lucide-react';

export default function FooterSupport() {
  return (
    <Stack gap='20px' align={{ base: 'center', md: 'stretch' }}>
      <Flex align='center' justify={{ base: 'center', md: 'flex-start' }} gap={2} color='red.300'>
        <LucidePhone size={24} />
        <Text
          fontSize='xl'
          fontWeight='700'
          letterSpacing='-0.02em'
        >
          고객센터
        </Text>
      </Flex>
      <Heading size='2xl' fontWeight='medium' color='red.300' letterSpacing='2px'>1552-0000</Heading>
      <Text fontSize='sm' fontWeight='medium' color='gray.400' letterSpacing='-0.02em'>평일 09:00 - 18:00</Text>
      <Text fontSize='sm' fontWeight='medium' color='gray.400' letterSpacing='-0.02em'>점심 12:00 - 13:00</Text>
      <Text fontSize='sm' fontWeight='medium' color='gray.400' letterSpacing='-0.02em'>토요일, 일요일, 공휴일 휴무</Text>
    </Stack>
  );
}