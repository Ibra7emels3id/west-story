import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    ar: {
      text: "أنا من زمان أدور على زيوت عطرية قوية وتدوم، ولقيتها عند ويست ستوري. عندهم تشكيلة واسعة وكل زيت أحلى من الثاني. طلبت منهم كذا نوع وما ندمت، ريحة البيت صارت منعشة ومريحة.",
      name: "نورة القحطاني",
      city: "جدة",
    },
    en: {
      text: "West Story's fabric fresheners are a must-have. They uplift any room's mood. Superior quality, quick shipping.",
      name: "Sophia M",
      city: "Dubai",
    },
  },

  {
    ar: {
      text: "أجهزة التعطير عندهم شي خيال! الجودة فخمة والتصميم يفتح النفس، والعطور تثبت وتنتشر بشكل رائع.",
      name: "عبدالرحمن العتيبي",
      city: "الرياض",
    },
    en: {
      text: "West Story's diffusers are truly exceptional. Elegant design and serene atmosphere.",
      name: "Emily R",
      city: "London",
    },
  },

  {
    ar: {
      text: "الزيوت العطرية اللي عندهم فنانة! كل ريحة تحسسك إنك في مكان ثاني. خدمة العملاء ممتازة والتوصيل سريع.",
      name: "فهد المطيري",
      city: "المدينة المنورة",
    },
    en: {
      text: "West Story's essential oils are outstanding. Unique, long-lasting scents and fast delivery.",
      name: "David L",
      city: "New York",
    },
  },

  {
    ar: {
      text: "أجهزة التعطير من ويست ستوري غيرت مفهومي عن تعطير الأماكن. جودة عالية وسعر مناسب.",
      name: "سارة الدوسري",
      city: "مكة المكرمة",
    },
    en: {
      text: "Elegant diffusers with premium quality and amazing fragrance distribution.",
      name: "Emily R",
      city: "London",
    },
  },
];

export default function Testimonials() {
  const { language, isRTL } = useLanguage();

  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.changeLanguageDirection(
      isRTL ? "rtl" : "ltr"
    );

    swiperRef.current.update();
    swiperRef.current.slideTo(0, 0);
  }, [language, isRTL]);

  return (
    <section
      id="testimonials"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-20 md:py-32 bg-[#FBF7EF] overflow-hidden"
    >
      {/* Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C0265C]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#191D2B]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 text-sm tracking-[0.25em] uppercase text-[#C0265C] font-bold">
            {language === "ar"
              ? "آراء العملاء"
              : "Testimonials"}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#191D2B] leading-tight">
            {language === "ar"
              ? "تجارب العملاء"
              : "Customer Testimonials"}
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-8">
            {language === "ar"
              ? "آراء وتجارب عملائنا مع منتجات ويست ستوري."
              : "What our customers say about West Story."}
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-2 md:px-12">
          {/* Prev */}
          <button
            type="button"
            className="testimonials-prev hidden md:flex absolute left-0 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition"
          >
            ❮
          </button>

          {/* Next */}
          <button
            type="button"
            className="testimonials-next hidden md:flex absolute right-0 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition"
          >
            ❯
          </button>

          <Swiper
            key={`${language}-${isRTL ? "rtl" : "ltr"}`}
            dir={isRTL ? "rtl" : "ltr"}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[
              Navigation,
              Autoplay,
              Pagination,
            ]}
            loop={testimonials.length > 2}
            spaceBetween={24}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonials-next",
              prevEl: ".testimonials-prev",
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
            className="!pb-14"
          >
            {testimonials.map((testimonial, index) => {
              const content =
                language === "ar"
                  ? testimonial.ar
                  : testimonial.en;

              return (
                <SwiperSlide
                  key={index}
                  className="h-auto"
                >
                  <article className="h-full min-h-[240px] rounded-[30px] bg-white border border-black/5 shadow-[0_18px_45px_rgba(25,29,43,0.08)] hover:shadow-[0_24px_65px_rgba(25,29,43,0.14)] transition-all duration-500 p-7 md:p-8 flex flex-col justify-between">
                    {/* Quote */}
                    <div>
                      <div className="text-7xl h-5 leading-none text-[#C0265C]/15 mb-4">
                        ”
                      </div>

                      <p
                        className={`text-[#191D2B]/80 h-24 flex items-center leading-8 text-base ${
                          isRTL
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {content.text}
                      </p>
                    </div>

                    {/* User */}
                    <div
                      className={` border-t border-black/5 ${
                        isRTL
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#C0265C]/10 flex items-center justify-center text-[#C0265C] font-black text-lg">
                          {content.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-extrabold text-[#191D2B] text-lg">
                            {content.name}
                          </p>

                          <p className="text-sm text-[#C0265C] font-bold mt-1">
                            {content.city}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}