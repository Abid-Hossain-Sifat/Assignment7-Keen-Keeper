import React from 'react';

const Error404 = () => {
  const errorData = {
    code: 404,
    message: "Page Not Found",
    description: "The page you are looking for doesn't exist or has been moved."
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto text-center py-10 md:py-14">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#244d3f]">
          {errorData.code}
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-2 md:mt-3">
          {errorData.message}
        </h2>

        <p className="text-gray-600 mt-3 md:mt-4 max-w-md mx-auto text-sm md:text-base leading-relaxed">
          {errorData.description}
        </p>

        <button
          onClick={() => window.location.href = "/"}
          className="mt-6 md:mt-7 px-5 md:px-6 py-2.5 bg-[#244d3f] text-white rounded-lg hover:opacity-90 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error404;