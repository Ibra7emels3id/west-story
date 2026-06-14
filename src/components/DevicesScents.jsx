import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    AirVent,
    Droplets,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Settings2,
    Wind,
} from "lucide-react";

export default function DevicesScents() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "الأجهزة والروائح",
            title: "الجهاز المناسب والرائحة المناسبة يصنعان الفرق",
            description:
                "قوة الجهاز وحدها لا تكفي، والرائحة الجميلة وحدها لا تضمن النتيجة. الحل الصحيح يبدأ باختيار جهاز يتناسب مع المساحة، ثم ضبطه وبرمجته باستخدام رائحة مناسبة لطبيعة المكان.",
            note:
                "لديك جهاز من مورد آخر؟ يمكننا تزويدك بالرائحة المناسبة بعد تقييم الجهاز وطريقة تشغيله.",
            cards: [
                {
                    icon: AirVent,
                    title: "أجهزة لمختلف المساحات",
                    description:
                        "نوفر أجهزة للمكاتب الصغيرة، المحلات، المعارض، الفنادق، المولات، والمساحات الكبيرة، إضافة إلى حلول الربط مع أنظمة التكييف المركزي.",
                    button: "استعرض أجهزة التعطير",
                    href: "#consultation",
                    points: ["مساحات صغيرة وكبيرة", "برمجة وضبط التشغيل", "ربط مع التكييف المركزي"],
                },
                {
                    icon: Droplets,
                    title: "روائح مختارة للأماكن",
                    description:
                        "مجموعة متنوعة من الروائح الهادئة، الفاخرة، المنعشة، الخشبية، والزهرية، مع مساعدتك على اختيار الرائحة التي تتناسب مع نشاطك وهوية منشأتك.",
                    button: "استكشف مجموعات الروائح",
                    href: "#consultation",
                    points: ["روائح فاخرة ومتنوعة", "اختيار حسب نشاط المكان", "توريد مرن للمنشآت"],
                },
            ],
        },

        en: {
            badge: "Devices & Scents",
            title: "The Right Device and the Right Scent Make the Difference",
            description:
                "Device power alone is not enough, and a beautiful scent alone does not guarantee the result. The right solution starts with choosing a device that fits the space, then configuring and programming it with a scent suitable for the nature of the place.",
            note:
                "Already have a device from another supplier? We can provide the right scent after evaluating the device and how it operates.",
            cards: [
                {
                    icon: AirVent,
                    title: "Devices for Different Spaces",
                    description:
                        "We provide devices for small offices, shops, showrooms, hotels, malls, and large spaces, in addition to solutions that connect with central air conditioning systems.",
                    button: "Browse Scent Diffusers",
                    href: "#consultation",
                    points: ["Small and large spaces", "Operation setup and programming", "Central AC integration"],
                },
                {
                    icon: Droplets,
                    title: "Selected Scents for Spaces",
                    description:
                        "A variety of calm, luxurious, fresh, woody, and floral scents, with support in choosing the fragrance that suits your business activity and brand identity.",
                    button: "Explore Scent Collections",
                    href: "#consultation",
                    points: ["Premium scent variety", "Selected by business type", "Flexible supply for businesses"],
                },
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="devices"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-white overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#FBF7EF] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <span className="inline-flex px-5 py-2 rounded-full bg-[#C0265C]/10 text-[#C0265C] text-sm font-semibold mb-5">
                        {text.badge}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                        {text.title}
                    </h2>

                    <p className="text-base md:text-lg text-[#191D2B]/65 leading-8">
                        {text.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {text.cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[36px] bg-[#FBF7EF] border border-[#E9E4DC] p-8 md:p-10 hover:bg-white hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(192,38,92,0.12)] transition-all duration-500"
                            >
                                <div className="absolute -top-20 -end-20 w-56 h-56 rounded-full bg-[#C0265C]/10 blur-3xl group-hover:bg-[#C0265C]/20 transition" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between gap-5 mb-8">
                                        <div className="w-18 h-18 rounded-3xl bg-white text-[#C0265C] flex items-center justify-center shadow-sm group-hover:bg-[#C0265C] group-hover:text-white transition-all duration-300">
                                            <Icon size={34} />
                                        </div>

                                        <div className="hidden sm:flex items-center justify-center w-24 h-24 rounded-full border border-[#C0265C]/15 text-[#C0265C]/20">
                                            {index === 0 ? (
                                                <Settings2 size={48} />
                                            ) : (
                                                <Wind size={48} />
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[#191D2B] mb-5">
                                        {card.title}
                                    </h3>

                                    <p className="text-[#191D2B]/65 leading-8 mb-7">
                                        {card.description}
                                    </p>

                                    <div className="space-y-3 mb-9">
                                        {card.points.map((point, pointIndex) => (
                                            <div
                                                key={pointIndex}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="text-[#C0265C] shrink-0"
                                                />
                                                <span className="text-[#191D2B]/75 font-medium">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={card.href}
                                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C0265C] px-7 py-4 text-white font-semibold shadow-[0_15px_35px_rgba(192,38,92,0.25)] hover:bg-[#191D2B] transition-all duration-300"
                                    >
                                        {card.button}
                                        {isRTL ? (
                                            <ArrowLeft size={18} />
                                        ) : (
                                            <ArrowRight size={18} />
                                        )}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="max-w-5xl mx-auto mt-8">
                    <div className="rounded-[28px] bg-[#191D2B] px-7 py-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                        <p className="text-white/90 leading-8 font-medium">
                            {text.note}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}