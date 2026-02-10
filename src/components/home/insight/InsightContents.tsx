import { Box, Stack, Group } from '@chakra-ui/react';

import { InsightCard } from './InsightCard';

interface InsightContentsProps {
  isDesktop: boolean;
  region: 'all' | 'land' | 'jeju';
  insightData: any[];
}

export default function InsightContents(props: InsightContentsProps) {  
  const insightData = props.insightData.find((item) => item.region === props.region);

  if (!insightData) {
    return null;
  }

  return (
    <Stack width='100%' px={props.isDesktop ? 8 : 0} mt={4}>
      <Group
        display='flex'
        flexDirection={props.isDesktop ? 'row' : 'column'}
        alignItems='stretch'
        justifyContent='stretch'
        gap={8}
        width='100%'
        flexWrap='nowrap'
      >
        <Box flex={props.isDesktop ? 1 : undefined} minWidth={0} width={props.isDesktop ? undefined : '100%'}>
          <InsightCard 
            title={insightData.contents[0].title} 
            subTitle={insightData.contents[0].subTitle} 
            date={insightData.contents[0].date} 
            price={insightData.contents[0].price} 
            changePercentage={insightData.contents[0].changePercentage} />
        </Box>
        <Box flex={props.isDesktop ? 1 : undefined} minWidth={0} width={props.isDesktop ? undefined : '100%'}>
          <InsightCard 
            title={insightData.contents[1].title} 
            subTitle={insightData.contents[1].subTitle} 
            date={insightData.contents[1].date} 
            price={insightData.contents[1].price} 
            changePercentage={insightData.contents[1].changePercentage} />
        </Box>
        <Box flex={props.isDesktop ? 1 : undefined} minWidth={0} width={props.isDesktop ? undefined : '100%'}>
          <InsightCard 
            title={insightData.contents[2].title} 
            subTitle={insightData.contents[2].subTitle} 
            date={insightData.contents[2].date} 
            price={insightData.contents[2].price} 
            changePercentage={insightData.contents[2].changePercentage} />
        </Box>
      </Group>
    </Stack>
  );
}