import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 space-y-4">
        
        {/* Title */}
        <h1 className="bg-purple-500 text-white text-xl font-semibold p-3 text-center rounded-xl">
          Tailwind Test
        </h1>

        {/* Image */}
        <img
          className="w-full h-64 object-cover rounded-xl shadow-md"
          src="https://images.pexels.com/photos/6598961/pexels-photo-6598961.jpeg"
          alt="Woman walking in forest"
        />

        {/* Content */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            Class Warfare
          </h2>

          <p className="text-sky-500 font-medium">
            The Anti-Patterns
          </p>

          <div className="flex justify-center gap-2 text-gray-500 text-sm">
            <span>No. 4</span>
            <span>•</span>
            <span>2025</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
