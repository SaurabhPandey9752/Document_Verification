import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: 'User Registration',
      description: 'Sign In as an individual user to manage your digital credentials',
      icon: <FaUser className="w-12 h-12 text-blue-500" />,
      path: '/usersignup',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Issuing Authority',
      description: 'Sign Up as an organization that issues digital credentials',
      icon: <FaBuilding className="w-12 h-12 text-purple-500" />,
      path: '/issuingauthoritysignup',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Verifier ',
      description: 'Sign Up as an organization that verifies digital credentials',
      icon: <FaCheckCircle className="w-12 h-12 text-green-500" />,
      path: '/verifyingauthoritysignup',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
           Registration
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Select the appropriate option that best suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => navigate(option.path)}
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${option.color}" />
                
                <div className="px-8 py-10">
                  <div className="flex justify-center mb-6">
                    {option.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-8">
                    {option.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <button
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r ${option.color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${option.color.split('-')[2]} transition-all duration-300`}
                    >
                      Get Started
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-r ${option.color} opacity-10 transform rotate-45" />
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-gradient-to-r ${option.color} opacity-10 transform rotate-45" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional information section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
           Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-white  font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 