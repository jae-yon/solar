import logo from '@/assets/vite.svg';

import { Box, Image } from '@chakra-ui/react';

import { HeaderNavigation } from './HeaderNavigation';

interface headerLayoutProps {
  isLogoLeft: boolean;
  setIsLogoLeft: (isLogoLeft: boolean) => void;
  headerMenu: { name: string, path: string, childMenu: { name: string, path: string }[] }[];
}

export function HeaderLogoTop(props: headerLayoutProps) {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box display='flex' alignItems='center' justifyContent='center' cursor='pointer' onClick={() => props.setIsLogoLeft(!props.isLogoLeft)}>
        <Image src={logo} alt='logo' width={20} objectFit='cover' padding={6} />
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center' gap={8} paddingX={4}>
        {props.headerMenu.map((menu) => (
          <HeaderNavigation key={menu.name} name={menu.name} path={menu.path} childMenu={menu.childMenu} />
        ))}
      </Box>
    </Box>
  );
}

export function HeaderLogoLeft(props: headerLayoutProps) {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' paddingX={12}>
      <Box display='flex' alignItems='center' justifyContent='start' cursor='pointer' onClick={() => props.setIsLogoLeft(!props.isLogoLeft)}>
        <Image src={logo} alt='logo' width={20} objectFit='cover' padding={6} />
      </Box>
      <Box display='flex' alignItems='center' justifyContent='end' gap={8} padding={6}>
        {props.headerMenu.map((menu) => (
          <HeaderNavigation key={menu.name} name={menu.name} path={menu.path} childMenu={menu.childMenu} />
        ))}
      </Box>
    </Box>
  );
}