import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative text-white py-28 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Gradient Shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl animate-ping"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-6xl md:text-7xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in <span className="text-pink-400">Touch</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Have questions or ideas? Let’s collaborate and create something
          amazing together. 🚀
        </motion.p>

        {/* Contact Form + Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl space-y-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-black shadow-xl hover:scale-105 transform transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message ✨
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            {[
              {
                icon: "📍",
                title: "Address",
                text: "Rawalpindi, Pakistan",
              },
              {
                icon: "📧",
                title: "Email",
                text: "786PakTech@gmail.com",
              },
              {
                icon: "📞",
                title: "Phone",
                text: "+92 304 5151363",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
