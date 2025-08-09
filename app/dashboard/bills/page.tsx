'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PayBillsQRPage() {
  const [qr, setQr] = useState('');
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-blue-700 mb-6 text-center">دفع فاتورة عبر QR</h2>
        {success ? (
          <div className="text-green-600 text-center font-bold mb-4">تم دفع الفاتورة بنجاح!</div>
        ) : null}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">رمز QR للفاتورة</label>
            <input
              type="text"
              required
              value={qr}
              onChange={e => setQr(e.target.value)}
              placeholder="أدخل أو امسح رمز QR"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right placeholder:text-gray-400 text-blue-700 bg-blue-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">المبلغ</label>
            <input
              type="number"
              required
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="أدخل المبلغ المطلوب"
              className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right placeholder:text-gray-400 text-blue-700 bg-blue-50"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
          >
            دفع الفاتورة
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/dashboard" className="text-blue-600 hover:underline font-medium">عودة للوحة التحكم</Link>
        </div>
      </div>
    </div>
  );
}
