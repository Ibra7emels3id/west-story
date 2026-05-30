import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube, Music } from 'lucide-react';

const footerLinks = [
  { titleKey: 'footer.about', href: '#' },
  { titleKey: 'footer.why', href: '#' },
  { titleKey: 'footer.contact', href: '#' },
  { titleKey: 'footer.faq', href: '#' },
  { titleKey: 'footer.stores', href: '#' },
  { titleKey: 'footer.news', href: '#' },
];

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/wsperfuming', label: 'Twitter' },
  { icon: Facebook, href: 'https://www.facebook.com/weststoryperfuming/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/wsperfuming/', label: 'Instagram' },
  { icon: Music, href: 'https://www.tiktok.com/@wsperfuming', label: 'TikTok' },
  { icon: Youtube, href: 'https://www.youtube.com/@wsperfuming', label: 'YouTube' },
];

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className={`${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-2xl font-bold mb-4">West Story</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              روائح عطرية طبيعية من أفضل المصادر العالمية
            </p>
          </div>

          {/* Links Section */}
          <div className={`${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <h4 className="font-semibold mb-4 text-lg">روابط سريعة</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200 text-sm"
                  >
                    {t(link.titleKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={`${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <h4 className="font-semibold mb-4 text-lg">تواصل معنا</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>البريد الإلكتروني: info@weststory.com</p>
              <p>الهاتف: +966 XX XXX XXXX</p>
              <p>المملكة العربية السعودية</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-background" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-background/60">
            © 2024 West Story. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
