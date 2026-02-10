import { Box, Flex, Text } from '@chakra-ui/react';

export interface CaseCardItem {
  title: string;
  desc: string;
  img: string;
}

interface CaseCardProps {
  item: CaseCardItem;
}

export default function CaseCard(props: CaseCardProps) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      h="300px"
      borderRadius="xl"
      role="group"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset="0"
        bgImage={`url(${props.item.img})`}
        bgSize="cover"
        bgPos="center"
        transition="transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
        _groupHover={{ transform: 'scale(1.04)' }}
      />

      {/* Dark overlay gradient */}
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.08) 100%)"
        transition="all 0.5s ease"
      />

      {/* Content */}
      <Flex
        position="absolute"
        inset="0"
        direction="column"
        justify="flex-end"
        p={{ base: '24px 20px', md: '32px 28px' }}
      >
        <Text
          fontSize={{ base: '22px', md: '26px' }}
          fontWeight="600"
          color="white"
          lineHeight="1.2"
          mb="10px"
          letterSpacing="-0.01em"
        >
          {props.item.title}
        </Text>

        <Text
          fontSize={{ base: '12px', md: '13px' }}
          color="rgba(255,255,255,0.85)"
          lineHeight="1.6"
        >
          {props.item.desc}
        </Text>
      </Flex>
    </Box>
  );
}
