
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-800 via-indigo-700 to-blue-900 min-h-screen flex items-center justify-center border-b shadow-2xl relative overflow-hidden"
    >
      {/* خلفية زخرفية متحركة */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-pulse opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2563eb" fillOpacity="0.2" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,186.7C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full relative z-10">
        {/* النص والأزرار */}
        <div className="w-full lg:w-1/2 flex flex-col items-end gap-6 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl l
          g:text-6xl font-extrabold text-white leading-tight font-display drop-shadow-lg w-full">
            تحكم بأموالك
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-blue-100 bg-clip-text text-transparent">
              بذكاء وسهولة مع WimPay
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed font-medium drop-shadow w-full">
            اكتشف منصة الدفع الرقمية التي تمنحك الحرية الكاملة لإدارة أموالك، تحويل واستقبال المدفوعات، ودفع الفواتير في ثوانٍ. أمان متقدم، سرعة فائقة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:mb-20">
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-extrabold shadow-2xl border-0 transition-all duration-300 min-w-[120px] sm:min-w-[180px] text-center hover:scale-105 hover:shadow-blue-400/40 focus:outline-none focus:ring-4 focus:ring-blue-300 animate__animated animate__pulse"
            >
              <span className="inline-flex items-center gap-2 justify-center w-full">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ابدأ الآن مجاناً
              </span>
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-700 border-2 border-blue-400 px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-extrabold shadow-xl transition-all duration-300 min-w-[120px] sm:min-w-[180px] text-center hover:bg-blue-50 hover:scale-105 hover:shadow-blue-400/40 focus:outline-none focus:ring-4 focus:ring-blue-200 animate__animated animate__fadeIn"
            >
              <span className="inline-flex items-center gap-2 justify-center w-full">
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                تعرف على الخدمات
              </span>
            </Link>
          </div>
        </div>
        {/* البطاقة البنكية */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="relative w-full max-w-[400px] aspect-[16/10] rounded-3xl shadow-2xl bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 overflow-hidden flex items-center justify-center min-w-[160px] min-h-[100px] sm:min-w-[220px] sm:min-h-[130px] md:min-w-[300px] md:min-h-[180px] lg:w-[400px] lg:h-[250px] transition-all duration-300">
            {/* زخارف وتدرجات خلفية احترافية بلون متناسق مع الخلفية */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cardGradient" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#233876" />
                  <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
                <radialGradient id="shine" cx="60%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.13" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="400" height="250" rx="28" fill="url(#cardGradient)" />
              <ellipse cx="320" cy="60" rx="70" ry="22" fill="#fff" fillOpacity="0.06" />
              <ellipse cx="80" cy="200" rx="40" ry="12" fill="#fff" fillOpacity="0.04" />
              <circle cx="300" cy="80" r="60" fill="url(#shine)" />
              <rect x="0" y="0" width="400" height="250" rx="28" fill="#fff" fillOpacity="0.02" />
            </svg>
            {/* شريحة ذهبية */}
            <svg className="absolute left-8 top-10" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="46" height="28" rx="6" fill="#fbbf24" stroke="#eab308" strokeWidth="2" />
              <rect x="10" y="14" width="30" height="12" rx="3" fill="#fde68a" />
              <line x1="10" y1="14" x2="40" y2="14" stroke="#eab308" strokeWidth="1" />
              <line x1="10" y1="26" x2="40" y2="26" stroke="#eab308" strokeWidth="1" />
            </svg>
            {/* رقم البطاقة */}
            <div className="absolute left-8 top-24 text-xl md:text-2xl font-mono tracking-widest text-white drop-shadow-lg select-none">
              <span className="text-[10px] sm:text-xs md:text-base lg:text-2xl">4567 1234 5678 9012</span>
            </div>
            {/* اسم صاحب البطاقة وتاريخ الانتهاء */}
            <div className="absolute left-8 bottom-8 sm:bottom-12 flex flex-row items-end gap-8">
              <div className="flex flex-row gap-4 sm:gap-8">
                <div className="flex flex-col items-start">
                  <span className="text-[7px] sm:text-[9px] md:text-xs text-blue-200 font-semibold whitespace-nowrap">EXPIRES</span>
                  <span className="text-[9px] sm:text-xs md:text-base lg:text-lg text-white font-bold tracking-wide whitespace-nowrap">08/28</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[7px] sm:text-[9px] md:text-xs text-blue-200 font-semibold whitespace-nowrap">CARD HOLDER</span>
                  <span className="text-[9px] sm:text-xs md:text-base lg:text-lg text-white font-bold tracking-wide whitespace-nowrap">AHMED ALI</span>
                </div>
              </div>
            </div>
            {/* CVV */}
            <div className="absolute right-8 bottom-8 sm:bottom-12 flex flex-col items-end">
              <span className="text-[7px] sm:text-[9px] md:text-xs text-blue-200 font-semibold">CVV</span>
              <span className="text-[9px] sm:text-xs md:text-base lg:text-lg text-white font-bold tracking-widest">789</span>
            </div>
            {/* رمز أمان ثلاثي الأبعاد */}
            <svg className="absolute right-8 top-10" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="12" width="26" height="14" rx="7" fill="#4f46e5" fillOpacity="0.18" />
              <rect x="12" y="16" width="14" height="6" rx="3" fill="#233876" fillOpacity="0.35" />
            </svg>
            {/* شعار فيزا */}
            <svg className="absolute right-8 bottom-6" width="70" height="28" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="22" fontFamily="Arial Black, Arial, sans-serif" fontSize="24" fill="#fff" fontWeight="bold" letterSpacing="2" filter="url(#visaShadow)">VISA</text>
              <rect x="0" y="24" width="70" height="4" fill="#6366f1" rx="2" />
              <defs>
                <filter id="visaShadow" x="-2" y="-2" width="80" height="32">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#6366f1" floodOpacity="0.5" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}