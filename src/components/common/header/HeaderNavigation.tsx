import { useState } from 'react';

import { Box, Link, Text } from '@chakra-ui/react';

interface headerNavigationProps {
  name: string;
  path: string;
  childMenu: { name: string, path: string }[];
}

export function HeaderNavigation(props: headerNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      position='relative'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={props.path}>
        <Text
          paddingX={6}
          paddingY={2}
          fontSize='lg'
          color='gray.700'
          fontWeight='medium'
          transition='all 0.3s ease'
          borderBottom='3px solid transparent'
          _hover={{ borderBottomColor: 'red.muted', color: 'red.border' }}
        >
          {props.name}
        </Text>
      </Link>
      {props.childMenu.length > 0 && (
        <Box
          position='absolute'
          top='100%'
          left='50%'
          width='100%'
          backgroundColor='white'
          transform='translateX(-50%)'
          marginTop={0}
          paddingY={2}
          minWidth='fit-content'
          display='flex'
          flexDirection='column'
          opacity={isOpen ? 1 : 0}
          visibility={isOpen ? 'visible' : 'hidden'}
          transition='opacity 0.2s, visibility 0.2s'
          zIndex={10}
          pointerEvents={isOpen ? 'auto' : 'none'}
        >
          {props.childMenu.map((child) => (
            <Link 
              key={child.name} 
              href={child.path} 
              gap={2} 
              padding={4}
              fontSize='sm'
              display='flex' 
              color='gray.700'
              fontWeight='medium'
              alignItems='center' 
              justifyContent='center' 
              transition='all 0.3s ease'
              _hover={{ color: 'red.border', fontWeight: 'bold' }}
            >
              {child.name}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}