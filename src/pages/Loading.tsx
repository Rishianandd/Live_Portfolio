import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-black drop-shadow-lg tracking-wide z-10 animate-bounce mb-6">
          RISHI ANAND
        </h1>
        <div className="relative w-56 h-2">
          <span className="absolute left-0 top-0 h-2 bg-yellow-400 rounded-full animate-loading-left" style={{ width: '44%' }} />
          <span className="absolute right-0 top-0 h-2 bg-yellow-400 rounded-full animate-loading-right" style={{ width: '44%' }} />
        </div>
        <div className="mt-10 flex justify-center gap-8">
          <a href="https://github.com/RishiAnandd" target="_blank" rel="noopener noreferrer">
            <svg className="w-10 h-10 text-black animate-bounce" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub Cat">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rishiii-anand/" target="_blank" rel="noopener noreferrer">
            <svg className="w-10 h-10 text-blue-700 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loading;
