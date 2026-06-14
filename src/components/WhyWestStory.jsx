import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    CalendarCheck,
    SlidersHorizontal,
    AirVent,
    Wrench,
    Handshake,
    RefreshCcw,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
];

const icons = [
    CalendarCheck,
    SlidersHorizontal,
    AirVent,
    Wrench,
    Handshake,
    RefreshCcw,
];

export default function WhyWestStory() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "لماذا ويست ستوري؟",
            title: "خبرة تعرف الفرق بين تعطير المكان وبناء تجربته",
            description:
                "منذ عام 2010، نعمل على تقديم حلول تعطير للمنشآت تجمع بين الرائحة المناسبة، الجهاز الصحيح، والخدمة التي تضمن استمرار جودة التجربة.",
            button: "تحدث مع خبير",
            statYear: "2010",
            statText: "خبرة في حلول التعطير",
            imageTitle: "حلول ميدانية حقيقية",
            imageText:
                "نختار الجهاز والرائحة بناءً على طبيعة الموقع، وليس بشكل عشوائي.",
            features: [
                ["خبرة ممتدة منذ عام 2010", "خبرة عملية في قطاعات ومشاريع مختلفة."],
                ["حلول تناسب كل منشأة", "لا نفرض حلًا موحدًا، بل نختار ما يتناسب مع احتياجك."],
                ["أجهزة لمختلف المساحات", "من الغرف والمكاتب الصغيرة إلى المولات والمساحات الكبيرة."],
                ["فريق تركيب وخدمة ميدانية", "لضمان التشغيل الصحيح والمتابعة المستمرة."],
                ["خيارات تعاقد مرنة", "خدمة دورية، شراء أجهزة، أو توريد زيوت حسب احتياج العميل."],
                ["إمكانية التعامل مع أجهزتك الحالية", "نقيّم الجهاز الموجود ونوفر البديل المناسب متى كان ذلك ممكنًا."],
            ],
        },

        en: {
            badge: "Why West Story?",
            title:
                "Experience That Knows the Difference Between Scenting a Place and Building Its Experience",
            description:
                "Since 2010, we have been delivering scenting solutions for businesses that combine the right fragrance, the right device, and a service that keeps the experience consistent.",
            button: "Talk to an Expert",
            statYear: "2010",
            statText: "Experience in scenting solutions",
            imageTitle: "Real Field Solutions",
            imageText:
                "We select the device and scent based on the nature of the site, not randomly.",
            features: [
                ["Experience Since 2010", "Practical experience across different sectors and projects."],
                ["Solutions for Every Business", "We do not force one standard solution; we choose what fits your needs."],
                ["Devices for Different Spaces", "From small rooms and offices to malls and large spaces."],
                ["Installation & Field Service Team", "To ensure proper operation and continuous follow-up."],
                ["Flexible Contract Options", "Recurring service, device purchase, or oil supply based on your needs."],
                ["Works With Your Existing Devices", "We assess your current device and provide a suitable alternative when possible."],
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="why-west-story"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-white overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[460px] h-[460px] bg-[#C0265C]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-[#FBF7EF] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6">
                        <span className="inline-flex px-5 py-2 rounded-full bg-[#C0265C]/10 text-[#C0265C] text-sm font-semibold mb-5">
                            {text.badge}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                            {text.title}
                        </h2>

                        <p className="text-base md:text-lg text-[#191D2B]/65 leading-8 mb-8">
                            {text.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-9">
                            {text.features.map(([title, description], index) => {
                                const Icon = icons[index];

                                return (
                                    <div
                                        key={index}
                                        className="group rounded-3xl bg-[#FBF7EF] border border-[#E9E4DC] p-5 hover:bg-white hover:border-[#C0265C]/25 hover:shadow-[0_20px_50px_rgba(192,38,92,0.1)] transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white text-[#C0265C] flex items-center justify-center shrink-0 group-hover:bg-[#C0265C] group-hover:text-white transition">
                                                <Icon size={23} />
                                            </div>

                                            <div>
                                                <h3 className="text-base font-bold text-[#191D2B] mb-2">
                                                    {title}
                                                </h3>
                                                <p className="text-sm text-[#191D2B]/60 leading-6">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a
                            href="#consultation"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C0265C] px-8 py-4 text-white font-semibold shadow-[0_15px_35px_rgba(192,38,92,0.25)] hover:bg-[#191D2B] transition-all duration-300"
                        >
                            {text.button}
                            {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                        </a>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="relative min-h-[620px]">
                            <div className="absolute top-0 start-10 w-[70%] h-[360px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                                <img
                                    src={images[0]}
                                    alt="West Story"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute top-56 end-0 w-[58%] h-[300px] rounded-[36px] overflow-hidden border-[10px] border-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                                <img
                                    src={images[1]}
                                    alt="West Story Service"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute bottom-0 start-0 w-[48%] h-[230px] rounded-[34px] overflow-hidden border-[10px] border-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                                <img
                                    src={images[2]}
                                    alt="West Story Diffuser"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute bottom-12 end-8 rounded-[32px] bg-white border border-[#E9E4DC] p-6 max-w-[260px] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#C0265C]/10 text-[#C0265C] flex items-center justify-center">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-[#C0265C]">
                                            {text.statYear}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-[#191D2B] mb-2">
                                    {text.imageTitle}
                                </h3>

                                <p className="text-sm text-[#191D2B]/60 leading-6">
                                    {text.imageText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}