import Header from '@/components/common/header';
import Hero from '@/components/home/hero';
import Ticker from '@/components/home/ticker';
import Business from '@/components/home/business';

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Business />
    </>
  );
}