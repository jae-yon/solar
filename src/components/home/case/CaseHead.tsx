import { Flex, Heading, Text } from '@chakra-ui/react';

interface CaseHeadProps {
  isDesktop: boolean;
}

export default function CaseHead(props: CaseHeadProps) {
  return (
    <Flex
      flexDirection="column"
      gap={{ base: 3, md: 4 }}
      mb={{ base: 0, md: 8 }}
      alignItems={props.isDesktop ? "stretch" : "center"}
      width="100%"
    >
      <Heading
        as="h2"
        fontSize={{ base: "36px", md: "40px", lg: "40px", xl: "56px" }}
        fontWeight="600"
        lineHeight="1.35"
        letterSpacing="-0.02em"
        textAlign={props.isDesktop ? "start" : "center"}
        maxW="100%"
        px={{ base: 1, md: 0 }}
        wordBreak="keep-all"
        overflowWrap="break-word"
      >
        현장을 먼저 이해하고 <br />그 위에 기술을 더합니다
      </Heading>
      <Text
        fontSize={{ base: "16px", md: "16px", lg: "18px" }}
        color="gray.500"
        lineHeight="1.7"
        maxW={{ base: "100%", md: "md", lg: "lg" }}
        textAlign={props.isDesktop ? "start" : "center"}
        px={{ base: 1, md: 0 }}
      >
        설치를 넘어서 운영까지 현장에서 검증된 태양광 솔루션을 제공합니다 <br />지붕, 육상, 수상 태양광 등 시공 사례를 통해
        여러분의 현장에 맞는 최적의 조건을 확인해보세요
      </Text>
    </Flex>
  );
}