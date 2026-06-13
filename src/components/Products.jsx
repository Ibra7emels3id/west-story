import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const filters = [
    { key: "all", ar: "الكل", en: "All" },
    { key: "oil", ar: "زيوت عطرية", en: "Essential Oils" },
    { key: "freshener", ar: "معطرات", en: "Fresheners" },
    { key: "devices", ar: "الأجهزة", en: "Devices" },
    { key: "sale", ar: "العروض", en: "Sale" },
];

const products = [
    {
        id: 1,
        category: "oil",
        name: "زيت عطري | ديسرت نايت",
        nameEn: "Essential Oil | Desert Night",
        image:
            "https://west-story.com/cdn/shop/files/DESERT_NIGHT_-_30.png?v=1749868248&width=533",
        sale: true,
    },
    {
        id: 2,
        category: "oil",
        name: "العطر | باتشولي انتنس",
        nameEn: "Perfume | Patchouli Intense",
        image:
            "https://west-story.com/cdn/shop/files/MY_STORY_-_30.png?v=1749868250&width=533",
        sale: true,
    },
    {
        id: 3,
        category: "freshener",
        name: "معطر مفارش | مومنت",
        nameEn: "Freshener | Moments",
        image:
            "https://west-story.com/cdn/shop/files/Moments_-_300_b0a4d1e1-5706-4d4e-aece-c137204dda0b.png?v=1749867578&width=533",
        sale: false,
    },
    {
        id: 4,
        category: "oil",
        name: "زيت عطري | ليمون جراس",
        nameEn: "Essential Oil | Lemon Grass",
        image:
            "https://west-story.com/cdn/shop/files/Lemon_Grass_-_30.png?v=1749868252&width=533",
        sale: true,
    },
    {
        id: 5,
        category: "oil",
        name: "زيت عطري | رياض سيزون",
        nameEn: "Essential Oil | Riyadh Season",
        image:
            "https://west-story.com/cdn/shop/files/Riyadh_Season_-_30.png?v=1749861492&width=533",
        sale: true,
    },
    {
        id: 6,
        category: "freshener",
        name: "معطر مفارش | رياض سيزون",
        nameEn: "Freshener | Riyadh Season",
        image:
            "https://west-story.com/cdn/shop/files/Riyadh_Season_-_300_ef90b5f4-efa9-4f44-9f62-1b8ed0017272.png?v=1749867579&width=533",
        sale: false,
    },
    {
        id: 7,
        category: "oil",
        name: "زيت عطري | فوريفر",
        nameEn: "Essential Oil | Forever",
        image:
            "https://west-story.com/cdn/shop/files/Riyadh_Season_-_300_ef90b5f4-efa9-4f44-9f62-1b8ed0017272.png?v=1749867579&width=533",
        sale: true,
    },
    {
        id: 8,
        category: "freshener",
        name: "معطر مفارش | فوريفر",
        nameEn: "Freshener | Forever",
        image:
            "https://west-story.com/cdn/shop/files/Forever_-_300_1.png?v=1749867580&width=533",
        sale: false,
    },
    {
        id: 9,
        category: "devices",
        name: "جهاز تعطير احترافي",
        nameEn: "Professional Scent Diffuser",
        image:
            "https://west-story.com/cdn/shop/files/Devices_1.png?v=1749867582&width=533",
        sale: false,
    },
];

export default function Products() {
    const { language, isRTL } = useLanguage();
    const [activeFilter, setActiveFilter] = useState("all");
    const swiperRef = useRef(null);

    const filteredProducts = useMemo(() => {
        if (activeFilter === "all") return products;
        if (activeFilter === "sale") return products.filter((item) => item.sale);
        return products.filter((item) => item.category === activeFilter);
    }, [activeFilter]);

    useEffect(() => {
        if (!swiperRef.current) return;

        swiperRef.current.changeLanguageDirection(isRTL ? "rtl" : "ltr");
        swiperRef.current.update();
        swiperRef.current.slideTo(0, 0);
    }, [language, isRTL, activeFilter]);

    const getCategoryLabel = (category) => {
        if (category === "oil") {
            return language === "ar" ? "زيت عطري" : "Essential Oil";
        }

        if (category === "freshener") {
            return language === "ar" ? "معطر للمساحات" : "Space Freshener";
        }

        if (category === "devices") {
            return language === "ar" ? "جهاز تعطير" : "Scent Diffuser";
        }

        return language === "ar" ? "حل تعطير" : "Scent Solution";
    };

    return (
        <section
            id="products"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-20 md:py-32 bg-[#FBF7EF] overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#191D2B]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <span className="inline-block mb-4 text-xs md:text-sm tracking-[0.35em] uppercase text-[#C0265C] font-medium">
                        {language === "ar"
                            ? "حلول التعطير الاحترافية"
                            : "Professional Scenting Solutions"}
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#191D2B] leading-tight">
                        {language === "ar"
                            ? "منتجات مصممة للأعمال والمنشآت"
                            : "Scent Solutions For Businesses"}
                    </h2>

                    <p className="max-w-2xl mx-auto mt-5 text-sm md:text-base font-light leading-8 text-[#191D2B]/60">
                        {language === "ar"
                            ? "مجموعة مختارة من الزيوت العطرية، المعطرات، وأجهزة التعطير الاحترافية المصممة للفنادق، المعارض، المكاتب، والمتاجر."
                            : "A curated range of essential oils, fresheners, and professional scent diffusers designed for hotels, showrooms, offices, and retail spaces."}
                    </p>

                    <div className="w-20 h-[2px] bg-[#C0265C] mx-auto mt-7 rounded-full" />
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-14">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            type="button"
                            onClick={() => setActiveFilter(filter.key)}
                            className={`h-11 px-6 rounded-full text-sm font-normal transition-all duration-300 border ${activeFilter === filter.key
                                    ? "bg-[#C0265C] text-white border-[#C0265C] shadow-[0_12px_30px_rgba(192,38,92,0.25)]"
                                    : "bg-white/80 text-[#191D2B]/75 border-black/10 hover:border-[#C0265C] hover:text-[#C0265C] hover:bg-white"
                                }`}
                        >
                            {language === "ar" ? filter.ar : filter.en}
                        </button>
                    ))}
                </div>

                <div className="relative w-full px-1 md:px-14">
                    <button
                        type="button"
                        className="products-prev hidden md:flex absolute left-0 top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition-all duration-300"
                    >
                        {isRTL ? "❯" : "❮"}
                    </button>

                    <button
                        type="button"
                        className="products-next hidden md:flex absolute right-0 top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition-all duration-300"
                    >
                        {isRTL ? "❮" : "❯"}
                    </button>

                    <Swiper
                        key={`${language}-${activeFilter}`}
                        dir={isRTL ? "rtl" : "ltr"}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, Autoplay]}
                        loop={filteredProducts.length > 4}
                        spaceBetween={22}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: ".products-next",
                            prevEl: ".products-prev",
                        }}
                        slidesPerView={1.15}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="!overflow-visible"
                    >
                        {filteredProducts.map((product) => {
                            const productName =
                                language === "ar" ? product.name : product.nameEn;

                            return (
                                <SwiperSlide key={product.id} className="py-5">
                                    <article className="group h-full rounded-[32px] bg-white overflow-hidden border border-black/5 shadow-[0_18px_45px_rgba(25,29,43,0.08)] hover:shadow-[0_28px_70px_rgba(25,29,43,0.16)] hover:-translate-y-2 transition-all duration-500">
                                        <div className="relative h-[330px] bg-white flex items-center justify-center overflow-hidden">
                                            {product.sale && (
                                                <span
                                                    className={`absolute top-5 z-20 rounded-full bg-[#C0265C] px-4 py-1.5 text-xs font-medium text-white shadow-md ${isRTL ? "right-5" : "left-5"
                                                        }`}
                                                >
                                                    {language === "ar" ? "مميز" : "Featured"}
                                                </span>
                                            )}

                                            <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#C0265C]/10 blur-2xl" />
                                            <div className="absolute inset-x-10 bottom-10 h-20 bg-black/10 blur-3xl rounded-full opacity-50" />

                                            <img
                                                src={product.image}
                                                alt={productName}
                                                className={`relative z-10 object-contain bg-white transition-transform duration-700 group-hover:scale-110 ${product.category === "devices"
                                                        ? "max-w-[92%] max-h-[92%]"
                                                        : "max-w-[82%] max-h-[82%]"
                                                    }`}
                                            />
                                        </div>

                                        <div className={isRTL ? "p-6 text-right" : "p-6 text-left"}>
                                            <span className="inline-flex mb-4 items-center rounded-full bg-[#FBF7EF] px-4 py-2 text-xs font-normal tracking-wide text-[#C0265C]">
                                                {getCategoryLabel(product.category)}
                                            </span>

                                            <h3 className="text-lg md:text-xl font-normal text-[#191D2B] leading-relaxed min-h-[58px]">
                                                {productName}
                                            </h3>

                                            <div className="mt-5 pt-5 border-t border-black/5 flex items-center justify-between gap-4">
                                                <p className="text-sm font-light text-[#191D2B]/55 leading-6">
                                                    {language === "ar"
                                                        ? "حل مناسب للمنشآت والمساحات التجارية"
                                                        : "Suitable for business and commercial spaces"}
                                                </p>

                                                <a
                                                    href="#business"
                                                    className="shrink-0 text-sm font-normal text-[#C0265C] hover:text-[#191D2B] transition-all duration-300"
                                                >
                                                    {language === "ar" ? "تواصل معنا" : "Contact"}
                                                </a>
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