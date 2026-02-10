import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { useResponsive } from '@/hooks/useResponsive';
import logo from '@/assets/vite.svg';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const headerMenu = [
  {
    name: '회사소개',
    path: '/about',
    childMenu: [
      { name: '인사말', path: '/about/introduction' },
      { name: '연혁', path: '/about/history' },
      { name: '비전 및 가치', path: '/about/vision' },
      { name: '조직도', path: '/about/organization' },
      { name: '오시는 길', path: '/about/location' },
    ],
  },
  {
    name: '사업소개',
    path: '/business',
    childMenu: [
      { name: '사업 개요', path: '/business/introduction' },
      { name: '주요 사업', path: '/business/areas' },
      { name: '파트너십', path: '/business/partnership' },
    ],
  },
  {
    name: '사업실적',
    path: '/performance',
    childMenu: [
      { name: '실적 현황', path: '/performance/introduction' },
      { name: '주요 프로젝트', path: '/performance/projects' },
      { name: '수상 내역', path: '/performance/awards' },
      { name: '인증 및 특허', path: '/performance/certifications' },
    ],
  },
  {
    name: '기술과 서비스',
    path: '/technology',
    childMenu: [
      { name: '기술 경쟁력', path: '/technology/introduction' },
      { name: '연구소 소개', path: '/technology/lab' },
      { name: '핵심 솔루션', path: '/technology/solutions' },
      { name: '플랫폼 서비스', path: '/technology/platform' },
      { name: '기술 지원 안내', path: '/technology/support' },
    ],
  },
  {
    name: '홍보센터',
    path: '/pr',
    childMenu: [
      { name: '보도자료', path: '/pr/news' },
      { name: '언론보도', path: '/pr/press' },
      { name: '홍보 영상', path: '/pr/video' },
      { name: '사회공헌', path: '/pr/csr' },
    ],
  },
  {
    name: '고객센터',
    path: '/contact',
    childMenu: [
      { name: '공지사항', path: '/contact/notice' },
      { name: 'F.A.Q', path: '/contact/faq' },
      { name: '1:1 문의', path: '/contact/inquiry' },
      { name: '자료실', path: '/contact/download' },
    ],
  },
]

export default function Header() {
  const { isDesktop } = useResponsive();
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <Box 
      width='100%' 
      position='fixed' 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000}
      transition='all 0.3s ease'
      boxShadow={isScrolled ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none'}
      borderBottom={isScrolled ? '1px solid #e0e0e0' : 'none'}
      backgroundColor={isScrolled ? 'white' : 'transparent'} 
    >
      {isDesktop && <HeaderDesktop logo={logo} isScrolled={isScrolled} headerMenu={headerMenu} />}
      {!isDesktop && <HeaderMobile logo={logo} isScrolled={isScrolled} headerMenu={headerMenu} />}
    </Box>
  );
}