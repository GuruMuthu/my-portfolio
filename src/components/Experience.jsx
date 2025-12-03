import React from 'react';
import { PERSONAL } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-900" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-cyan-400 inline-block mb-6">Experience</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Front-End Developer</h3>
          <div className="text-sm text-gray-400">{PERSONAL.experience}</div>
          <ul className="mt-3 list-disc list-inside text-gray-300">
            <li>Built responsive UI components using React.js and Tailwind CSS.</li>
            <li>Collaborated with designers to implement pixel-perfect layouts and accessibility improvements.</li>
            <li>Optimized web applications for performance and maintainability.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}