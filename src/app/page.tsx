"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AboutMe from "../app/aboutme/aboutme";
import MySkills from "./skills/myskills";
import PortfolioPage from "./portfolio/portfolio";
import Experience from "./experience/experience";
import Testimonials from "@/components/testimonial";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <PortfolioPage />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
} 