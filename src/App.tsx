import React from 'react';
import { useState } from 'react';
import { Heart, Brain, Volume2, Users, Star, Target, Mail, UserPlus, Play, CheckCircle, Eye, Ear, GamepadIcon, MessageCircle } from 'lucide-react';
import EmotionLearningApp from './components/EmotionLearningApp';
import DemoModal from './components/DemoModal';

function App() {
  const [showLearningApp, setShowLearningApp] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">EmotiLearn</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.blue.200)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Unlock Emotions,
              </span>
              <br />
              <span className="text-gray-900">Build Connections</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Helping children with autism identify and understand emotions through 
              <span className="font-semibold text-blue-600"> interactive learning, voice guidance, and visual cues</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowLearningApp(true)}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  <Play className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Start Learning Now
                </span>
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Watch Demo
              </button>
            </div>
            <div className="mt-12 flex justify-center items-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Trusted by educators</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-green-500 mr-2" />
                <span>Child-friendly design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for children with autism, our app combines multiple learning approaches for better emotional understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GamepadIcon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Learning</h3>
              <p className="text-gray-700">Engaging quizzes and games that reinforce emotional understanding through play-based learning experiences.</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Volume2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice Prompts</h3>
              <p className="text-gray-700">Audio guidance for better comprehension and multi-sensory learning that accommodates different learning styles.</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Emotion Cards</h3>
              <p className="text-gray-700">Simple and clear images representing different emotions with high contrast for better visual processing.</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Feedback</h3>
              <p className="text-gray-700">Real-time responses to encourage learning and improve retention with positive reinforcement.</p>
            </div>

            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:from-pink-100 hover:to-pink-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-700">Monitor each child's growth and learning progress with detailed analytics and milestone tracking.</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adaptive Learning</h3>
              <p className="text-gray-700">AI-powered personalization that adapts to each child's learning pace and preferences for optimal results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process makes emotional learning engaging and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <div className="bg-blue-500 w-8 h-1 mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">See</h3>
              <p className="text-gray-700">View emotion-based images with clear expressions and easy-to-understand visual cues.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Ear className="h-10 w-10 text-white" />
              </div>
              <div className="bg-purple-500 w-8 h-1 mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hear</h3>
              <p className="text-gray-700">Listen to friendly voice prompts explaining each emotion with clear pronunciation.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <GamepadIcon className="h-10 w-10 text-white" />
              </div>
              <div className="bg-green-500 w-8 h-1 mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Play & Learn</h3>
              <p className="text-gray-700">Take interactive quizzes to test understanding in a fun, pressure-free environment.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <div className="bg-orange-500 w-8 h-1 mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Feedback</h3>
              <p className="text-gray-700">Receive instant guidance and encouragement to build confidence and improve learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Why Choose Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose EmotiLearn?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Built for Autism Kids</h3>
                    <p className="text-gray-700">Designed with accessibility and simplicity at its core, following best practices for neurodivergent learners.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Engaging & Fun</h3>
                    <p className="text-gray-700">Turns emotional learning into an enjoyable experience with gamification and positive reinforcement.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Web-Based & Easy to Use</h3>
                    <p className="text-gray-700">Built using modern web technologies, accessible from any device without app store downloads.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
              <div className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 inline-block">
                  <Brain className="h-16 w-16 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To create a safe, interactive, and educational platform that empowers children with autism to 
                  <span className="font-semibold text-blue-600"> recognize, understand, and express human emotions</span>, 
                  helping them build better social and communication skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start the Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of families and educators who are already using EmotiLearn to help children develop emotional intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowLearningApp(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Start Free Trial
              </span>
            </button>
            <button 
              onClick={() => setShowLearningApp(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                <UserPlus className="h-5 w-5 mr-2" />
                Join as Tester
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building this project with input from educators, parents, and specialists. Your feedback can help us make it even better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-6">Have questions or suggestions? We'd love to hear from you.</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join as Tester</h3>
                <p className="text-gray-700 mb-6">Help us improve by testing early versions and providing feedback.</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
                  Become Tester
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">EmotiLearn</span>
            </div>
            <div className="text-gray-400">
              © 2025 EmotiLearn. Made with ❤️ for children with autism.
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLearningApp && (
        <EmotionLearningApp onClose={() => setShowLearningApp(false)} />
      )}
      
      {showDemo && (
        <DemoModal onClose={() => setShowDemo(false)} />
      )}

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;