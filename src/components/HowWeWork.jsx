import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    MessageCircle,
    MapPinned,
    Lightbulb,
    FlaskConical,
    Settings,
    RefreshCcw,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";

const stepIcons = [
    MessageCircle,
    MapPinned,
    Lightbulb,
    FlaskConical,
    Settings,
    RefreshCcw,
];

export default function HowWeWork() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "كيف نعمل؟",
            title: "من أول استشارة إلى تشغيل الرائحة",
            description:
                "نتبع خطوات واضحة تساعدنا على تقديم حل مناسب من البداية، وتجنب اختيار جهاز أو رائحة لا تتناسب مع المكان.",
            button: "اطلب تقييم موقعك",
            steps: [
                {
                    title: "نفهم احتياجك",
                    description:
                        "نتعرف على النشاط، المساحة، عدد الفروع، وطبيعة التجربة التي ترغب في تقديمها.",
                },
                {
                    title: "نقيّم الموقع",
                    description:
                        "نراجع المساحة، حركة الهواء، المداخل، الارتفاع، وأنظمة التكييف.",
                },
                {
                    title: "نرشح الحل المناسب",
                    description:
                        "نحدد الجهاز، الرائحة، وطريقة التشغيل المناسبة للموقع.",
                },
                {
                    title: "نجرب عند الحاجة",
                    description:
                        "نوفر تجربة مبدئية للرائحة والجهاز قبل الاعتماد النهائي.",
                },
                {
                    title: "نركب ونبرمج",
                    description:
                        "يتم تركيب الأجهزة وضبط أوقات التشغيل ومستوى الانتشار.",
                },
                {
                    title: "نتابع الخدمة",
                    description:
                        "نوفر التعبئة، الصيانة، والمتابعة الدورية حسب نوع الخدمة المتفق عليها.",
                },
            ],
        },

        en: {
            badge: "How We Work",
            title: "From First Consultation to Scent Activation",
            description:
                "We follow clear steps that help us provide the right solution from the beginning and avoid choosing a device or scent that does not fit the space.",
            button: "Request Site Assessment",
            steps: [
                {
                    title: "We Understand Your Needs",
                    description:
                        "We learn about your business activity, space, number of branches, and the experience you want to create.",
                },
                {
                    title: "We Assess the Site",
                    description:
                        "We review the area, airflow, entrances, ceiling height, and air conditioning systems.",
                },
                {
                    title: "We Recommend the Right Solution",
                    description:
                        "We define the suitable device, scent, and operating method for your location.",
                },
                {
                    title: "We Test When Needed",
                    description:
                        "We provide an initial trial of the scent and device before final approval when required.",
                },
                {
                    title: "We Install and Program",
                    description:
                        "Devices are installed and programmed with the right operating times and diffusion level.",
                },
                {
                    title: "We Follow Up the Service",
                    description:
                        "We provide refilling, maintenance, and regular follow-up based on the agreed service type.",
                },
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="how-we-work"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-white overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#FBF7EF] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
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

                <div className="relative max-w-6xl mx-auto">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#E9E4DC] -translate-y-1/2" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {text.steps.map((step, index) => {
                            const Icon = stepIcons[index];

                            return (
                                <div
                                    key={index}
                                    className="group relative rounded-[32px] bg-[#FBF7EF] border border-[#E9E4DC] p-7 hover:bg-white hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(192,38,92,0.12)] transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between mb-7">
                                        <div className="w-16 h-16 rounded-3xl bg-white text-[#C0265C] flex items-center justify-center shadow-sm group-hover:bg-[#C0265C] group-hover:text-white transition-all duration-300">
                                            <Icon size={30} />
                                        </div>

                                        <span className="text-5xl font-bold text-[#C0265C]/15">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#191D2B] mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-[#191D2B]/65 leading-8">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center mt-12">
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
        </section>
    );
}