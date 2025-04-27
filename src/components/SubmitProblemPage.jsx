import React, { useState } from 'react';

const SubmitProblemPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    problem: '',
    domain: '',
    outcome: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for submitting your problem statement. Our team will review it and get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      problem: '',
      domain: '',
      outcome: ''
    });
  };

  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Submit Your Challenge</h1>
          <p className="text-xl text-gray-600 mb-8">
            We welcome problem statements from various domains, including technology, healthcare,
            sustainability, and more.
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization/Institution</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">Problem Statement Description</label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">Industry Domain</label>
                  <select
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Domain</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="energy">Energy & Sustainability</option>
                    <option value="fintech">FinTech</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="outcome" className="block text-sm font-medium text-gray-700 mb-1">Expected Outcome</label>
                  <input
                    type="text"
                    id="outcome"
                    name="outcome"
                    value={formData.outcome}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Benefits of Submitting Your Problem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">Get fresh perspectives and innovative solutions from our talented community of problem-solvers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Collaboration</h3>
              <p className="text-gray-600">Collaborate with experts from diverse backgrounds who bring unique insights to your challenge.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Implementation</h3>
              <p className="text-gray-600">Turn ideas into action with efficient implementation strategies tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="bg-blue-500 rounded-full text-white font-bold text-xl h-16 w-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Submit Your Problem</h3>
                <p className="text-gray-600">Fill out the form with details about your challenge and what you hope to achieve.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="bg-blue-500 rounded-full text-white font-bold text-xl h-16 w-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Review & Match</h3>
                <p className="text-gray-600">Our team reviews your submission and matches you with the right experts for your specific challenge.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="bg-blue-500 rounded-full text-white font-bold text-xl h-16 w-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaborate & Solve</h3>
                <p className="text-gray-600">Work together with our experts to develop innovative solutions tailored to your needs.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-500 rounded-full text-white font-bold text-xl h-16 w-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implement & Succeed</h3>
                <p className="text-gray-600">Receive guidance on implementing solutions and measuring success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Challenge into an Opportunity?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Submit your problem statement today and let our experts help you find innovative solutions.
          </p>
          <a href="#top" className="px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-block">
            Submit Your Challenge Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default SubmitProblemPage;