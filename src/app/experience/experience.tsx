"use client";

import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "PT. Aspex Kumbong (Korindo Group)",
    role: "Production Staff",
    period: "2019 - 2025",
    description:
      "Managed and supervised daily operations in the paper production division, ensuring quality control, production efficiency, and workplace safety compliance.",
  },
  {
    company: "Freelance Web Developer",
    role: "Full-Stack Developer",
    period: "2025 - Present",
    description:
      "Designed and developed responsive websites for various clients using modern frameworks such as Next.js, Tailwind CSS, and Express.js. Focused on creating fast, accessible, and user-friendly digital experiences.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
            <p className="text-gray-700 text-base">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
