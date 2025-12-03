import React from 'react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold border-b-4 border-cyan-400 inline-block mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <div key={p.id} className="p-5 bg-gray-800 rounded-lg hover:scale-[1.01] transition-transform">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{p.description}</p>
              <div className="mt-3 text-xs text-gray-400">Tech: {p.tech.join(', ')}</div>
              <a href={p.link} className="mt-4 inline-block text-cyan-400">View →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}