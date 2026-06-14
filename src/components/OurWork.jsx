import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    Building2,
    Hotel,
    BriefcaseBusiness,
    Store,
    CalendarDays,
    Network,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";

const icons = [
    Building2,
    Hotel,
    BriefcaseBusiness,
    Store,
    CalendarDays,
    Network,
];

export default function OurWork() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "أعمالنا",
            title: "حلول نُفذت في أماكن مختلفة واحتياجات متعددة",
            description:
                "عملنا مع منشآت ومشاريع تختلف في المساحة، النشاط، وعدد الفروع، وقدمنا لكل منها حلًا يتناسب مع طبيعة المكان وتجربة زواره.",
            button: "استعرض أعمالنا",
            items: [
                {
                    title: "المولات والمراكز التجارية",
                    description: "حلول تعطير للمداخل والممرات والمساحات الكبيرة.",
                    image:
                        "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "الفنادق والضيافة",
                    description: "تجربة عطرية تعزز الانطباع الأول والراحة.",
                    image:
                        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "الشركات والمكاتب",
                    description: "بيئات عمل أكثر راحة واحترافية للموظفين والزوار.",
                    image:
                        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "المعارض والمتاجر",
                    description: "روائح تدعم هوية العلامة وتجربة التسوق.",
                    image:
                        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "الفعاليات والمواسم",
                    description: "حلول مؤقتة ومرنة للفعاليات والمواسم المختلفة.",
                    image:
                        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "المشاريع متعددة الفروع",
                    description: "توريد ومتابعة موحدة للفروع مع الحفاظ على جودة التجربة.",
                    image:
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
                },
            ],
        },

        en: {
            badge: "Our Work",
            title: "Solutions Delivered Across Different Spaces and Needs",
            description:
                "We have worked with businesses and projects that differ in space, activity, and number of branches, delivering tailored solutions for each place and its visitor experience.",
            button: "View Our Work",
            items: [
                {
                    title: "Malls & Commercial Centers",
                    description: "Scenting solutions for entrances, walkways, and large spaces.",
                    image:
                        "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "Hotels & Hospitality",
                    description: "A scent experience that enhances first impressions and comfort.",
                    image:
                        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "Companies & Offices",
                    description: "More comfortable and professional work environments.",
                    image:
                        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "Showrooms & Stores",
                    description: "Scents that support brand identity and shopping experience.",
                    image:
                        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "Events & Seasons",
                    description: "Temporary and flexible solutions for different events and seasons.",
                    image:
                        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
                },
                {
                    title: "Multi-Branch Projects",
                    description: "Unified supply and follow-up while maintaining experience quality.",
                    image:
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
                },
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="work"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-[#FBF7EF] overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
                    <div className="lg:col-span-8">
                        <span className="inline-flex px-5 py-2 rounded-full bg-white text-[#C0265C] text-sm font-semibold shadow-sm mb-5">
                            {text.badge}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                            {text.title}
                        </h2>

                        <p className="text-base md:text-lg text-[#191D2B]/65 leading-8 max-w-3xl">
                            {text.description}
                        </p>
                    </div>

                    <div className="lg:col-span-4 lg:text-end">
                        <a
                            href="#consultation"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C0265C] px-8 py-4 text-white font-semibold shadow-[0_15px_35px_rgba(192,38,92,0.25)] hover:bg-[#191D2B] transition-all duration-300"
                        >
                            {text.button}
                            {isRTL ? (
                                <ArrowLeft size={18} />
                            ) : (
                                <ArrowRight size={18} />
                            )}
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {text.items.map((item, index) => {
                        const Icon = icons[index];

                        return (
                            <div
                                key={index}
                                className="group relative h-[360px] overflow-hidden rounded-[34px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#191D2B]/90 via-[#191D2B]/45 to-transparent" />

                                <div className="absolute top-6 start-6 w-14 h-14 rounded-2xl bg-white/90 text-[#C0265C] flex items-center justify-center shadow-sm">
                                    <Icon size={26} />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/75 leading-7">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}