import { Box, Heading, Text } from '@chakra-ui/react'

export default function BusinessHead() {
  return (
    <Box>
      <Heading
        fontSize={{ base: "36px", md: "52px" }}
        fontWeight="600"
        color="white"
        lineHeight="1.1"
        letterSpacing="-0.02em"
        mb="20px"
      >
        검증된 태양광 기술, 안정적인 에너지 솔루션
      </Heading>
      <Text 
        fontSize={{ base: "14px", md: "18px" }}
        color="rgba(255,255,255,0.5)"
        lineHeight="1.7"
        mb="20px"
      >
        지속 가능한 에너지로 내일을 설계합니다.
      </Text>
    </Box>
  );
}