import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    ar: {
      text: "تعاملنا مع ويست ستوري لتجربة تعطير في المساحة، وكانت النتيجة ممتازة من ناحية ثبات الرائحة وانتشارها وجودة الخدمة.",
      name: "نورة القحطاني",
      city: "جدة",
    },
    en: {
      text: "West Story helped us create a refined scent experience with excellent diffusion, lasting quality, and professional service.",
      name: "Sophia M",
      city: "Dubai",
    },
  },
  {
    ar: {
      text: "أجهزة التعطير بجودة عالية، والتوزيع في المكان كان متوازن جدًا. تجربة مناسبة لأي منشأة تهتم بانطباع العميل.",
      name: "عبدالرحمن العتيبي",
      city: "الرياض",
    },
    en: {
      text: "The diffusers are high quality, and the scent distribution was beautifully balanced across the space.",
      name: "Emily R",
      city: "London",
    },
  },
  {
    ar: {
      text: "اختيارات العطور راقية ومناسبة للمكاتب والمعارض. الخدمة كانت واضحة وسريعة والنتيجة أعطت المكان طابع أفخم.",
      name: "فهد المطيري",
      city: "المدينة المنورة",
    },
    en: {
      text: "The scent selections were elegant and suitable for offices and showrooms. The final result elevated the whole atmosphere.",
      name: "David L",
      city: "New York",
    },
  },
  {
    ar: {
      text: "ويست ستوري غيرت تجربة المكان بالكامل. الرائحة ثابتة، هادئة، وتعطي انطباع احترافي من أول دخول.",
      name: "سارة الدوسري",
      city: "مكة المكرمة",
    },
    en: {
      text: "West Story transformed the space experience. The scent feels calm, premium, and professional from the first impression.",
      name: "Sarah D",
      city: "Riyadh",
    },
  },
];

export default function Testimonials() {
  const { language, isRTL } = useLanguage();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.changeLanguageDirection(isRTL ? "rtl" : "ltr");
    swiperRef.current.update();
    swiperRef.current.slideTo(0, 0);
  }, [language, isRTL]);

  return (
    <section
      id="testimonials"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-24 md:py-36 bg-[#FBF7EF] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0265C]/25 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className={isRTL ? "text-right" : "text-left"}>
            <span className="inline-block mb-5 text-xs tracking-[0.45em] uppercase text-[#C0265C] font-medium">
              {language === "ar" ? "تجارب العملاء" : "Client Experiences"}
            </span>

            <h2 className="text-4xl md:text-6xl font-light text-[#191D2B] leading-[1.15]">
              {language === "ar"
                ? "انطباعات حقيقية من منشآت وثقت بنا"
                : "Real Impressions From Businesses That Trusted Us"}
            </h2>
          </div>

          <p
            className={`text-[#191D2B]/60 leading-8 font-light max-w-xl ${
              isRTL ? "lg:mr-auto text-right" : "lg:ml-auto text-left"
            }`}
          >
            {language === "ar"
              ? "نصمم تجارب عطرية تمنح المساحات التجارية والفندقية حضورًا أرقى وانطباعًا يبقى في ذاكرة العميل."
              : "We design scent experiences that give commercial and hospitality spaces a refined presence and a lasting impression."}
          </p>
        </div>

        <div className="relative px-1 md:px-14">
          <button
            type="button"
            className="testimonials-prev hidden md:flex absolute left-0 top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition-all duration-300"
          >
            {isRTL ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
          </button>

          <button
            type="button"
            className="testimonials-next hidden md:flex absolute right-0 top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition-all duration-300"
          >
            {isRTL ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
          </button>

          <Swiper
            key={`${language}-${isRTL ? "rtl" : "ltr"}`}
            dir={isRTL ? "rtl" : "ltr"}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, Pagination]}
            loop={testimonials.length > 2}
            spaceBetween={24}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
            className="!pb-14"
          >
            {testimonials.map((testimonial, index) => {
              const content =
                language === "ar" ? testimonial.ar : testimonial.en;

              return (
                <SwiperSlide key={index} className="h-auto">
                  <article className="group relative h-full min-h-[300px] rounded-[32px] bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_18px_45px_rgba(25,29,43,0.08)] hover:shadow-[0_28px_75px_rgba(25,29,43,0.14)] hover:-translate-y-1 transition-all duration-500 p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C0265C]/8 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div>
                      <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#191D2B]/10 text-[#C0265C]">
                        <Quote size={24} strokeWidth={1.4} />
                      </div>

                      <p
                        className={`text-[#191D2B]/70 leading-8 text-base md:text-lg font-light ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {content.text}
                      </p>
                    </div>

                    <div
                      className={`mt-8 pt-6 border-t border-black/5 flex items-center gap-4 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#FBF7EF] border border-[#191D2B]/10 flex items-center justify-center text-[#C0265C] font-light text-xl">
                        {content.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-normal text-[#191D2B] text-lg">
                          {content.name}
                        </p>

                        <p className="text-sm text-[#191D2B]/50 font-light mt-1">
                          {content.city}
                        </p>
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
