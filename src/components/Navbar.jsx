import React from 'react';
import { PERSONAL } from '../data';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800/80 backdrop-blur z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-cyan-300">{PERSONAL.name}</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-cyan-300">Home</a>
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#skills" className="hover:text-cyan-300">Skills</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#experience" className="hover:text-cyan-300">Experience</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
        <div className="md:hidden">{/* simple mobile nav placeholder */}
          <a href="#contact" className="text-sm px-3 py-1 bg-cyan-500 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
}