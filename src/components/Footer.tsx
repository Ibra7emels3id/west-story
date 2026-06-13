import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Music,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  ShieldCheck,
  FileText,
} from "lucide-react";

const footerLinks = [
  { titleKey: "footer.about", href: "#about" },
  { titleKey: "footer.why", href: "#why" },
  { titleKey: "footer.contact", href: "#contact" },
  { titleKey: "footer.faq", href: "#faq" },
  { titleKey: "footer.stores", href: "#locations" },
  { titleKey: "footer.news", href: "#products" },
];

const socialLinks = [
  { icon: Twitter, href: "https://x.com/wsperfuming", label: "Twitter" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/weststoryperfuming/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/wsperfuming/",
    label: "Instagram",
  },
  { icon: Music, href: "https://www.tiktok.com/@wsperfuming", label: "TikTok" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@wsperfuming",
    label: "YouTube",
  },
];

const paymentLogos = [
  {
    src: "https://cdn.niceonesa.com/web/assets_v2/images/mada.svg?v=2.5.6_2",
    alt: "Mada",
  },
  {
    src: "https://cdn.niceonesa.com/web/assets_v2/images/visa.svg?v=2.5.6_2",
    alt: "Visa",
  },
  {
    src: "https://cdn.niceonesa.com/web/assets_v2/images/master-card.svg?v=2.5.6_2",
    alt: "Mastercard",
  },
  {
    src: "https://cdn.niceonesa.com/web/assets_v2/images/tamara.png?v=2.5.6_2",
    alt: "Tamara",
  },
  {
    src: "https://cdn.niceonesa.com/web/assets_v2/images/express-pay.svg?v=2.5.6_2",
    alt: "Apple Pay",
  },
  {
    src: "https://cdn.niceonesa.com/web/assets_v2/images/tabby.svg?v=2.5.6_2",
    alt: "Tabby",
  },
];

export default function Footer() {
  const { t, language, isRTL } = useLanguage();

  const content = {
    ar: {
      description:
        "ويست ستوري تقدم حلول تعطير احترافية للمنشآت، الفنادق، المكاتب، المعارض، والمساحات التجارية.",
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      legal: "معلومات الشركة",
      payments: "طرق الدفع",
      cr: "السجل التجاري",
      vat: "شهادة ضريبة القيمة المضافة",
      crNumber: "1010291140",
      vatNumber: "310666842100003",
      email: "info@west-story.com",
      phone: "+966537229717",
      address: "الرياض، المملكة العربية السعودية",
      copyright: "جميع الحقوق محفوظة.",
    },
    en: {
      description:
        "West Story provides professional scenting solutions for businesses, hotels, offices, showrooms, and commercial spaces.",
      quickLinks: "Quick Links",
      contact: "Contact",
      legal: "Company Information",
      payments: "Payment Methods",
      cr: "Commercial Registration",
      vat: "VAT Certificate",
      crNumber: "1010291140",
      vatNumber: "310666842100003",
      email: "info@west-story.com",
      phone: "+966537229717",
      address: "Riyadh, Saudi Arabia",
      copyright: "All rights reserved.",
    },
  };

  const current = content[language];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative bg-[#191D2B] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0265C]/60 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C0265C]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] gap-12">
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-3xl md:text-4xl font-light tracking-wide">
              West Story
            </h3>

            <div className="w-16 h-px bg-[#C0265C] mt-5 mb-6" />

            <p className="max-w-md text-sm md:text-base font-light leading-8 text-white/65">
              {current.description}
            </p>

            <div className="flex gap-3 mt-7">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#C0265C] hover:border-[#C0265C] transition-all duration-300"
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="text-lg font-normal mb-6">{current.quickLinks}</h4>

            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-[#C0265C] transition-colors duration-300"
                  >
                    {t(link.titleKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="text-lg font-normal mb-6">{current.contact}</h4>

            <div className="space-y-4 text-sm font-light text-white/60">
              <a
                href={`tel:${current.phone}`}
                className="flex items-center gap-3 hover:text-[#C0265C] transition"
              >
                <Phone size={17} strokeWidth={1.5} />
                <span>{current.phone}</span>
              </a>

              <a
                href={`mailto:${current.email}`}
                className="flex items-center gap-3 hover:text-[#C0265C] transition break-all"
              >
                <Mail size={17} strokeWidth={1.5} />
                <span>{current.email}</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={17} strokeWidth={1.5} />
                <span>{current.address}</span>
              </div>
            </div>
          </div>

          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="text-lg font-normal mb-6">{current.legal}</h4>

            <div className="space-y-4">
              <InfoBox
                Icon={FileText}
                label={current.cr}
                value={current.crNumber}
              />
              <InfoBox
                Icon={ShieldCheck}
                label={current.vat}
                value={current.vatNumber}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-auto">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <CreditCard size={18} className="text-[#C0265C]" />
                <span className="text-sm font-light text-white/70">
                  {current.payments}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {paymentLogos.map((payment) => (
                  <div
                    key={payment.alt}
                    className="h-12 w-20 rounded-xl bg-white flex items-center justify-center p-3 border border-white/10 hover:border-[#C0265C]/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={payment.src}
                      alt={payment.alt}
                      className="max-h-7 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-light text-white/45 text-center">
              © {new Date().getFullYear()} West Story. {current.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InfoBox({ Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3 text-white/75">
        <Icon size={18} strokeWidth={1.5} className="text-[#C0265C]" />
        <span className="text-sm font-light">{label}</span>
      </div>

      <p className="mt-2 text-sm tracking-wide text-white/55">{value}</p>
    </div>
  );
}
