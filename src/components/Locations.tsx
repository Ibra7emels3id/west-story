import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Building2,
  Hotel,
  Landmark,
  Briefcase,
  Store,
  Sparkles,
} from "lucide-react";

const locations = [
  { titleKey: "locations.malls", Icon: Store },
  { titleKey: "locations.resorts", Icon: Landmark },
  { titleKey: "locations.spa", Icon: Sparkles },
  { titleKey: "locations.offices", Icon: Briefcase },
  { titleKey: "locations.hotels", Icon: Hotel },
  { titleKey: "locations.mosques", Icon: Building2 },
];

export default function Locations() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section
      id="locations"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-24 md:py-36 bg-[#FBF7EF] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0265C]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#191D2B]/15 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#C0265C] tracking-[0.4em] uppercase text-xs font-medium">
            {language === "ar" ? "القطاعات المستهدفة" : "Target Industries"}
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-light text-[#191D2B] leading-[1.15]">
            {language === "ar"
              ? "حلول تعطير تناسب مختلف القطاعات"
              : "Scent Solutions For Every Industry"}
          </h2>

          <p className="mt-6 text-[#191D2B]/60 leading-8 max-w-2xl mx-auto font-light">
            {language === "ar"
              ? "أنظمة تعطير احترافية مصممة للفنادق والمكاتب والمعارض والمساحات التجارية."
              : "Professional scenting systems designed for hotels, offices, showrooms and commercial spaces."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-[#191D2B]/10">
          {locations.map((location, index) => {
            const Icon = location.Icon;

            return (
              <article
                key={index}
                className="group bg-[#FBF7EF] min-h-[260px] p-8 md:p-10 border-b border-[#191D2B]/10 xl:border-b-0 xl:border-e hover:bg-white transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xs tracking-[0.35em] text-[#191D2B]/30">
                    0{index + 1}
                  </span>

                  <Icon
                    size={30}
                    strokeWidth={1.3}
                    className="text-[#191D2B] group-hover:text-[#C0265C] transition-colors duration-300"
                  />
                </div>

                <h3
                  className={`text-2xl font-light text-[#191D2B] leading-relaxed ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t(location.titleKey)}
                </h3>

                <div
                  className={`mt-8 h-px w-12 bg-[#C0265C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                    isRTL ? "origin-right" : "origin-left"
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
