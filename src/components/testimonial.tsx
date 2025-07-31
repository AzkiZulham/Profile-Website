"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    title: "E-commerce Web T-Shop",
    text: "I had the pleasure of working with Azki on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.",
    name: "Dewi - Founder T-Shop",
    position: "Owner @ T-Shop",
    image: "/image/Dewi.png",
    avatar: "/image/Dewi.png",
  },
  {
    title: "Photography Portfolio Website",
    text: "Azki built our photography portfolio website with stunning galleries and a seamless user experience. We couldn't be happier with the results!",
    name: "Adam Kalalo - Founder",
    position: "Photographer @ Adam Kalalo",
    image: "/image/Adam.png",
    avatar: "/image/adam.png",
  },
  {
    title: "Wedding Organizer Website",
    text: "Azki's work on our wedding organizer website was exceptional. They delivered a beautiful and functional site that perfectly captured our vision.",
    name: "Dina - Founder",
    position: "Founder @ Wedding Organizer",
    image: "/image/Dina.png",
    avatar: "/image/Dina.png",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Clients Say</h2>
          <p className="text-gray-500 text-lg">
            Discover what clients have to say about their experiences working with me. My client&apos;s satisfaction is my greatest achievement!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Testimonial Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{testimonial.title}</h3>
            <p className="text-gray-600 mb-6">{testimonial.text}</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>

            {/* Avatars */}
            <div className="flex gap-4 mt-6">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-10 h-10 rounded-full border-2 ${idx === activeIndex ? "border-gray-800" : "border-transparent"} transition-all`}
                >
                  <Image
                    src={t.avatar}
                    alt={`Avatar ${idx + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Client Image */}
          <div className="flex justify-center">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
