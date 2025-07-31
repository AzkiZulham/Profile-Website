// app/portfolio/page.tsx atau page.jsx
'use client';
import Image from 'next/image';

const highlightProject = {
  title: "E-commerce Web T-Shop",
  description: "I'am created an e-commerce website for a local clothing store with online shopping, a shopping cart, and digital payments. Developed a full-featured e-commerce website for a local clothing brand, enabling customers to seamlessly browse products. The platform includes inventory management, responsive design for mobile users, and an intuitive admin dashboard for order tracking and product updates.",
  tech: ["React", "Tailwind CSS", "Node.JS", "MonggoDB", "GitHub"],
  image: "/image/tokobaju.png",
  link: "https://tshop.com/store"
};

const otherProjects = [
  {
    title: "Photography Portfolio Website",
    description: "A personal portfolio website showcasing my photography work with a gallery, contact form, and blog.",
    image: "/image/photographyweb.png",
  },
  {
    title: "Wedding Organizer Website",
    description: "A website for a wedding planning service, featuring vendor listings, budget tracking, and a guest RSVP system.",
    image: "/image/weddingorganizer.png",
  },
  {
    title: "Restaurant Website",
    description: "A website for a restaurant featuring online reservations, menu display, and customer reviews.",
    image: "/image/restoran.png",
  },
  
 
];

export default function PortfolioPage() {
  return (
    
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Highlight Project */}
      <h1 className="text-4xl font-bold mb-20 text-center">My Portfolio</h1>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
        <Image
          src={highlightProject.image}
          alt={highlightProject.title}
          width={500}
          height={300}
          className="rounded-xl shadow-lg object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{highlightProject.title}</h2>
          <p className="text-gray-700 mb-3">{highlightProject.description}</p>
          <ul className="flex flex-wrap gap-2 text-sm text-white">
            {highlightProject.tech.map((tech, i) => (
              <li key={i} className="bg-black px-3 py-1 rounded-full">{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Other Projects */}
      <h4 className="text-1xl text-gray-700 italic mb-6 text-center">See all my projects</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="rounded-lg mb-4 object-cover"
            />
            <h4 className="font-bold mb-2">{project.title}</h4>
            <p className="text-sm text-gray-600">{project.description}</p>
            <button className="mt-3 px-4 py-1 bg-black text-white rounded hover:bg-gray-800">
              See Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
