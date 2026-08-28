import logo from '../assets/logo.png';

export default function BismillahTechnologyWebsite() {
  
  const apps = [
    {
      name: 'Smart Manager',
      desc: 'File manager, junk cleaner, secure vault, duplicate scanner & antivirus tools.',
      icon: '📱',
    },
    {
      name: 'Call Blocker',
      desc: 'Block unknown, private, blacklist & international calls with timer features.',
      icon: '📞',
    },
    {
      name: 'Phone Tracker',
      desc: 'Security and smart tracking tools with modern Android support.',
      icon: '📍',
    },
  ];

  const services = [
    'Android App Development',
    'Flutter Development',
    'AI Solutions',
    'Cyber Security',
    'UI/UX Design',
    'Website Development',
    'Cloud Solutions',
    'Software Solutions',
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-blue-500/10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
              <span className="text-yellow-400">⚡</span>
              <span className="text-sm tracking-widest uppercase">
                A1iT Software Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Building <span className="text-yellow-400">Powerful</span>
              <br />
              Digital Products
            </h1>

            <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-2xl">
              Bismillah Technology creates modern Android apps, AI systems,
              secure software solutions, and futuristic digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://play.google.com/store/apps/developer?id=Bismillah+Technology"
                target="_blank"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                View Play Store
              </a>

              <button className="px-8 py-4 border border-white/20 hover:border-yellow-400 rounded-2xl transition-all duration-300 hover:bg-white/5">
                Explore Services
              </button>
            </div>
          </div>

          {/* LOGO SIDE */}
          <div className="relative flex justify-center">
            <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-br from-yellow-500/20 via-blue-500/10 to-transparent border border-white/10 flex items-center justify-center shadow-[0_0_80px_rgba(255,215,0,0.15)]">
              <div className="absolute inset-6 rounded-full border border-yellow-500/20 animate-pulse" />

              <div className="text-center space-y-4">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-387 h-387 rounded-full object-cover border-4 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.5)] mx-auto"
                  />
                {/* <div className="text-8xl">🦁</div> */}

                {/* <h2 className="text-6xl font-black tracking-widest bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                  A1iT
                </h2> */}

                {/* <p className="text-gray-300 tracking-[0.4em] text-sm uppercase">
                  Software Solutions
                </p> */}

                {/* <div className="flex justify-center gap-4 text-4xl pt-4">
                  <span>🦅</span>
                  <span>🐍</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-6xl font-black">
              What We Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-all duration-300">
                  ⚡
                </div>

                <h3 className="text-xl font-bold mb-3">{service}</h3>

                <p className="text-gray-400 leading-relaxed">
                  Premium modern solutions designed for speed, performance and
                  scalability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="py-24 px-6 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm mb-4">
                Our Apps
              </p>
              <h2 className="text-4xl md:text-6xl font-black">
                Featured Projects
              </h2>
            </div>

            <a
              href="https://play.google.com/store/apps/developer?id=Bismillah+Technology"
              target="_blank"
              className="px-6 py-4 rounded-2xl bg-yellow-500 text-black font-bold hover:scale-105 transition-all duration-300"
            >
              Open Developer Profile
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-10">
                  <div className="text-6xl mb-6">{app.icon}</div>

                  <h3 className="text-3xl font-black mb-4">{app.name}</h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {app.desc}
                  </p>

                  <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Innovation
              <br />
              Meets Vision
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A1iT Software Solutions is focused on creating world-class digital
              products with premium user experiences and powerful backend
              systems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We specialize in Android apps, smart AI solutions, modern UI/UX,
              cybersecurity, and scalable software systems for the future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
              <h3 className="text-5xl font-black text-yellow-400 mb-2">
                10+
              </h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <h3 className="text-5xl font-black text-blue-400 mb-2">
                AI
              </h3>
              <p className="text-gray-300">Driven Solutions</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
              <h3 className="text-5xl font-black mb-2">24/7</h3>
              <p className="text-gray-300">Development Mindset</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
              <h3 className="text-5xl font-black text-green-400 mb-2">
                Secure
              </h3>
              <p className="text-gray-300">Modern Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-[40px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-black to-blue-500/10 p-12 md:p-20 shadow-[0_0_100px_rgba(255,215,0,0.1)]">
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-6">
            Start Your Project
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8">
            We Build Solutions,
            <br />
            Not Just Software
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Premium digital experiences crafted with innovation, performance,
            security and futuristic design.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/developer?id=Bismillah+Technology"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-yellow-500 text-black font-bold hover:scale-105 transition-all duration-300"
            >
              Visit Play Store
            </a>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-yellow-500 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black tracking-widest text-yellow-400">
              A1iT
            </h3>
            <p className="text-gray-500 mt-2">
              A1 Information Technology & Software Solutions
            </p>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            © 2026 Bismillah Technology — All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
