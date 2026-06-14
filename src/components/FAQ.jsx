import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
    const { language, isRTL } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);

    const content = {
        ar: {
            badge: "الأسئلة الشائعة",
            title: "أسئلة قد تدور في بالك",
            items: [
                {
                    question: "هل يجب أن أشتري الجهاز؟",
                    answer:
                        "ليس بالضرورة. نوفر خيارات تشمل الخدمة الدورية، أو شراء الجهاز، حسب احتياج المنشأة.",
                },
                {
                    question: "لدي جهاز من شركة أخرى، هل يمكنني استخدام زيوتكم؟",
                    answer:
                        "نعم، في كثير من الحالات يمكن استخدام زيوتنا مع الأجهزة الحالية بعد معرفة نوع الجهاز وطريقة تشغيله.",
                },
                {
                    question: "كيف أعرف الجهاز المناسب لمساحتي؟",
                    answer:
                        "يتم تحديد الجهاز بناءً على المساحة، الارتفاع، حركة الهواء، وطبيعة الموقع، وليس على المساحة فقط.",
                },
                {
                    question: "هل يمكن تجربة الرائحة قبل التعاقد؟",
                    answer:
                        "نعم، يمكن توفير عينات أو تجربة ميدانية وفق طبيعة المشروع.",
                },
                {
                    question: "هل تشمل الخدمة الصيانة والتعبئة؟",
                    answer:
                        "في خدمة التعطير الدورية تشمل الخدمة التعبئة، المتابعة، والصيانة حسب الاتفاق.",
                },
                {
                    question: "هل يمكن تصميم رائحة خاصة لعلامتنا؟",
                    answer:
                        "نعم، نوفر خدمة تطوير رائحة خاصة تبدأ من دراسة الهوية وتنتهي باعتماد الرائحة وتطبيقها داخل الموقع.",
                },
            ],
        },

        en: {
            badge: "FAQ",
            title: "Questions You May Have",
            items: [
                {
                    question: "Do I have to buy the device?",
                    answer:
                        "Not necessarily. We offer options that include recurring service or device purchase, depending on your business needs.",
                },
                {
                    question: "I have a device from another company. Can I use your oils?",
                    answer:
                        "Yes, in many cases our oils can be used with existing devices after identifying the device type and operating method.",
                },
                {
                    question: "How do I know which device fits my space?",
                    answer:
                        "The device is selected based on the area, ceiling height, airflow, and site nature, not only the space size.",
                },
                {
                    question: "Can I try the scent before signing?",
                    answer:
                        "Yes, samples or an on-site trial can be provided depending on the nature of the project.",
                },
                {
                    question: "Does the service include maintenance and refilling?",
                    answer:
                        "In recurring scenting service, refilling, follow-up, and maintenance are included according to the agreement.",
                },
                {
                    question: "Can you create a signature scent for our brand?",
                    answer:
                        "Yes, we provide signature scent development, starting from brand identity study and ending with scent approval and application inside the site.",
                },
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="faq"
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

                    <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] leading-tight">
                        {text.title}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {text.items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-[28px] border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "bg-[#FBF7EF] border-[#C0265C]/20 shadow-[0_20px_60px_rgba(192,38,92,0.08)]"
                                        : "bg-white border-[#E9E4DC] hover:border-[#C0265C]/20"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center justify-between gap-5 p-6 text-start"
                                >
                                    <div className="flex items-center gap-4">
                                        <span
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition ${
                                                isOpen
                                                    ? "bg-[#C0265C] text-white"
                                                    : "bg-[#C0265C]/10 text-[#C0265C]"
                                            }`}
                                        >
                                            <HelpCircle size={23} />
                                        </span>

                                        <h3 className="text-lg md:text-xl font-bold text-[#191D2B]">
                                            {item.question}
                                        </h3>
                                    </div>

                                    <ChevronDown
                                        size={24}
                                        className={`text-[#C0265C] shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 md:px-[88px] text-[#191D2B]/65 leading-8">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}