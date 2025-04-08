import React from "react";
import SurveyDesigner from "./components/SurveyDesigner";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Survey Design Tool
            </h1>
            <div className="flex items-center space-x-4">
              <button className="btn btn-primary">Save Survey</button>
              <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                Preview
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-8">
        <SurveyDesigner />
      </main>
    </div>
  );
}

export default App;
