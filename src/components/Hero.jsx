import React from 'react';
import { PERSONAL } from '../data';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold">Hi, I'm <span className="text-cyan-400">{PERSONAL.name}</span></h1>
          <p className="mt-4 text-lg text-gray-200 max-w-xl">I am a {PERSONAL.role} with {PERSONAL.experience} of experience building responsive, accessible and high-performance web interfaces.</p>

          <div className="mt-6 flex gap-4">
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg">Contact Me</a>
            <a href="#projects" className="px-5 py-3 border border-gray-700 rounded-lg hover:border-cyan-400">View Projects</a>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <div>Email: {PERSONAL.email}</div>
            <div>Phone: {PERSONAL.phone}</div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          {/* Placeholder profile card */}
          <div className="w-72 h-72 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700">
            <div className="text-center text-gray-300">Profile Image<br/>(Add your image in /src/assets)</div>
          </div>
        </div>
      </div>
    </section>
  );
}