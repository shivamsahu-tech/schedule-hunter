import React from 'react';
import { Calendar, BookOpen, Clock, BarChart2, Award, ListChecks, Brain, CheckCircle, LightbulbIcon, Target, AlarmClock, BookMarked, GraduationCap, BarChart } from 'lucide-react';

export default function Docs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold flex items-center">
              <Calendar className="mr-2 h-6 w-6" /> 
              ExamPrep Scheduler
            </h1>
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Research-Backed
            </span>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Intelligent Exam Topic Scheduler</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A professional platform that creates optimized study schedules based on proven research and personalized student factors.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
              <BarChart2 className="mr-2 h-5 w-5 text-blue-600" />
              Impactful Factors
            </h3>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <p className="text-gray-700">
                Our scheduler analyzes all critical factors that impact preparation strategy:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unitwise and subjectwise current preparation strength</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Specific exam pattern requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Topic weightage distribution in the exam</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Time remaining until exam dates</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
              <Award className="mr-2 h-5 w-5 text-blue-600" />
              Our Principles
            </h3>
            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
              <p className="text-gray-700 mb-4">
                Our scheduling algorithm combines three powerful elements to create the most effective study plans:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <Target className="h-5 w-5 text-red-500 mr-2" />
                    <h4 className="font-medium text-gray-800">Impactful Factors</h4>
                  </div>
                  <p className="text-sm text-gray-600">Personalized assessment of student strengths, exam patterns, topic weightages, and time constraints</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <BookMarked className="h-5 w-5 text-amber-500 mr-2" />
                    <h4 className="font-medium text-gray-800">Self-Defined Rules</h4>
                  </div>
                  <p className="text-sm text-gray-600">Custom scheduling parameters that adjust to individual learning preferences and requirements</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <Brain className="h-5 w-5 text-blue-500 mr-2" />
                    <h4 className="font-medium text-gray-800">Research-Proven Rules</h4>
                  </div>
                  <p className="text-sm text-gray-600">Evidence-based learning strategies from cognitive science and educational psychology</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
              <ListChecks className="mr-2 h-5 w-5 text-blue-600" />
              Our Approach
            </h3>
            <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Input Collection</h4>
                  <p className="text-sm text-gray-600">Gathering all impactful factors from students for personalized scheduling</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Priority Assignment</h4>
                  <p className="text-sm text-gray-600">LLM-powered analysis of topics based on strength and exam weightage</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Schedule Generation</h4>
                  <p className="text-sm text-gray-600">Creating optimized schedules using LLMs with research-backed principles</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <h4 className="font-medium text-gray-800 mb-2">Interactive Display</h4>
                  <p className="text-sm text-gray-600">View schedules in tabular, card, or calendar formats with import/export features</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
              <Brain className="mr-2 h-5 w-5 text-blue-600" />
              Research-Backed Rules
            </h3>
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Allocate more time to topics that are both important (exam weight) and difficult (user weakness)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Use 80/20 rule: 80% time to weak/important topics, 20% to revision of strong ones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Prioritize foundational topics first, then medium, then hard ones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Schedule topic reviews using spaced intervals: 1, 3, 7, and 14 days after first study</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Place weak/difficult topics during peak hours (morning); easier ones in low-energy times</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Insert light review sessions in the 1–3 days before each exam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Group related topics within 2 days of each other (e.g., DSA concepts)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Encourage mock tests for specific topics weekly, twice weekly in final two weeks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Use adaptive review: schedule based on user performance (low → frequent, high → sparse)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span> 
                      <span>Focus on topics most probable to appear in exam, using the priority list</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center border-b pb-2">
              <GraduationCap className="mr-2 h-5 w-5 text-blue-600" />
              Self-Defined Rules
            </h3>
            <div className="bg-amber-50 rounded-lg p-5 border border-amber-100">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">•</span> 
                  <span>Allocate daily study hours as per user demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">•</span> 
                  <span>Schedule topics between exam dates for revision before each exam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">•</span> 
                  <span>Strictly follow exam dates and allocate topics accordingly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">•</span> 
                  <span>Prioritize based on the priority list provided; potentially skip low-priority topics if time is short</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">•</span> 
                  <span>Balance schedule across all subjects without overloading the student</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-8">
            <button className=" w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Create My Schedule Now
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}