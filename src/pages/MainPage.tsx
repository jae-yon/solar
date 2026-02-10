import Hero from '@/components/home/hero';
import Ticker from '@/components/home/ticker';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Insight from '@/components/home/insight';
import Business from '@/components/home/business';

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Business />
      <Insight />
      <Footer />
    </>
  );
}