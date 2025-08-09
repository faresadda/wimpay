import TableLoading from "../components/TableLoading";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded h-8 w-32 animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded h-8 w-64 mb-2 animate-pulse"></div>
          <div className="bg-gray-200 rounded h-4 w-96 animate-pulse"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="bg-gray-200 rounded h-4 w-24 mb-2 animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-8 w-20 animate-pulse"></div>
                </div>
                <div className="bg-gray-200 rounded h-4 w-12 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="bg-gray-200 rounded h-6 w-32 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200"
              >
                <div className="bg-gray-200 rounded w-8 h-8 mb-2 animate-pulse"></div>
                <div className="bg-gray-200 rounded h-3 w-16 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="bg-gray-200 rounded h-6 w-32 mb-4 animate-pulse"></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex justify-between">
                  <div className="bg-gray-200 rounded h-4 w-20 animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-4 w-16 animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex justify-between">
                  <div className="bg-gray-200 rounded h-4 w-24 animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-4 w-20 animate-pulse"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded h-10 w-32 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
