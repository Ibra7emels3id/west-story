import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sparkles,
  AirVent,
  Droplets,
  RefreshCcw,
  Wand2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function Solutions() {
  const { language, isRTL } = useLanguage();

  const solutionsContent = {
    ar: {
      badge: "حلولنا",
      title: "حلول مرنة تناسب احتياج منشأتك",
      description:
        "سواء كنت تبحث عن خدمة متكاملة، أو جهاز جديد، أو زيوت لأجهزتك الحالية، نوفر لك الحل المناسب دون تعقيد.",

      items: [
        {
          icon: Sparkles,
          title: "خدمة التعطير الدورية",
          description:
            "حل متكامل يشمل جهاز التعطير، الرائحة، التركيب، البرمجة، التعبئة، والمتابعة الدورية وفق احتياج منشأتك.",
          button: "اعرف المزيد",
        },
        {
          icon: AirVent,
          title: "شراء أجهزة التعطير",
          description:
            "أجهزة احترافية لمختلف المساحات والاستخدامات، مع مساعدتك في اختيار الجهاز المناسب وتركيبه وبرمجته.",
          button: "استعرض الأجهزة",
        },
        {
          icon: Droplets,
          title: "توريد الزيوت العطرية",
          description:
            "مجموعة متنوعة من الزيوت المناسبة لأجهزة التعطير، مع خيارات توريد مرنة للمنشآت والفروع.",
          button: "استكشف الروائح",
        },
        {
          icon: RefreshCcw,
          title: "تغيير الرائحة أو المورد الحالي",
          description:
            "لديك جهاز قائم ولكن الرائحة لا تناسب مكانك؟ أو الزيت ينتهي بسرعة؟ نساعدك على تقييم الوضع وتقديم بديل أنسب.",
          button: "اطلب تقييمًا",
        },
        {
          icon: Wand2,
          title: "تصميم رائحة خاصة",
          description:
            "نطور رائحة تمثل هوية منشأتك وتمنح زوارك تجربة لا ترتبط إلا بعلامتك.",
          button: "اكتشف الرائحة الخاصة",
        },
      ],
    },

    en: {
      badge: "Our Solutions",
      title: "Flexible Solutions Tailored to Your Business",
      description:
        "Whether you're looking for a complete scenting service, a new diffuser, or premium oils for your existing devices, we provide the right solution without complexity.",

      items: [
        {
          icon: Sparkles,
          title: "Recurring Scenting Service",
          description:
            "A complete solution including scent diffuser, fragrance supply, installation, programming, refilling, and ongoing maintenance.",
          button: "Learn More",
        },
        {
          icon: AirVent,
          title: "Scent Diffuser Devices",
          description:
            "Professional scenting devices for various spaces and applications, with assistance in selecting, installing, and configuring the right model.",
          button: "Browse Devices",
        },
        {
          icon: Droplets,
          title: "Essential Oil Supply",
          description:
            "A wide range of premium fragrance oils suitable for scenting devices, with flexible supply options for businesses and branches.",
          button: "Explore Scents",
        },
        {
          icon: RefreshCcw,
          title: "Replace Your Current Scent Supplier",
          description:
            "Already have a scenting device but not satisfied with the fragrance quality or oil consumption? We can assess and recommend a better solution.",
          button: "Request Assessment",
        },
        {
          icon: Wand2,
          title: "Signature Scent Creation",
          description:
            "We develop a unique fragrance that represents your brand identity and creates a memorable experience for your visitors.",
          button: "Discover Signature Scent",
        },
      ],
    },
  };

  const content = solutionsContent[language] || solutionsContent.en;

  return (
    <section
      id="solutions"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C0265C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#191D2B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full bg-[#C0265C]/10 text-[#C0265C] text-sm font-semibold mb-5">
            {content.badge}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
            {content.title}
          </h2>

          <p className="text-lg text-[#191D2B]/70 leading-8">
            {content.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C0265C]/10 flex items-center justify-center text-[#C0265C] mb-6 group-hover:bg-[#C0265C] group-hover:text-white transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-[#191D2B] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#191D2B]/65 leading-8 mb-8">
                  {item.description}
                </p>

                <button className="inline-flex items-center gap-2 text-[#C0265C] font-semibold hover:gap-4 transition-all duration-300">
                  {item.button}

                  {isRTL ? (
                    <ArrowLeft size={18} />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
