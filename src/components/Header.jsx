import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe, Search } from "lucide-react";
import logo from "../../public/Images/logo_west_story.png";

export default function Header() {
    const { language, setLanguage, isRTL } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const navItems = [
        { labelAr: "الرئيسية", labelEn: "Home", href: "#home" },
        { labelAr: "حلولنا", labelEn: "Solutions", href: "#solutions" },
        { labelAr: "القطاعات", labelEn: "Sectors", href: "#sectors" },
        { labelAr: "الأجهزة والروائح", labelEn: "Devices & Scents", href: "#devices" },
        { labelAr: "الرائحة الخاصة", labelEn: "Signature Scent", href: "#signature" },
        { labelAr: "أعمالنا", labelEn: "Our Work", href: "#work" },
        { labelAr: "من نحن", labelEn: "About Us", href: "#about" },
    ];

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <header
            dir={isRTL ? "rtl" : "ltr"}
            className="fixed top-0 left-0 z-[9999] w-full bg-white/75 backdrop-blur-2xl border-b border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
            <div className="container mx-auto px-4">
                <div className="h-20 flex items-center justify-between gap-6">
                    <a href="/" className="flex items-center shrink-0">
                        <img
                            src={logo}
                            alt="West Story Logo"
                            className="h-8 xl:h-8 object-contain"
                        />
                    </a>

                    <nav className="hidden lg:flex items-center justify-center gap-7 flex-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative py-2 text-[15px] font-medium tracking-wide text-[#191D2B]/75 hover:text-[#C0265C] transition-all duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C0265C] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                            >
                                {language === "ar" ? item.labelAr : item.labelEn}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            className="hidden sm:flex w-11 h-11 rounded-full bg-[#FBF7EF] items-center justify-center text-[#191D2B]/80 hover:text-[#C0265C] hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <Search size={18} />
                        </button>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsLangOpen((prev) => !prev)}
                                className="flex items-center gap-2 h-11 px-4 rounded-full bg-[#FBF7EF] text-[#191D2B]/80 hover:text-[#C0265C] hover:bg-white hover:shadow-md transition-all duration-300"
                            >
                                <Globe size={17} />
                                <span className="text-sm font-medium">
                                    {language === "ar" ? "AR" : "EN"}
                                </span>
                            </button>

                            <div
                                className={`absolute top-full mt-3 w-40 rounded-2xl bg-white shadow-xl border border-black/5 p-2 transition-all duration-300 ${
                                    isLangOpen
                                        ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-2"
                                } ${isRTL ? "left-0" : "right-0"}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => changeLanguage("ar")}
                                    className={`w-full px-4 py-2 rounded-xl text-sm font-medium transition ${
                                        language === "ar"
                                            ? "bg-[#C0265C] text-white"
                                            : "text-[#191D2B] hover:bg-[#FBF7EF]"
                                    }`}
                                >
                                    العربية
                                </button>

                                <button
                                    type="button"
                                    onClick={() => changeLanguage("en")}
                                    className={`w-full px-4 py-2 rounded-xl text-sm font-medium transition ${
                                        language === "en"
                                            ? "bg-[#C0265C] text-white"
                                            : "text-[#191D2B] hover:bg-[#FBF7EF]"
                                    }`}
                                >
                                    English
                                </button>
                            </div>
                        </div>

                        <a
                            href="#consultation"
                            className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-[#C0265C] px-6 text-sm font-medium text-white shadow-[0_10px_25px_rgba(192,38,92,0.25)] hover:bg-[#191D2B] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {language === "ar" ? "اطلب استشارة" : "Request Consultation"}
                        </a>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="lg:hidden w-11 h-11 rounded-full bg-[#191D2B] text-white flex items-center justify-center shadow-md"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                        isMenuOpen ? "max-h-[620px] pb-5" : "max-h-0"
                    }`}
                >
                    <nav className="rounded-3xl bg-white border border-black/5 shadow-xl p-3">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-5 py-4 rounded-2xl text-[#191D2B]/80 text-sm font-medium hover:bg-[#FBF7EF] hover:text-[#C0265C] transition"
                            >
                                {language === "ar" ? item.labelAr : item.labelEn}
                            </a>
                        ))}

                        <div className="grid grid-cols-2 gap-2 mt-3">
                            <button
                                type="button"
                                onClick={() => changeLanguage("ar")}
                                className={`rounded-2xl px-5 py-4 text-sm font-medium transition ${
                                    language === "ar"
                                        ? "bg-[#C0265C] text-white"
                                        : "bg-[#FBF7EF] text-[#191D2B]"
                                }`}
                            >
                                العربية
                            </button>

                            <button
                                type="button"
                                onClick={() => changeLanguage("en")}
                                className={`rounded-2xl px-5 py-4 text-sm font-medium transition ${
                                    language === "en"
                                        ? "bg-[#C0265C] text-white"
                                        : "bg-[#FBF7EF] text-[#191D2B]"
                                }`}
                            >
                                English
                            </button>
                        </div>

                        <a
                            href="#consultation"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-3 flex items-center justify-center rounded-2xl bg-[#C0265C] px-5 py-4 text-white text-sm font-medium hover:bg-[#191D2B] transition"
                        >
                            {language === "ar" ? "اطلب استشارة" : "Request Consultation"}
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}