import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { HeaderLogoLeft, HeaderLogoTop } from './HeaderLayout';

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
  const [isLogoLeft, setIsLogoLeft] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsLogoLeft(false);
    } else {
      setIsLogoLeft(true);
    }
  }, [window.innerWidth]);

  return (
    <Box width='100%' backgroundColor='transparent'>
      {isLogoLeft ? (
        <HeaderLogoLeft isLogoLeft={isLogoLeft} setIsLogoLeft={setIsLogoLeft} headerMenu={headerMenu} />
      ) : (
        <HeaderLogoTop isLogoLeft={isLogoLeft} setIsLogoLeft={setIsLogoLeft} headerMenu={headerMenu} />
      )}
    </Box>
  );
}