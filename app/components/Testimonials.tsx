export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير شركة تقنية",
      content: "WimPay غيرت طريقة تعاملنا مع المدفوعات. السرعة والأمان ممتازان، وأسعارهم منافسة جداً.",
      rating: 5,
      avatar: "AM"
    },
    {
      name: "فاطمة علي",
      role: "مستثمرة",
      content: "أستخدم WimPay منذ عامين للاستثمارات الرقمية. المنصة سهلة الاستخدام والنتائج ممتازة.",
      rating: 5,
      avatar: "FA"
    },
    {
      name: "محمد حسن",
      role: "مطور برمجيات",
      content: "API الخاص بـ WimPay ممتاز للتكامل مع تطبيقاتنا. الدعم الفني سريع ومفيد.",
      rating: 5,
      avatar: "MH"
    },
    {
      name: "سارة أحمد",
      role: "رائدة أعمال",
      content: "خدمة تحويل الأموال الدولية سريعة وآمنة. أوصي بها لجميع رواد الأعمال.",
      rating: 5,
      avatar: "SA"
    },
    {
      name: "علي محمود",
      role: "محاسب",
      content: "التقارير المالية مفصلة ومفيدة. ساعدتني في إدارة ميزانية الشركة بكفاءة.",
      rating: 5,
      avatar: "AM"
    },
    {
      name: "نور الدين",
      role: "طالب جامعي",
      content: "أفضل منصة دفع للطلاب. الرسوم منخفضة والخدمة متاحة 24/7.",
      rating: 5,
      avatar: "ND"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            انضم إلى آلاف العملاء الراضين الذين يثقون بـ WimPay لمعاملاتهم المالية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-800 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="mr-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-700">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            يثق بنا عملاء من جميع أنحاء العالم
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Visa</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Mastercard</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">PayPal</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">Stripe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 