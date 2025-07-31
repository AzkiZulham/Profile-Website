"use client";

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-lg text-gray-600 italic mt-2">
            Ready to get started? Feel free to reach out through the contact form, and let&apos;s embark on a journey of innovation and success.
          </p>
        </div>

        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800"
              placeholder="Let's talk about..."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
