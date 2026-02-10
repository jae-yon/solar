import { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import SlideFade from '@/components/common/SlideFade';

import BusinessHead from './BusinessHead';
import BusinessContents from './BusinessContents';

const businessItems = [
  {
    id: 1,
    title: "Energy Strategy",
    subtitle: "에너지 전략 컨설팅",
    description:
      "글로벌 에너지 트렌드와 정책 분석을 바탕으로 최적의 재생 에너지 포트폴리오를 설계합니다. RE100 달성 및 ESG 경영을 위한 장기적 로드맵을 제시합니다.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    accent: "#27AE60", // 유지보수의 안정적인 초록색
    href: "#strategy",
  },
  {
    id: 2,
    title: "Solar Engineering",
    subtitle: "태양광 발전 엔지니어링",
    description:
      "고효율 모듈 선정부터 최적의 이격거리 설계까지, 발전 효율을 극대화하는 정밀 시공을 제공합니다. 지형 및 기후 데이터를 분석하여 수익성을 최적화합니다.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    accent: "#F1C40F", // 태양광의 밝은 노란색
    href: "#solar",
  },
  {
    id: 3,
    title: "O&M Services",
    subtitle: "통합 유지보수 관리",
    description:
      "실시간 모니터링 시스템을 통해 발전소의 상태를 24시간 관리합니다. 예방적 점검과 신속한 장애 대응으로 다운타임을 최소화하고 발전량 손실을 방지합니다.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    accent: "#2980B9", // 기술력과 전력의 신뢰감을 주는 블루
    href: "#maintenance",
  },
  {
    id: 4,
    title: "Grid Solutions",
    subtitle: "지능형 전력망 솔루션",
    description:
      "ESS(에너지 저장 장치) 연계 및 VPP(가상 발전소) 기술을 통해 불안정한 재생 에너지 공급을 안정화합니다. 전력 거래 최적화로 부가 가치를 창출합니다.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    accent: "#E67E22", // 태양의 따뜻한 오렌지
    href: "#grid",
  },
  {
    id: 5,
    title: "Green Tech R&D",
    subtitle: "그린 테크 연구소",
    description:
      "차세대 고효율 태양광 셀과 수소 에너지 융합 기술을 연구합니다. 지속 가능한 미래를 위한 독자적인 친환경 기술 스택과 인프라를 구축합니다.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    accent: "#16A085", // 연구/기술 느낌의 청록색
    href: "#research",
  },
  {
    id: 6,
    title: "Global Net-Zero",
    subtitle: "글로벌 탄소중립 확장",
    description:
      "해외 탄소 배출권 거래 및 글로벌 신재생 에너지 프로젝트 파이낸싱을 지원합니다. 전 세계 네트워크를 활용하여 국경 없는 에너지 전환을 선도합니다.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    accent: "#8E44AD", // 글로벌 미래 가치의 보라색
    href: "#netzero",
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
        <SlideFade once delay={1}>
          <BusinessHead />
        </SlideFade>
      </Box>

      <Box>
        <SlideFade direction="left" once delay={2}>
          <BusinessContents 
            items={row1} 
            expandedRow={expandedRow1} 
            onExpand={handleRow1Click} 
            expandFrom="left" 
          />
        </SlideFade>

        <SlideFade direction="right" once delay={4}>
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