import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const locations = [
  { titleKey: "locations.malls", icon: "🏬" },
  { titleKey: "locations.resorts", icon: "🏖️" },
  { titleKey: "locations.spa", icon: "🧖" },
  { titleKey: "locations.offices", icon: "🏢" },
  { titleKey: "locations.hotels", icon: "🏨" },
  { titleKey: "locations.mosques", icon: "🕌" },
];

export default function Locations() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section
      className="relative py-20 md:py-32 bg-[#FBF7EF] overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C0265C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#191D2B]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 text-sm tracking-[0.25em] uppercase text-[#C0265C] font-bold">
            {language === "ar" ? "أماكن الاستخدام" : "Where To Use"}
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#191D2B] leading-tight">
            {t("locations.title")}
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-8">
            {language === "ar"
              ? "حلول عطرية مناسبة للمساحات التجارية والفندقية ومراكز العناية."
              : "Scent solutions designed for commercial, hospitality, and wellness spaces."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {locations.map((location, index) => (
            <article
              key={index}
              className="group relative min-h-[190px] rounded-[28px] bg-white border border-black/5 shadow-[0_18px_45px_rgba(25,29,43,0.08)] hover:shadow-[0_24px_60px_rgba(25,29,43,0.14)] overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0265C]/8 via-white to-[#191D2B]/5 opacity-100" />

              <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-[#C0265C]/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 h-full p-5 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF7EF] shadow-inner flex items-center justify-center text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {location.icon}
                </div>

                <h3 className="text-sm md:text-base font-extrabold text-[#191D2B] leading-relaxed">
                  {t(location.titleKey)}
                </h3>

                <span className="mt-4 w-8 h-[3px] rounded-full bg-[#C0265C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            type="button"
            className="rounded-full bg-[#191D2B] text-white px-9 py-4 text-sm md:text-base font-bold shadow-lg hover:bg-[#C0265C] hover:-translate-y-1 transition-all duration-300"
          >
            {t("locations.viewAll")}
          </button>
        </div>
      </div>
    </section>
  );
}
