import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BeforeAfter() {
  const { language, isRTL } = useLanguage();
  const [position, setPosition] = useState(50);

  const handleMove = e => {
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 text-sm tracking-[0.25em] uppercase text-[#C0265C] font-bold">
            {language === "ar" ? "قبل وبعد" : "Before & After"}
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#191D2B] leading-tight">
            {language === "ar"
              ? "شاهد الفرق في أجواء المساحة"
              : "See The Difference In Your Space"}
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            {language === "ar"
              ? "اسحب المؤشر لمقارنة المساحة قبل وبعد إضافة تجربة العطر."
              : "Drag the handle to compare the space before and after the scent experience."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="relative h-[360px] md:h-[560px] rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(25,29,43,0.18)] select-none cursor-ew-resize bg-white"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <img
              src="https://west-story.com/cdn/shop/files/After_1.jpg?v=1750848950&width=1500"
              alt={language === "ar" ? "بعد" : "After"}
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            {/* Before Image */}
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

            {/* Labels */}
            <span className="absolute top-6 left-6 z-20 rounded-full bg-black/60 text-white px-5 py-2 text-sm font-bold backdrop-blur-md">
              {language === "ar" ? "قبل" : "Before"}
            </span>

            <span className="absolute top-6 right-6 z-20 rounded-full bg-[#C0265C] text-white px-5 py-2 text-sm font-bold shadow-lg">
              {language === "ar" ? "بعد" : "After"}
            </span>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 z-30 w-[3px] bg-white shadow-lg"
              style={{ left: `${position}%` }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 z-40 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-2xl border border-black/10 flex items-center justify-center"
              style={{ left: `${position}%` }}
            >
              <span className="text-[#191D2B] font-black text-xl">↔</span>
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={e => setPosition(e.target.value)}
              className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Before after slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
