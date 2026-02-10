import { Badge, Card, Flex, Heading, Stack, Text } from '@chakra-ui/react';

interface InsightCardProps {
  title: string;
  subTitle: string;
  date?: string;
  price: string;
  changePercentage: string;
}

export function InsightCard(props: InsightCardProps) {
  return (
    <Stack>
      <Card.Root 
        px={2}
        py={4}
        variant='elevated'
        width='100%'
        borderRadius='xl' 
        border='1px solid'
        borderColor='gray.100'
        overflow='hidden'
        transition='all 0.2s'
        _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
      >
        <Card.Header pb={2}>
          <Flex justify='space-between' align='center'>
            <Stack gap={1}>
              <Heading size='3xl' fontWeight='medium' color='gray.900'>{props.title}</Heading>
              <Text fontSize='xs' fontWeight='medium' letterSpacing='wide' color='gray.500'>{props.subTitle}</Text>
            </Stack>
            <Text fontSize='sm' fontWeight='medium' color='gray.500'>{props.date}</Text>
          </Flex>
        </Card.Header>

        <Card.Body py={4}>
          <Stack gap={2}>
            <Flex align='baseline' gap={2}>
              <Text fontSize='5xl' fontWeight='700' color='gray.900' lineHeight='1'>
                {props.price}
              </Text>
              <Text fontSize='sm' fontWeight='bold' color='gray.500'>
                원/kWh
              </Text>
            </Flex>
            
            {/* 등락 표시 부분 */}
            <Flex align='center' gap={1.5}>
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