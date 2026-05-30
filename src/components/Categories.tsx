import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const categoryImages = [
  {
    id: 'diffusers',
    image: 'https://west-story.com/cdn/shop/files/8_2_8b284903-6bdf-465a-a94f-f33771195fd5.jpg?v=1750161100&width=1420',
    titleKey: 'categories.diffusers',
  },
  {
    id: 'oils',
    image: 'https://west-story.com/cdn/shop/files/7_1.jpg?v=1750084965&width=1420',
    titleKey: 'categories.oils',
  },
  {
    id: 'fresheners',
    image: 'https://west-story.com/cdn/shop/files/6.jpg?v=1750084161&width=1420',
    titleKey: 'categories.fresheners',
  },
];

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryImages.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="relative group overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={t(category.titleKey)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold text-white mb-4 text-center px-4">
                  {t(category.titleKey)}
                </h3>
                <Button
                  variant="default"
                  className="bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90"
                >
                  {t('categories.orderNow')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
