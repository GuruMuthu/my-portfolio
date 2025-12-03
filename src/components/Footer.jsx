import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">© {new Date().getFullYear()} Muthu — Front-End Developer</div>
    </footer>
  );
}