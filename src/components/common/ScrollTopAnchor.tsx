import { Box } from '@chakra-ui/react';
import { LucideArrowUp } from 'lucide-react';

export default function ScrollTopAnchor() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      position='fixed'
      bottom='20px'
      right='20px'
      w='40px'
      h='40px'
      shadow='md'
      bg='blue.700'
      borderRadius='full'
      display='flex'
      alignItems='center'
      justifyContent='center'
      cursor='pointer'
      _hover={{
        bg: 'blue.solid',
      }}
      onClick={handleScrollToTop}
      zIndex={1000}
    >
      <LucideArrowUp size={20} color='white' />
    </Box>
  );
}