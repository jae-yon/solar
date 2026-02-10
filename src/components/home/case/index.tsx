import { Box, Flex } from '@chakra-ui/react';

import { useResponsive } from '@/hooks/useResponsive';

import CaseHead from './CaseHead';
import CaseContents from './CaseContents';
import SlideFade from '@/components/common/SlideFade';

const caseItems = [
  { title: "전라남도 해남", desc: "26년 2월 준공 예정", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200" },
  { title: "충청북도 진천군", desc: "26년 3월 착공 예정", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200" },
  { title: "강원도 횡성군", desc: "26년 3월 착공 예정", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" },
  { title: "충청북도 증평군", desc: "시공 완료", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200" },
];

export default function Case() {
  const { isDesktop } = useResponsive();

  return (
    <Box 
      width="100%"
      maxW="1280px"
      height={isDesktop ? "720px" : "auto"}
      mx="auto"
      py={{ base: "48px", md: "80px" }}
      px={{ base: 4, md: 8 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="100%"
        flexDirection={isDesktop ? 'row' : 'column'}
        gap={{ base: 6, md: 8 }}
        alignItems={isDesktop ? 'center' : 'stretch'}
        justifyContent="center"
      >
        {/* 모바일: CaseHead 위, CaseContents 아래 / 데스크톱: Contents 왼쪽, Head 오른쪽 */}
        {!isDesktop ? (
          <>
            <Box width="100%">
              <SlideFade>
                <CaseHead isDesktop={isDesktop} />
              </SlideFade>
            </Box>
            <Box width="100%" flex={1}>
              <SlideFade>
                <CaseContents items={caseItems} />
              </SlideFade>
            </Box>
          </>
        ) : (
          <>
            <Box flex={1} minW={0} maxW="50%" px={{ md: 4 }}>
              <SlideFade direction="left">
                <CaseContents items={caseItems} />
              </SlideFade>
            </Box>
            <Box flexShrink={0} width={{ md: '50%' }} maxW="50%" px={{ md: 4 }}>
              <SlideFade direction="right">
                <CaseHead isDesktop={isDesktop} />
              </SlideFade>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
}