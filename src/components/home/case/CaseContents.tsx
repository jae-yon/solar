import { Carousel, HStack, IconButton, Span } from '@chakra-ui/react';
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
    >
      {/* 캐러셀 헤더 */}
      <HStack justify="space-between">
        <Span fontWeight="bold" fontSize="16px" letterSpacing="-0.02em" color="gray.600" ms={4}>시공 사례</Span>
        <HStack>
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
      <Carousel.ItemGroup>
        {props.items.map((item, index) => (
          <Carousel.Item key={index} index={index}>
            <CaseCard item={item} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}