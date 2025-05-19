// import { useState } from "react";
import { Calendar, Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  // const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate()

  const rules = [
    {
      title: "The 80/20 Priority Rule",
      image: "https://ars.els-cdn.com/content/image/1-s2.0-S0749596X04001330-gr6.gif",
      description:
        "Allocate 80% of your study time to topics that combine high exam weight and personal difficulty. Spend the remaining 20% on reviewing topics you already know well.",
      research: "Metcalfe & Kornell (2005)"
    },
    {
      title: "The Stepping Stone Approach",
      image: "https://ars.els-cdn.com/content/image/1-s2.0-S0749596X09000138-gr2.jpg",
      description:
        "Master foundational and medium-difficulty topics before advancing to the most challenging material. Build a knowledge ladder that supports your learning progression.",
      research: "Pyc & Rawson (2009)"
    },
    {
      title: "The 1-3-7-14 Review Schedule",
      image: "https://media.springernature.com/lw685/springer-static/image/prt%3A978-1-4419-1428-6%2F5/MediaObjects/978-1-4419-1428-6_5_Part_Fig1-360_HTML.gif",
      description:
        "Review new material after 1 day, then 3 days, then 7 days, then 14 days. This spacing maximizes retention with minimal time investment.",
      research: "Ebbinghaus/Wozniak's research"
    },
    {
      title: "The Peak Energy Principle",
      image: "https://www.researchgate.net/publication/381549908/figure/fig1/AS:11431281253303929@1718854017998/Experimental-procedure-behavioral-results-and-retrieval-locked-reactivation-of-head.png",
      description:
        "Schedule your weakest subjects during your peak mental energy hours (typically morning). Save easier review sessions for lower energy periods.",
      research: "Gais et al. (2006)"
    },
    {
      title: "The Real-World Testing Cycle",
      image: "https://www.mdpi.com/behavsci/behavsci-15-00662/article_deploy/html/images/behavsci-15-00662-g001.png",
      description:
        "Take weekly practice tests that mimic the actual exam format. Double the frequency in the final two weeks before the exam.",
      research: "McDaniel et al. (2011)"
    },
    {
      title: "The Adaptive Review Protocol",
      image: "https://journals.sagepub.com/cms/10.1111/j.1467-9280.2008.02127.x/asset/e43f71b5-9ab5-4ed0-9b37-02c8ce5c9d53/assets/images/large/10.1111_j.1467-9280.2008.02127.x-fig2.jpg",
      description:
        "Review topics scoring below 70% every 2-3 days. Review topics scoring 70-85% weekly. Review topics scoring above 85% every two weeks.",
      research: "Kornell & Bjork (2008)"
    },
    {
      title: "The Topic Clustering Method",
      image: "https://my.chartered.college/wp-content/uploads/2021/10/Firth_Figure-2-2.png",
      description:
        "Schedule related topics within 48 hours of each other to strengthen connections between concepts and enhance comparative understanding.",
      research: "Carvalho & Goldstone (2015)"
    },
    {
      title: "The Intensity Escalation Timeline",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nSlFrqt6EK6QzbPI1HjFxrVDn6N_DdgBSA&s",
      description:
        "Start with 1-2 hours daily several weeks before the exam. Increase to 2-3 hours daily at 3-4 weeks out, then 3-4 hours daily in the final two weeks. Reduce to light review only the day before the exam.",
      research: "Learning Research and Development Center"
    }
  ];

  const features = [
    {
      title: "Personalized Learning Paths",
      description: "We analyze your strengths and weaknesses to create a customized study plan that maximizes your learning efficiency."
    },
    {
      title: "Flexible Time Management",
      description: "Our schedules work with your availability, not against it. Study when you can, we'll tell you what to focus on."
    },
    {
      title: "Scientifically Optimized",
      description: "Every aspect of your study plan is based on proven cognitive science and learning research."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="bg-indigo-900 text-white">
            <div className="container mx-auto px-6 py-24 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Never Worry About Exam Preparation Again</h1>
                  <p className="text-xl mb-8 text-indigo-100">Smart study schedules tailored to your exams, learning style, and availability.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                    <button onClick={() => navigate('/dashboard')} className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300">
                      Get Started Free
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-md">
                    {/* This div would contain your hero image */}
                    <div className="aspect-[4/3] rounded-lg bg-indigo-800 flex items-center justify-center">
                      <div className="text-center text-indigo-200">
                        <Calendar className="w-20 h-20 mx-auto mb-4 opacity-70" />
                        <p className="text-sm">Hero Image Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Value Proposition */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Schedule Generator Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just create schedules. We create strategic learning paths designed for maximum retention and exam success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We Understand Your Learning Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our intelligent algorithm creates personalized schedules based on your unique situation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">We understand:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <div className="rounded-full bg-indigo-600 w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">Your learning situation and current knowledge level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <div className="rounded-full bg-indigo-600 w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">Your exam pattern and subject weightage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <div className="rounded-full bg-indigo-600 w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">Your unit-wise and subject-wise strengths</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">We deliver:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <div className="rounded-full bg-indigo-600 w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">Flexible schedules in duration format - learn when you have time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <div className="rounded-full bg-indigo-600 w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">Strategic recommendations on what and when to learn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <div className="rounded-full bg-indigo-600 w-2 h-2"></div>
                      </div>
                      <span className="text-gray-700">Comprehensive coverage so you never forget a topic</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center">
                {/* This div would contain your illustration image */}
                <div className="aspect-square w-full max-w-md rounded-lg bg-slate-200 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <Book className="w-20 h-20 mx-auto mb-4 opacity-70" />
                    <p className="text-sm">Feature Illustration Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Core Rules */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Science Behind Our System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                8 Core Rules for Effective Exam Topic Scheduling
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="bg-slate-50 w-[90%] h-[28rem] flex justify-center items-center flex-col border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <img
                    src={rule.image}
                    alt={rule.title}
                    className="h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{rule.description}</p>
                    <p className="text-sm text-gray-500 italic">
                      Research: {rule.research}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-indigo-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Students who have transformed their exam preparation with our system
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">A</div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Aisha K.</h4>
                    <p className="text-sm text-gray-500">Engineering Student</p>
                  </div>
                </div>
                <p className="text-gray-700">"I went from barely passing to scoring in the top 10% of my class. The scheduling approach completely changed how I study!"</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">R</div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Rahul T.</h4>
                    <p className="text-sm text-gray-500">Medical Student</p>
                  </div>
                </div>
                <p className="text-gray-700">"The flexible schedule worked around my clinical rotations. I no longer had to choose between sleep and studying."</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">S</div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sara L.</h4>
                    <p className="text-sm text-gray-500">Law Student</p>
                  </div>
                </div>
                <p className="text-gray-700">"The 80/20 rule helped me focus on what truly mattered. I felt so much more confident walking into my bar exam."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-indigo-900 text-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stop Wasting Time on Back Exams</h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Get your personalized study schedule today and never worry about failing an exam again.
            </p>
            <button onClick={() => navigate('/dashboard')} className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300 text-lg">
              Generate My Free Schedule
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}