import { Carousel, HStack, IconButton } from '@chakra-ui/react';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';

import CaseCard from './CaseCard';

interface CaseContentsProps {
  items: any[];
}

export default function CaseContents(props: CaseContentsProps) {
  return (
    <Carousel.Root
      slideCount={props.items.length}
      slidesPerPage={1}
      allowMouseDrag
      spacing="16px"
      autoplay={{ delay: 6000 }}
    >
      {/* 캐러셀 헤더 */}
      <HStack justify="end" px={{ base: 0, md: 2 }}>
        <HStack gap={1}>
          <Carousel.PrevTrigger asChild>
            <IconButton
              size="xs"
              variant="outline"
              color="gray.600"
              borderColor="gray.300"
              bg="white"
              borderRadius="full"
              _hover={{ bg: 'gray.800', color: 'white', borderColor: 'gray.800' }}
            >
              <LucideChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <IconButton
              size="xs"
              variant="outline"
              color="gray.600"
              borderColor="gray.300"
              bg="white"
              borderRadius="full"
              _hover={{ bg: 'gray.800', color: 'white', borderColor: 'gray.800' }}
            >
              <LucideChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </HStack>
      </HStack>
      {/* 캐러셀 아이템 그룹 - 헤더 아래 별도 블록 */}
      <Carousel.ItemGroup gap={{ base: 2, md: 4 }} mt={{ base: 2, md: 0 }}>
        {props.items.map((item, index) => (
          <Carousel.Item key={index} index={index}>
            <CaseCard item={item} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}