import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bestSellers = [
  {
    ar: { name: 'زيت عطري | هارموني', price: '33 ر.س', originalPrice: '39 ر.س' },
    en: { name: 'Essential Oil | Harmony', price: '33 SAR', originalPrice: '39 SAR' },
    image: 'https://west-story.com/cdn/shop/files/DESERT_NIGHT_-_30.png?v=1749868248&width=533',
    sale: true,
  },
  {
    ar: { name: 'العطر | باتشولي انتنس', price: '33 ر.س', originalPrice: '39 ر.س' },
    en: { name: 'Perfume | Patchouli Intense', price: '33 SAR', originalPrice: '39 SAR' },
    image: 'https://west-story.com/cdn/shop/files/MY_STORY_-_30.png?v=1749868250&width=533',
    sale: true,
  },
  {
    ar: { name: 'زيت عطري | ديسرت نايت', price: '33 ر.س', originalPrice: '39 ر.س' },
    en: { name: 'Essential Oil | Desert Night', price: '33 SAR', originalPrice: '39 SAR' },
    image: 'https://west-story.com/cdn/shop/files/Lemon_Grass_-_30.png?v=1749868252&width=533',
    sale: true,
  },
  {
    ar: { name: 'زيت عطري | كلين', price: '33 ر.س', originalPrice: '39 ر.س' },
    en: { name: 'Essential Oil | Clean', price: '33 SAR', originalPrice: '39 SAR' },
    image: 'https://west-story.com/cdn/shop/files/Riyadh_Season_-_30.png?v=1749861492&width=533',
    sale: true,
  },
  {
    ar: { name: 'زيت عطري | رياض سيزون', price: '33 ر.س', originalPrice: '39 ر.س' },
    en: { name: 'Essential Oil | Riyadh Season', price: '33 SAR', originalPrice: '39 SAR' },
    image: 'https://west-story.com/cdn/shop/files/Moments_-_300_b0a4d1e1-5706-4d4e-aece-c137204dda0b.png?v=1749867578&width=533',
    sale: true,
  },
  {
    ar: { name: 'زيت عطري | فوريفر', price: '33 ر.س', originalPrice: '39 ر.س' },
    en: { name: 'Essential Oil | Forever', price: '33 SAR', originalPrice: '39 SAR' },
    image: 'https://west-story.com/cdn/shop/files/Riyadh_Season_-_300_ef90b5f4-efa9-4f44-9f62-1b8ed0017272.png?v=1749867579&width=533',
    sale: true,
  },
];

export default function BestSellers() {
  const { language, isRTL } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('best-sellers-container');
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'right' 
        ? scrollPosition + scrollAmount 
        : scrollPosition - scrollAmount;
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  const content = {
    ar: {
      title: 'الزيوت العطرية الاكثر مبيعاً',
      viewAll: 'عرض الكل',
    },
    en: {
      title: 'Best Selling Essential Oils',
      viewAll: 'View All',
    },
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <section id="best-sellers" className="py-20 md:py-32 bg-muted">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {currentContent.title}
          </h2>
          <Button
            variant="outline"
            className="hidden md:flex bg-primary text-primary-foreground hover:opacity-90"
          >
            {currentContent.viewAll}
          </Button>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div
            id="best-sellers-container"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {bestSellers.map((product, index) => {
              const productContent = product[language as keyof typeof product] as { name: string; price: string; originalPrice: string };
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={productContent.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {product.sale && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {language === 'ar' ? 'خصم' : 'SALE'}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className={`font-bold text-foreground mb-2 line-clamp-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {productContent.name}
                    </h3>

                    {/* Price */}
                    {typeof productContent === 'object' && productContent !== null && 'price' in productContent && (
                      <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-primary font-bold">{(productContent as any).price}</span>
                        <span className="text-muted-foreground line-through text-sm">{(productContent as any).originalPrice}</span>
                      </div>
                    )}

                    {/* Add to Cart Button */}
                    <Button
                      size="sm"
                      className="w-full bg-primary text-primary-foreground hover:opacity-90"
                    >
                      {language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'} z-10 p-3 bg-primary text-white rounded-full hover:opacity-90 transition-all duration-200 shadow-lg`}
            aria-label={language === 'ar' ? 'السابق' : 'Previous'}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-0 -translate-x-16' : 'right-0 translate-x-16'} z-10 p-3 bg-primary text-white rounded-full hover:opacity-90 transition-all duration-200 shadow-lg`}
            aria-label={language === 'ar' ? 'التالي' : 'Next'}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile View All Button */}
        <div className="flex md:hidden justify-center mt-8">
          <Button
            variant="outline"
            className="bg-primary text-primary-foreground hover:opacity-90"
          >
            {currentContent.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
