import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Truck, Smile, Droplet } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    titleKey: 'features.quality',
    descKey: 'features.qualityDesc',
    color: 'text-primary',
  },
  {
    icon: Droplet,
    titleKey: 'features.experience',
    descKey: 'features.experienceDesc',
    color: 'text-secondary',
  },
  {
    icon: Truck,
    titleKey: 'features.shipping',
    descKey: 'features.shippingDesc',
    color: 'text-accent',
  },
  {
    icon: Smile,
    titleKey: 'features.guarantee',
    descKey: 'features.guaranteeDesc',
    color: 'text-primary',
  },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className={`mb-4 p-4 rounded-full bg-muted ${feature.color}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
