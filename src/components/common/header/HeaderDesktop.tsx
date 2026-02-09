import { useState } from 'react';

import logo from '@/assets/vite.svg';

import { Box, Collapsible, Image, Link, Text } from '@chakra-ui/react';

interface headerLayoutProps {
  headerMenu: { name: string, path: string, childMenu: { name: string, path: string }[] }[];
}

export function HeaderDesktop(props: headerLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      {/* logo */}
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Image src={logo} alt='logo' width={16} objectFit='cover' padding={4} />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        position='relative'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* menu */}
        <Box display='flex' alignItems='start' justifyContent='center' gap={8} paddingX={4} paddingY={4}>
          {/* default menu */}
          {props.headerMenu.map((menu) => (
            <Box key={menu.name} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
              <Link href={menu.path}>
                <Text
                  paddingX={6}
                  paddingY={2}
                  fontSize='lg'
                  color='gray.700'
                  fontWeight='medium'
                  transition='all 0.3s ease'
                  borderBottom='3px solid transparent'
                  _hover={{ borderBottomColor: 'red.400', color: 'red.border', fontWeight: 'bold' }}
                >
                  {menu.name}
                </Text>
              </Link>
              {/* sub menu */}
              <Collapsible.Root open={isOpen}>
                <Collapsible.Content>
                  <Box
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    justifyContent='center'
                    gap={2}
                    paddingY={2}
                  >
                    {menu.childMenu.map((child) => (
                      <Link
                        key={child.name}
                        href={child.path}
                        paddingX={4}
                        paddingY={2}
                        fontSize='sm'
                        color='gray.700'
                        fontWeight='medium'
                        borderRadius='xl'
                        transition='all 0.3s ease'
                        _hover={{ color: 'red.solid', fontWeight: 'bold' }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </Box>
                </Collapsible.Content>
              </Collapsible.Root>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}