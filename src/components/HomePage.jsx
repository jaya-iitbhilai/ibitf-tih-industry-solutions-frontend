import React from "react"
import { Link } from "react-router-dom"
import { Banner, Hero } from "../assets"
import { IoMdArrowDropright } from "react-icons/io"

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <section className="relative">
        <div className="container mx-auto relative ">
          <div className="relative bg-[#0c0f14]">
            <img
              src={Banner}
              alt="banner"
              className="w-full h-auto object-cover opacity-50"
            />
          </div>
        </div>
      </section> */}
      <section className="bg-[#0c0f14] w-full h-screen flex items-center">
        {/* Background Cubes Image */}
        <div className="absolute inset-0 z-10">
          <img
            src={Banner}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-20 flex flex-col md:flex-row items-center justify-between  gap-30">
          {/* Left Side - Text */}
          <div className="text-white w-4xl border-0 border-amber-50">
            <p className="text-green-400 mb-4 uppercase tracking-wider">
              INOVIT SUPER IT SYSTEMS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
              Bridging
              <span className="text-green-400"> Innovation</span> with <br />
              Real-World Challenges
            </h1>
            <p className="text-white mb-8 uppercase tracking-wider">
              Collaborate with us to solve your critical problems.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-green-400 text-black font-semibold py-3 px-6 rounded hover:bg-green-500 transition">
                Submit Your Problem Statement
              </button>
              <button className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
                {/* ▶ */}
                <IoMdArrowDropright className="size-10 text-black" />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="mt-10 md:mt-0 md:w-1/2 border-0 border-amber-50 animate-float">
            <img
              src={Hero}
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* <section className="bg-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div>
            <img src={Banner} alt="banner" className="" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Bridging Innovation with Real-World Challenges
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Collaborate with us to solve your critical problems.
            </p>
            <Link
              to="/submit-problem"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-105"
            >
              Submit Your Problem Statement
            </Link>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About the Initiative
          </h2>
          {/* <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div> */}
          <p className="text-lg text-gray-600 mb-4 text-center">
            IIT Bhilai Innovation & Technology Foundation (IBITF) collaborates
            with the Indian industry to address operational challenges through
            technological solutions, leveraging emerging technologies to
            innovate and solve real-world industry problems.
          </p>
          <p className="text-lg text-gray-700 mb-8 font-medium text-center">
            IBITF is a Section 8 not-for-profit company, part of the National
            Mission on Interdisciplinary Cyber Physical Systems under the
            Department of Science & Technology (Ministry of Science &
            Technology, GOI).
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 italic text-center">
            <p className="text-gray-700">
              "At IBITF, we connect industry leaders and academic institutions
              with cutting-edge startups to address critical challenges. By
              submitting your problem statement, you become part of an ecosystem
              that fosters innovation and delivers impactful solutions."
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            How the Process Works
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {["1", "2", "3", "4"].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step}
                  </div>
                  <p className="text-lg text-gray-600 max-w-xs mx-auto">
                    {index === 0
                      ? "Submit your problem statement using our online form"
                      : index === 1
                      ? "Our team evaluates and matches your challenge with the right startup"
                      : index === 2
                      ? "Collaborate with the startup to co-develop solutions"
                      : "Implement and scale the solution"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 px-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            How the Process Works
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "Submit your problem statement using our online form",
                head: "Submit Your Problem",
                icon: "📝",
              },
              {
                title:
                  "Our team evaluates and matches your challenge with the right startup",
                head: "Challenge Evaluation",
                icon: "🧠",
              },
              {
                title: "Collaborate with the startup to co-develop solutions",
                head: "Collaborate with Startup",
                icon: "🤝",
              },
              {
                title: "Implement and scale the solution",
                head: "Implement & Scale Solution",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-600 text-white text-3xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.head}
                </h3>
                <p className="text-sm text-gray-500 max-w-xs">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 px-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[Project Image]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {index === 0
                      ? "Improving Supply Chain Efficiency for [IIT Bhilai]"
                      : "Revolutionizing Healthcare Diagnostics in Partnership with [IIT Bhilai]"}
                  </h3>
                  <p className="text-gray-600">
                    Brief description of the project and its impact on the
                    industry partner.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/solutions"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-105"
            >
              Explore More Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
