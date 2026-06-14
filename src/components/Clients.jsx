import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
    { name: "B FIT", logo: "/Images/logo_clints/1.jpg" },
    { name: "Hilton", logo: "/Images/logo_clints/2.jpg" },
    { name: "Mövenpick", logo: "/Images/logo_clints/3.jpg" },
    { name: "AlRashed", logo: "/Images/logo_clints/Ail.jpg" },
    { name: "Royal Commission for AlUla", logo: "/Images/logo_clints/Alh.jpg" },
    { name: "Al Othaim", logo: "/Images/logo_clints/Alos.jpg" },
    { name: "Al Rajhi Bank", logo: "/Images/logo_clints/Alrajhi.jpg" },
    { name: "Al Romansiah", logo: "/Images/logo_clints/Alrom.jpg" },
    { name: "Art View Hotel", logo: "/Images/logo_clints/Art.jpg" },
    { name: "Cenomi", logo: "/Images/logo_clints/cen.jpg" },
    { name: "Taiba Hotel", logo: "/Images/logo_clints/Hotal.jpg" },
    { name: "Jeddah", logo: "/Images/logo_clints/jed.jpg" },
    { name: "Optimo", logo: "/Images/logo_clints/OPTIMO.jpg" },
    { name: "Riyadh Gallery", logo: "/Images/logo_clints/riyadh gallery.jpg" },
    { name: "SABB", logo: "/Images/logo_clints/sab.jpg" },
    { name: "SRACO", logo: "/Images/logo_clints/sraco.jpg" },
    { name: "Thakher", logo: "/Images/logo_clints/Tha.jpg" },
    { name: "VOX Cinemas", logo: "/Images/logo_clints/vox.jpg" },
];

export default function Clients() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "أبرز العملاء",
            title: "ثقة بنتها سنوات من العمل",
            description:
                "نفخر بخدمة مجموعة من العلامات التجارية والمنشآت في قطاعات متعددة، وتقديم حلول تعطير تتناسب مع هوية كل مكان وطبيعة زواره.",
        },
        en: {
            badge: "Featured Clients",
            title: "Trust Built Over Years of Work",
            description:
                "We are proud to serve a wide range of brands and businesses across multiple sectors, delivering scenting solutions that match each place’s identity and visitors.",
        },
    };

    const text = content[language] || content.en;

    // نكرر اللوجوهات 3 مرات لضمان عدم وجود فراغ
    const sliderClients = [...clients, ...clients, ...clients];

    return (
        <section
            id="clients"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 overflow-hidden bg-[#FBF7EF]"
        >
            <style>
                {`
                @keyframes clientsScroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-33.333%);
                    }
                }

                .clients-slider {
                    display: flex;
                    width: max-content;
                    animation: clientsScroll 40s linear infinite;
                    will-change: transform;
                }

                .clients-slider:hover {
                    animation-play-state: paused;
                }
            `}
            </style>

            <div className="absolute top-0 left-0 w-72 h-72 bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#191D2B]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C0265C] shadow-sm mb-5">
                        {text.badge}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                        {text.title}
                    </h2>

                    <p className="text-base md:text-lg text-[#191D2B]/65 leading-8">
                        {text.description}
                    </p>
                </div>

                {/* السلايدر دايماً LTR علشان الأنيميشن */}
                <div className="relative overflow-hidden" dir="ltr">
                    <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-24 bg-gradient-to-r from-[#FBF7EF] to-transparent" />
                    <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-24 bg-gradient-to-l from-[#FBF7EF] to-transparent" />

                    <div className="clients-slider gap-5 mb-4">
                        {sliderClients.map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="group w-44 md:w-52 h-32 rounded-3xl bg-white/90 backdrop-blur-xl border border-white shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex items-center justify-center p-6 shrink-0 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-300"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-24 max-w-full object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}