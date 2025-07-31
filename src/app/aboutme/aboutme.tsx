"use client";
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Hi, I&apos;m Azki Zulham, an industrial engineering graduate with a strong interest in web development and digital solutions. <br />With over 4 years of professional experience in production and process control at a major manufacturing company, I bring a structured and analytical approach to building efficient web applications.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in HTML, CSS, TypeScript, React, Next.js, and Node.js, enabling me to craft scalable and high-performance web solutions from front-end to back-end. My passion lies in translating real-world systems into clean, functional digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
