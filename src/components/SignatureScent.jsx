import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    Sparkles,
    Fingerprint,
    FlaskConical,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";

export default function SignatureScent() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "الرائحة الخاصة",
            title: "رائحة لا تشبه إلا علامتك",
            description1:
                "الرائحة الخاصة تمنح منشأتك هوية حسية مميزة، وتجعل العميل يتذكر المكان من خلال تجربة لا يمكن تكرارها لدى المنافسين.",
            description2:
                "نبدأ بفهم هوية العلامة والانطباع المطلوب، ثم نطور مقترحات عطرية حتى نصل إلى الرائحة التي تمثل منشأتك.",
            button: "ابدأ تصميم رائحتك الخاصة",
            sideTitle: "من فكرة إلى هوية عطرية",
            sideText:
                "نحول هوية منشأتك إلى تجربة عطرية متكاملة تُستخدم داخل المكان ويمكن تطويرها لاحقًا كمنتجات تحمل علامتك.",
            points: [
                "تحليل هوية العلامة",
                "تحديد الانطباع المطلوب",
                "تطوير عينات عطرية",
                "اختبار الرائحة داخل المكان",
                "اعتماد الرائحة وتطبيقها",
                "إمكانية استخدامها في منتجات تحمل علامتك",
            ],
        },

        en: {
            badge: "Signature Scent",
            title: "A Scent That Belongs Only to Your Brand",
            description1:
                "A signature scent gives your business a unique sensory identity and helps customers remember the place through an experience your competitors cannot replicate.",
            description2:
                "We start by understanding your brand identity and the impression you want to create, then develop scent proposals until we reach the fragrance that truly represents your business.",
            button: "Start Designing Your Signature Scent",
            sideTitle: "From Idea to Scent Identity",
            sideText:
                "We turn your brand identity into a complete scent experience that can be used inside your space and later developed into branded products.",
            points: [
                "Brand identity analysis",
                "Defining the desired impression",
                "Developing scent samples",
                "Testing the scent inside the space",
                "Approving and applying the scent",
                "Option to use it in branded products",
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="signature"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-[#FBF7EF] overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6">
                        <span className="inline-flex px-5 py-2 rounded-full bg-white text-[#C0265C] text-sm font-semibold shadow-sm mb-5">
                            {text.badge}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                            {text.title}
                        </h2>

                        <div className="space-y-5 mb-8">
                            <p className="text-base md:text-lg text-[#191D2B]/70 leading-8">
                                {text.description1}
                            </p>

                            <p className="text-base md:text-lg text-[#191D2B]/70 leading-8">
                                {text.description2}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-9">
                            {text.points.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-2xl bg-white border border-[#E9E4DC] px-4 py-4 shadow-sm"
                                >
                                    <CheckCircle2
                                        size={20}
                                        className="text-[#C0265C] shrink-0"
                                    />
                                    <span className="text-[#191D2B]/80 font-medium leading-7">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>

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

                    <div className="lg:col-span-6">
                        <div className="relative rounded-[42px] bg-white border border-[#E9E4DC] p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)] overflow-hidden">
                            <div className="absolute -top-24 -end-24 w-64 h-64 rounded-full bg-[#C0265C]/10 blur-3xl" />
                            <div className="absolute -bottom-24 -start-24 w-72 h-72 rounded-full bg-[#FBF7EF] blur-3xl" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-[28px] bg-[#C0265C]/10 text-[#C0265C] flex items-center justify-center mb-8">
                                    <Fingerprint size={40} />
                                </div>

                                <h3 className="text-3xl font-bold text-[#191D2B] mb-5">
                                    {text.sideTitle}
                                </h3>

                                <p className="text-[#191D2B]/65 leading-8 mb-8">
                                    {text.sideText}
                                </p>

                                <div className="grid grid-cols-3 gap-4">
                                    <div className="rounded-3xl bg-[#FBF7EF] p-5 text-center">
                                        <Sparkles
                                            size={28}
                                            className="mx-auto text-[#C0265C] mb-3"
                                        />
                                        <p className="text-sm font-semibold text-[#191D2B]">
                                            {language === "ar" ? "هوية" : "Identity"}
                                        </p>
                                    </div>

                                    <div className="rounded-3xl bg-[#FBF7EF] p-5 text-center">
                                        <FlaskConical
                                            size={28}
                                            className="mx-auto text-[#C0265C] mb-3"
                                        />
                                        <p className="text-sm font-semibold text-[#191D2B]">
                                            {language === "ar" ? "تطوير" : "Creation"}
                                        </p>
                                    </div>

                                    <div className="rounded-3xl bg-[#FBF7EF] p-5 text-center">
                                        <Fingerprint
                                            size={28}
                                            className="mx-auto text-[#C0265C] mb-3"
                                        />
                                        <p className="text-sm font-semibold text-[#191D2B]">
                                            {language === "ar" ? "تميز" : "Uniqueness"}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-[28px] bg-[#191D2B] p-6">
                                    <p className="text-white/85 leading-8 font-medium">
                                        {language === "ar"
                                            ? "الرائحة الخاصة لا تُستخدم فقط لتعطير المكان، بل لبناء ذاكرة حسية مرتبطة بعلامتك."
                                            : "A signature scent is not only used to fragrance a space; it builds a sensory memory connected to your brand."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}