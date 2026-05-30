import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { language, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const content = {
    ar: {
      title: 'اتصل بنا',
      description: 'يسعدنا دائمًا استقبال اقتراحاتكم واستفساراتكم',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'الرسالة',
        submit: 'إرسال',
      },
      contact: {
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
      },
      address: 'حي الملك فيصل، 7549 طريق خالد بن الوليد\nالرياض 13215\nالمملكة العربية السعودية',
      phones: ['+966537229717', '+966920033079'],
      emails: ['info@west-story.com', 'CustomerService@west-story.com'],
    },
    en: {
      title: 'Contact Us',
      description: 'We\'re always happy to receive your suggestions and inquiries',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send',
      },
      contact: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
      },
      address: 'Al Malik Faisal District, 7549 Khalid bin Al-Waleed Street\nRiyadh 13215\nSaudi Arabia',
      phones: ['+966537229717', '+966920033079'],
      emails: ['info@west-story.com', 'CustomerService@west-story.com'],
    },
  };

  const currentContent = content[language as keyof typeof content];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {currentContent.title}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {currentContent.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {currentContent.contact.phone}
                </h3>
                {currentContent.phones.map((phone, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {currentContent.contact.email}
                </h3>
                {currentContent.emails.map((email, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {currentContent.contact.address}
                </h3>
                <p className={`text-muted-foreground whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
                  {currentContent.address}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {currentContent.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder={currentContent.form.name}
                />
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {currentContent.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder={currentContent.form.email}
                />
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {currentContent.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder={currentContent.form.phone}
                />
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {currentContent.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                  placeholder={currentContent.form.message}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
              >
                {currentContent.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
