import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Trusted By */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-gray-500 text-lg font-semibold">
              موثوق به من قبل
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {/* Placeholders for logos */}
            <svg className="h-10 w-28" viewBox="0 0 100 24">
              <rect width="100" height="24" rx="6" fill="#e0e7ef" />
            </svg>
            <svg className="h-10 w-28" viewBox="0 0 100 24">
              <rect width="100" height="24" rx="6" fill="#e0e7ef" />
            </svg>
            <svg className="h-10 w-28" viewBox="0 0 100 24">
              <rect width="100" height="24" rx="6" fill="#e0e7ef" />
            </svg>
            <svg className="h-10 w-28" viewBox="0 0 100 24">
              <rect width="100" height="24" rx="6" fill="#e0e7ef" />
            </svg>
            <svg className="h-10 w-28" viewBox="0 0 100 24">
              <rect width="100" height="24" rx="6" fill="#e0e7ef" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Services */}
      <Services />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            انضم إلى مستقبل المدفوعات الرقمية
          </h2>
          <p className="text-lg mb-8">
            سجّل الآن وابدأ في إرسال واستقبال الأموال بكل سهولة وأمان مع WimPay.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition"
          >
            ابدأ مجاناً
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}
