import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import SlideFade from '@/components/common/SlideFade';

import BusinessHead from './BusinessHead';
import BusinessContents from './BusinessContents';

const businessItems = [
  {
    id: 1,
    title: "Brand Strategy",
    subtitle: "브랜드 전략",
    description:
      "데이터 기반의 브랜드 포지셔닝과 아이덴티티 설계로 시장 내 독보적인 위치를 구축합니다. 고객 인사이트를 기반으로 장기적인 브랜드 가치를 창출합니다.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    accent: "#C9A96E",
    href: "#brand",
  },
  {
    id: 2,
    title: "Digital Marketing",
    subtitle: "디지털 마케팅",
    description:
      "SEO, SEM, SNS 통합 전략을 통해 디지털 채널에서의 브랜드 가시성과 전환율을 극대화합니다. 성과 기반 캠페인으로 ROI를 최적화합니다.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    accent: "#7B9E87",
    href: "#digital",
  },
  {
    id: 3,
    title: "Creative Design",
    subtitle: "크리에이티브 디자인",
    description:
      "시각적 스토리텔링으로 브랜드의 본질을 표현합니다. UI/UX부터 인쇄물까지 일관된 브랜드 경험을 설계하고 제작합니다.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    accent: "#9B8EC4",
    href: "#design",
  },
  {
    id: 4,
    title: "Content Studio",
    subtitle: "콘텐츠 스튜디오",
    description:
      "영상, 사진, 카피라이팅을 아우르는 통합 콘텐츠 제작 서비스입니다. 브랜드 메시지를 다양한 형식으로 생동감 있게 표현합니다.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    accent: "#E07A5F",
    href: "#content",
  },
  {
    id: 5,
    title: "Tech Solutions",
    subtitle: "테크 솔루션",
    description:
      "웹사이트, 앱, 자동화 시스템 구축으로 비즈니스 효율성을 높입니다. 최신 기술 스택으로 확장 가능한 디지털 인프라를 설계합니다.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    accent: "#4ECDC4",
    href: "#tech",
  },
  {
    id: 6,
    title: "Global Expansion",
    subtitle: "글로벌 확장",
    description:
      "해외 시장 진출 전략 수립부터 현지화까지 전 과정을 지원합니다. 글로벌 네트워크를 활용하여 새로운 시장에서의 성공을 가속화합니다.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    accent: "#F7B731",
    href: "#global",
  },
];

export default function Business() {
  const [expandedRow1, setExpandedRow1] = useState<number | null>(1);
  const [expandedRow2, setExpandedRow2] = useState<number | null>(6);

  const row1 = businessItems.slice(0, 3);
  const row2 = businessItems.slice(3, 6);
  
  // 초기화 설정
  useEffect(() => {
    if (expandedRow1 === null) {
      setExpandedRow1(1);
    }
    if (expandedRow2 === null) {
      setExpandedRow2(6);
    }
  }, [expandedRow1, expandedRow2, row1, row2]);

  // 행 클릭 핸들러
  const handleRow1Click = (id: number) => {
    setExpandedRow1((prev) => (prev === id ? null : id));
  };

  // 행 클릭 핸들러
  const handleRow2Click = (id: number) => {
    setExpandedRow2((prev) => (prev === id ? null : id));
  };
  
  return (
    <Box
      minH="100vh"
      bg="#0c0e14"
      py={{ base: "48px", md: "80px" }}
      px={{ base: "20px", md: "60px", lg: "80px" }}
    >
      <Box mb={{ base: "40px", md: "64px" }} maxW="600px">
        <SlideFade>
          <BusinessHead />
        </SlideFade>
      </Box>

      <Box>
        <SlideFade direction="left">
          <BusinessContents 
            items={row1} 
            expandedRow={expandedRow1} 
            onExpand={handleRow1Click} 
            expandFrom="left" 
          />
        </SlideFade>

        <SlideFade direction="right">
        <BusinessContents 
            items={row2} 
            expandedRow={expandedRow2} 
            onExpand={handleRow2Click} 
            expandFrom="right" 
          />
        </SlideFade>
      </Box>
    </Box>
  );
}