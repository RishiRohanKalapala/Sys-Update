import React from 'react';
import { Settings, AlertCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Settings className="w-20 h-20 text-indigo-600 animate-spin-slow" />
            <AlertCircle className="w-8 h-8 text-indigo-600 absolute -top-2 -right-2" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CMRAI</h1>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6">System Update in Progress</h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-gray-600 text-lg">
            We're currently implementing improvements to enhance your experience.
          </p>
          <p className="text-gray-500">
            Our team is working diligently to bring you new features and improvements.
            We appreciate your patience during this update.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
          <div className="flex items-center text-indigo-600">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse mr-2"></span>
            System Update in Progress
          </div>
          <div className="hidden md:block text-gray-400">•</div>
          <div className="text-gray-500">
            Please check back soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;