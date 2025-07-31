"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <header className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Teks */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <Typography
            variant="h3"
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900"
          >
            Azki Zulham Amongsaufa
          </Typography>

          <Typography
            variant="subtitle1"
            className="mb-8 text-gray-600 text-base sm:text-lg"
          >
            A Full-Stack Web Developer from Indonesia. I specialize in building modern and responsive web applications. I love creating websites that look great and work well. Building scalable and high-performance web solutions for your business needs.
          </Typography>

          <Button
            variant="contained"
            className="!bg-gray-900 !text-white rounded px-8 py-3 hover:!bg-gray-800 !font-bold"
            href="#contact"
          >
            CONTACT ME
          </Button>
        </div>

        {/* Gambar */}
        <div className="order-1 lg:order-2">
          <Image
            width={1024}
            height={1024}
            alt="Azki Zulham Amongsaufa"
            src="/image/Profile.jpeg"
            className="w-full h-auto max-h-[30rem] rounded-xl object-cover bg-gray-200 mx-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
