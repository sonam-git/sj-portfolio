import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 relative transition-colors duration-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-lg opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 mt-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300 relative">
              About Me
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mt-8 leading-relaxed">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Main Description Card */}
            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Full-Stack Developer</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate developer with experience in modern web technologies. 
                I love building applications that solve real-world problems and provide 
                exceptional user experiences.
              </p>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                With a keen eye for design and a deep understanding of code, I bridge 
                the gap between beautiful interfaces and robust functionality.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Creative Problem Solver</h4>
                <p className="text-sm text-slate-600 dark:text-gray-400">Innovative solutions for complex challenges</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Fast Learner</h4>
                <p className="text-sm text-slate-600 dark:text-gray-400">Quickly adapting to new technologies</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              {/* Main profile container */}
              <div className="relative">
                {/* Gradient ring */}
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full p-1 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 shadow-inner">
                    <img 
                      src="/profile.jpg" 
                      alt="Profile picture" 
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 animate-float">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700 animate-float animation-delay-1000">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 -left-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                
                <div className="absolute top-1/4 -right-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce animation-delay-500">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Background decoration circles */}
              <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-8 left-8 w-16 h-16 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-lg opacity-40 animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-12 h-12 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-md opacity-50 animate-pulse animation-delay-500"></div>
              </div>
            </div>
            
            {/* Career Highlights - 2x2 Layout */}
            <div className="mt-12 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">Career Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <span className="text-xl font-bold text-white">50+</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wider font-medium">Projects</div>
                  <div className="text-xs text-slate-500 dark:text-gray-500 mt-1">Completed</div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <span className="text-xl font-bold text-white">3+</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wider font-medium">Years</div>
                  <div className="text-xs text-slate-500 dark:text-gray-500 mt-1">Experience</div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <span className="text-lg font-bold text-white">100%</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wider font-medium">Passion</div>
                  <div className="text-xs text-slate-500 dark:text-gray-500 mt-1">Dedication</div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <span className="text-lg font-bold text-white">24/7</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-1500"></div>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wider font-medium">Available</div>
                  <div className="text-xs text-slate-500 dark:text-gray-500 mt-1">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
