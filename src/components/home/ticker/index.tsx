import { Box, Container } from '@chakra-ui/react';

import TickerCard from './TickerCard';

import tickerImage01 from '@/assets/images/ticker/doosan.jpg';
import tickerImage02 from '@/assets/images/ticker/hanwha.png';
import tickerImage03 from '@/assets/images/ticker/hansol.jpg';
import tickerImage04 from '@/assets/images/ticker/hyundai.jpg';
import tickerImage05 from '@/assets/images/ticker/gs_eps.jpg';
import tickerImage06 from '@/assets/images/ticker/kps.jpg';
import tickerImage07 from '@/assets/images/ticker/samsung.jpg';
import tickerImage08 from '@/assets/images/ticker/posco.jpg';

const tickerItems = [
  { id: '1', image: tickerImage01, name: 'Doosan' },
  { id: '2', image: tickerImage02, name: 'Hanwha' },
  { id: '3', image: tickerImage03, name: 'Hansol' },
  { id: '4', image: tickerImage04, name: 'Hyundai' },
  { id: '5', image: tickerImage05, name: 'GS EPS' },
  { id: '6', image: tickerImage06, name: 'KPS' },
  { id: '7', image: tickerImage07, name: 'Samsung' },
  { id: '8', image: tickerImage08, name: 'Posco' },
];

export default function Ticker() {
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <Box overflow='hidden' bg='gray.50'>
      <Box overflow='hidden' py={4}>
        <Box
          display='flex'
          gap={6}
          width='max-content'
          className='ticker-animation'
        >
          {duplicatedItems.map((item, index) => (
            <TickerCard
              key={`${item.id}-${index}`}
              image={item.image}
              name={item.name}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
