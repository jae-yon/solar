import { Box, Image } from '@chakra-ui/react';

export interface TickerCardProps {
  image: string;
  name?: string;
}

export default function TickerCard({ image, name }: TickerCardProps) {
  return (
    <Box
      flexShrink={0}
      w='200px'
      h='100px'
      overflow='hidden'
      display='flex'
      alignItems='center'
      justifyContent='center'
      borderRadius='xl'
      p={4}
    >
      <Image
        src={image}
        alt={name ?? 'Partner logo'}
        maxW='100%'
        maxH='100%'
        objectFit='cover'
      />
    </Box>
  );
}
