"use client";

import React from "react";
import Image from "next/image";

interface SkillItem {
  title: string;
  description: string;
  icon: string;
}

const MySkills: React.FC = () => {
  const skills: SkillItem[] = [
    {
      title: "Frontend Web Development",
      description:
        "I build beautiful, functional websites with HTML, CSS, JavaScript, and React. Clean code, modern design, great user experience.",
      icon: "/image/frontend.png",
    },
    {
      title: "Backend Web Development",
      description:
        "I build responsive web apps with JavaScript, React, and Node.js. From concept to deployment, I deliver complete solutions.",
      icon: "/image/backend.png",
    },
    {
      title: "DevOps and Tools",
      description:
        "I implement DevOps solutions using Docker, Git, AWS, and CI/CD pipelines to streamline deployments.",
      icon: "/image/devops.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-4">
          My Skills
        </h1>
        <h2 className="text-lg text-gray-400 font-semibold mb-4">What I do</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-2 text-base sm:text-lg">
          I can build web applications from front-end to back-end and manage
          their deployment. Continuously learning and adapting to new
          technologies to deliver efficient and modern solutions.
        </p>
        <p className="text-gray-500 italic mb-12">Discover below how I can help you.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
