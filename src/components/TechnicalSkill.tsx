import React from 'react';
import { useContactModal } from '../contexts/ContactModalContext';

const TechnicalSkill: React.FC = () => {
  const { openContactModal } = useContactModal();
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'Python'],
      icon: '💻',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-100 to-blue-200',
      darkBgColor: 'from-blue-900/30 to-blue-800/30'
    },
    {
      title: 'Frameworks | Libraries',
      skills: ['React', 'Redux', 'Node.js', 'Express.js', 'Next.js', 'Handlebars', 'jQuery'],
      icon: '⚛️',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-100 to-green-200',
      darkBgColor: 'from-green-900/30 to-green-800/30'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL'],
      icon: '🗄️',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-100 to-purple-200',
      darkBgColor: 'from-purple-900/30 to-purple-800/30'
    },
    {
      title: 'APIs',
      skills: ['RESTful APIs', 'GraphQL'],
      icon: '🔗',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-100 to-orange-200',
      darkBgColor: 'from-orange-900/30 to-orange-800/30'
    },
    {
      title: 'Tools',
      skills: ['GitHub', 'GitLab', 'VS Code', 'Figma', 'Postman', 'Heroku', 'AWS', 'Vercel'],
      icon: '🛠️',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'from-indigo-100 to-indigo-200',
      darkBgColor: 'from-indigo-900/30 to-indigo-800/30'
    },
    {
      title: 'Soft Skills',
      skills: ['Agile Methodologies', 'Problem Solving', 'Communication', 'Team Collaboration'],
      icon: '🤝',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'from-pink-100 to-pink-200',
      darkBgColor: 'from-pink-900/30 to-pink-800/30'
    }
  ];

  return (
    <section id="technical-skills" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-800 relative transition-colors duration-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-xl opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-lg opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 mt-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 relative">
              Technical Skills
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed transition-colors duration-300">
            Technologies, tools, and methodologies I use to build modern web applications and solve complex problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative bg-gray-100/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 animate-fade-in-up hover:bg-gray-200/80 dark:hover:bg-gray-800/80"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Category Header */}
              <div className="relative mb-8">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 mb-1">
                      {category.title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="relative space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="group/skill flex items-center p-4 bg-gray-100/60 dark:bg-gray-600/40 rounded-xl border border-gray-200/50 dark:border-gray-600/30 hover:bg-gray-200/80 dark:hover:bg-gray-700/70 hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-right backdrop-blur-sm"
                    style={{ animationDelay: `${categoryIndex * 150 + skillIndex * 50}ms` }}
                  >
                    {/* Skill Indicator */}
                    <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full mr-4 group-hover/skill:scale-125 group-hover/skill:shadow-lg transition-all duration-300`}></div>
                    
                    {/* Skill Name */}
                    <span className="text-gray-900 dark:text-gray-200 font-medium group-hover/skill:text-gray-700 dark:group-hover/skill:text-white transition-colors duration-300 flex-1">
                      {skill}
                    </span>

                    {/* Proficiency Indicator */}
                    <div className="flex space-x-1">
                      {[...Array(Math.floor(Math.random() * 2) + 4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-50 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-110`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="relative mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-600/40">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-3 animate-pulse`}></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {category.skills.length} Skills
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold text-xs uppercase tracking-wider">
                      {category.title === 'Languages' ? 'Core' : 
                       category.title === 'Frameworks | Libraries' ? 'Advanced' :
                       category.title === 'Databases' ? 'Proficient' :
                       category.title === 'APIs' ? 'Experienced' :
                       category.title === 'Tools' ? 'Expert' : 'Strong'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-ping group-hover:opacity-40"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce animation-delay-1000 group-hover:opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 bg-gray-100/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl transition-colors duration-300 hover:bg-gray-200/80 dark:hover:bg-gray-800/80">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills Overview
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit for full-stack development, from frontend interfaces to backend systems and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-gray-100/60 dark:bg-gray-600/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-200/80 dark:hover:bg-gray-700/70 group-hover:bg-blue-100/70 dark:group-hover:bg-blue-800/30">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Programming Languages</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gray-100/60 dark:bg-gray-600/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-200/80 dark:hover:bg-gray-700/70 group-hover:bg-green-100/70 dark:group-hover:bg-green-800/30">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">7</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Frameworks & Libraries</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gray-100/60 dark:bg-gray-600/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-200/80 dark:hover:bg-gray-700/70 group-hover:bg-purple-100/70 dark:group-hover:bg-purple-800/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">8</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Development Tools</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gray-100/60 dark:bg-gray-600/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-200/80 dark:hover:bg-gray-700/70 group-hover:bg-pink-100/70 dark:group-hover:bg-pink-800/30">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Soft Skills</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/30 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute top-1/2 left-6 w-2 h-2 bg-white/25 rounded-full animate-pulse animation-delay-500"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 dark:bg-gray-700">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-blue-100 dark:text-purple-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  Let's collaborate and bring your ideas to life using these technologies and more. 
                  I'm always excited to work on innovative projects!
                </p>
              </div>
              <button 
                onClick={openContactModal}
                className="group bg-white text-blue-600 font-bold px-10 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:scale-105 transform inline-flex items-center"
              >
                Get In Touch
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkill;
