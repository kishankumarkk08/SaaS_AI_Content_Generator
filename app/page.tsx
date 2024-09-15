'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // Delay for text fade-in effect
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-purple-100">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src="./logo.svg" alt="logo" />
        </div>
        <nav>
          <Link href="/dashboard" className="text-gray-700 hover:text-indigo-500 flex justify-center items-center space-x-2">
            <span className="text-sm">Get Started</span>
            <svg className="w-5 h-5 transform transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className={`flex mt-[10%] flex-col items-center justify-center py-16 px-4 text-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl font-bold text-gray-800">
          AI Content <span className="text-indigo-600">Generator</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <div className="mt-8">
          <Link href="/dashboard" className="group px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full hover:bg-indigo-500 transition">
            Get started
            <svg className="inline-block w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}