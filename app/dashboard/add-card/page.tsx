'use client';


import Link from 'next/link';
import { useState } from 'react';

export default function DashboardAddCardPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [card, setCard] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCard({ cardNumber, cardHolder, expiry, cvv });
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    setCard(null);
    setCardNumber('');
    setCardHolder('');
    setExpiry('');
    setCvv('');
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">إضافة بطاقة جديدة</h2>
        {!card || editMode ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رقم البطاقة</label>
              <input
                type="text"
                required
                maxLength={19}
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value.replace(/[^0-9 ]/g, ''))}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right placeholder:text-gray-400 text-blue-700 bg-blue-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">اسم صاحب البطاقة</label>
              <input
                type="text"
                required
                value={cardHolder}
                onChange={e => setCardHolder(e.target.value)}
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right placeholder:text-gray-400 text-blue-700 bg-blue-50"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الانتهاء</label>
                <input
                  type="text"
                  required
                  maxLength={5}
                  value={expiry}
                  onChange={e => setExpiry(e.target.value.replace(/[^0-9\/]/g, ''))}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right placeholder:text-gray-400 text-blue-700 bg-blue-50"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <input
                  type="password"
                  required
                  maxLength={4}
                  value={cvv}
                  onChange={e => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="CVV"
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right placeholder:text-gray-400 text-blue-700 bg-blue-50"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
            >
              {editMode ? 'تحديث البطاقة' : 'إضافة البطاقة'}
            </button>
          </form>
        ) : (
          <div>
            <div className="mb-6 flex flex-col items-center">
              <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-2xl shadow-xl bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 overflow-hidden flex items-center justify-center min-w-[160px] min-h-[100px]">
                {/* زخارف وتدرجات خلفية */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cardGradient" x1="0" y1="0" x2="340" y2="210" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#233876" />
                      <stop offset="1" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="340" height="210" rx="22" fill="url(#cardGradient)" />
                  <ellipse cx="280" cy="50" rx="50" ry="16" fill="#fff" fillOpacity="0.06" />
                  <ellipse cx="60" cy="170" rx="30" ry="8" fill="#fff" fillOpacity="0.04" />
                </svg>
                {/* رقم البطاقة */}
                <div className="absolute left-6 sm:top-20 top-10 text-lg md:text-xl font-mono tracking-widest text-white drop-shadow-lg select-none">
                  <span>{card.cardNumber}</span>
                </div>
                {/* اسم صاحب البطاقة وتاريخ الانتهاء */}
                <div className="absolute left-6 bottom-10 flex flex-row items-end gap-8 max-[350px]:bottom-5">
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] text-blue-200 font-semibold whitespace-nowrap">EXPIRES</span>
                    <span className="text-[13px] text-white font-bold tracking-wide whitespace-nowrap">{card.expiry}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[9px] text-blue-200 font-semibold whitespace-nowrap">CARD HOLDER</span>
                    <span className="text-[13px] text-white font-bold tracking-wide whitespace-nowrap">{card.cardHolder}</span>
                  </div>
                </div>
                {/* CVV */}
                <div className="absolute right-6 bottom-10 flex flex-col items-end max-[350px]:bottom-5">
                  <span className="text-[9px] text-blue-200 font-semibold">CVV</span>
                  <span className="text-[13px] text-white font-bold tracking-widest">{card.cvv}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center max-[400px]:flex-col flex-row">
              <button
                onClick={handleEdit}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:from-blue-600 hover:to-indigo-600 transition-colors"
              >
                تعديل البطاقة
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-red-600 transition-colors"
              >
                حذف البطاقة
              </button>
            </div>
          </div>
        )}
        <div className="mt-6 text-center">
          <Link href="/dashboard" className="text-blue-600 hover:underline font-medium">عودة للوحة التحكم</Link>
        </div>
      </div>
    </div>
  );
}
