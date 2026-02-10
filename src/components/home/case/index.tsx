import { Box, Flex } from '@chakra-ui/react';

import { useResponsive } from '@/hooks/useResponsive';

import CaseHead from './CaseHead';
import CaseContents from './CaseContents';

const caseItems = [
  { title: "전라남도 해남", desc: "26년 2월 준공 예정", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200" },
  { title: "충청북도 진천군", desc: "26년 3월 착공 예정", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200" },
  { title: "강원도 횡성군", desc: "26년 3월 착공 예정", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" },
  { title: "충청북도 증평군", desc: "시공 완료", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200" },
];

export default function Case() {
  const { isDesktop } = useResponsive();

  return (
    <Flex 
      flexDirection={isDesktop ? 'row' : 'column'} 
      gap={4} 
      py={16} 
      px={8} 
      width='100%'
      alignItems='center'
    >
      <Box 
        flex={1}
        w='1/2'
        px={8}
      >
        <CaseContents items={caseItems} />
      </Box>
      <Box w='1/2'>
        <CaseHead />
      </Box>
    </Flex>
  );
}