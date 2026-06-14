import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    Send,
    Phone,
    Mail,
    MapPin,
    Building2,
    User,
    BriefcaseBusiness,
    Network,
    Ruler,
    AirVent,
    ClipboardList,
    MessageSquareText,
} from "lucide-react";

export default function Contact() {
    const { language, isRTL } = useLanguage();
    const [status, setStatus] = useState("");

    const [formData, setFormData] = useState({
        company: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        activity: "",
        branches: "",
        area: "",
        hasDevices: "",
        service: "",
        message: "",
    });

    const content = {
        ar: {
            badge: "طلب الاستشارة",
            title: "لنبدأ باختيار الحل المناسب لمنشأتك",
            description:
                "شاركنا معلومات بسيطة عن منشأتك، وسيتواصل معك فريقنا لفهم احتياجك وترشيح الجهاز والرائحة والخدمة الأنسب.",
            note:
                "سيتم التواصل معك لمراجعة احتياج المنشأة واقتراح الخطوة المناسبة.",
            submit: "اطلب استشارة",
            sending: "جاري الإرسال...",
            success: "تم إرسال طلبك بنجاح، وسيتم التواصل معك قريبًا.",
            error: "حدث خطأ أثناء الإرسال، حاول مرة أخرى.",
            contact: {
                phone: "الهاتف",
                email: "البريد الإلكتروني",
                address: "العنوان",
            },
            phones: ["+966537229717", "+966920033079"],
            emails: ["info@west-story.com", "CustomerService@west-story.com"],
            address:
                "حي الملك فيصل، 7549 طريق خالد بن الوليد\nالرياض 13215\nالمملكة العربية السعودية",
            fields: {
                company: "اسم المنشأة",
                name: "اسم المسؤول",
                phone: "رقم الجوال",
                email: "البريد الإلكتروني",
                city: "المدينة",
                activity: "نوع النشاط",
                branches: "عدد الفروع",
                area: "المساحة التقريبية",
                hasDevices: "هل توجد أجهزة حاليًا؟",
                service: "نوع الخدمة المطلوبة",
                message: "تفاصيل إضافية",
            },
            options: {
                hasDevices: ["نعم", "لا", "غير متأكد"],
                services: [
                    "خدمة التعطير الدورية",
                    "شراء أجهزة التعطير",
                    "توريد الزيوت العطرية",
                    "تغيير الرائحة أو المورد الحالي",
                    "تصميم رائحة خاصة",
                ],
            },
        },

        en: {
            badge: "Consultation Request",
            title: "Let’s Choose the Right Solution for Your Business",
            description:
                "Share simple information about your business, and our team will contact you to understand your needs and recommend the most suitable device, scent, and service.",
            note:
                "We will contact you to review your business needs and suggest the next suitable step.",
            submit: "Request Consultation",
            sending: "Sending...",
            success:
                "Your request has been sent successfully. We will contact you soon.",
            error: "Something went wrong. Please try again.",
            contact: {
                phone: "Phone",
                email: "Email",
                address: "Address",
            },
            phones: ["+966537229717", "+966920033079"],
            emails: ["info@west-story.com", "CustomerService@west-story.com"],
            address:
                "Al Malik Faisal District, 7549 Khalid bin Al-Waleed Street\nRiyadh 13215\nSaudi Arabia",
            fields: {
                company: "Business Name",
                name: "Contact Person",
                phone: "Mobile Number",
                email: "Email Address",
                city: "City",
                activity: "Business Activity",
                branches: "Number of Branches",
                area: "Approximate Area",
                hasDevices: "Do you currently have devices?",
                service: "Required Service Type",
                message: "Additional Details",
            },
            options: {
                hasDevices: ["Yes", "No", "Not Sure"],
                services: [
                    "Recurring Scenting Service",
                    "Buying Scent Diffusers",
                    "Essential Oil Supply",
                    "Replace Current Scent or Supplier",
                    "Signature Scent Creation",
                ],
            },
        },
    };

    const text = content[language] || content.en;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStatus("");

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const formDataToSend = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            formDataToSend.append(
                "_subject",
                "New Consultation Request - West Story"
            );
            formDataToSend.append("_captcha", "false");
            formDataToSend.append("_template", "table");

            const response = await fetch(
                "https://formsubmit.co/ajax/ibra7em.dev@gmail.com",
                {
                    method: "POST",
                    body: formDataToSend,
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus("success");
                setFormData({
                    company: "",
                    name: "",
                    phone: "",
                    email: "",
                    city: "",
                    activity: "",
                    branches: "",
                    area: "",
                    hasDevices: "",
                    service: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputFields = [
        { name: "company", icon: Building2, type: "text", required: true },
        { name: "name", icon: User, type: "text", required: true },
        { name: "phone", icon: Phone, type: "tel", required: true },
        { name: "email", icon: Mail, type: "email", required: true },
        { name: "city", icon: MapPin, type: "text" },
        { name: "activity", icon: BriefcaseBusiness, type: "text" },
        { name: "branches", icon: Network, type: "number" },
        { name: "area", icon: Ruler, type: "text" },
    ];

    return (
        <section
            id="consultation"
            dir={isRTL ? "rtl" : "ltr"}
            className="relative py-24 bg-[#FBF7EF] overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#C0265C]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
                        <span className="inline-flex px-5 py-2 rounded-full bg-white text-[#C0265C] text-sm font-semibold shadow-sm mb-5">
                            {text.badge}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#191D2B] mb-6 leading-tight">
                            {text.title}
                        </h2>

                        <p className="text-base md:text-lg text-[#191D2B]/65 leading-8 mb-8">
                            {text.description}
                        </p>

                        <div className="space-y-4">
                            <ContactItem
                                icon={Phone}
                                title={text.contact.phone}
                            >
                                {text.phones.map((phone) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone}`}
                                        className="block text-[#191D2B]/65 hover:text-[#C0265C] transition"
                                    >
                                        {phone}
                                    </a>
                                ))}
                            </ContactItem>

                            <ContactItem
                                icon={Mail}
                                title={text.contact.email}
                            >
                                {text.emails.map((email) => (
                                    <a
                                        key={email}
                                        href={`mailto:${email}`}
                                        className="block text-[#191D2B]/65 hover:text-[#C0265C] transition break-all"
                                    >
                                        {email}
                                    </a>
                                ))}
                            </ContactItem>

                            <ContactItem
                                icon={MapPin}
                                title={text.contact.address}
                            >
                                <p className="text-[#191D2B]/65 whitespace-pre-line leading-7">
                                    {text.address}
                                </p>
                            </ContactItem>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-[40px] bg-white border border-[#E9E4DC] p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.07)]"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                {inputFields.map((field) => (
                                    <FormInput
                                        key={field.name}
                                        field={field}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={text.fields[field.name]}
                                        isRTL={isRTL}
                                    />
                                ))}

                                <FormSelect
                                    name="hasDevices"
                                    icon={AirVent}
                                    value={formData.hasDevices}
                                    onChange={handleChange}
                                    placeholder={text.fields.hasDevices}
                                    options={text.options.hasDevices}
                                    isRTL={isRTL}
                                />

                                <FormSelect
                                    name="service"
                                    icon={ClipboardList}
                                    value={formData.service}
                                    onChange={handleChange}
                                    placeholder={text.fields.service}
                                    options={text.options.services}
                                    isRTL={isRTL}
                                />
                            </div>

                            <div className="relative mt-4">
                                <MessageSquareText
                                    size={19}
                                    className={`absolute top-5 text-[#C0265C] ${isRTL ? "right-4" : "left-4"
                                        }`}
                                />

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={text.fields.message}
                                    rows={5}
                                    className={`w-full rounded-2xl bg-[#FBF7EF] border border-[#E9E4DC] outline-none focus:border-[#C0265C]/50 text-[#191D2B] placeholder:text-[#191D2B]/45 resize-none py-4 ${isRTL
                                            ? "pr-12 pl-4 text-right"
                                            : "pl-12 pr-4 text-left"
                                        }`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="mt-6 w-full h-14 rounded-full bg-[#C0265C] text-white font-semibold flex items-center justify-center gap-3 shadow-[0_15px_35px_rgba(192,38,92,0.25)] hover:bg-[#191D2B] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "sending"
                                    ? text.sending
                                    : text.submit}

                                <Send size={18} />
                            </button>

                            {status === "success" && (
                                <div className="mt-5 rounded-2xl bg-green-50 border border-green-200 p-4 text-center text-green-700 text-sm">
                                    {text.success}
                                </div>
                            )}

                            {status === "error" && (
                                <div className="mt-5 rounded-2xl bg-red-50 border border-red-200 p-4 text-center text-red-700 text-sm">
                                    {text.error}
                                </div>
                            )}

                            <p className="text-center text-sm text-[#191D2B]/55 leading-7 mt-5">
                                {text.note}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon: Icon, title, children }) {
    return (
        <div className="flex gap-4 rounded-3xl bg-white border border-[#E9E4DC] p-5 shadow-sm">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#C0265C]/10 flex items-center justify-center text-[#C0265C]">
                <Icon size={22} />
            </div>

            <div>
                <h3 className="text-base font-bold text-[#191D2B] mb-2">
                    {title}
                </h3>
                <div className="text-sm leading-7">{children}</div>
            </div>
        </div>
    );
}

function FormInput({ field, value, onChange, placeholder, isRTL }) {
    const Icon = field.icon;

    return (
        <div className="relative">
            <Icon
                size={19}
                className={`absolute top-1/2 -translate-y-1/2 text-[#C0265C] ${isRTL ? "right-4" : "left-4"
                    }`}
            />

            <input
                type={field.type}
                name={field.name}
                value={value}
                onChange={onChange}
                required={field.required}
                placeholder={placeholder}
                className={`w-full h-14 rounded-2xl bg-[#FBF7EF] border border-[#E9E4DC] outline-none focus:border-[#C0265C]/50 text-[#191D2B] placeholder:text-[#191D2B]/45 ${isRTL ? "pr-12 pl-4 text-right" : "pl-12 pr-4 text-left"
                    }`}
            />
        </div>
    );
}

function FormSelect({
    name,
    icon: Icon,
    value,
    onChange,
    placeholder,
    options,
    isRTL,
}) {
    return (
        <div className="relative">
            <Icon
                size={19}
                className={`absolute top-1/2 -translate-y-1/2 text-[#C0265C] ${isRTL ? "right-4" : "left-4"
                    }`}
            />

            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full h-14 rounded-2xl bg-[#FBF7EF] border border-[#E9E4DC] outline-none focus:border-[#C0265C]/50 text-[#191D2B] ${isRTL ? "pr-12 pl-4 text-right" : "pl-12 pr-4 text-left"
                    }`}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}