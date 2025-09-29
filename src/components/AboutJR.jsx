import React from "react";
import { motion } from "framer-motion";

export default function AboutJR() {
  return (
    <section className="relative text-white py-28 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://scontent.fisb19-1.fna.fbcdn.net/v/t39.30808-6/486621080_9386588888101171_850029119644880843_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=GQMKH8UMoB4Q7kNvwF5PKs2&_nc_oc=AdmoumqfJ4MYHwn0hvTKDscrzoOgerKK4GzkK3HXiliWMBGshJh-J5eFVmLPUY9YDMs&_nc_zt=23&_nc_ht=scontent.fisb19-1.fna&_nc_gid=kPi4zh8cztXMJbuQW3QFew&oh=00_AfZOw8tPcva-8n8Yl8Q534v6E6p1OMt_UBUerQFuS0C69w&oe=68DFC614"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl animate-ping"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-yellow-400">JR-Sons</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <span className="font-semibold text-pink-400">JR-Sons</span> is more
          than just a company – it’s a movement of{" "}
          <span className="text-yellow-400 font-semibold">innovation</span>,{" "}
          <span className="text-pink-500 font-semibold">creativity</span>, and{" "}
          <span className="text-green-400 font-semibold">global trust</span>.
          Together, we’re shaping tomorrow’s technology today. 🚀
        </motion.p>

        {/* Feature Glass Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "⚡",
              title: "Next-Level Tech",
              text: "We design futuristic apps & solutions with modern UI/UX.",
            },
            {
              icon: "🤝",
              title: "Trusted Partners",
              text: "Our clients are family – long-term growth, not short-term gains.",
            },
            {
              icon: "🌍",
              title: "Global Reach",
              text: "From Pakistan to the world – JR-Sons is making waves globally.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.3, duration: 0.8 }}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-yellow-400 text-black shadow-xl hover:scale-110 transform transition duration-300"
          >
            Let’s Build the Future 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
