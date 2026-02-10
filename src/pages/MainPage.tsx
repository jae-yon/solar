import Hero from '@/components/home/hero';
import Case from '@/components/home/case';
import Ticker from '@/components/home/ticker';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Insight from '@/components/home/insight';
import Business from '@/components/home/business';
import ScrollTopAnchor from '@/components/common/ScrollTopAnchor';

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Insight />
      <Business />
      <Case />
      <ScrollTopAnchor />
      <Footer />
    </>
  );
}