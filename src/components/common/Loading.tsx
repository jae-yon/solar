import { Box, Spinner, Text } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh' gap={2}>
      <Spinner size='xl' color='blue.700' css={{ "--spinner-track-color": "colors.gray.200" }} animationDuration={'0.7s'} borderWidth={3} />
      <Text fontSize='sm' color='blue.700' fontWeight='medium' animation={'pulse'}>loading</Text>
    </Box>
  );
}