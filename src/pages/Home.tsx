import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import Scents from '@/components/Scents';
import Locations from '@/components/Locations';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import BestSellers from '@/components/BestSellers';
import Footer from '@/components/Footer';
import Products from '@/components/Products';
import Clients from '../components/Clients';
import Solutions from '../components/Solutions';
import Sectors from '../components/Sectors';
import DevicesScents from '../components/DevicesScents';
import SignatureScent from '../components/SignatureScent';
import HowWeWork from '../components/HowWeWork';
import WhyWestStory from '../components/WhyWestStory';
import OurWork from '../components/OurWork';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Solutions />
        <Sectors />
        <DevicesScents />
        <SignatureScent />
        <HowWeWork />
        <WhyWestStory />
        <OurWork />
        <FAQ />

        {/* <Features />
        <Categories />
        <Products />
        <Scents />
        <Locations />
        <BeforeAfter />
        <Testimonials /> */}
        {/* <BestSellers /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
