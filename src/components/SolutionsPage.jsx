const SolutionsHub = () => {
  return (
    <section className="bg-gray-100 py-16" id="solutions">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">
          Success Stories
        </h3>
        <div className="space-y-4 text-gray-700">
          <div className="bg-white p-4 rounded shadow">
            Improving Supply Chain Efficiency for [Company Name]
          </div>
          <div className="bg-white p-4 rounded shadow">
            Revolutionizing Healthcare Diagnostics in Partnership with
            [Institution Name]
          </div>
        </div>
        <a
          href="#more-solutions"
          className="block text-blue-600 mt-6 hover:underline"
        >
          Explore More Solutions
        </a>
      </div>
    </section>
  )
}

export default SolutionsHub
