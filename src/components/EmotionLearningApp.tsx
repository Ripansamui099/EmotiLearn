import React, { useState, useEffect } from 'react';
import { Volume2, RotateCcw, CheckCircle, XCircle, Star, ArrowLeft, Play } from 'lucide-react';

interface Emotion {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
}

const emotions: Emotion[] = [
  {
    id: 'happy',
    name: 'Happy',
    image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'When you feel good and smile!',
    color: 'bg-yellow-100 border-yellow-300'
  },
  {
    id: 'sad',
    name: 'Sad',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'When you feel down or want to cry.',
    color: 'bg-blue-100 border-blue-300'
  },
  {
    id: 'angry',
    name: 'Angry',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'When you feel mad or upset.',
    color: 'bg-red-100 border-red-300'
  },
  {
    id: 'surprised',
    name: 'Surprised',
    image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'When something unexpected happens!',
    color: 'bg-purple-100 border-purple-300'
  },
  {
    id: 'scared',
    name: 'Scared',
    image: 'https://images.pexels.com/photos/3777932/pexels-photo-3777932.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'When you feel afraid or worried.',
    color: 'bg-gray-100 border-gray-300'
  },
  {
    id: 'excited',
    name: 'Excited',
    image: 'https://images.pexels.com/photos/3777942/pexels-photo-3777942.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'When you feel very happy and energetic!',
    color: 'bg-green-100 border-green-300'
  }
];

interface EmotionLearningAppProps {
  onClose: () => void;
}

const EmotionLearningApp: React.FC<EmotionLearningAppProps> = ({ onClose }) => {
  const [currentMode, setCurrentMode] = useState<'learn' | 'quiz'>('learn');
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizQuestion, setQuizQuestion] = useState<Emotion | null>(null);
  const [quizOptions, setQuizOptions] = useState<Emotion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  const currentEmotion = emotions[currentEmotionIndex];

  // Text-to-speech function
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  // Generate quiz question
  const generateQuizQuestion = () => {
    const correctEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    const wrongOptions = emotions.filter(e => e.id !== correctEmotion.id);
    const shuffledWrong = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
    const allOptions = [correctEmotion, ...shuffledWrong].sort(() => 0.5 - Math.random());
    
    setQuizQuestion(correctEmotion);
    setQuizOptions(allOptions);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  // Handle quiz answer
  const handleQuizAnswer = (selectedId: string) => {
    setSelectedAnswer(selectedId);
    const correct = selectedId === quizQuestion?.id;
    setIsCorrect(correct);
    setShowResult(true);
    setQuestionsAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
      speakText('Great job! That\'s correct!');
    } else {
      speakText(`Not quite right. This emotion is ${quizQuestion?.name}.`);
    }
  };

  // Initialize quiz when mode changes
  useEffect(() => {
    if (currentMode === 'quiz') {
      generateQuizQuestion();
    }
  }, [currentMode]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h2 className="text-2xl font-bold">Emotion Learning</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">Score: {score}/{questionsAnswered}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentMode('learn')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    currentMode === 'learn' 
                      ? 'bg-white text-blue-600' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Learn
                </button>
                <button
                  onClick={() => setCurrentMode('quiz')}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    currentMode === 'quiz' 
                      ? 'bg-white text-blue-600' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Mode */}
        {currentMode === 'learn' && (
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Learning Emotions</h3>
              <p className="text-gray-600">Click on emotions to learn about them!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {emotions.map((emotion, index) => (
                <div
                  key={emotion.id}
                  onClick={() => setCurrentEmotionIndex(index)}
                  className={`cursor-pointer rounded-2xl border-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    index === currentEmotionIndex 
                      ? `${emotion.color} shadow-lg scale-105` 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="p-6 text-center">
                    <img
                      src={emotion.image}
                      alt={emotion.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{emotion.name}</h4>
                    <p className="text-gray-700 text-sm">{emotion.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Emotion Detail */}
            <div className={`rounded-3xl border-4 ${currentEmotion.color} p-8`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">{currentEmotion.name}</h3>
                  <p className="text-xl text-gray-700 mb-6">{currentEmotion.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => speakText(`This is ${currentEmotion.name}. ${currentEmotion.description}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Volume2 className="h-5 w-5 mr-2" />
                      Listen
                    </button>
                    <button
                      onClick={() => setCurrentEmotionIndex((prev) => (prev + 1) % emotions.length)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors"
                    >
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Next Emotion
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src={currentEmotion.image}
                    alt={currentEmotion.name}
                    className="w-64 h-64 rounded-3xl mx-auto object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Mode */}
        {currentMode === 'quiz' && quizQuestion && (
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Emotion Quiz</h3>
              <p className="text-gray-600">Look at the image and choose the correct emotion!</p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Question */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 mb-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">What emotion is this?</h4>
                <img
                  src={quizQuestion.image}
                  alt="Emotion to identify"
                  className="w-48 h-48 rounded-2xl mx-auto object-cover shadow-lg mb-6"
                />
                <button
                  onClick={() => speakText('What emotion is this?')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center mx-auto transition-colors"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Repeat Question
                </button>
              </div>

              {/* Answer Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {quizOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => !showResult && handleQuizAnswer(option.id)}
                    disabled={showResult}
                    className={`p-6 rounded-2xl border-4 transition-all duration-300 transform hover:scale-105 ${
                      showResult
                        ? option.id === quizQuestion.id
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : option.id === selectedAnswer
                          ? 'bg-red-100 border-red-500 text-red-800'
                          : 'bg-gray-100 border-gray-300 text-gray-600'
                        : 'bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">{option.name}</div>
                      {showResult && option.id === quizQuestion.id && (
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                      )}
                      {showResult && option.id === selectedAnswer && option.id !== quizQuestion.id && (
                        <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Result Feedback */}
              {showResult && (
                <div className={`rounded-2xl p-6 text-center mb-6 ${
                  isCorrect ? 'bg-green-100 border-4 border-green-300' : 'bg-red-100 border-4 border-red-300'
                }`}>
                  <div className="flex items-center justify-center mb-4">
                    {isCorrect ? (
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    ) : (
                      <XCircle className="h-12 w-12 text-red-600" />
                    )}
                  </div>
                  <h4 className={`text-2xl font-bold mb-2 ${
                    isCorrect ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {isCorrect ? 'Excellent!' : 'Not quite right!'}
                  </h4>
                  <p className={`text-lg mb-4 ${
                    isCorrect ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {isCorrect 
                      ? `Yes! This person looks ${quizQuestion.name.toLowerCase()}. ${quizQuestion.description}`
                      : `This person looks ${quizQuestion.name.toLowerCase()}. ${quizQuestion.description}`
                    }
                  </p>
                  <button
                    onClick={generateQuizQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center mx-auto transition-colors"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Next Question
                  </button>
                </div>
              )}

              {/* Progress */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {[...Array(Math.min(questionsAnswered, 5))].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">
                  Questions answered: {questionsAnswered} | Correct: {score}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionLearningApp;