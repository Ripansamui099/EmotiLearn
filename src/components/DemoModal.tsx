import React from 'react';
import { X, Play, Volume2, Eye, Gamepad2, CheckCircle } from 'lucide-react';

interface DemoModalProps {
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">App Demo</h2>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Demo Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How EmotiLearn Works</h3>
            <p className="text-xl text-gray-600">Watch how children learn emotions step by step</p>
          </div>

          {/* Demo Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Step 1: See</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    Children view clear, high-contrast images showing different facial expressions. 
                    Each emotion is presented with simple, easy-to-understand visuals.
                  </p>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex space-x-4">
                      <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl">😊</span>
                      </div>
                      <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl">😢</span>
                      </div>
                      <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl">😠</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Happy child"
                    className="w-48 h-48 rounded-2xl mx-auto object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Volume2 className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Step 2: Hear</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    Friendly voice prompts explain each emotion with clear pronunciation and simple language. 
                    Audio guidance helps with comprehension and creates a multi-sensory learning experience.
                  </p>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Volume2 className="h-8 w-8 text-purple-600" />
                      <div className="flex-1">
                        <div className="bg-purple-100 rounded-full px-4 py-2">
                          <p className="text-purple-800 font-medium">"This is happy! When you feel good and smile!"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Volume2 className="h-24 w-24 text-purple-600 mx-auto mb-4" />
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                      <Play className="h-4 w-4 inline mr-2" />
                      Play Audio
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Step 3: Play & Learn</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    Interactive quizzes test understanding in a fun, pressure-free environment. 
                    Children can take their time and learn at their own pace.
                  </p>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-gray-800 font-medium mb-3">What emotion is this?</p>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="bg-yellow-100 border-2 border-yellow-300 p-2 rounded-lg text-sm font-medium">
                        Happy
                      </button>
                      <button className="bg-gray-100 border-2 border-gray-300 p-2 rounded-lg text-sm">
                        Sad
                      </button>
                      <button className="bg-gray-100 border-2 border-gray-300 p-2 rounded-lg text-sm">
                        Angry
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Gamepad2 className="h-24 w-24 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Interactive Quiz Mode</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Step 4: Get Feedback</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    Immediate, positive feedback encourages learning and builds confidence. 
                    Every attempt is celebrated, creating a supportive learning environment.
                  </p>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                        <div>
                          <p className="text-green-800 font-bold">Excellent!</p>
                          <p className="text-green-700 text-sm">Yes! This person looks happy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <CheckCircle className="h-24 w-24 text-orange-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Positive Reinforcement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Try It?</h3>
            <p className="text-blue-100 mb-6">Experience the full interactive learning app now!</p>
            <button
              onClick={onClose}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Close Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;