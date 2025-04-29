import React from "react"

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          About Us
        </h1>
        {/* <div className="w-24 h-1 bg-gray-300 mb-10"></div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              IIT Bhilai Innovation & Technology foundation (IBITF) is poised to
              collaborate with Indian industry in resolving peculiar operational
              issues industry faces during manufacturing and service operations,
              through technology intervention. The primitive ideology stands to
              work on solutions based on science, engineering, technologies and
              also incorporating emerging technologies for innovation, novel
              ideas and deep technologies.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To create a vibrant ecosystem where industry challenges meet
              innovative solutions through collaborative efforts between
              academia, industry leaders, and startups. We aim to foster
              technological advancement that drives economic growth and
              addresses real-world problems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6">
              IBITF is a section 8 not for profit company, part of National
              Mission on Interdisciplinary Cyber Physical Systems under
              Department of Science & Technology (Ministry of Science and
              Technology, GOI) engaged with IITs, IIITs, NITs. IISERs and other
              distinguished educational organisations to pursue "academia -
              Industry initiatives in innovation and technology".
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Approach
            </h2>
            <ol className="list-decimal pl-6 text-gray-600 mb-6">
              <li className="mb-2">
                Seek problem statement from industry partner
              </li>
              <li className="mb-2">
                Connect with academia/ research partner for technological
                solutions
              </li>
              <li>
                Synchronise interest of Startup/ Entrepreneur to take research
                outcome forward for industry to implement on ground and make new
                business stream out of the success.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-16 bg-indigo-50 p-8 rounded-lg border border-indigo-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Ecosystem
          </h2>
          <p className="text-gray-600 mb-6">
            At IBITF, we connect industry leaders and academic institutions with
            cutting-edge startups to address critical challenges. By submitting
            your problem statement, you become part of an ecosystem that fosters
            innovation and delivers impactful solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
