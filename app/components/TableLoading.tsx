export default function TableLoading() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gray-200 rounded h-6 w-32 animate-pulse"></div>
        <div className="bg-gray-200 rounded h-4 w-20 animate-pulse"></div>
      </div>
      
      {/* Table Rows Skeleton */}
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-gray-200 rounded-full w-10 h-10 animate-pulse"></div>
              <div>
                <div className="bg-gray-200 rounded h-4 w-24 mb-2 animate-pulse"></div>
                <div className="bg-gray-200 rounded h-3 w-16 animate-pulse"></div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gray-200 rounded h-4 w-20 mb-2 animate-pulse"></div>
              <div className="bg-gray-200 rounded h-3 w-16 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 