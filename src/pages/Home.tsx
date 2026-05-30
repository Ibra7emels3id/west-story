import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import Scents from '@/components/Scents';
import Locations from '@/components/Locations';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import BestSellers from '@/components/BestSellers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Products from '@/components/Products';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Products />
        <Scents />
        <Locations />
        <BeforeAfter />
        <Testimonials />
        {/* <BestSellers /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
