
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import "./App.css";

// // Pages
import SpeedBrowserPrivacyPolicy from "./components/SpeedBrowserPrivacyPolicy";
import FlutterAppBundleGuide from "./components/FlutterAppBundleGuide";
import LottieFlutterBlog from "./components/blogs/LottieBlog";
import SmartManagerPrivacyPolicy from "./components/SmartManagerPrivacyPolicy";
import Modern404Game from "./components/Modern404Game";
import BismillahTechnologyWebsite from "./components/a_1_it_site";
import GameBoxPrivacyPolicy from "./components/GameBoxPrivacyPolicy";


// const apps = [
//   {
//     name: "Call Blocker",
//     category: "Privacy & Productivity",
//     description:
//       "A call management application designed to help users manage unwanted calls and configure their preferred blocking settings.",
//     features: [
//       "Configurable call blocking modes",
//       "Trusted contacts and block lists",
//       "Call history and number management",
//     ],
//     playUrl:
//       "https://play.google.com/store/apps/details?id=com.paktech.callblocker",
//   },
//   {
//     name: "App Locker",
//     category: "Privacy & Security",
//     description:
//       "An application-locking project focused on helping users protect access to supported apps through an intentional permission and setup flow.",
//     features: [
//       "App-lock setup experience",
//       "Permission explanations",
//       "Privacy-focused interface",
//     ],
//     playUrl: "",
//   },
//   {
//     name: "All-in-One Translator",
//     category: "Language & Utilities",
//     description:
//       "A translation application concept focused on convenient multilingual communication and on-device translation where supported.",
//     features: [
//       "Language translation workflow",
//       "Offline-first design goals",
//       "Simple language selection",
//     ],
//     playUrl: "",
//   },
// ];


const developerStoreUrl =
  "https://play.google.com/store/apps/developer?id=Bismillah+Technology";

const apps = [
    {
    name: "Python Network Traffic Monitor",
    category: "Python, FastAPI & Networking",
    description:
      "A Python-based network traffic monitoring project that uses proxy configuration and certificate-based HTTPS inspection in authorized test environments to capture, log, store, and review request URLs.",
    features: [
      "Python and FastAPI backend",
      "Proxy-based HTTP/HTTPS traffic inspection",
      "Certificate configuration for authorized testing",
      "URL logging and database storage",
      "Saved request records for later review",
    ],
    playUrl: "",
  },
  {
    name: "Call Blocker",
    category: "Privacy & Productivity",
    description:
      "Manage unwanted calls with configurable blocking modes, trusted contacts, block lists, and call history.",
    features: [
      "Configurable call blocking modes",
      "Trusted contacts and block lists",
      "Call history and number management",
    ],
    playUrl:
      "https://play.google.com/store/apps/details?id=com.paktech.callblocker",
  },
  {
    name: "Anti-Theft: GPS Phone Tracker",
    category: "Security & Utilities",
    description:
      "A phone security utility designed to support anti-theft and lost-device tracking features.",
    features: [
      "Anti-theft utility",
      "Phone security features",
      "Device protection workflow",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.bismillahtechnolohy.donttouchmyphone",
  },
  {
    name: "Resume Builder CV Maker PDF",
    category: "Career & Productivity",
    description:
      "A CV and resume utility to help users prepare professional career documents.",
    features: [
      "Resume creation workflow",
      "CV formatting",
      "Career document preparation",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.cv.resume.maker.writer.editor.reader.pdf.doc",
  },
  {
    name: "Baby Browser Safe Family Child",
    category: "Family & Safety",
    description:
      "A family-oriented browsing utility designed around a safer browsing experience for children.",
    features: [
      "Family-focused browsing",
      "Child-friendly experience",
      "Simple browsing workflow",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.findlostphone",
  },
  {
    name: "Theft Tracker: Find Lost Phone",
    category: "Security & Utilities",
    description:
      "A phone utility focused on helping users access lost-phone and theft-related tracking features.",
    features: [
      "Lost-phone utility",
      "Theft-related tools",
      "Device security workflow",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.TheftTracker",
  },
  {
    name: "QR Barcode Scanner & Generator",
    category: "Tools & Utilities",
    description:
      "A utility for scanning and generating QR codes and barcodes.",
    features: [
      "QR code scanning",
      "Barcode scanning",
      "QR code generation",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.qr.barcode.scanner.reader.free",
  },
  {
    name: "Track Phone: All Call Tracker",
    category: "Phone & Utilities",
    description:
      "A phone utility listed in the Bismillah Technology developer portfolio.",
    features: [
      "Phone utility tools",
      "Call-related features",
      "Convenient mobile workflow",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.shaketoflashlight",
  },
  {
    name: "Filter Selfi Camera & Recorder",
    category: "Camera & Photography",
    description:
      "A camera utility focused on selfie filters and recording features.",
    features: [
      "Selfie camera tools",
      "Filter-focused experience",
      "Recording features",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.emergencycamera",
  },
  {
    name: "App Locker",
    category: "Privacy & Security",
    description:
      "An app-locking project focused on protecting access to supported apps through a clear setup and permission flow.",
    features: [
      "App-lock setup experience",
      "Permission explanations",
      "Privacy-focused interface",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.phonetracker",
  },
  {
    name: "All-in-One Translator",
    category: "Language & Utilities",
    description:
      "A translation project focused on multilingual communication and on-device translation where supported.",
    features: [
      "Language translation workflow",
      "Offline-first design goals",
      "Simple language selection",
    ],
    playUrl: "https://play.google.com/store/apps/details?id=com.paktech.phonetracker",
  },
];

const services = [
  {
    number: "01",
    title: "Android App Development",
    description:
      "Native Android applications built with Kotlin, Java, Jetpack Compose and AndroidX. Work includes application architecture, API integration, local storage and production preparation.",
    technologies: "Kotlin · Java · Compose · MVVM",
  },
  {
    number: "02",
    title: "Flutter Development",
    description:
      "Cross-platform application development with reusable interfaces, API integration, structured state management and maintainable project organization.",
    technologies: "Flutter · Dart · REST APIs",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Responsive business websites, product portfolios and web interfaces designed around clear navigation, accessibility, performance and search discoverability.",
    technologies: "React · JavaScript · CSS",
  },
  {
    number: "04",
    title: "Backend & API Integration",
    description:
      "Application backends and integrations using PHP, MySQL and REST APIs, with attention to data validation and reliable communication between systems.",
    technologies: "PHP · MySQL · REST APIs",
  },
];

const articles = [
  {
    slug: "android-app-architecture",
    title: "Choosing an Architecture for an Android Application",
    category: "Android Development",
    description:
      "Learn how presentation, business logic and data responsibilities can be separated to make an Android project easier to maintain and test.",
    body: [
      {
        heading: "Separate responsibilities",
        text:
          "A maintainable Android project gives each layer a clear responsibility. The UI displays state and forwards user actions, the domain layer holds reusable business rules when needed, and the data layer manages repositories, network requests and local persistence.",
      },
      {
        heading: "Choose an architecture that fits",
        text:
          "MVVM is a practical starting point for many applications. A ViewModel exposes screen state, while repositories coordinate data sources. Smaller applications may not need a separate domain layer for every feature. Architecture should reduce complexity rather than create unnecessary abstractions.",
      },
      {
        heading: "Handle asynchronous work",
        text:
          "Kotlin coroutines and Flow can help represent asynchronous operations and observable state. UI code should collect state in a lifecycle-aware way, while network failures, loading states and empty results should be handled explicitly.",
      },
      {
        heading: "Test important behavior",
        text:
          "Prioritize tests for business rules, repository behavior and important UI states. Clear interfaces and predictable state transitions make failures easier to reproduce and fix.",
      },
    ],
  },
  {
    slug: "responsive-react-websites",
    title: "Building Responsive React Websites",
    category: "Web Development",
    description:
      "A practical overview of responsive layouts, reusable components, navigation and production build checks for React websites.",
    body: [
      {
        heading: "Start with the content",
        text:
          "Identify the information visitors need before choosing animations or decorative effects. A company website should clearly explain its services, products, work and contact options.",
      },
      {
        heading: "Use reusable components",
        text:
          "Shared navigation, footers, buttons and content cards make a React site more consistent. Keep components focused and store repeated content in data structures where appropriate.",
      },
      {
        heading: "Design for different screens",
        text:
          "Use flexible widths, responsive grids and readable typography. Test menus, buttons, forms and long text on both small and large screens rather than relying on a desktop preview alone.",
      },
      {
        heading: "Check production output",
        text:
          "Run the production build before publishing. Verify internal links, browser console errors, page titles, image loading and direct access to important routes.",
      },
    ],
  },
  {
    slug: "app-store-release-checklist",
    title: "An Android App Release Checklist",
    category: "App Publishing",
    description:
      "Review application quality, store listing accuracy, permissions, privacy disclosures and release testing before publishing an update.",
    body: [
      {
        heading: "Test the release build",
        text:
          "Install a release-signed build and test core user journeys. Check startup, navigation, permission denial, offline behavior and supported Android versions. Review crash and ANR reports when available.",
      },
      {
        heading: "Review permissions and data",
        text:
          "Each permission should support a legitimate, clearly explained feature. Make sure the privacy policy accurately describes actual data collection, sharing, retention and deletion practices.",
      },
      {
        heading: "Prepare the store listing",
        text:
          "Screenshots, descriptions and feature claims should accurately represent the released application. Do not advertise capabilities that are not implemented or available to users.",
      },
      {
        heading: "Roll out carefully",
        text:
          "Review Play Console warnings and policy notices before rollout. Use staged rollout where appropriate and monitor stability after release.",
      },
    ],
  },
];

function PageMeta({ title, description, path = "" }) {
  const canonical = `https://bismillahtechnologies.com${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

function Header() {
  const location = useLocation();

  const links = [
    ["/", "Home"],
    ["/apps", "Our Apps"],
    ["/services", "Services"],
    ["/blog", "Insights"],
    ["/about", "About"],
  ];

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">B</span>
          <span>
            <strong>Bismillah Technology</strong>
            <small>SOFTWARE & DIGITAL SOLUTIONS</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {links.map(([url, label]) => (
            <Link
              key={url}
              to={url}
              className={location.pathname === url ? "nav-link active" : "nav-link"}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="button button-small">
            Let's Talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">B</span>
            <span>
              <strong>Bismillah Technology</strong>
              <small>SOFTWARE & DIGITAL SOLUTIONS</small>
            </span>
          </Link>
          <p className="muted footer-copy">
            Software development, mobile applications and practical digital
            solutions.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/apps">Our Apps</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Technical Articles</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Information</h3>
          <Link to="/about">About Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bismillah Technology.</span>
        <span>Built with care for useful digital experiences.</span>
      </div>
    </footer>
  );
}

function Shell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Home() {
  return (
    <>
      <PageMeta
        title="Bismillah Technology | Android, Flutter & Web Development"
        description="Explore mobile applications, Android development, Flutter solutions, web development and practical software engineering resources from Bismillah Technology."
      />

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE DEVELOPMENT & DIGITAL PRODUCTS
            </div>
            <h1>
              Turning thoughtful ideas into{" "}
              <span className="gradient-text">useful software.</span>
            </h1>
            <p className="hero-description">
              We build Android applications, cross-platform mobile products
              and responsive web experiences with a focus on practical
              functionality, maintainable code and user needs.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/apps">
                Explore Our Apps <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost" to="/contact">
                Discuss a Project
              </Link>
            </div>
            <div className="hero-proof">
              <span><strong>Android</strong> Native development</span>
              <span><strong>Flutter</strong> Cross-platform apps</span>
              <span><strong>React</strong> Modern web</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-center">
              <span className="visual-symbol">B.</span>
              <span>BUILD · IMPROVE · DELIVER</span>
            </div>
            <div className="floating-card floating-card-top">
              <span className="mini-icon">{"</>"}</span>
              <span><strong>Engineering</strong><small>Clean, maintainable code</small></span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="mini-icon">✳</span>
              <span><strong>User-focused</strong><small>Designed for real needs</small></span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>OUR TECHNOLOGY TOOLKIT</span>
          <div>KOTLIN</div><div>JAVA</div><div>JETPACK COMPOSE</div>
          <div>FLUTTER</div><div>REACT</div><div>PHP / MYSQL</div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Technology built around your goals."
          description="From mobile application development to web experiences and API integrations, every solution starts with a clear problem to solve."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <span className="card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="technology-label">{service.technologies}</span>
            </motion.article>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/services" className="text-link">Explore all services ↗</Link>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="OUR PRODUCTS"
            title="Applications made for everyday needs."
            description="Explore our software projects and visit the official store listing when an application is publicly available."
          />
          <AppGrid limit={3} />
          <div className="section-cta">
            <Link to="/apps" className="button button-ghost">Explore all applications ↗</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="ENGINEERING NOTES"
          title="Knowledge worth sharing."
          description="Practical guides covering application architecture, web development and app publishing."
        />
        <ArticleGrid limit={3} />
        <div className="section-cta">
          <Link to="/blog" className="text-link">Read all articles ↗</Link>
        </div>
      </section>

      <section className="container">
        <div className="contact-banner">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let's build something useful.</h2>
          <p>Tell us about your idea, requirements and expected outcome.</p>
          <Link to="/contact" className="button">Start a conversation ↗</Link>
        </div>
      </section>
    </>
  );
}

function AppGrid({ limit }) {
  const list = typeof limit === "number" ? apps.slice(0, limit) : apps;
  return (
    <div className="app-grid">
      {list.map((app, index) => (
        <motion.article
          className="app-card"
          key={app.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="app-art">
            <span>{app.name.split(" ").map(word => word[0]).join("").slice(0, 2)}</span>
            <div className="app-art-orbit" />
          </div>
          <span className="eyebrow">{app.category}</span>
          <h3>{app.name}</h3>
          <p>{app.description}</p>
          <ul className="feature-list">
            {app.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
          {app.playUrl ? (
            <a className="text-link" href={app.playUrl} target="_blank" rel="noreferrer">
              View Google Play listing ↗
            </a>
          ) : (
            <span className="coming-note">Project information · Listing link to be added</span>
          )}
        </motion.article>
      ))}
    </div>
  );
}

function AppsPage() {
  return (
    <PageLayout
      path="/apps"
      title="Our Apps | Bismillah Technology"
      description="Explore mobile application projects from Bismillah Technology, including features, product details and official Google Play links where available."
      eyebrow="OUR PRODUCTS"
      heading="Software designed for real-world needs."
      intro="Our product portfolio includes mobile utilities and application concepts. Product descriptions below explain the intended purpose and features; public availability is identified separately."
    >
      <AppGrid />
      <div className="notice-panel">
        <h2>Product availability</h2>
        <p>
          Only the official store listings linked above should be treated as
          confirmed download destinations. Other projects may be under
          development or awaiting publication.
        </p>
      </div>
    </PageLayout>
  );
}

function ServicesPage() {
  return (
    <PageLayout
      path="/services"
      title="Software Development Services | Bismillah Technology"
      description="Learn about Android, Flutter, React website and backend development services offered by Bismillah Technology."
      eyebrow="OUR SERVICES"
      heading="Practical engineering. Clear deliverables."
      intro="We work on mobile and web software with an emphasis on understandable requirements, maintainable implementation and honest communication about scope."
    >
      <div className="service-grid service-grid-page">
        {services.map(service => (
          <article className="service-card" key={service.number}>
            <span className="card-number">{service.number}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className="technology-label">{service.technologies}</span>
            <Link className="text-link" to="/contact">Discuss your requirements ↗</Link>
          </article>
        ))}
      </div>
      <div className="notice-panel">
        <h2>How a project starts</h2>
        <p>
          We first clarify the problem, required platforms, expected features,
          available assets and delivery constraints. Scope, timeline and
          pricing are agreed on before implementation begins.
        </p>
      </div>
    </PageLayout>
  );
}

function ArticleGrid({ limit }) {
  const list = typeof limit === "number" ? articles.slice(0, limit) : articles;
  return (
    <div className="article-grid">
      {list.map((article, index) => (
        <motion.article
          className="article-card"
          key={article.slug}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <span className="eyebrow">{article.category}</span>
          <h3><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>
          <p>{article.description}</p>
          <Link className="text-link" to={`/blog/${article.slug}`}>Read article ↗</Link>
        </motion.article>
      ))}
    </div>
  );
}

function BlogPage() {
  return (
    <PageLayout
      path="/blog"
      title="Technical Articles | Bismillah Technology"
      description="Read practical articles about Android architecture, responsive React websites and responsible Android app publishing."
      eyebrow="KNOWLEDGE & INSIGHTS"
      heading="Practical notes from software development."
      intro="Explore introductory guides written to explain software engineering decisions, implementation practices and release preparation."
    >
      <ArticleGrid />
      <p className="muted editorial-note">
        Articles are educational starting points. Always verify current
        platform documentation and requirements before making production changes.
      </p>
    </PageLayout>
  );
}

function ArticlePage() {
  const location = useLocation();
  const slug = location.pathname.split("/").filter(Boolean).pop();
  const article = articles.find(item => item.slug === slug);

  if (!article) return <NotFound />;

  return (
    <PageLayout
      path={`/blog/${article.slug}`}
      title={`${article.title} | Bismillah Technology`}
      description={article.description}
      eyebrow={article.category}
      heading={article.title}
      intro={article.description}
    >
      <article className="long-article">
        <div className="article-meta">Bismillah Technology · Technical guide</div>
        {article.body.map((section, index) => (
          <section key={section.heading}>
            <h2>{index + 1}. {section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <div className="notice-panel">
          <h2>Need help with a software project?</h2>
          <p>Share your requirements with our development team.</p>
          <Link className="button" to="/contact">Contact us ↗</Link>
        </div>
      </article>
    </PageLayout>
  );
}

function PageLayout({ path, title, description, eyebrow, heading, intro, children }) {
  return (
    <>
      <PageMeta title={title} description={description} path={path} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{heading}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <section className="section container">{children}</section>
    </>
  );
}

function AboutPage() {
  return (
    <PageLayout
      path="/about"
      title="About Us | Bismillah Technology"
      description="Learn about Bismillah Technology, our software development focus and approach to mobile and web products."
      eyebrow="ABOUT US"
      heading="A software studio focused on useful products."
      intro="Bismillah Technology works across mobile applications, web experiences and software integrations."
    >
      <div className="prose">
        <h2>What we do</h2>
        <p>
          Our work includes native Android development, cross-platform mobile
          applications, responsive websites and backend/API integrations. We
          aim to make software understandable, reliable and practical for its
          intended users.
        </p>
        <h2>How we approach projects</h2>
        <p>
          We start by understanding the problem and identifying the essential
          user journeys. We then select suitable technologies, implement
          functionality in manageable steps and test important behaviors
          before release.
        </p>
        <h2>Honest product information</h2>
        <p>
          We distinguish between publicly available applications and projects
          that are still being developed. Features and service capabilities
          should be confirmed against the relevant product or project scope.
        </p>
        <h2>Get in touch</h2>
        <p>
          For software inquiries, project discussions or questions about our
          products, please use the <Link to="/contact">contact page</Link>.
        </p>
      </div>
    </PageLayout>
  );
}

function PrivacyPage() {
  return (
    <PageLayout
      path="/privacy-policy"
      title="Privacy Policy | Bismillah Technology"
      description="Read the privacy information for visitors to the Bismillah Technology website."
      eyebrow="LEGAL INFORMATION"
      heading="Privacy Policy"
      intro="This policy explains how website information may be handled when you visit our website or contact us."
    >
      <div className="prose">
        <p><strong>Last updated: October 27, 2026</strong></p>
        <h2>1. Scope of this policy</h2>
        <p>
          This policy applies to the Bismillah Technology website. Individual
          mobile applications may have separate privacy policies describing
          their own features, permissions and data practices.
        </p>
        <h2>2. Information you provide</h2>
        <p>
          If you contact us by email, we may receive your email address,
          message and any information you choose to include. We use this
          information to respond to your inquiry and communicate about your
          request.
        </p>
        <h2>3. Website logs and technical information</h2>
        <p>
          Our hosting provider and security services may process technical
          information such as IP address, browser details, request timestamps
          and error logs to deliver, secure and troubleshoot the website.
          Confirm the exact logs and retention periods with your hosting setup.
        </p>
        <h2>4. Cookies and advertising</h2>
        <p>
          This website may use essential technical storage and, if enabled,
          analytics or advertising technologies. Third-party advertising
          providers may use cookies or similar technologies subject to their
          own policies and applicable consent requirements. Update this
          section to reflect the actual services enabled on this website.
        </p>
        <h2>5. How information is used</h2>
        <p>
          Information may be used to answer inquiries, maintain website
          functionality, protect the service, investigate technical issues
          and comply with legal obligations. We do not promise that no data
          is processed by third-party infrastructure providers.
        </p>
        <h2>6. Sharing and retention</h2>
        <p>
          Information may be processed by service providers needed to operate
          the website or where disclosure is legally required. Retention
          depends on the purpose, security needs and applicable obligations.
        </p>
        <h2>7. Your choices</h2>
        <p>
          You may choose not to send personal information through optional
          communications. Depending on applicable law, you may have rights
          to request access, correction or deletion of personal information.
        </p>
        <h2>8. Children</h2>
        <p>
          This website is intended for a general audience and is not
          specifically designed to collect personal information from children.
        </p>
        <h2>9. Policy changes</h2>
        <p>
          We may update this policy when the website or its services change.
          The revised policy will be published on this page with an updated
          revision date.
        </p>
        <h2>10. Contact</h2>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:kutabshaiawan786@gmail.com">kutabshaiawan786@gmail.com</a>.
        </p>
        <div className="notice-panel">
          <strong>Important:</strong> Before publishing, verify this policy
          against the actual cookies, analytics, advertising, contact forms
          and third-party services used by your website. This template is not
          a legal review.
        </div>
      </div>
    </PageLayout>
  );
}

function TermsPage() {
  return (
    <PageLayout
      path="/terms"
      title="Terms & Conditions | Bismillah Technology"
      description="Read the terms for using the Bismillah Technology website and its published informational content."
      eyebrow="LEGAL INFORMATION"
      heading="Terms & Conditions"
      intro="These terms describe the basic conditions for accessing and using this website."
    >
      <div className="prose">
        <p><strong>Last updated: October 27, 2026</strong></p>
        <h2>1. Website use</h2>
        <p>
          You may use this website to learn about our services, explore
          linked products and read informational material. You agree not to
          misuse the website or interfere with its security or operation.
        </p>
        <h2>2. Content and accuracy</h2>
        <p>
          Website content is provided for general informational purposes.
          Product availability, technical details and service scope may change.
          Confirm important requirements before relying on information for
          a business or technical decision.
        </p>
        <h2>3. Intellectual property</h2>
        <p>
          Unless otherwise stated, website text, branding and original
          materials belong to their respective owners. Third-party product
          names, logos and services remain the property of their owners.
        </p>
        <h2>4. Third-party links</h2>
        <p>
          We may link to external websites, including Google Play. We do not
          control third-party websites and their own terms and privacy policies
          apply to your use of those services.
        </p>
        <h2>5. Project inquiries</h2>
        <p>
          Sending an inquiry does not create a contract or guarantee that we
          will accept a project. Scope, pricing, deliverables and timelines
          must be agreed separately.
        </p>
        <h2>6. Availability</h2>
        <p>
          We aim to keep the website accessible but cannot guarantee
          uninterrupted availability or error-free operation.
        </p>
        <h2>7. Limitation</h2>
        <p>
          To the extent permitted by applicable law, the website and its
          informational content are provided without a guarantee of
          suitability for every purpose. Nothing in these terms removes
          rights that cannot lawfully be excluded.
        </p>
        <h2>8. Changes</h2>
        <p>
          These terms may be updated as the website or services evolve.
          Continued use after an update is subject to applicable law.
        </p>
        <h2>9. Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:kutabshaiawan786@gmail.com">kutabshaiawan786@gmail.com</a>.
        </p>
      </div>
    </PageLayout>
  );
}

function ContactPage() {
  return (
    <PageLayout
      path="/contact"
      title="Contact Us | Bismillah Technology"
      description="Contact Bismillah Technology about Android, Flutter, web development and software projects."
      eyebrow="CONTACT"
      heading="Tell us what you want to build."
      intro="Share a brief project overview and the platform, features or problem you need help with."
    >
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's discuss your requirements.</h2>
          <p>
            Include your project goal, required features, target platforms and
            any existing design or technical constraints.
          </p>
          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:kutabshaiawan786@gmail.com">kutabshaiawan786@gmail.com</a>
          </div>
          <div className="contact-detail">
            <span>Website</span>
            <a href="https://bismillahtechnologies.com">bismillahtechnologies.com</a>
          </div>
        </div>
        <div className="contact-form-card">
          <h2>Email us about your project</h2>
          <p>
            This form opens your email application with the details you enter.
            It does not send or store data on this website.
          </p>
          <form
            onSubmit={event => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const subject = encodeURIComponent(`Project inquiry: ${data.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("project")}\n\nRequirements:\n${data.get("message")}`
              );
              window.location.href =
                `mailto:kutabshaiawan786@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <label>
              Your name
              <input name="name" required maxLength="100" placeholder="Enter your name" />
            </label>
            <label>
              Email address
              <input name="email" type="email" required maxLength="200" placeholder="you@example.com" />
            </label>
            <label>
              Project type
              <select name="project" defaultValue="Android Development">
                <option>Android Development</option>
                <option>Flutter Development</option>
                <option>Web Development</option>
                <option>Backend / API Integration</option>
                <option>Other inquiry</option>
              </select>
            </label>
            <label>
              Project details
              <textarea name="message" required minLength="20" maxLength="5000" rows="5" placeholder="Describe your goals and requirements..." />
            </label>
            <button className="button" type="submit">Prepare email ↗</button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}

function NotFound() {
  return (
    <PageLayout
      path="/404"
      title="Page Not Found | Bismillah Technology"
      description="The requested page could not be found."
      eyebrow="404"
      heading="This page could not be found."
      intro="The link may be outdated or the page may have moved."
    >
      <Link to="/" className="button">Return to homepage</Link>
    </PageLayout>
  );
}

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Shell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            

            {/* Old URLs — Play Store links preserve rahenge */}
            <Route path="/game-box-privacy-policy" element={<GameBoxPrivacyPolicy />} />
            <Route path="/speed-browser-privacy-policy" element={<SpeedBrowserPrivacyPolicy />} />
            <Route path="/smart-manager-privacy-policy" element={<SmartManagerPrivacyPolicy />} />
            <Route path="/flutter-app-bundle-guide" element={<FlutterAppBundleGuide />} />
            <Route path="/lottie-flutter-blog" element={<LottieFlutterBlog />} />
            <Route path="/a1" element={<BismillahTechnologyWebsite />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </HelmetProvider>
  );
}
 


// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";

// // Components
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import AboutJR from "./components/AboutJR";
// import AppsList from "./components/AppsList";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import AdBanner from "./components/AdBanner";

// // Pages
// import SpeedBrowserPrivacyPolicy from "./components/SpeedBrowserPrivacyPolicy";
// import FlutterAppBundleGuide from "./components/FlutterAppBundleGuide";
// import LottieFlutterBlog from "./components/blogs/LottieBlog";
// import SmartManagerPrivacyPolicy from "./components/SmartManagerPrivacyPolicy";
// import Modern404Game from "./components/Modern404Game";
// import BismillahTechnologyWebsite from "./components/a_1_it_site";
// import GameBoxPrivacyPolicy from "./components/GameBoxPrivacyPolicy";
 
// function HomePage() {
//   return (
//     <>
//       <Header />
//       <Hero />

//       <div style={{ backgroundColor: "black" }}>
//         <AdBanner />
//       </div>

//       <section id="about">
//         <AboutJR />
//       </section>

//       <section id="apps" className="section">
//         <h2>My Apps</h2>
//         <AppsList />
//       </section>

//       <section id="blog">
//         <Blog />
//       </section>

//       <section id="contact">
//         <Contact />
//       </section>

//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <HelmetProvider>
//       <BrowserRouter>
//         <Routes>

//           {/* HOME */}
//           <Route path="/" element={<HomePage />} />

//           <Route 
//           path="/game-box-privacy-policy"
//           element={<GameBoxPrivacyPolicy />}
//           />
//           {/* PRIVACY POLICY */}
//           <Route
//             path="/speed-browser-privacy-policy"
//             element={<SpeedBrowserPrivacyPolicy />}
//           />
//           {/* Smart Manager Privacy Policy */}
//           <Route
//           path="/smart-manager-privacy-policy"
//           element={<SmartManagerPrivacyPolicy />}
//           />
//           {/* FLUTTER GUIDE */}
//           <Route
//             path="/flutter-app-bundle-guide"
//             element={<FlutterAppBundleGuide />}
//           />

//           {/* LOTTIE BLOG */}
//           <Route
//             path="/lottie-flutter-blog"
//             element={<LottieFlutterBlog />}
//           />
//           <Route
//             path="*"
//             element={<Modern404Game />}
//           />
//           <Route
//             path="/a1"
//             element={<BismillahTechnologyWebsite />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </HelmetProvider>
//   );
// }

// export default App;