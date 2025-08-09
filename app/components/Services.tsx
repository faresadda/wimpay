import { HiCreditCard, HiGlobeAlt, HiCurrencyDollar, HiDocumentReport } from "react-icons/hi";

const services = [
  {
    icon: <HiCreditCard className="w-9 h-9 text-blue-600" />,
    title: "مدفوعات إلكترونية",
    desc: "إجراء المدفوعات عبر الإنترنت بسهولة وأمان لجميع المتاجر والخدمات.",
  },
  {
    icon: <HiGlobeAlt className="w-9 h-9 text-indigo-600" />,
    title: "تحويل أموال دولي",
    desc: "إرسال واستقبال الأموال حول العالم بسرعة وبتكلفة منخفضة.",
  },
  {
    icon: <HiCurrencyDollar className="w-9 h-9 text-blue-500" />,
    title: "إدارة الفواتير",
    desc: "دفع الفواتير ومتابعة المصروفات الشهرية من مكان واحد.",
  },
  {
    icon: <HiDocumentReport className="w-9 h-9 text-indigo-500" />,
    title: "تقارير مالية",
    desc: "تقارير مفصلة تساعدك على تتبع معاملاتك وتحليلها بسهولة.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">خدماتنا الرقمية</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">مجموعة متكاملة من الخدمات المالية الذكية لتسهيل حياتك اليومية وإدارة أموالك باحترافية.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-6 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full p-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-block mt-auto text-blue-600 font-semibold group-hover:underline cursor-pointer">اعرف المزيد</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
