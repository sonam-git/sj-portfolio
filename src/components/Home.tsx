import React from 'react'
import ProjectSection from './ProjectSection'
import heroImage from '../assets/images/hero.png'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with developer background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Hero Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          ></div>
          
          {/* Layered Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/85 dark:from-black/85 dark:via-gray-900/75 dark:to-black/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse animation-delay-2000"></div>
          </div>
          
          {/* Developer-themed animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Code Snippets */}
            <div className="absolute top-20 left-10 opacity-20 dark:opacity-30 hidden md:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 font-mono text-xs text-green-400 animate-float border border-green-400/20">
                <div>const developer = {'{'}</div>
                <div>&nbsp;&nbsp;name: "Sonam",</div>
                <div>&nbsp;&nbsp;skills: ["React", "Node.js"]</div>
                <div>{'};'}</div>
              </div>
            </div>
            
            <div className="absolute top-32 right-16 opacity-20 dark:opacity-30 animation-delay-2000 hidden lg:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 font-mono text-xs text-blue-400 animate-float border border-blue-400/20">
                <div>&lt;Component&gt;</div>
                <div>&nbsp;&nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                <div>&lt;/Component&gt;</div>
              </div>
            </div>
            
            <div className="absolute bottom-32 left-20 opacity-20 dark:opacity-30 animation-delay-4000 hidden md:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 font-mono text-xs text-purple-400 animate-float border border-purple-400/20">
                <div>function buildFuture() {'{'}</div>
                <div>&nbsp;&nbsp;return innovation;</div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Additional code snippets for larger screens */}
            <div className="absolute top-64 left-1/4 opacity-15 dark:opacity-25 animation-delay-1000 hidden xl:block">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-2 font-mono text-xs text-cyan-400 animate-float border border-cyan-400/20">
                <div>npm install creativity</div>
              </div>
            </div>

            <div className="absolute bottom-48 right-1/4 opacity-15 dark:opacity-25 animation-delay-3000 hidden xl:block">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-2 font-mono text-xs text-yellow-400 animate-float border border-yellow-400/20">
                <div>git commit -m "magic"</div>
              </div>
            </div>

            {/* Geometric Developer Elements */}
            <div className="absolute top-16 right-32 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-spin-slow hidden md:block"></div>
            <div className="absolute bottom-24 right-12 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rotate-12 animate-bounce hidden lg:block"></div>
            <div className="absolute top-72 right-20 w-6 h-6 border border-indigo-400/40 rounded animate-spin-slow animation-delay-2000 hidden lg:block"></div>
            <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-gradient-to-r from-pink-400/30 to-rose-500/30 rounded-full animate-pulse animation-delay-4000"></div>
            
            {/* Binary Pattern */}
            <div className="absolute inset-0 opacity-8 dark:opacity-15">
              <div className="absolute top-8 left-8 font-mono text-xs text-green-400 animate-pulse hidden md:block">
                01001000 01100101 01101100 01101100 01101111
              </div>
              <div className="absolute bottom-8 right-8 font-mono text-xs text-blue-400 animate-pulse animation-delay-2000 hidden md:block">
                01010111 01101111 01110010 01101100 01100100
              </div>
              <div className="absolute top-1/2 left-4 font-mono text-xs text-purple-400 animate-pulse animation-delay-4000 rotate-90 hidden lg:block">
                01000011 01001111 01000100 01000101
              </div>
            </div>

            {/* Enhanced Terminal Window */}
            <div className="absolute bottom-16 left-16 opacity-30 dark:opacity-40 hidden lg:block">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-700/50 w-72 shadow-2xl">
                <div className="bg-gray-800/70 px-4 py-2 rounded-t-lg flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-4000"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">~/portfolio</div>
                </div>
                <div className="p-4 font-mono text-xs space-y-1">
                  <div className="text-green-400 animate-typing">$ npm run develop</div>
                  <div className="text-gray-400 animate-pulse animation-delay-2000">✓ Building amazing things...</div>
                  <div className="text-blue-400 animate-pulse animation-delay-4000">✓ Innovation loaded</div>
                  <div className="w-2 h-4 bg-green-400 animate-pulse animation-delay-4000 inline-block"></div>
                </div>
              </div>
            </div>

            {/* Particle-like dots */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-2000 opacity-60"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-4000 opacity-60"></div>
              <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse animation-delay-1000 opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Hero content */}
        <div className="relative text-center max-w-6xl mx-auto z-10 px-4">
          <div className="animate-fade-in-up">
            {/* Main heading with enhanced styling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight transition-colors duration-300">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 dark:from-blue-300 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent animate-gradient">
                Sonam J Sherpa
              </span>
            </h1>
            
            {/* Subtitle with typewriter effect */}
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 dark:text-gray-100 mb-6 font-light transition-colors duration-300">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
              I craft beautiful, functional, and user-centered digital experiences that solve real-world problems and delight users.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
              </button>
              
              <button className="group px-8 sm:px-10 py-3 sm:py-4 border-2 border-gray-300 text-gray-200 font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-white/10 w-full sm:w-auto">
                Get In Touch
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Tech stack preview */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <div className="text-xs sm:text-sm text-gray-400 font-medium tracking-wider uppercase">Built with</div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tech, index) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-200 text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="text-xs font-medium mb-2 tracking-wider">SCROLL</div>
            <div className="w-6 h-10 border-2 border-gray-300 hover:border-white rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="mt-2">
              <svg className="w-4 h-4 animate-bounce animation-delay-2000" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with enhanced design */}
      <section id="about" className="py-24 bg-white dark:bg-gray-800 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-xl text-slate-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                I'm a passionate developer with experience in modern web technologies. 
                I love building applications that solve real-world problems and provide 
                exceptional user experiences.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a keen eye for design and a deep understanding of code, I bridge 
                the gap between beautiful interfaces and robust functionality.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600 uppercase tracking-wide">Passion</div>
                </div>
              </div>
            </div>
            
            {/* Profile image placeholder with gradient border */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full p-1">
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-slate-400">👨‍💻</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with enhanced cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-800', icon: '📘' },
              { name: 'Node.js', color: 'from-green-500 to-green-700', icon: '🟢' },
              { name: 'CSS/SCSS', color: 'from-pink-500 to-rose-500', icon: '🎨' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: '⚡' },
              { name: 'Git', color: 'from-orange-500 to-red-500', icon: '🔧' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="font-bold text-slate-800 text-lg">{skill.name}</h3>
                </div>
                {/* Hover effect border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 -z-10 blur-xl transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Placeholder */}
      <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Coming soon - Professional experience and work history.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white dark:bg-gray-800 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              My educational journey in computer science and web development, building a strong foundation for my career.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>

              {/* Education Items */}
              <div className="space-y-12">
                {/* UC Berkeley Extension Boot Camp */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          Full Stack Web Development Boot Camp
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                          UC Berkeley Extension
                        </p>
                      </div>
                      <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Jan 2023 - July 2023
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Intensive 6-month program covering modern full-stack web development technologies and methodologies. 
                      Gained hands-on experience with front-end and back-end development, databases, and deployment strategies.
                    </p>
                    
                    {/* Skills Learned */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Git', 'Heroku', 'RESTful APIs', 'Responsive Design'].map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Certificate of Completion • Full Flex Program
                      </span>
                    </div>
                  </div>
                </div>

                {/* Santa Rosa Junior College */}
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          Associate in Computer Studies
                        </h3>
                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-1">
                          Santa Rosa Junior College
                        </p>
                      </div>
                      <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          2020 - 2022
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      Comprehensive foundation in computer science principles, programming fundamentals, and information systems. 
                      Developed strong analytical thinking and problem-solving skills essential for software development.
                    </p>
                    
                    {/* Core Subjects */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Core Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Programming Fundamentals', 'Data Structures', 'Database Design', 'Computer Systems', 'Web Technologies', 'Software Engineering', 'Mathematics', 'Logic & Algorithms'].map((subject, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Degree Badge */}
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-full mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Associate Degree • Computer Studies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 shadow-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300">Years of Formal Education</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 shadow-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
              <div className="text-gray-700 dark:text-gray-300">Technologies Learned</div>
            </div>
            <div className="text-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl p-6 shadow-lg transition-colors duration-300">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300">Commitment to Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section - Placeholder */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Coming soon - Contact form and information.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section - Placeholder */}
      <section id="resume" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Coming soon - Downloadable resume and detailed CV.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
