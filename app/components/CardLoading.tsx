export default function CardLoading() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 animate-pulse">
      {/* Icon Skeleton */}
      <div className="bg-gray-200 rounded-lg w-12 h-12 mb-6"></div>

      {/* Title Skeleton */}
      <div className="bg-gray-200 rounded h-6 mb-4 w-3/4"></div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-6">
        <div className="bg-gray-200 rounded h-4 w-full"></div>
        <div className="bg-gray-200 rounded h-4 w-5/6"></div>
        <div className="bg-gray-200 rounded h-4 w-4/6"></div>
      </div>

      {/* Features Skeleton */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-4 h-4 ml-2"></div>
          <div className="bg-gray-200 rounded h-3 w-24"></div>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-4 h-4 ml-2"></div>
          <div className="bg-gray-200 rounded h-3 w-32"></div>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full w-4 h-4 ml-2"></div>
          <div className="bg-gray-200 rounded h-3 w-28"></div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="bg-gray-200 rounded-lg h-10 w-full"></div>
    </div>
  );
}
