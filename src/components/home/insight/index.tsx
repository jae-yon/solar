import { useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { useResponsive } from '@/hooks/useResponsive';

import SlideFade from '@/components/common/SlideFade';

import InsightContents from './InsightContents';
import { InSightHeadDesktop, InSightHeadMobile } from './InSightHead';

const insightData = [
  {
    region: 'all',
    contents: [
      {
        title: 'SMP',
        subTitle: '통합 계통한계가격',
        date: '2026.02.09 (월)',
        price: '115.40',
        changePercentage: '-0.35',
      },
      {
        title: 'REC 현물',
        subTitle: '평균 거래가격',
        date: '2026.02.05 (목)',
        price: '71.50',
        changePercentage: '+1.12',
      },
      {
        title: 'SMP + (REC x 1.0)',
        subTitle: '예상 수익 합계',
        date: '2026.02.09 (월)',
        price: '186.90',
        changePercentage: '+0.21',
      },
    ],
  },
  {
    region: 'land',
    contents: [
      {
        title: 'SMP',
        subTitle: '육지 계통한계가격',
        date: '2026.02.09 (월)',
        price: '115.47',
        changePercentage: '-0.32',
      },
      {
        title: 'REC 현물',
        subTitle: '육지 평균가',
        date: '2026.02.05 (목)',
        price: '710.50',
        changePercentage: '+11.12',
      },
      {
        title: 'SMP + (REC x 1.0)',
        subTitle: '육지 수익 합계',
        date: '2026.02.09 (월)',
        price: '186.97',
        changePercentage: '+0.23',
      },
    ],
  },
  {
    region: 'jeju',
    contents: [
      {
        title: 'SMP',
        subTitle: '제주 계통한계가격',
        date: '2026.02.09 (월)',
        price: '115.33',
        changePercentage: '-0.41',
      },
      {
        title: 'REC 현물',
        subTitle: '제주 평균가',
        date: '2026.02.05 (목)',
        price: '71.50',
        changePercentage: '+1.12',
      },
      {
        title: 'SMP + (REC x 1.0)',
        subTitle: '제주 수익 합계',
        date: '2026.02.09 (월)',
        price: '186.83',
        changePercentage: '+0.18',
      },
    ],
  }
];

export default function Insight() {
  const { isDesktop } = useResponsive();

  const [region, setRegion] = useState<'all' | 'land' | 'jeju'>('all');

  return (
    <Box
      width="100%"
      bg="gray.50"
      height={isDesktop ? "720px" : "auto"}
      mx="auto"
      py={{ base: "48px", md: "80px" }}
      px={{ base: 4, md: 8 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width="100%" maxW="1280px" flexDirection="column" gap={8}>
        <SlideFade direction="top">
          <Box px={8}>
            {isDesktop ? <InSightHeadDesktop region={region} setRegion={setRegion} /> : <InSightHeadMobile region={region} setRegion={setRegion} />}
          </Box>
        </SlideFade>
        <SlideFade direction="top">
          <InsightContents isDesktop={isDesktop} region={region} insightData={insightData} />
        </SlideFade>
      </Flex>
    </Box>
  );
}