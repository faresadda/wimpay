
import Link from "next/link";
import Header from "../components/Header";
import { HiArrowRight, HiDocumentText, HiCurrencyDollar, HiCreditCard, HiLightningBolt, HiOfficeBuilding, HiChartBar } from "react-icons/hi";

export default function ServicesPage() {
  const services = [
    {
      title: "تحويل الأموال",
      description: "تحويل سريع وآمن للأموال محلياً ودولياً بأقل الرسوم",
      icon: <HiArrowRight className="w-10 h-10 text-blue-600" />,
      features: [
        "تحويل فوري خلال ثوانٍ",
        "رسوم منخفضة تصل إلى 1%",
        "دعم أكثر من 50 دولة",
        "تتبع المعاملات في الوقت الفعلي",
      ],
      price: "من 5 ريال",
      popular: true,
    },
    {
      title: "دفع الفواتير",
      description: "دفع جميع أنواع الفواتير بسهولة وسرعة من مكان واحد",
      icon: <HiDocumentText className="w-10 h-10 text-indigo-600" />,
      features: [
        "فواتير الكهرباء والمياه",
        "فواتير الإنترنت والهاتف",
        "فواتير الخدمات الحكومية",
        "جدولة المدفوعات التلقائية",
      ],
      price: "مجاناً",
      popular: false,
    },
    {
      title: "إدارة المحفظة",
      description: "إدارة شاملة لمحفظتك الرقمية مع تتبع المصروفات والإيرادات",
      icon: <HiCurrencyDollar className="w-10 h-10 text-blue-500" />,
      features: [
        "تتبع المصروفات والإيرادات",
        "تقارير شهرية مفصلة",
        "ميزانية ذكية",
        "تنبيهات الإنفاق",
      ],
      price: "مجاناً",
      popular: false,
    },
    {
      title: "الاستثمار الرقمي",
      description: "فرص استثمارية متنوعة مع عوائد جذابة ومخاطر محسوبة",
      icon: <HiChartBar className="w-10 h-10 text-indigo-500" />,
      features: [
        "صناديق استثمار متنوعة",
        "أسهم رقمية",
        "عملات مشفرة",
        "استشارات استثمارية",
      ],
      price: "من 100 ريال",
      popular: false,
    },
    {
      title: "خدمات الشركات",
      description: "حلول دفع متكاملة للشركات والمؤسسات بأحجام مختلفة",
      icon: <HiOfficeBuilding className="w-10 h-10 text-blue-700" />,
      features: [
        "مدفوعات B2B",
        "إدارة الرواتب",
        "تقارير مالية مفصلة",
        "تكامل مع أنظمة المحاسبة",
      ],
      price: "اتصل بنا",
      popular: false,
    },
    {
      title: "خدمات سريعة",
      description: "خدمات مالية فورية متاحة على مدار الساعة طوال أيام الأسبوع",
      icon: <HiLightningBolt className="w-10 h-10 text-yellow-400" />,
      features: ["خدمة 24/7", "دعم فوري", "معاملات فورية", "أمان متقدم"],
      price: "مجاناً",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Header */}
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
            خدماتنا المالية الرقمية
          </h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            حلول متكاملة لإدارة أموالك، تحويل الأموال، دفع الفواتير، الاستثمار، وخدمات الشركات.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative flex flex-col justify-between`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-2 rounded-t-2xl shadow">
                  <span className="text-sm font-bold tracking-wide">الأكثر شعبية</span>
                </div>
              )}

              <div className="p-8 pt-12">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2 drop-shadow">{service.title}</h3>
                  <p className="text-blue-600 mb-4 font-medium">{service.description}</p>
                  <div className="text-2xl font-extrabold text-indigo-600 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8 text-right">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-blue-700"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 ml-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-bold shadow-lg transition-colors block text-center"
                >
                  ابدأ الآن
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">جاهز للبدء؟</h3>
            <p className="text-blue-100 mb-6">
              انضم إلى ملايين المستخدمين الذين يثقون بـ WimPay لمعاملاتهم
              المالية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                إنشاء حساب مجاني
              </Link>
              <Link
                href="/login"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            الأسئلة الشائعة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                كيف يمكنني إنشاء حساب؟
              </h3>
              <p className="text-gray-700">
                يمكنك إنشاء حساب بسهولة من خلال زيارة صفحة التسجيل وإدخال
                معلوماتك الشخصية.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                هل الخدمات آمنة؟
              </h3>
              <p className="text-gray-700">
                نعم، جميع خدماتنا محمية بأحدث تقنيات التشفير والمصادقة الثنائية.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                ما هي رسوم التحويل؟
              </h3>
              <p className="text-gray-700">
                تبدأ رسوم التحويل من 5 ريال للتحويلات المحلية و1% للتحويلات
                الدولية.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                هل يمكنني إلغاء المعاملة؟
              </h3>
              <p className="text-gray-700">
                يمكن إلغاء المعاملات خلال 30 دقيقة من إتمامها من خلال لوحة
                التحكم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
