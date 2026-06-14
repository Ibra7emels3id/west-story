import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = {
    ar: {
        desktop: [
            "/Images/banner_hero/1 A.png",
            "/Images/banner_hero/2 A.png",
            "/Images/banner_hero/3 A.png",
            "/Images/banner_hero/4 A.png",
        ],
        mobile: [
            "/Images/01.jpg",
            "/Images/A1.jpg",
            "/Images/D1.jpg",
            "/Images/DO1.jpg",
        ],
    },

    en: {
        desktop: [
            "/Images/banner_hero/1 E.png",
            "/Images/banner_hero/2 E.png",
            "/Images/banner_hero/3 E.png",
            "/Images/banner_hero/4 E.png",
        ],
        mobile: [
            "/Images/01.jpg",
            "/Images/A1.jpg",
            "/Images/D1.jpg",
            "/Images/DO1.jpg",
        ],
    },
};

const heroContent = {
    ar: {
        eyebrow: "West Story Scenting Solutions",
        title: "اصنع لمكانك حضورًا يُتذكر",
        description:
            "حلول احترافية لتعطير المنشآت تبدأ من اختيار الرائحة المناسبة، وتشمل أجهزة التعطير، التركيب، البرمجة، التوريد، والمتابعة الدورية.",
        primaryBtn: "اطلب استشارة",
        secondaryBtn: "استكشف حلولنا",
        note: "خبرة في تعطير المنشآت والقطاعات التجارية منذ عام 2010.",
    },
    en: {
        eyebrow: "West Story Scenting Solutions",
        title: "Create a Presence Your Place Will Be Remembered For",
        description:
            "Professional scenting solutions for businesses, starting from choosing the right fragrance to scent devices, installation, programming, supply, and regular follow-up.",
        primaryBtn: "Request Consultation",
        secondaryBtn: "Explore Our Solutions",
        note: "Experience in scenting businesses and commercial sectors since 2010.",
    },
};

export default function Hero() {
    const { language, isRTL } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const desktopImages =
        heroImages[language]?.desktop || heroImages.en.desktop;

    const mobileImages =
        heroImages[language]?.mobile || heroImages.en.mobile;

    const images = isMobile ? mobileImages : desktopImages;
    const content = heroContent[language] || heroContent.en;

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    useEffect(() => {
        setCurrentSlide(0);
    }, [language, isMobile]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <section
            id="home"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative w-full h-[100dvh] overflow-hidden bg-black"
        >
            {desktopImages.map((image, index) => (
                <div
                    key={`${language}-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet={mobileImages[index]}
                        />

                        <img
                            src={image}
                            alt={`West Story Hero ${index + 1}`}
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                    </picture>
                </div>
            ))}

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />
            <div className="absolute inset-0 z-10 bg-black/5" />

            <div className="relative z-20 container mx-auto px-4 h-full flex items-center pt-20 md:pt-20">
                <div className="max-w-3xl text-white">
                    <span className="inline-flex mb-5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-medium text-white/90">
                        {content.eyebrow}
                    </span>

                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                        {content.title}
                    </h1>

                    <p className="text-base md:text-xl leading-8 md:leading-10 text-white/85 max-w-2xl mb-8">
                        {content.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-7">
                        <a
                            href="#consultation"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-[#C0265C] px-8 text-base font-semibold text-white shadow-[0_15px_35px_rgba(192,38,92,0.35)] hover:bg-white hover:text-[#191D2B] transition-all duration-300"
                        >
                            {content.primaryBtn}
                        </a>

                        <a
                            href="#solutions"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-white/15 border border-white/25 backdrop-blur-md px-8 text-base font-semibold text-white hover:bg-white hover:text-[#191D2B] transition-all duration-300"
                        >
                            {content.secondaryBtn}
                        </a>
                    </div>

                    <p className="text-sm md:text-base text-white/75">
                        {content.note}
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={prevSlide}
                className={`absolute top-1/2 z-30 -translate-y-1/2 w-12 h-12 hidden md:block rounded-full bg-white/80 text-[#191D2B] shadow-lg hover:bg-[#C0265C] hover:text-white transition ${
                    isRTL ? "right-5 md:right-10" : "left-5 md:left-10"
                }`}
            >
                <ChevronLeft size={26} className="mx-auto" />
            </button>

            <button
                type="button"
                onClick={nextSlide}
                className={`absolute top-1/2 z-30 -translate-y-1/2 w-12 h-12 hidden md:block rounded-full bg-white/80 text-[#191D2B] shadow-lg hover:bg-[#C0265C] hover:text-white transition ${
                    isRTL ? "left-5 md:left-10" : "right-5 md:right-10"
                }`}
            >
                <ChevronRight size={26} className="mx-auto" />
            </button>

            <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
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