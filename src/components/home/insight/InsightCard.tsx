import { Badge, Card, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface InsightCardProps {
  title: string;
  subTitle: string;
  date?: string;
  price: string;
  changePercentage: string;
}

export function InsightCard(props: InsightCardProps) {
  const ref = useRef(null);
  const isView = useInView(ref);
  
  const price = useCountUp({ target: parseFloat(props.price), duration: 1500, enabled: isView });

  return (
    <Stack>
      <Card.Root 
        px={2}
        py={6}
        variant='elevated'
        width='100%'
        borderRadius='xl' 
        borderColor='gray.100'
        overflow='hidden'
      >
        <Card.Header pb={2}>
          <Flex justify='center' align='center'>
            <Stack textAlign='center' gap={1}>
              <Heading fontSize='xl' fontWeight='600' color='gray.900' letterSpacing='-0.02em'>{props.title}</Heading>
              <Text fontSize='sm' fontWeight='medium' color='gray.500'>{props.date}</Text>
            </Stack>
          </Flex>
        </Card.Header>

        <Card.Body py={4}>
          <Stack gap={4}>
            <Flex justify='center' align='baseline' gap={3}>
              <Text ref={ref} fontSize={{ base: '64px', md: '48px', lg: '48px', xl: '64px' }} fontWeight='700' color='gray.900' letterSpacing='-0.02em' lineHeight='1'>
                {price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
              <Text fontSize='sm' fontWeight='medium' color='gray.500'>
                원/kWh
              </Text>
            </Flex>
            
            {/* 등락 표시 부분 */}
            <Flex justify='center' align='center' gap={2}>
              <Badge 
                variant='subtle' 
                px={3} 
                py={2} 
                borderRadius='md'
                display='flex'
                alignItems='center'
                backgroundColor={props.changePercentage.includes('-') ? 'blue.50' : 'red.50'}
                color={props.changePercentage.includes('-') ? 'blue.500' : 'red.500'}
              >
                <Text fontSize='xs' fontWeight='bold'>{props.changePercentage}%</Text>
              </Badge>
            </Flex>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}