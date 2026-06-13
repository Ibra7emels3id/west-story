import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Flower2, Citrus, Leaf, Sparkles } from "lucide-react";

const scents = [
  {
    id: "flowers",
    titleKey: "scents.flowers",
    descAr: "نفحات زهرية راقية تمنح المكان حضورًا ناعمًا ومريحًا.",
    descEn: "Refined floral notes that create a soft and elegant presence.",
    Icon: Flower2,
  },
  {
    id: "fruits",
    titleKey: "scents.fruits",
    descAr: "روائح منعشة تضيف طاقة وحيوية للمساحات التجارية.",
    descEn: "Fresh notes that add energy and vibrancy to business spaces.",
    Icon: Sparkles,
  },
  {
    id: "citrus",
    titleKey: "scents.citrus",
    descAr: "انتعاش نظيف ومشرق مناسب للمكاتب والمعارض.",
    descEn: "Clean bright freshness ideal for offices and showrooms.",
    Icon: Citrus,
  },
  {
    id: "oriental",
    titleKey: "scents.oriental",
    descAr: "عبير شرقي دافئ يترك انطباعًا فاخرًا وعميقًا.",
    descEn: "Warm oriental aroma that leaves a luxurious impression.",
    Icon: Leaf,
  },
];

export default function Scents() {
  const { t, language, isRTL } = useLanguage();

  return (
    <section
      id="scents"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-24 md:py-36 bg-[#FBF7EF] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className={isRTL ? "text-right" : "text-left"}>
            <span className="text-[#C0265C] tracking-[0.45em] uppercase text-xs font-normal">
              {language === "ar" ? "تصنيفات الروائح" : "Scent Families"}
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-light text-[#191D2B] leading-[1.15]">
              {language === "ar"
                ? "بصمات عطرية تعكس هوية المكان"
                : "Signature Scents That Define Your Space"}
            </h2>
          </div>

          <p
            className={`text-[#191D2B]/60 leading-8 font-light max-w-xl ${
              isRTL ? "lg:mr-auto text-right" : "lg:ml-auto text-left"
            }`}
          >
            {language === "ar"
              ? "نقدم تصنيفات عطرية مصممة بعناية للمنشآت، الفنادق، المكاتب، المعارض، والمساحات التي تحتاج إلى حضور فاخر وثابت."
              : "Carefully designed scent families for hotels, offices, showrooms, and business spaces that need a refined and memorable atmosphere."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-[#191D2B]/10">
          {scents.map((scent, index) => {
            const Icon = scent.Icon;

            return (
              <article
                key={scent.id}
                id={scent.id}
                className="group relative min-h-[340px] bg-[#FBF7EF] p-8 md:p-9 border-b md:border-b-0 md:border-e border-[#191D2B]/10 hover:bg-white transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-xs tracking-[0.35em] text-[#191D2B]/35 font-light">
                    0{index + 1}
                  </span>

                  <div className="h-16 w-16 rounded-full border border-[#191D2B]/15 flex items-center justify-center text-[#191D2B] group-hover:border-[#C0265C]/50 group-hover:text-[#C0265C] transition-all duration-300">
                    <Icon size={28} strokeWidth={1.2} />
                  </div>
                </div>

                <div className={`mt-20 ${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl md:text-3xl font-light text-[#191D2B] mb-5">
                    {t(scent.titleKey)}
                  </h3>

                  <p className="text-sm md:text-base leading-8 font-light text-[#191D2B]/60">
                    {language === "ar" ? scent.descAr : scent.descEn}
                  </p>
                </div>

                <div className="absolute inset-x-8 bottom-8 h-px bg-[#C0265C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
