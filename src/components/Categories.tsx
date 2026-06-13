import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const categoryImages = [
  {
    id: "oils",
    image:
      "https://west-story.com/cdn/shop/files/7_1.jpg?v=1750084965&width=1420",
    titleKey: "categories.oils",
  },
  {
    id: "diffusers",
    image:
      "https://west-story.com/cdn/shop/files/8_2_8b284903-6bdf-465a-a94f-f33771195fd5.jpg?v=1750161100&width=1420",
    titleKey: "categories.diffusers",
  },
  {
    id: "fresheners",
    image:
      "https://west-story.com/cdn/shop/files/6.jpg?v=1750084161&width=1420",
    titleKey: "categories.fresheners",
  },
];

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-[#FBF7EF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C0265C] uppercase tracking-[5px] text-xs md:text-sm font-medium">
            WEST STORY
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-[#191D2B]">
            {t("categories.title")}
          </h2>

          <div className="w-20 h-[2px] bg-[#C0265C] mx-auto mt-6 rounded-full" />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categoryImages.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="relative group overflow-hidden rounded-[30px] h-[500px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={t(category.titleKey)}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Border Effect */}
              <div className="absolute inset-0 border border-white/10 rounded-[30px]" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="text-white text-3xl md:text-4xl font-light mb-5">
                  {t(category.titleKey)}
                </h3>

                <Button
                  className="
                    h-12
                    px-7
                    rounded-full
                    bg-white
                    text-[#191D2B]
                    font-medium
                    shadow-lg
                    hover:bg-[#C0265C]
                    hover:text-white
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  {t("categories.orderNow")}
                </Button>
              </div>

              {/* Shine Effect */}
              <div
                className="
                  absolute
                  top-0
                  -left-[120%]
                  w-[60%]
                  h-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  skew-x-12
                  group-hover:left-[130%]
                  transition-all
                  duration-1000
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
