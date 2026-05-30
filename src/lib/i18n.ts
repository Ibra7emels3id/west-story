export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    nav: {
      diffusers: 'أجهزة التعطير',
      oils: 'الزيوت العطرية',
      fresheners: 'معطرات المفارش',
      special: 'المنتجات الخاصة',
      business: 'الأعمال',
      cart: 'السلة',
      login: 'تسجيل الدخول',
    },
    // Hero Section
    hero: {
      title: 'زيوت عطرية طبيعية',
      subtitle: 'اكتشف جودة عطرية ممتازة من الطبيعة',
      description: 'نقية وفريدة ومستوحاة من الطبيعة',
      cta: 'اطلب الآن',
    },
    // Features Section
    features: {
      quality: 'أجهزة عالية الجودة',
      qualityDesc: 'تم تصنيعها بعناية وبناؤها لتدوم طويلاً - تجمع موزعاتنا بين الوظيفة والتصميم الأنيق',
      experience: 'تجربة غنية بالروائح العطرية',
      experienceDesc: 'استمتع بمميزات الزيوت العطرية - من الاسترخاء إلى التركيز - مع كل نفس',
      shipping: 'شحن سريع وموثوق',
      shippingDesc: 'نحن نقوم بالتسليم في جميع أنحاء المملكة بسرعة وأمان، مباشرة إلى باب منزلك',
      guarantee: 'ضمان رضا العملاء',
      guaranteeDesc: 'رضاكم هو أولويتنا – نحن هنا لدعمكم في كل خطوة على الطريق',
    },
    // Categories
    categories: {
      diffusers: 'أجهزة التعطير',
      oils: 'الزيوت العطرية',
      fresheners: 'معطرات المفارش',
      orderNow: 'اطلب الآن',
    },
    // Products Section
    products: {
      title: 'روائح مستخدمة في مراكز التسوق والمنتجعات',
      sale: 'خصم',
      regularPrice: 'السعر العادي',
      salePrice: 'سعر البيع',
      from: 'من',
    },
    // Scents
    scents: {
      flowers: 'روائح الزهور الناعمة',
      fruits: 'روائح فواكه وحلويات',
      citrus: 'روائح حمضيات وانتعاش',
      oriental: 'الروائح الخشبية والشرقية',
    },
    // Locations
    locations: {
      title: 'روائحنا في',
      malls: 'مراكز التسوق',
      resorts: 'المنتجعات',
      spa: 'منتجع صحي',
      offices: 'المكاتب',
      hotels: 'الفنادق',
      mosques: 'المساجد',
      viewAll: 'عرض الكل',
    },
    // Footer
    footer: {
      about: 'من نحن',
      why: 'لماذا نحن',
      contact: 'تواصل معنا',
      faq: 'الأسئلة الشائعة',
      stores: 'فروعنا',
      news: 'اخبار ويست ستوري',
      followUs: 'تابعنا على',
    },
    // Common
    common: {
      search: 'ابحث',
      language: 'العربية',
      country: 'المملكة العربية السعودية',
      currency: 'ر.س',
    },
  },
  en: {
    // Navigation
    nav: {
      diffusers: 'Diffusers',
      oils: 'Essential Oils',
      fresheners: 'Fresheners',
      special: 'Special Collection',
      business: 'Business',
      cart: 'Cart',
      login: 'Login',
    },
    // Hero Section
    hero: {
      title: 'Natural Essential Oils',
      subtitle: 'Discover premium fragrance quality from nature',
      description: 'Pure, unique and inspired by nature',
      cta: 'Order Now',
    },
    // Features Section
    features: {
      quality: 'Premium Quality Devices',
      qualityDesc: 'Carefully crafted and built to last - our diffusers combine functionality with elegant design',
      experience: 'Rich Fragrance Experience',
      experienceDesc: 'Enjoy the benefits of essential oils - from relaxation to focus - with every breath',
      shipping: 'Fast & Reliable Shipping',
      shippingDesc: 'We deliver throughout the kingdom quickly and safely, directly to your doorstep',
      guarantee: 'Customer Satisfaction Guarantee',
      guaranteeDesc: 'Your satisfaction is our priority - we are here to support you every step of the way',
    },
    // Categories
    categories: {
      diffusers: 'Diffusers',
      oils: 'Essential Oils',
      fresheners: 'Fresheners',
      orderNow: 'Order Now',
    },
    // Products Section
    products: {
      title: 'Fragrances Used in Shopping Centers and Resorts',
      sale: 'Sale',
      regularPrice: 'Regular Price',
      salePrice: 'Sale Price',
      from: 'From',
    },
    // Scents
    scents: {
      flowers: 'Soft Floral Scents',
      fruits: 'Fruity & Sweet Scents',
      citrus: 'Citrus & Fresh Scents',
      oriental: 'Woody & Oriental Scents',
    },
    // Locations
    locations: {
      title: 'Our Fragrances In',
      malls: 'Shopping Centers',
      resorts: 'Resorts',
      spa: 'Spa Resort',
      offices: 'Offices',
      hotels: 'Hotels',
      mosques: 'Mosques',
      viewAll: 'View All',
    },
    // Footer
    footer: {
      about: 'About Us',
      why: 'Why Us',
      contact: 'Contact Us',
      faq: 'FAQ',
      stores: 'Our Stores',
      news: 'West Story News',
      followUs: 'Follow Us',
    },
    // Common
    common: {
      search: 'Search',
      language: 'English',
      country: 'Saudi Arabia',
      currency: 'SAR',
    },
  },
};

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
}
