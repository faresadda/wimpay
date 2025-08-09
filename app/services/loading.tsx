import CardLoading from "../components/CardLoading";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="bg-gray-200 rounded h-8 w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="bg-gray-200 rounded h-4 w-96 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <CardLoading key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
