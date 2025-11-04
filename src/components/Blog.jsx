import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="relative text-white py-28 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Blog Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-400/20 rounded-full blur-3xl animate-ping"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Latest <span className="text-pink-400">Blogs</span>
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Stay updated with our{" "}
          <span className="font-semibold text-blue-400">latest insights</span>,{" "}
          <span className="font-semibold text-pink-400">news</span>, and{" "}
          <span className="font-semibold text-purple-400">trending stories</span>.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
              title: "Future of Technology",
              text: "Exploring AI, Blockchain, and the trends shaping our tomorrow.",
            },
            {
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
              title: "Creative Design",
              text: "Modern UI/UX that inspires users and builds brand trust.",
            },
            {
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
              title: "Business Growth",
              text: "Strategies that empower startups and enterprises worldwide.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.3, duration: 0.8 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-2xl mb-5"
              />
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#all-blogs"
            className="px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-pink-400 text-black shadow-xl hover:scale-110 transform transition duration-300"
          >
            Read More Blogs ✨
          </a>
        </motion.div>
      </div>
    </section>
  );
}


// import React from "react";
// import { motion } from "framer-motion";

// export default function Blog() {
//   const blogs = [
//     {
//       title: "🚀 Why Flutter is the Future of App Development",
//       date: "October 2025",
//       desc: "Discover how Flutter empowers developers to build stunning apps for Android, iOS, and web — all from a single codebase.",
//       link: "#",
//     },
//     {
//       title: "💡 JR-Sons Innovation Story",
//       date: "September 2025",
//       desc: "From small ideas to global impact — how JR-Sons is reshaping digital experiences with creativity and modern technology.",
//       link: "#",
//     },
//     {
//       title: "🌍 Building Globally, Thinking Locally",
//       date: "August 2025",
//       desc: "Our vision of connecting people and products worldwide through powerful, elegant, and scalable apps.",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="bg-black text-white py-24 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Latest <span className="text-yellow-400">Blogs</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {blogs.map((blog, i) => (
//             <motion.div
//               key={i}
//               className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md text-left shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
//             >
//               <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
//               <h3 className="text-2xl font-bold mb-4 text-yellow-400">
//                 {blog.title}
//               </h3>
//               <p className="text-gray-300 mb-6">{blog.desc}</p>
//               <a
//                 href={blog.link}
//                 className="text-pink-400 font-semibold hover:text-yellow-400 transition"
//               >
//                 Read More →
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

