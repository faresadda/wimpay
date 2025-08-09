export default function FormLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header Skeleton */}
        <div className="text-center">
          <div className="bg-gray-200 rounded h-8 w-32 mx-auto mb-4 animate-pulse"></div>
          <div className="bg-gray-200 rounded h-6 w-48 mx-auto mb-2 animate-pulse"></div>
          <div className="bg-gray-200 rounded h-4 w-64 mx-auto animate-pulse"></div>
        </div>

        {/* Form Skeleton */}
        <div className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <div className="bg-gray-200 rounded h-4 w-24 mb-2 animate-pulse"></div>
              <div className="bg-gray-200 rounded-lg h-12 w-full animate-pulse"></div>
            </div>
            <div>
              <div className="bg-gray-200 rounded h-4 w-20 mb-2 animate-pulse"></div>
              <div className="bg-gray-200 rounded-lg h-12 w-full animate-pulse"></div>
            </div>
          </div>

          {/* Checkbox Skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded w-4 h-4 ml-2 animate-pulse"></div>
              <div className="bg-gray-200 rounded h-4 w-16 animate-pulse"></div>
            </div>
            <div className="bg-gray-200 rounded h-4 w-32 animate-pulse"></div>
          </div>

          {/* Button Skeleton */}
          <div className="bg-gray-200 rounded-lg h-12 w-full animate-pulse"></div>

          {/* Social Login Skeleton */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-500">
                  أو
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-200 rounded-lg h-10 w-full animate-pulse"></div>
              <div className="bg-gray-200 rounded-lg h-10 w-full animate-pulse"></div>
            </div>
          </div>

          {/* Link Skeleton */}
          <div className="text-center">
            <div className="bg-gray-200 rounded h-4 w-48 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 