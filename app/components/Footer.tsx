import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">WimPay</h3>
            <p className="text-gray-300 mb-6">
              منصة دفع رقمية رائدة تقدم حلول مالية متطورة وآمنة للأفراد
              والشركات.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  المميزات
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  إنشاء حساب
                </Link>
              </li>
              <li>
                <Link
                  href="/forgot-password"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  نسيت كلمة المرور
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2024 WimPay. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
