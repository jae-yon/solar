import { Box, Button, Group, Heading, Stack, Text } from '@chakra-ui/react';

interface InSightHeadProps {
  region: 'all' | 'land' | 'jeju';
  setRegion: (region: 'all' | 'land' | 'jeju') => void;
}

export function InSightHeadDesktop(props: InSightHeadProps) {
  return (
    <Box display='flex' flexDirection='column' gap={4} mb={8}>
      <Heading
        fontSize={{ base: "36px", md: "52px" }}
        fontWeight="600"
        lineHeight="1.1"
        letterSpacing="-0.02em"
      >
        실시간 가격 동향
      </Heading>

      <Box display='flex' alignItems='center' justifyContent='space-between' px={1} gap={4}>
        <Text fontSize='2xl' fontWeight='medium' textAlign='start' color='gray.500'>최신 가격 동향을 알아보고 시장 상황을 파악해 보세요</Text>
        <Stack>
          <Group>
            <Button 
              variant='outline' 
              color={props.region === 'all' ? 'orange.500' : 'gray.500'} 
              borderColor={props.region === 'all' ? 'orange.500' : 'gray.500'} 
              borderRadius='xl' 
              px={4} 
              py={2}
              onClick={() => props.setRegion('all')}
              _hover={{
                color: 'orange.500',
                borderColor: 'orange.500',
                backgroundColor: 'orange.50',
              }}
            >
              통합
            </Button>
            <Button 
              variant='outline' 
              color={props.region === 'land' ? 'orange.500' : 'gray.500'} 
              borderColor={props.region === 'land' ? 'orange.500' : 'gray.500'} 
              borderRadius='xl' 
              px={4} 
              py={2}
              onClick={() => props.setRegion('land')}
              _hover={{
                color: 'orange.500',
                borderColor: 'orange.500',
                backgroundColor: 'orange.50',
              }}
            >
              육지
            </Button>
            <Button 
              variant='outline' 
              color={props.region === 'jeju' ? 'orange.500' : 'gray.500'} 
              borderColor={props.region === 'jeju' ? 'orange.500' : 'gray.500'} 
              borderRadius='xl' 
              px={4} 
              py={2}
              onClick={() => props.setRegion('jeju')}
              _hover={{
                color: 'orange.500',
                borderColor: 'orange.500',
                backgroundColor: 'orange.50',
              }}
            >
              제주
            </Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
}

export function InSightHeadMobile(props: InSightHeadProps) {
  return (
    <Box display='flex' flexDirection='column' gap={4} mb={4}>
      <Heading size='4xl' fontWeight='medium' textAlign='center'>실시간 가격 동향</Heading>
      <Text fontSize='xl' fontWeight='medium' textAlign='center' color='gray.500' ms={1}>최신 가격 동향을 알아보고 시장 상황을 파악해 보세요.</Text>
      <Stack display='flex' alignItems='center' justifyContent='center'>
        <Group>
          <Button 
            variant='outline' 
            color={props.region === 'all' ? 'orange.500' : 'gray.500'} 
            borderColor={props.region === 'all' ? 'orange.500' : 'gray.500'} 
            borderRadius='xl' 
            px={4} 
            py={2}
            onClick={() => props.setRegion('all')}
            _hover={{
              color: 'orange.500',
              borderColor: 'orange.500',
              backgroundColor: 'orange.50',
            }}
          >
            통합
          </Button>
          <Button 
            variant='outline' 
            color={props.region === 'land' ? 'orange.500' : 'gray.500'} 
            borderColor={props.region === 'land' ? 'orange.500' : 'gray.500'} 
            borderRadius='xl' 
            px={4} 
            py={2}
            onClick={() => props.setRegion('land')}
            _hover={{
              color: 'orange.500',
              borderColor: 'orange.500',
              backgroundColor: 'orange.50',
            }}
          >
            육지
          </Button>
          <Button 
            variant='outline' 
            color={props.region === 'jeju' ? 'orange.500' : 'gray.500'} 
            borderColor={props.region === 'jeju' ? 'orange.500' : 'gray.500'} 
            borderRadius='xl' 
            px={4} 
            py={2}
            onClick={() => props.setRegion('jeju')}
            _hover={{
              color: 'orange.500',
              borderColor: 'orange.500',
              backgroundColor: 'orange.50',
            }}
          >
            제주
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}