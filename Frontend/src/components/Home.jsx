import React from 'react';

const Home = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Let's secure your achievements
            </h1>
            <p className="text-2xl sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              The platform where innovation meets authenticity! Harnessing blockchain technology for a seamless and secure certification experience. Bid farewell to paper certificates and embrace the future of certification.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/sign-up"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-md bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z" />
                </svg>
              </a>
              <a
                href="#explore"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-md bg-white text-blue-500 hover:text-blue-600 hover:bg-gray-100 focus:ring focus:ring-blue-300"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Accelerate Verification</h2>
            <p className="text-gray-600 mt-4 text-2xl">
              Our platform is designed to accelerate the verification process of certificates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://cdn.projectrexa.dedyn.io/certsecure/assets/homepage-accelerate.png"
                alt="Certificate Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 text-2xl">
                <span className="font-bold text-blue-600 ">Doc-Chain</span> is designed to revolutionize the verification experience. Instantaneous verification not only saves time for both issuers and verifiers but also eliminates the risk of human errors associated with traditional verification methods.
              </p>
              <a
                href="/organization/sign-up"
                className="inline-block text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decentralization Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Unbreakable Trust</h2>
            <p className="text-gray-600 mt-4 text-2xl">
              Our decentralized architecture eliminates single points of failure, making it virtually impossible for data breaches or manipulation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 text-2xl">
                <span className="font-bold text-purple-500">Doc-Chain Decentralized Architecture</span> ensures that your certificates are immutable and tamper-proof by design.
              </p>
              <a
                href="https://www.ibm.com/topics/blockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-500 hover:text-purple-600 font-medium"
              >
                Learn how the blockchain works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z" />
                </svg>
              </a>
            </div>
            <div>
              <img
                src="https://cdn.projectrexa.dedyn.io/certsecure/assets/homepage-device-mockup.png"
                alt="CertSecure Mockups"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Certification Experience?</h2>
          <p className="text-lg leading-relaxed mb-8">
            Elevate your business and organizational credentials with Doc-Chain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-semibold"
              onClick={() => (window.location.href = '/organization/sign-up')}
            >
              Start Your Free Trial
            </button>
            <button
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold"
              onClick={() => (window.location.href = '/contact-us')}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
