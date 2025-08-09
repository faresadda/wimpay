import { HiLightningBolt, HiShieldCheck, HiDeviceMobile, HiUserGroup } from "react-icons/hi";

const features = [
  {
    icon: <HiLightningBolt className="w-10 h-10 text-blue-600" />,
    title: "سرعة فائقة",
    desc: "إجراء التحويلات والمدفوعات في ثوانٍ معدودة مع أعلى مستويات الأداء.",
  },
  {
    icon: <HiShieldCheck className="w-10 h-10 text-indigo-600" />,
    title: "أمان متقدم",
    desc: "حماية بياناتك ومعاملاتك بأحدث تقنيات التشفير والمصادقة.",
  },
  {
    icon: <HiDeviceMobile className="w-10 h-10 text-blue-500" />,
    title: "سهولة الاستخدام",
    desc: "واجهة بسيطة تدعم جميع الأجهزة وتمنحك تجربة سلسة في كل وقت.",
  },
  {
    icon: <HiUserGroup className="w-10 h-10 text-indigo-500" />,
    title: "دعم متواصل",
    desc: "فريق دعم متواجد 24/7 لمساعدتك في أي وقت وأينما كنت.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">مميزات WimPay</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">كل ما تحتاجه لإدارة أموالك ودفعك الرقمي في مكان واحد، بسرعة وأمان وسهولة.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-6 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full p-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
