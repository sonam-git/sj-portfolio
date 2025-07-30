import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 shadow-xl backdrop-blur-sm transition-colors duration-300 overflow-hidden">
      {/* Coding Background Pattern for Light Mode */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        {/* Binary code pattern */}
        <div className="absolute top-2 left-10 text-xs font-mono text-blue-400 dark:text-cyan-400 select-none animate-pulse">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute bottom-2 right-10 text-xs font-mono text-green-400 dark:text-green-300 select-none">
          console.log("Welcome to my portfolio");
        </div>
        <div className="absolute top-6 right-32 text-xs font-mono text-purple-400 dark:text-purple-300 select-none">
          const developer = "Sonam J Sherpa";
        </div>
        <div className="absolute bottom-6 left-32 text-xs font-mono text-indigo-400 dark:text-blue-300 select-none">
          {"{ fullStack: true }"}
        </div>
        
        {/* Additional dark mode code snippets */}
        <div className="absolute top-4 left-1/2 text-xs font-mono text-transparent dark:text-yellow-300 select-none">
          npm install awesome-portfolio
        </div>
        <div className="absolute bottom-4 left-1/4 text-xs font-mono text-transparent dark:text-pink-300 select-none">
          git commit -m "Deploy portfolio"
        </div>
        <div className="absolute top-8 right-1/4 text-xs font-mono text-transparent dark:text-emerald-300 select-none">
          {"// Building the future"}
        </div>
        
        {/* Floating code symbols */}
        <div className="absolute top-8 left-1/4 text-blue-300 dark:text-cyan-300 opacity-50 animate-float text-2xl">{"<>"}</div>
        <div className="absolute bottom-8 right-1/4 text-green-300 dark:text-green-400 opacity-50 animate-float text-xl animation-delay-1000">{"()"}</div>
        <div className="absolute top-1/2 left-20 text-purple-300 dark:text-purple-400 opacity-50 animate-float text-lg animation-delay-500">{"[]"}</div>
        <div className="absolute top-1/2 right-20 text-indigo-300 dark:text-blue-400 opacity-50 animate-float text-xl animation-delay-1500">{"{}"}</div>
        
        {/* Additional dark mode symbols */}
        <div className="absolute top-12 right-12 text-transparent dark:text-yellow-400 opacity-60 animate-float text-lg animation-delay-2000">{"$"}</div>
        <div className="absolute bottom-12 left-12 text-transparent dark:text-pink-400 opacity-60 animate-float text-xl animation-delay-2500">{"#"}</div>
      </div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 100" fill="none">
          <path d="M0 50h100v20h50v-40h100v20h50v-20h100v40h50v-20h100v20h50v-40h100v20h50v-20h100v40h50v-20h100v20h50v-40h100v20h50v-20h100" 
                stroke="currentColor" strokeWidth="1" className="text-blue-200 dark:text-cyan-400"/>
          <circle cx="100" cy="50" r="3" fill="currentColor" className="text-green-300 dark:text-green-400"/>
          <circle cx="300" cy="30" r="2" fill="currentColor" className="text-purple-300 dark:text-purple-400"/>
          <circle cx="500" cy="70" r="2" fill="currentColor" className="text-indigo-300 dark:text-blue-400"/>
          <circle cx="700" cy="50" r="3" fill="currentColor" className="text-blue-300 dark:text-cyan-400"/>
          <circle cx="900" cy="30" r="2" fill="currentColor" className="text-green-300 dark:text-emerald-400"/>
          <circle cx="1100" cy="70" r="2" fill="currentColor" className="text-purple-300 dark:text-pink-400"/>
          
          {/* Additional dark mode circuit elements */}
          <path d="M0 25h50v10h25v-20h50v10h25v-10h50v20h25v-10h50v10h25v-20h50v10h25v-10h50v20h25v-10h50v10h25v-20h50v10h25v-10h50" 
                stroke="currentColor" strokeWidth="0.5" className="text-transparent dark:text-yellow-300 opacity-60"/>
          <path d="M0 75h75v15h35v-30h75v15h35v-15h75v30h35v-15h75v15h35v-30h75v15h35v-15h75v30h35v-15h75v15h35v-30h75v15h35v-15h75" 
                stroke="currentColor" strokeWidth="0.5" className="text-transparent dark:text-pink-300 opacity-40"/>
        </svg>
      </div>

      {/* Dark mode matrix-style background */}
      <div className="absolute inset-0 opacity-0 dark:opacity-10">
        <div className="absolute top-3 left-16 text-xs font-mono text-green-400 select-none animate-pulse animation-delay-3000">
          0110100101101111
        </div>
        <div className="absolute top-7 left-40 text-xs font-mono text-cyan-400 select-none animate-pulse animation-delay-3500">
          1100101010010011
        </div>
        <div className="absolute bottom-3 right-16 text-xs font-mono text-purple-400 select-none animate-pulse animation-delay-4000">
          1010101110101010
        </div>
        <div className="absolute bottom-7 right-40 text-xs font-mono text-yellow-400 select-none animate-pulse animation-delay-4500">
          0101011010110101
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center py-4">
          {/* Theme Toggle Button */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 mr-4 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode  
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo/Name */}
          <div className="flex-shrink-0 text-center">
            <div className="relative">
              {/* Decorative elements - enhanced for dark mode */}
              <div className="absolute -top-2 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 rounded-full opacity-30 dark:opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-400 dark:to-pink-300 rounded-full opacity-40 dark:opacity-60 animate-bounce animation-delay-1000"></div>
              
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-cyan-300 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-2 relative z-10 tracking-tight">
                Sonam J Sherpa
              </h1>
            </div>
            
            <div className="relative">
              <p className="text-base font-medium text-gray-600 dark:text-gray-300">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
                <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold">
                  Software Engineer
                </span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 text-[#0077B5] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 text-[#333333] dark:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 10.95.69-.069-.5-.04-.5-.04-.5-.04-.69-.199-.69-.478 0-.237.008-.868.013-1.703-3.342.724-4.042-1.61-4.042-1.61C2.265 18.477 1.519 18.107 1.519 18.107c-.877-.599.069-.586.069-.586.97.068 1.478.997 1.478.997.861 1.479 2.255 1.052 2.805.802.088-.623.339-1.05.618-1.291-2.142-.243-4.396-1.072-4.396-4.77 0-1.053.378-1.915 1.004-2.588-.101-.244-.436-1.224.095-2.553 0 0 .817-.262 2.676.994a9.305 9.305 0 012.439-.328c.826.004 1.659.112 2.438.328 1.856-1.256 2.673-.994 2.673-.994.533 1.329.198 2.309.097 2.553.627.673 1.002 1.535 1.002 2.588 0 3.709-2.258 4.523-4.408 4.762.347.297.656.887.656 1.787 0 1.29-.012 2.332-.012 2.646 0 .258.188.559.694.464C20.873 21.394 24 17.06 24 11.987 24.001 5.367 18.634.001 12.017.001z"/>
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                GitHub
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="group relative p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 text-[#EA4335] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Email
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="group relative p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 text-[#25D366] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Phone
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Three Rows with top margin for corner buttons */}
        <div className="md:hidden py-4 text-center space-y-3">
          {/* Row 1: Name */}
          <div className="relative px-16">
            {/* Decorative elements - enhanced for dark mode */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 rounded-full opacity-30 dark:opacity-50 animate-pulse"></div>
            
            <h1 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-cyan-300 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent relative z-10 tracking-tight">
              Sonam J Sherpa
            </h1>
            
            {/* Stylish underline - enhanced for dark mode */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 mx-auto mt-2 rounded-full"></div>
          </div>
          
          {/* Row 2: Title */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold">
                Full Stack Developer
              </span>
              <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
              <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold">
                Software Engineer
              </span>
            </p>
          </div>
          
          {/* Row 3: Social Links */}
          <div className="flex justify-center items-center space-x-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sonam-j-sherpa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 text-[#0077B5] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sonam-git"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 text-[#333333] dark:text-white transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 10.95.69-.069-.5-.04-.5-.04-.5-.04-.69-.199-.69-.478 0-.237.008-.868.013-1.703-3.342.724-4.042-1.61-4.042-1.61C2.265 18.477 1.519 18.107 1.519 18.107c-.877-.599.069-.586.069-.586.97.068 1.478.997 1.478.997.861 1.479 2.255 1.052 2.805.802.088-.623.339-1.05.618-1.291-2.142-.243-4.396-1.072-4.396-4.77 0-1.053.378-1.915 1.004-2.588-.101-.244-.436-1.224.095-2.553 0 0 .817-.262 2.676.994a9.305 9.305 0 012.439-.328c.826.004 1.659.112 2.438.328 1.856-1.256 2.673-.994 2.673-.994.533 1.329.198 2.309.097 2.553.627.673 1.002 1.535 1.002 2.588 0 3.709-2.258 4.523-4.408 4.762.347.297.656.887.656 1.787 0 1.29-.012 2.332-.012 2.646 0 .258.188.559.694.464C20.873 21.394 24 17.06 24 11.987 24.001 5.367 18.634.001 12.017.001z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sherpa.sjs@gmail.com"
              className="group relative p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 text-[#EA4335] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="group relative p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 text-[#25D366] transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Theme Toggle Button - positioned at top right */}
      <button
        onClick={toggleTheme}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-white rounded-xl shadow-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50"
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          // Sun icon for light mode
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
