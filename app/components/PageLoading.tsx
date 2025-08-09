"use client";

import { useState, useEffect } from "react";

interface PageLoadingProps {
  children: React.ReactNode;
  delay?: number;
}

export default function PageLoading({
  children,
  delay = 1000,
}: PageLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-600">WimPay</h1>
          </div>

          {/* Spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div
              className="w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin mx-auto absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ animationDelay: "0.1s" }}
            ></div>
          </div>

          {/* Loading Text */}
          <div className="mt-6">
            <p className="text-gray-700 text-lg font-medium">
              جاري تحميل الصفحة...
            </p>
            <div className="flex justify-center mt-2 space-x-1 space-x-reverse">
              <div
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
