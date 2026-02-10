import Hero from '@/components/home/hero';
import Ticker from '@/components/home/ticker';
import Header from '@/components/common/header';
import Insight from '@/components/home/insight';
import Footer from '@/components/common/footer';

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Insight />
      <Footer />
    </>
  );
}