import React from 'react';

const Error404 = () => {
  const errorData = {
    code: 404,
    message: "Page Not Found",
    description: "The page you are looking for doesn't exist or has been moved."
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center px-4">
      
      <h1 className="text-6xl font-bold text-[#244d3f]">
        {errorData.code}
      </h1>

      <h2 className="text-2xl font-semibold mt-2">
        {errorData.message}
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        {errorData.description}
      </p>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-6 px-6 py-2 bg-[#244d3f] text-white rounded-lg hover:opacity-90 transition"
      >
        Go Home
      </button>

    </div>
  );
};

export default Error404;