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
    { key: "devices", ar: "الاجهزة", en: "Devices" },
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
        price: 33,
        originalPrice: 39,
        sale: true,
    },
    {
        id: 2,
        category: "oil",
        name: "العطر | باتشولي انتنس",
        nameEn: "Perfume | Patchouli Intense",
        image:
            "https://west-story.com/cdn/shop/files/MY_STORY_-_30.png?v=1749868250&width=533",
        price: 33,
        originalPrice: 39,
        sale: true,
    },
    {
        id: 3,
        category: "freshener",
        name: "معطر مفارش | مومنت",
        nameEn: "Freshener | Moments",
        image:
            "https://west-story.com/cdn/shop/files/Moments_-_300_b0a4d1e1-5706-4d4e-aece-c137204dda0b.png?v=1749867578&width=533",
        price: 69,
        originalPrice: 69,
        sale: false,
    },
    {
        id: 4,
        category: "oil",
        name: "زيت عطري | ليمون جراس",
        nameEn: "Essential Oil | Lemon Grass",
        image:
            "https://west-story.com/cdn/shop/files/Lemon_Grass_-_30.png?v=1749868252&width=533",
        price: 33,
        originalPrice: 39,
        sale: true,
    },
    {
        id: 5,
        category: "oil",
        name: "زيت عطري | رياض سيزون",
        nameEn: "Essential Oil | Riyadh Season",
        image:
            "https://west-story.com/cdn/shop/files/Riyadh_Season_-_30.png?v=1749861492&width=533",
        price: 33,
        originalPrice: 39,
        sale: true,
    },
    {
        id: 6,
        category: "freshener",
        name: "معطر مفارش | رياض سيزون",
        nameEn: "Freshener | Riyadh Season",
        image:
            "https://west-story.com/cdn/shop/files/Riyadh_Season_-_300_ef90b5f4-efa9-4f44-9f62-1b8ed0017272.png?v=1749867579&width=533",
        price: 69,
        originalPrice: 69,
        sale: false,
    },
    {
        id: 7,
        category: "oil",
        name: "زيت عطري | فوريفر",
        nameEn: "Essential Oil | Forever",
        image:
            "https://west-story.com/cdn/shop/files/Riyadh_Season_-_300_ef90b5f4-efa9-4f44-9f62-1b8ed0017272.png?v=1749867579&width=533",
        price: 33,
        originalPrice: 39,
        sale: true,
    },
    {
        id: 8,
        category: "freshener",
        name: "معطر مفارش | فوريفر",
        nameEn: "Freshener | Forever",
        image:
            "https://west-story.com/cdn/shop/files/Forever_-_300_1.png?v=1749867580&width=533",
        price: 69,
        originalPrice: 69,
        sale: false,
    },
    {
        id: 9,
        category: "devices",
        name: "الاجهزة",
        nameEn: "Devices",
        image:
            "https://west-story.com/cdn/shop/files/Devices_1.png?v=1749867582&width=533",
        price: 69,
        originalPrice: 69,
        sale: false,
    },
    {
        id: 10,
        category: "devices",
        name: "الاجهزة",
        nameEn: "Devices",
        image:
            "https://west-story.com/cdn/shop/files/Devices_1.png?v=1749867582&width=533",
        price: 69,
        originalPrice: 69,
        sale: false,
    },
    {
        id: 11,
        category: "devices",
        name: "الاجهزة",
        nameEn: "Devices",
        image:
            "https://west-story.com/cdn/shop/files/Devices_1.png?v=1749867582&width=533",
        price: 69,
        originalPrice: 69,
        sale: false,
    },
];

export default function Products() {
    const { t, language, isRTL } = useLanguage();

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

    return (
        <section
            className="py-20 md:py-32 bg-[#FBF7EF] overflow-hidden"
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="inline-block mb-4 text-sm tracking-[0.25em] uppercase text-[#C0265C] font-semibold">
                        {language === "ar" ? "منتجات مختارة" : "Selected Products"}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#191D2B] leading-tight">
                        {t("products.title")}
                    </h2>
                </div>

                {/* Filter */}
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            type="button"
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilter === filter.key
                                    ? "bg-[#C0265C] text-white border-[#C0265C] shadow-md"
                                    : "bg-white text-[#191D2B] border-black/10 hover:border-[#C0265C] hover:text-[#C0265C]"
                                }`}
                        >
                            {language === "ar" ? filter.ar : filter.en}
                        </button>
                    ))}
                </div>

                <div className="relative w-full overflow-hidden px-2 md:px-12">
                    <button
                        type="button"
                        className="products-prev hidden md:flex absolute left-0 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-lg items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition"
                    >
                        ❮
                    </button>

                    <button
                        type="button"
                        className="products-next hidden md:flex absolute right-0 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-lg items-center justify-center text-[#191D2B] hover:bg-[#C0265C] hover:text-white transition"
                    >
                        ❯
                    </button>

                    <Swiper
                        dir={isRTL ? "rtl" : "ltr"}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, Autoplay]}
                        loop={filteredProducts.length > 4}
                        spaceBetween={15}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
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
                                <SwiperSlide key={product.id} className="py-4">
                                    <article className="group h-full rounded-[28px] bg-white shadow-[0_18px_45px_rgba(25,29,43,0.08)] hover:shadow-[0_24px_60px_rgba(25,29,43,0.14)] transition-all duration-500 overflow-hidden border border-black/5">
                                        <div className="relative h-[330px] bg-white flex items-center justify-center overflow-hidden">
                                            {product.sale && (
                                                <span
                                                    className={`absolute top-5 z-50 rounded-full bg-[#C0265C] px-4 py-1.5 text-xs font-bold text-white shadow-md ${isRTL ? "right-5" : "left-5"
                                                        }`}
                                                >
                                                    {t("products.sale")}
                                                </span>
                                            )}

                                            <div className="absolute inset-x-8 bottom-8 h-20 bg-black/10 blur-3xl rounded-full opacity-50" />

                                            <img
                                                src={product.image}
                                                alt={productName}
                                                className="relative bg-white z-10 max-w-[78%] max-h-[78%] object-contain transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        <div
                                            className={
                                                isRTL
                                                    ? "p-6 md:p-7 text-right"
                                                    : "p-6 md:p-7 text-left"
                                            }
                                        >
                                            <h3 className="font-['Tajawal'] text-xl font-bold text-[#191D2B] leading-relaxed min-h-[64px]">
                                                {productName}
                                            </h3>
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