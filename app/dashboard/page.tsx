'use client';


import Link from 'next/link';
import { HiCurrencyDollar, HiDocumentText, HiCreditCard, HiArrowRight } from 'react-icons/hi';

export default function DashboardPage() {
  const stats = [
    { title: 'الرصيد الحالي', value: '2,450 دينار', change: '+12%' },
    { title: 'إجمالي المعاملات', value: '156', change: '+8%' },
    { title: 'المدفوعات الشهرية', value: '23', change: '-3%' },
    { title: 'التحويلات الدولية', value: '12', change: '+15%' }
  ];

  const quickActions = [
    { title: 'تحويل أموال', icon: <HiArrowRight className="w-8 h-8 text-blue-600" />, href: '/transfer' },
    { title: 'دفع فواتير', icon: <HiDocumentText className="w-8 h-8 text-indigo-600" />, href: '/dashboard/bills' },
    { title: 'إضافة رصيد', icon: <HiCurrencyDollar className="w-8 h-8 text-blue-500" />, href: '/add-funds' },
    { title: 'إضافة بطاقة', icon: <HiCreditCard className="w-8 h-8 text-indigo-500" />, href: '/dashboard/add-card' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
              WimPay
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-white border-blue-600 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg shadow-md">
                user
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">مرحباً، أحمد محمد</h1>
          <p className="text-gray-500 text-base md:text-lg">آخر تسجيل دخول: اليوم الساعة 9:30 صباحاً</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
              <p className="text-sm font-medium text-blue-600 mb-2">{stat.title}</p>
              <p className="text-2xl md:text-3xl font-extrabold text-indigo-700 mb-1">{stat.value}</p>
              <span className={`text-sm font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{stat.change}</span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-4 text-center">إجراءات سريعة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="flex flex-col items-center justify-center p-5 rounded-xl shadow-md bg-white hover:bg-blue-100 transition-colors group"
              >
                <span className="mb-2 group-hover:scale-110 transition-transform">{action.icon}</span>
                <span className="text-base font-semibold text-blue-700 group-hover:text-indigo-700 transition-colors text-center">{action.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Account Summary */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6">
          <h3 className="text-lg md:text-xl font-bold text-indigo-700 mb-4 text-center">ملخص الحساب</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">رقم الحساب</span>
                <span className="font-bold text-blue-700">****1234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">نوع الحساب</span>
                <span className="font-bold text-indigo-700">حساب شخصي</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">حالة الحساب</span>
                <span className="text-green-600 font-bold">نشط</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">المصادقة الثنائية</span>
                <span className="text-green-600 text-sm font-bold">مفعلة</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">آخر تحديث لكلمة المرور</span>
                <span className="text-sm text-gray-500">منذ 30 يوم</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-8 rounded-lg font-bold shadow-md transition-colors">
                تحديث إعدادات الأمان
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 