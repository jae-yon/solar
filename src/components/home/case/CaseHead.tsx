import { Flex, Heading, Text } from '@chakra-ui/react';

export default function CaseHead() {
  return (
    <Flex flexDirection='column' gap={4} mb={8}>
      <Heading
        fontSize={{ base: "36px", md: "52px" }}
        fontWeight="600"
        lineHeight="1.3"
        letterSpacing="-0.02em"
        textAlign="start"
      >
        현장을 먼저 이해하고 <br />그 위에 기술을 더합니다
      </Heading>
      <Text
        fontSize={{ base: "18px", md: "16px" }}
        color="gray.500"
        lineHeight="1.7"
        maxW="md"
      >
        설치를 넘어서 운영까지 현장에서 검증된 태양광 솔루션을 제공합니다 <br />지붕, 육상, 수상 태양광 등 시공 사례를 통해
        여러분의 현장에 맞는 최적의 조건을 확인해보세요
      </Text>
    </Flex>
  );
}