import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = {
  ar: [
    "https://west-story.com/cdn/shop/files/1-f.jpg?v=1779266356&width=1920",
    "https://west-story.com/cdn/shop/files/1_3.png?v=1778403990&width=1920",
    "https://west-story.com/cdn/shop/files/3_A_1.png?v=1777970498&width=1920",
    "https://west-story.com/cdn/shop/files/2_f55d1973-a4fc-494a-8ebe-53380470ea54.png?v=1777970345&width=1920",
  ],
  en: [
    "https://west-story.com/cdn/shop/files/1-f.jpg?v=1779266356&width=1920",
    "https://west-story.com/cdn/shop/files/1_3.png?v=1778403990&width=1920",
    "https://west-story.com/cdn/shop/files/3_A_1.png?v=1777970498&width=1920",
    "https://west-story.com/cdn/shop/files/2_f55d1973-a4fc-494a-8ebe-53380470ea54.png?v=1777970345&width=1920",
  ],
};

export default function Hero() {
  const { language, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = heroImages[language] || heroImages.en;

  useEffect(() => {
    setCurrentSlide(0);
  }, [language]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {images.map((image, index) => (
        <div
          key={`${language}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={prevSlide}
        className={`absolute top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 text-[#191D2B] shadow-lg hover:bg-[#C0265C] hover:text-white transition ${
          isRTL ? "right-5 md:right-10" : "left-5 md:left-10"
        }`}
      >
        <ChevronLeft size={26} className="mx-auto" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className={`absolute top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 text-[#191D2B] shadow-lg hover:bg-[#C0265C] hover:text-white transition ${
          isRTL ? "left-5 md:left-10" : "right-5 md:right-10"
        }`}
      >
        <ChevronRight size={26} className="mx-auto" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-9 bg-[#C0265C]"
                : "w-3 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
