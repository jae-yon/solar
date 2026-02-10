import Header from '@/components/common/header';
import Hero from '@/components/home/hero';
import Ticker from '@/components/home/ticker';
import Insight from '@/components/home/insight';

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Insight />
    </>
  );
}