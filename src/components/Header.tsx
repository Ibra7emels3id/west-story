import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Menu,
  X,
  Globe,
  Search,
} from "lucide-react";

export default function Header() {
  const { language, setLanguage, t, isRTL } =
    useLanguage();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const navItems = [
    {
      key: "nav.diffusers",
      href: "#diffusers",
    },
    {
      key: "nav.oils",
      href: "#oils",
    },
    {
      key: "nav.fresheners",
      href: "#fresheners",
    },
    {
      key: "nav.special",
      href: "#special",
    },
    {
      key: "nav.business",
      href: "#business",
    },
  ];

  return (
    <>
      <header
        dir={isRTL ? "rtl" : "ltr"}
        className="fixed top-0 left-0 z-[9999] w-full bg-[#FBF7EF]/80 backdrop-blur-xl border-b border-black/5"
      >
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#191D2B] text-white flex items-center justify-center font-black text-lg shadow-md">
                W
              </div>

              <div
                className={
                  isRTL
                    ? "text-right"
                    : "text-left"
                }
              >
                <h1 className="text-xl font-black text-[#191D2B] leading-none">
                  West Story
                </h1>

                <p className="text-xs text-[#C0265C] font-bold mt-1">
                  Luxury Scents
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-2 flex-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-bold text-[#191D2B]/75 hover:text-[#C0265C] hover:bg-white transition-all duration-300"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                type="button"
                className="hidden sm:flex w-11 h-11 rounded-full bg-white shadow-sm items-center justify-center text-[#191D2B] hover:text-[#C0265C] hover:shadow-md transition"
              >
                <Search size={19} />
              </button>

              {/* Language */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-2 h-11 px-4 rounded-full bg-white shadow-sm text-[#191D2B] hover:text-[#C0265C] hover:shadow-md transition"
                >
                  <Globe size={18} />

                  <span className="text-sm font-bold">
                    {language === "ar"
                      ? "AR"
                      : "EN"}
                  </span>
                </button>

                <div
                  className={`absolute top-full mt-3 w-40 rounded-2xl bg-white shadow-xl border border-black/5 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
                    isRTL
                      ? "left-0"
                      : "right-0"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setLanguage("ar")
                    }
                    className={`w-full px-4 py-2 rounded-xl text-sm font-bold transition ${
                      language === "ar"
                        ? "bg-[#C0265C] text-white"
                        : "text-[#191D2B] hover:bg-[#FBF7EF]"
                    }`}
                  >
                    العربية
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setLanguage("en")
                    }
                    className={`w-full px-4 py-2 rounded-xl text-sm font-bold transition ${
                      language === "en"
                        ? "bg-[#C0265C] text-white"
                        : "text-[#191D2B] hover:bg-[#FBF7EF]"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#business"
                className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-[#C0265C] px-6 text-sm font-bold text-white shadow-md hover:bg-[#191D2B] hover:-translate-y-0.5 transition-all duration-300"
              >
                {language === "ar"
                  ? "تواصل معنا"
                  : "Contact Us"}
              </a>

              {/* Mobile Toggle */}
              <button
                type="button"
                onClick={() =>
                  setIsMenuOpen(!isMenuOpen)
                }
                className="lg:hidden w-11 h-11 rounded-full bg-[#191D2B] text-white flex items-center justify-center shadow-md"
              >
                {isMenuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen
                ? "max-h-[500px] pb-5"
                : "max-h-0"
            }`}
          >
            <nav className="rounded-3xl bg-white border border-black/5 shadow-xl p-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                  className="block px-5 py-4 rounded-2xl text-[#191D2B] font-bold hover:bg-[#FBF7EF] hover:text-[#C0265C] transition"
                >
                  {t(item.key)}
                </a>
              ))}

              <a
                href="#business"
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="mt-3 flex items-center justify-center rounded-2xl bg-[#C0265C] px-5 py-4 text-white font-bold hover:bg-[#191D2B] transition"
              >
                {language === "ar"
                  ? "تواصل معنا"
                  : "Contact Us"}
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}