import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    Hotel,
    Store,
    Building2,
    Landmark,
    Utensils,
    Dumbbell,
    Car,
    ShoppingBag,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
} from "lucide-react";

const icons = [
    Hotel,
    Store,
    Building2,
    ShoppingBag,
    Landmark,
    Utensils,
    Dumbbell,
    Car,
];

export default function Sectors() {
    const { language, isRTL } = useLanguage();

    const content = {
        ar: {
            badge: "القطاعات",
            title: "لكل قطاع رائحته المناسبة",
            description:
                "تختلف طبيعة الرائحة المناسبة باختلاف المكان، ونوع الزوار، والمدة التي يقضونها داخله. لذلك نصمم حلولنا وفق طبيعة كل قطاع، وليس وفق اختيار عشوائي لرائحة واحدة تناسب الجميع.",
            button: "اختر قطاعك",
            cardTitle: "نبدأ من طبيعة المكان",
            cardDescription:
                "نحدد الرائحة المناسبة بناءً على نوع القطاع، مساحة المكان، حركة الزوار، وطبيعة التجربة التي تريد أن تتركها في أذهانهم.",
            points: ["حلول مخصصة", "تجربة عطرية مدروسة", "توريد ومتابعة دورية"],
            items: [
                ["الفنادق والضيافة", "روائح تعزز الإحساس بالراحة، الفخامة، وحسن الاستقبال."],
                ["المتاجر والمعارض", "رائحة تدعم هوية العلامة وتجعل تجربة التسوق أكثر تميزًا."],
                ["الشركات والمكاتب", "أجواء أكثر راحة واحترافية للموظفين والزوار."],
                ["المولات والمراكز التجارية", "حلول مناسبة للمساحات الكبيرة والمداخل والممرات."],
                ["البنوك والمؤسسات المالية", "روائح هادئة تعكس الثقة، الجودة، والاحترافية."],
                ["المطاعم والمقاهي", "حلول مدروسة تراعي طبيعة المكان ولا تتعارض مع تجربة الطعام."],
                ["النوادي والمراكز الصحية", "روائح تمنح إحساسًا بالنظافة، النشاط، والانتعاش."],
                ["صالات السيارات", "رائحة تعزز فخامة العرض وتجربة العميل داخل الصالة."],
            ],
        },

        en: {
            badge: "Sectors",
            title: "Every Sector Has Its Ideal Scent",
            description:
                "The right scent differs depending on the place, visitor type, and the time they spend inside. That is why we design our solutions based on each sector’s nature, not a random fragrance that fits everyone.",
            button: "Choose Your Sector",
            cardTitle: "We Start With the Nature of Your Space",
            cardDescription:
                "We define the right scent based on your sector, space size, visitor flow, and the experience you want people to remember.",
            points: ["Tailored solutions", "Thoughtful scent experience", "Supply & regular follow-up"],
            items: [
                ["Hotels & Hospitality", "Scents that enhance comfort, luxury, and a welcoming atmosphere."],
                ["Stores & Showrooms", "A scent that supports brand identity and makes shopping more memorable."],
                ["Companies & Offices", "A more comfortable and professional atmosphere for employees and visitors."],
                ["Malls & Commercial Centers", "Solutions suitable for large spaces, entrances, and walkways."],
                ["Banks & Financial Institutions", "Calm scents that reflect trust, quality, and professionalism."],
                ["Restaurants & Cafés", "Designed solutions that respect the nature of the place and do not conflict with the dining experience."],
                ["Gyms & Wellness Centers", "Scents that create a feeling of cleanliness, energy, and freshness."],
                ["Car Showrooms", "A scent that enhances showroom luxury and the customer experience."],
            ],
        },
    };

    const text = content[language] || content.en;

    return (
        <section
            id="sectors"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-[#FBF7EF] overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#C0265C]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[#191D2B]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <span className="inline-flex px-5 py-2 rounded-full bg-white text-[#C0265C] text-sm font-semibold shadow-sm mb-5">
                        {text.badge}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                        {text.title}
                    </h2>

                    <p className="text-base md:text-lg text-[#191D2B]/65 leading-8">
                        {text.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-4 rounded-[36px] bg-white text-[#191D2B] p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.07)] border border-[#E9E4DC]">
                        <div className="w-16 h-16 rounded-3xl bg-[#C0265C]/10 text-[#C0265C] flex items-center justify-center mb-7">
                            <Hotel size={32} />
                        </div>

                        <h3 className="text-3xl font-bold mb-5 leading-tight">
                            {text.cardTitle}
                        </h3>

                        <p className="text-[#191D2B]/65 leading-8 mb-8">
                            {text.cardDescription}
                        </p>

                        <div className="space-y-4 mb-9">
                            {text.points.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2
                                        className="text-[#C0265C] shrink-0"
                                        size={21}
                                    />
                                    <span className="font-medium text-[#191D2B]">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#consultation"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C0265C] px-7 py-4 text-white font-semibold shadow-[0_15px_35px_rgba(192,38,92,0.25)] hover:bg-[#191D2B] transition-all duration-300"
                        >
                            {text.button}
                            {isRTL ? (
                                <ArrowLeft size={18} />
                            ) : (
                                <ArrowRight size={18} />
                            )}
                        </a>
                    </div>

                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
                        {text.items.map(([title, description], index) => {
                            const Icon = icons[index];

                            return (
                                <div
                                    key={title}
                                    className="group relative overflow-hidden rounded-[30px] bg-white border border-[#E9E4DC] p-7 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-[#C0265C]/25 hover:shadow-[0_25px_60px_rgba(192,38,92,0.12)] transition-all duration-500"
                                >
                                    <div className="absolute -top-10 -end-10 w-28 h-28 rounded-full bg-[#C0265C]/10 blur-2xl group-hover:bg-[#C0265C]/20 transition" />

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-[#C0265C]/10 text-[#C0265C] flex items-center justify-center mb-6 group-hover:bg-[#C0265C] group-hover:text-white transition-all duration-300">
                                            <Icon size={27} />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#191D2B] mb-3">
                                            {title}
                                        </h3>

                                        <p className="text-[#191D2B]/65 leading-7">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
