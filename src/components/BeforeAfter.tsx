import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const { language, isRTL } = useLanguage();
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  return (
    <section
      id="before-after"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-20 md:py-32 bg-[#FBF7EF] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block mb-4 text-xs tracking-[0.4em] uppercase text-[#C0265C] font-medium">
            {language === "ar" ? "قبل وبعد" : "Before & After"}
          </span>

          <h2 className="text-4xl md:text-5xl font-light text-[#191D2B] leading-tight">
            {language === "ar"
              ? "شاهد الفرق في أجواء المساحة"
              : "See The Difference In Your Space"}
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#191D2B]/60 font-light leading-8">
            {language === "ar"
              ? "اسحب المؤشر لمقارنة المساحة قبل وبعد إضافة تجربة العطر."
              : "Drag the handle to compare the space before and after the scent experience."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[36px] p-2 bg-white/60 border border-white/70 shadow-[0_25px_80px_rgba(25,29,43,0.12)]">
            <div
              className="relative h-[360px] md:h-[560px] rounded-[30px] overflow-hidden select-none cursor-ew-resize bg-white"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              <img
                src="https://west-story.com/cdn/shop/files/After_1.jpg?v=1750848950&width=1500"
                alt={language === "ar" ? "بعد" : "After"}
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <img
                  src="https://west-story.com/cdn/shop/files/Before.jpg?v=1750155655&width=1500"
                  alt={language === "ar" ? "قبل" : "Before"}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable="false"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

              <span className="absolute top-6 left-6 z-20 rounded-full bg-black/45 text-white px-5 py-2 text-xs font-normal tracking-[0.25em] uppercase backdrop-blur-md border border-white/20">
                {language === "ar" ? "قبل" : "Before"}
              </span>

              <span className="absolute top-6 right-6 z-20 rounded-full bg-[#C0265C]/90 text-white px-5 py-2 text-xs font-normal tracking-[0.25em] uppercase backdrop-blur-md border border-white/20">
                {language === "ar" ? "بعد" : "After"}
              </span>

              <div
                className="absolute top-0 bottom-0 z-30 w-px bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]"
                style={{ left: `${position}%` }}
              />

              <div
                className="absolute top-1/2 z-40 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-2xl border border-black/10 flex items-center justify-center text-[#191D2B]"
                style={{ left: `${position}%` }}
              >
                <MoveHorizontal size={24} strokeWidth={1.6} />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-ew-resize"
                aria-label="Before after slider"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}