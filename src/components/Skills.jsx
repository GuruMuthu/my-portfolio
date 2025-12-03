import React from 'react';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-900" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-cyan-400 inline-block mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SKILLS.map((s, i) => (
            <div key={i} className="p-4 bg-gray-800 rounded-lg text-center">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}