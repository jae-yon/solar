import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';

export default function HeroContents() {
  return (
    <Container
        maxW='container.xl'
        height='100%'
        position='relative'
        zIndex='1'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
      <Stack
        gap={6}
        maxW='600px'
        align='center'
        textAlign='center'
      >
        <Heading
          as='h1'
          size='4xl'
          color='white'
          fontWeight='bold'
          lineHeight='1.2'
          textAlign='center'
        >
          전기 요금 고민을 줄이는 현명한 선택
        </Heading>
        
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color='whiteAlpha.900'
          lineHeight='1.7'
          textAlign='center'
          fontWeight='medium'
        >
          누구나 쉽고 안전하게
          태양광 에너지에 투자 할 수 있도록
          태양광 에너지 산업을 선도하는 솔라파트너스가
          더 나은 미래를 제시합니다.
        </Text>
        
        <Stack direction={{ base: 'column', sm: 'row' }} gap={4} align='center' justify='center'>
          <Button
            size='xl'
            colorScheme='blue'
            borderRadius='xl'
            px={8}
            py={6}
            fontSize='lg'
            fontWeight='medium'
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            transition='all 0.2s'
          >
            문의하기
          </Button>
          
          <Button
            size='xl'
            variant='outline'
            color='whiteAlpha.900'
            borderColor='white'
            borderRadius='xl'
            px={8}
            py={6}
            fontSize='lg'
            fontWeight='medium'
            _hover={{
              bg: 'whiteAlpha.400',
              transform: 'translateY(-2px)'
            }}
            transition='all 0.2s'
          >
            더 알아보기
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}