import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { language, isRTL } = useLanguage();

  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const content = {
    ar: {
      eyebrow: "تواصل معنا",
      title: "ابدأ تجربة التعطير الخاصة بمنشأتك",
      description:
        "فريق ويست ستوري جاهز لمساعدتك في اختيار حلول التعطير المناسبة للمكاتب، الفنادق، المعارض، والمساحات التجارية.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        company: "اسم المنشأة",
        message: "اكتب احتياجك أو نوع المساحة",
        submit: "إرسال الطلب",
      },
      contact: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
      },
      address:
        "حي الملك فيصل، 7549 طريق خالد بن الوليد\nالرياض 13215\nالمملكة العربية السعودية",
      phones: ["+966537229717", "+966920033079"],
      emails: ["info@west-story.com", "CustomerService@west-story.com"],
    },
    en: {
      eyebrow: "Contact Us",
      title: "Start Your Business Scenting Experience",
      description:
        "West Story team is ready to help you choose the right scenting solutions for offices, hotels, showrooms, and commercial spaces.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company Name",
        message: "Tell us about your space or requirement",
        submit: "Submit Request",
      },
      contact: {
        phone: "Phone",
        email: "Email",
        address: "Address",
      },
      address:
        "Al Malik Faisal District, 7549 Khalid bin Al-Waleed Street\nRiyadh 13215\nSaudi Arabia",
      phones: ["+966537229717", "+966920033079"],
      emails: ["info@west-story.com", "CustomerService@west-story.com"],
    },
  };

  const currentContent = content[language];

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

      formDataToSend.append("name", formData.name);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_subject", "New Business Inquiry - West Story");
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/ajax/ibra7em.dev@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
        },
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-24 md:py-36 bg-[#FBF7EF] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0265C]/25 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className={isRTL ? "text-right" : "text-left"}>
            <span className="inline-block mb-5 text-xs tracking-[0.45em] uppercase text-[#C0265C] font-medium">
              {currentContent.eyebrow}
            </span>

            <h2 className="text-4xl md:text-6xl font-light text-[#191D2B] leading-[1.15]">
              {currentContent.title}
            </h2>

            <p className="mt-6 text-base md:text-lg font-light leading-8 text-[#191D2B]/65 max-w-xl">
              {currentContent.description}
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon={Phone}
                title={currentContent.contact.phone}
                isRTL={isRTL}
              >
                {currentContent.phones.map((phone) => (
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
                title={currentContent.contact.email}
                isRTL={isRTL}
              >
                {currentContent.emails.map((email) => (
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
                title={currentContent.contact.address}
                isRTL={isRTL}
              >
                <p className="text-[#191D2B]/65 whitespace-pre-line leading-7">
                  {currentContent.address}
                </p>
              </ContactItem>
            </div>
          </div>

          <div className="rounded-[34px] bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_25px_80px_rgba(25,29,43,0.10)] p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label={currentContent.form.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                isRTL={isRTL}
                required
              />

              <InputField
                label={currentContent.form.company}
                name="company"
                value={formData.company}
                onChange={handleChange}
                isRTL={isRTL}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField
                  label={currentContent.form.phone}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  isRTL={isRTL}
                  required
                />

                <InputField
                  label={currentContent.form.email}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  isRTL={isRTL}
                  required
                />
              </div>

              <div>
                <label
                  className={`block mb-2 text-sm font-light text-[#191D2B]/70 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {currentContent.form.message}
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder={currentContent.form.message}
                  className={`w-full rounded-2xl border border-black/10 bg-[#FBF7EF]/60 px-5 py-4 text-[#191D2B] outline-none transition-all duration-300 focus:border-[#C0265C] focus:bg-white resize-none ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full h-14 rounded-full bg-[#191D2B] text-white text-sm font-normal flex items-center justify-center gap-2 hover:bg-[#C0265C] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? language === "ar"
                    ? "جاري الإرسال..."
                    : "Sending..."
                  : currentContent.form.submit}

                <Send
                  size={17}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              {status === "success" && (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-4 text-center text-green-700 text-sm">
                  {language === "ar"
                    ? "تم إرسال طلبك بنجاح، وسيتم التواصل معك قريبًا."
                    : "Your request has been sent successfully. We will contact you soon."}
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-center text-red-700 text-sm">
                  {language === "ar"
                    ? "حدث خطأ أثناء الإرسال، حاول مرة أخرى."
                    : "Something went wrong. Please try again."}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, children, isRTL }) {
  return (
    <div
      className={`flex gap-4 rounded-3xl bg-white/60 border border-black/5 p-5 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="shrink-0 w-12 h-12 rounded-full border border-[#191D2B]/10 flex items-center justify-center text-[#C0265C]">
        <Icon size={22} strokeWidth={1.5} />
      </div>

      <div>
        <h3 className="text-base font-normal text-[#191D2B] mb-2">{title}</h3>
        <div className="text-sm font-light leading-7">{children}</div>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  isRTL,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label
        className={`block mb-2 text-sm font-light text-[#191D2B]/70 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        className={`w-full h-13 rounded-2xl border border-black/10 bg-[#FBF7EF]/60 px-5 py-4 text-[#191D2B] outline-none transition-all duration-300 focus:border-[#C0265C] focus:bg-white ${
          isRTL ? "text-right" : "text-left"
        }`}
      />
    </div>
  );
}
