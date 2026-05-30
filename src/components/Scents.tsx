import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const scents = [
  {
    id: "flowers",
    titleKey: "scents.flowers",
    descAr: "نفحات ناعمة مستوحاة من الزهور الطبيعية.",
    descEn: "Soft notes inspired by natural flowers.",
    gradient: "from-[#FCE7F3] via-[#F9D5E5] to-[#FDF2F8]",
    icon: "🌸",
  },
  {
    id: "fruits",
    titleKey: "scents.fruits",
    descAr: "روائح منعشة بطابع فاكهي حيوي.",
    descEn: "Fresh scents with a vibrant fruity touch.",
    gradient: "from-[#FEF3C7] via-[#FED7AA] to-[#FFF7ED]",
    icon: "🍓",
  },
  {
    id: "citrus",
    titleKey: "scents.citrus",
    descAr: "انتعاش حمضي يمنح المكان طاقة ونقاء.",
    descEn: "Citrus freshness that brings energy and clarity.",
    gradient: "from-[#DCFCE7] via-[#D9F99D] to-[#F7FEE7]",
    icon: "🍋",
  },
  {
    id: "oriental",
    titleKey: "scents.oriental",
    descAr: "عبير شرقي فاخر بلمسة دافئة وعميقة.",
    descEn: "Luxurious oriental aroma with a warm deep touch.",
    gradient: "from-[#FEF3C7] via-[#FDE68A] to-[#FFFBEB]",
    icon: "🌳",
  },
];

export default function Scents() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section
      id="scents"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-20 md:py-32 bg-[#FBF7EF] overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C0265C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#191D2B]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 text-sm tracking-[0.25em] uppercase text-[#C0265C] font-bold">
            {language === "ar" ? "عالم الروائح" : "Scent Families"}
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#191D2B] leading-tight">
            {language === "ar" ? "روائح مختلفة تناسب كل الأذواق" : "Different Scents For Every Taste"}
          </h2>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-8">
            {language === "ar"
              ? "اختار من مجموعة روائح مميزة تضيف لمسة فاخرة وهادئة للمكان."
              : "Choose from refined scent families that add a calm and luxurious touch."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {scents.map((scent, index) => (
            <article
              key={scent.id}
              id={scent.id}
              className="group relative min-h-[310px] rounded-[32px] overflow-hidden bg-white border border-black/5 shadow-[0_18px_45px_rgba(25,29,43,0.08)] hover:shadow-[0_25px_70px_rgba(25,29,43,0.14)] transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${scent.gradient}`}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_35%)]" />

              <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-white/50 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 h-full p-7 flex flex-col justify-between">
                <div
                  className={`w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-md shadow-md flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-110 ${
                    isRTL ? "mr-auto" : "ml-auto"
                  }`}
                >
                  {scent.icon}
                </div>

                <div className={isRTL ? "text-right" : "text-left"}>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#191D2B] text-white text-sm font-bold mb-5">
                    {index + 1}
                  </span>

                  <h3 className="text-2xl font-extrabold text-[#191D2B] mb-3 leading-relaxed">
                    {t(scent.titleKey)}
                  </h3>

                  <p className="text-sm md:text-base text-gray-700 leading-7">
                    {language === "ar" ? scent.descAr : scent.descEn}
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-6 bottom-0 h-[3px] bg-[#C0265C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}