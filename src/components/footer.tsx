export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:flex sm:justify-between sm:items-center">
 
        <div className="mb-6 sm:mb-0">
          <h2 className="text-xl font-bold">Azki Portfolio</h2>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

 
        <div className="mb-6 sm:mb-0">
          <nav className="flex space-x-6">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>

        
        <div className="flex space-x-4">
          <a href="https://github.com/AzkiZulham" target="_blank" className="hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.3.1-2.8 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C18 6.3 19 6.6 19 6.6c.6 1.5.1 2.5.1 2.8.8.8 1.2 1.9 1.2 3.2 0 4.7-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/azkizulham/" target="_blank" className="hover:text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.6v-5.4c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.8 1.4-.1.3-.1.6-.1 1v5.2H9.75s.05-8.4 0-9.3h3.6v1.3c.5-.7 1.3-1.7 3.2-1.7 2.4 0 4.2 1.6 4.2 5.1v4.6zM5.34 8.64c-1.2 0-2.04-.8-2.04-1.8 0-1.03.83-1.8 2.08-1.8s2.04.77 2.04 1.8c-.04 1-.83 1.8-2.08 1.8h-.01zM3.54 20.45h3.6V11.1h-3.6v9.35zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
