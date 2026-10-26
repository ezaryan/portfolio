import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import ProjectVisual from "./components/ProjectVisual";
import AnimatedBackground from "./components/AnimatedBackground";
import TypingText from "./components/TypingText";
import CustomCursor from "./components/CustomCursor";

// ================================
// NAVIGATION
// ================================

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];


// ================================
// SKILLS
// ================================

const skills = {
  Languages: [
    { name: "Java", url: "https://docs.oracle.com/en/java/" },
    { name: "C++", url: "https://en.cppreference.com/w/cpp.html" },
    { name: "Python", url: "https://docs.python.org/3/" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  ],

  "Frameworks & Libraries": [
    { name: "ReactJS", url: "https://react.dev/" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
    { name: "Node.js", url: "https://nodejs.org/docs/latest/api/" },
    { name: "Scikit-learn", url: "https://scikit-learn.org/stable/user_guide.html" },
    { name: "Flask", url: "https://flask.palletsprojects.com/en/stable/" },
    { name: "shadcn/ui", url: "https://ui.shadcn.com/docs" },
  ],

  Databases: [
    { name: "SQL", url: "https://www.w3schools.com/sql/" },
    { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
    { name: "Redis", url: "https://redis.io/docs/latest/" },
  ],

  "Tools & Platforms": [
    { name: "Git", url: "https://git-scm.com/doc" },
    { name: "GitHub", url: "https://docs.github.com/en" },
    { name: "Postman", url: "https://learning.postman.com/docs/" },
    { name: "Docker", url: "https://docs.docker.com/" },
    { name: "Firebase", url: "https://firebase.google.com/docs" },
    { name: "Vite", url: "https://vite.dev/guide/" },
    { name: "Vercel", url: "https://vercel.com/docs" },
    { name: "Render", url: "https://render.com/docs" },
    { name: "AWS", url: "https://docs.aws.amazon.com/" },
    { name: "Google Cloud", url: "https://cloud.google.com/docs" },
    { name: "Power BI", url: "https://learn.microsoft.com/en-us/power-bi/" },
  ],

  Cybersecurity: [
    { name: "Network Security", url: "https://www.cloudflare.com/learning/network-layer/what-is-network-security/" },
    { name: "Firewall Concepts", url: "https://www.cloudflare.com/learning/security/what-is-a-firewall/" },
    { name: "Threat Detection", url: "https://www.ibm.com/think/topics/threat-detection" },
    { name: "Access Control", url: "https://www.nist.gov/publications/guide-access-control" },
  ],
};

// ================================
// PROJECTS
// ================================

const projects = [
  {
    number: "01",

    title: "GeoImpact",

    status: "Featured",

    description:
      "An AI-powered geopolitical news analysis platform designed to analyze geopolitical events and their potential impact on India.",

    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],

    github: "https://github.com/ezaryan/GeoImpact",
  },

  {
    number: "02",

    title: "Virtual Banking System",

    status: "Java / Backend",

    description:
      "A Java-based simulated banking platform supporting registration, authentication, fund transfers, and account tracking with persistent MySQL storage.",

    technologies: [
      "Java",
      "MySQL",
      "JDBC",
    ],

    github: "https://github.com/ezaryan/VirtualBankingSystem",
  },

  {
    number: "03",

    title: "Swish",

    status: "Full Stack",

    description:
      "A private social-sharing platform designed for campus communities, enabling verified students and faculty to share photos, updates, and achievements.",

    technologies: [
      "Full Stack",
      "Social Platform",
      "Privacy",
    ],

    github: "https://github.com/ezaryan/swish-sapphire",
  },
];
const certifications = [
  {
    number: "01",
    title: "Java Programming",
    issuer: "Success Classes of Engineering",
    file: "/java.pdf"
  },
  {
    number: "02",
    title: "MERN Full Stack Web Development",
    issuer: "Success Classes of Engineering",
    file: "/mern.pdf"
  },
  {
    number: "03",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    file: "/python.pdf"
  },
  {
    number: "04",
    title: "AWS Cloud Foundations Training Badge",
    issuer: "AWS",
    file: "/aws.pdf"
  },
  {
    number: "05",
    title: "Ubuntu Linux Training",
    issuer: "Cursa",
    file: "/linux.pdf"
  },
  {
    number: "06",
    title: "English Language for Competitive Exams",
    issuer: "NPTEL",
    file: "/english.pdf"
  },
];

// ================================
// SECTION HEADING
// ================================

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12">

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </h2>

    </div>
  );
}


// ================================
// MAIN APP
// ================================

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    setScrollProgress(progress);

    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "education",
      "certifications",
      "contact",
    ];

    let currentSection = "home";

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section && scrollTop >= section.offsetTop - 250) {
        currentSection = id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  // ================================
  // SMOOTH SCROLL
  // ================================

  const scrollTo = (id) => {

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };


  return (

    <main className="overflow-hidden bg-[#050505] text-white">
      <CustomCursor />
      <AnimatedBackground/>
{/* SCROLL PROGRESS */}

  <div className="fixed left-0 right-0 top-0 z-[100] h-[2px] bg-transparent">

    <motion.div
      className="h-full bg-white"
      style={{
        width: `${scrollProgress}%`,
      }}
    />

  </div>
      {/* ==========================================
          ANIMATED BACKGROUND
      ========================================== */}

      <AnimatedBackground />


      {/* ==========================================
          NAVBAR
      ========================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl transition-all duration-500 ${
          scrollProgress > 2
            ? "bg-black/80"
            : "bg-black/50"
        }`}
      >

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">


          {/* LOGO */}

          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-bold tracking-tight"
          >
            AP<span className="text-neutral-500">.</span>
          </button>


          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-8 md:flex">

            {navItems.map(([label, id]) => (
            
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative text-sm transition ${
                  activeSection === id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
            
                {label}
            
                {activeSection === id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-px bg-white"
                  />
                )}
            
              </button>
            
            ))}

          </nav>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/10 p-2 md:hidden"
          >

            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </div>


        {/* MOBILE NAVIGATION */}

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            className="border-t border-white/5 bg-black px-6 py-6 md:hidden"
          >

            <div className="flex flex-col gap-5">

              {navItems.map(([label, id]) => (
              
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative text-sm transition ${
                    activeSection === id
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
              
                  {label}
              
                  {activeSection === id && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 right-0 mx-auto h-px bg-white"
                    />
                  )}
              
                </button>
              
              ))}

            </div>

          </motion.div>

        )}

      </header>


      {/* ==========================================
          HERO
      ========================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-20 lg:px-8"
      >

        <div className="mx-auto w-full max-w-7xl">


          {/* HERO CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-5xl"
          >


            {/* AVAILABILITY */}

            <div className="mb-8 flex items-center gap-3">

              <span className="relative flex h-3 w-3">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />

              </span>

              <span className="text-sm text-neutral-500">
                Available for opportunities
              </span>

            </div>


            {/* TYPING ROLE */}

            <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.25em]">

              <span className="h-px w-8 bg-neutral-600" />

              <TypingText />

            </div>


            {/* NAME */}

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

              ARYAN

              <br />

              <span className="text-neutral-500">
                PAGAR.
              </span>

            </h1>


            {/* DESCRIPTION */}

            <div className="mt-10 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">

                Software developer building practical digital experiences
                across web development, cybersecurity, and data-driven
                applications.

              </p>


              {/* SOCIAL LINKS */}

              <div className="flex shrink-0 gap-3">

                <motion.a
                  href="https://github.com/ezaryan"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <Code2 size={19} />
                </motion.a>


                <motion.a
                  href="https://linkedin.com/in/aryan-p-1425a4290"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <BriefcaseBusiness size={19} />
                </motion.a>

              </div>

            </div>


            {/* HERO BUTTONS */}

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">

              <motion.button
              data-cursor
                onClick={() => scrollTo("projects")}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
              >

                View my work

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </motion.button>


              <motion.a
              data-cursor
                href="/aryan_pagar_resume.pdf"
                download
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 font-medium transition hover:border-white/30 hover:bg-white/5"
              >
                Download CV
              </motion.a>

            </div>

          </motion.div>


          {/* SCROLL INDICATOR */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          >

            <ArrowDown
              className="animate-bounce text-neutral-500"
              size={20}
            />

          </motion.div>

        </div>

      </section>


      {/* ==========================================
          ABOUT
      ========================================== */}

      
<section
  id="about"
  className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
>
  <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
    
    {/* LEFT — INTRODUCTION */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
        01 / About Me
      </p>

      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        Building software with{" "}
        <span className="text-neutral-500">
          curiosity, creativity & purpose.
        </span>
      </h2>

      <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-neutral-400">
        <p>
          I'm a Computer Engineering student passionate about software
          development, web technologies, cybersecurity, and data-driven
          applications.
        </p>

        <p>
          I enjoy turning ideas into practical applications while exploring
          modern technologies and solving real-world problems through code.
        </p>

        <p>
          My interests span full-stack development, cybersecurity, cloud
          technologies, and intelligent applications.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {[
          "Software Development",
          "Web Development",
          "Cybersecurity",
          "Data & AI",
        ].map((item) => (
          <motion.span
            key={item}
            whileHover={{ y: -3 }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-400 transition hover:border-white/20 hover:text-white"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>

    {/* RIGHT — STATS */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="grid grid-cols-2 gap-4 self-start"
    >
      {[
        {
          value: "2027",
          label: "Graduation",
          description: "B.Tech Computer Engineering",
        },
        {
          value: "3+",
          label: "Projects",
          description: "Software & full-stack projects",
        },
        {
          value: "2",
          label: "Internships",
          description: "Web development & cybersecurity",
        },
        {
          value: "6+",
          label: "Certifications",
          description: "Technical certifications",
        },
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{ y: -5 }}
          className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
        >
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {stat.value}
          </p>

          <p className="mt-2 text-sm font-medium text-white">
            {stat.label}
          </p>

          <p className="mt-2 text-xs leading-5 text-neutral-500">
            {stat.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>

      </section>


      {/* ==========================================
          SKILLS
      ========================================== */}

      <section
        id="skills"
        className="border-t border-white/5 px-6 py-32 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
              02 / Skills
            </p>
          
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Tools I use to{" "}
              <span className="text-neutral-500">
                build things.
              </span>
            </h2>
          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] md:p-7"
              >
                {/* CATEGORY */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-white">
                    {category}
                  </h3>
          
                  <span className="text-xs text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
          
                {/* SKILLS */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-neutral-400 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {skill.name}
                      <span className="text-[10px] text-neutral-600 transition-colors group-hover:text-neutral-300">
                          ↗
                        </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </section>


      {/* ==========================================
          EXPERIENCE
      ========================================== */}

      <section
        id="experience"
        className="border-t border-white/5 px-6 py-32 lg:px-8"
      >

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
          {/* Top line */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                03 / Experience
              </p>
        
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Cybersecurity Intern
              </h3>
        
              <p className="mt-2 text-sm text-neutral-400">
                Claidroid Technologies
              </p>
            </div>
        
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Internship
            </div>
          </div>
        
          {/* Divider */}
          <div className="h-px bg-white/10" />
        
          {/* Details */}
          <div className="mt-8 grid gap-8 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                Role
              </p>
        
              <p className="mt-2 text-sm text-neutral-300">
                Cybersecurity Intern
              </p>
            </div>
        
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                What I worked on
              </p>
        
              <ul className="mt-4 space-y-4 text-sm leading-7 text-neutral-400">
                <li className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Developed a Python-based firewall project focused on basic
                  network security mechanisms.
                </li>
        
                <li className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Gained practical understanding of network security, firewall
                  concepts, threat detection, and access control.
                </li>
        
                <li className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  Applied Python and networking concepts to implement security
                  mechanisms and understand defensive techniques.
                </li>
              </ul>
            </div>
          </div>
        
          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {["Python", "Network Security", "Firewall", "Threat Detection", "Access Control"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-neutral-500"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  03 / Experience
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  AI Web Development Intern
                </h3>

                <p className="mt-2 text-sm text-neutral-400">
                  InAmigos Foundation
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Internship
              </div>
            </div>

            <div className="h-px bg-white/10" />

            <div className="mt-8 grid gap-8 md:grid-cols-[180px_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  Role
                </p>

                <p className="mt-2 text-sm text-neutral-300">
                  AI Web Development Intern
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  What I worked on
                </p>

                <ul className="mt-4 space-y-4 text-sm leading-7 text-neutral-400">
                  <li className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    <span className="min-w-0">
                      Evaluated the{" "}
                      <a
                        href="https://inamigosfoundation.org.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-white/30 underline-offset-4 transition hover:text-white"
                      >
                        InAmigos Foundation website
                      </a>{" "}
                      and identified opportunities to improve navigation,
                      content structure, accessibility, and user experience.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    Designed NGO website feature concepts for donations,
                    volunteer registration, campaigns, testimonials, and
                    highlighting organizational impact.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    Created a business webpage with structured content,
                    thoughtful visual presentation, and user-friendly design.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    Developed a personal portfolio website to showcase
                    projects, technical skills, certifications, and education.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    Strengthened practical skills in website development,
                    design thinking, and creating user-focused digital
                    experiences.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {[
                "AI-Assisted Web Development",
                "UI/UX Design",
                "Website Analysis",
                "Responsive Web Design",
                "HTML",
                "CSS",
                "JavaScript",
                "GitHub",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-neutral-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </section>


     {/* ==========================================
         PROJECTS
     ========================================== */}
     
     <section
       id="projects"
       className="border-t border-white/5 px-6 py-32 lg:px-8"
     >
       <div className="mx-auto max-w-7xl">
     
         <SectionHeading
           eyebrow="04 / Projects"
           title="Things I’ve built."
         />
     
         <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
     
           {/* PROJECT LIST */}
     
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     
             {projects.map((project, index) => (
     
               <motion.div
                 key={project.title}
     
                 initial={{
                   opacity: 0,
                   x: -20,
                 }}
     
                 whileInView={{
                   opacity: 1,
                   x: 0,
                 }}
     
                 viewport={{
                   once: true,
                 }}
     
                 transition={{
                   delay: index * 0.08,
                 }}
     
                 onClick={() => {
                   setSelectedProject(project);
                 }}
     
                 className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-8 ${
                   selectedProject?.title === project.title
                     ? "border-white/25 bg-white/[0.06]"
                     : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                 }`}
               >
     
                 {/* Hover glow */}
     
                 <motion.div
                   initial={{ opacity: 0 }}
                   whileHover={{ opacity: 1 }}
                   transition={{ duration: 0.3 }}
                   className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]"
                 />
     
                 {/* Card content */}
     
                 <div className="relative z-10 flex items-center gap-5">
     
                   {/* Number */}
     
                   <motion.span
                     animate={{
                       y: selectedProject?.title === project.title ? -3 : 0,
                     }}
                     transition={{ duration: 0.25 }}
                     className="..."
                   >
                     {project.number}
                   </motion.span>
     
                   {/* Project name */}
     
                   <div className="min-w-0 flex-1">
     
                     <h3 className="truncate text-2xl font-semibold text-neutral-200 transition group-hover:text-white md:text-3xl">
                       {project.title}
                     </h3>
     
                     <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-600">
                       {project.status}
                     </p>

                     {project.github && project.github !== "#" && (
                       <a
                         href={project.github}
                         target="_blank"
                         rel="noreferrer"
                         onClick={(event) => event.stopPropagation()}
                         className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                       >
                         View on GitHub
                         <ArrowUpRight size={14} />
                       </a>
                     )}

                   </div>
     
                   {/* Arrow */}
     
                   <div
                     className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                       selectedProject?.title === project.title
                         ? "border-white bg-white text-black"
                         : "border-white/10 text-neutral-400 group-hover:border-white/30 group-hover:bg-white group-hover:text-black"
                     }`}
                   >
                     <ArrowUpRight size={19} />
                   </div>
     
                 </div>
     
               </motion.div>
     
             ))}
     
           </div>
     
     
           {/* PROJECT DETAILS */}
     
           <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
     
             {selectedProject ? (
     
               <motion.div
                 key={selectedProject.title}
     
                 initial={{
                   opacity: 0,
                   y: 15,
                 }}
     
                 animate={{
                   opacity: 1,
                   y: 0,
                 }}
     
                 transition={{
                   duration: 0.35,
                 }}
               >
     <ProjectVisual project={selectedProject} />
                 {/* Top information */}
     
                 <div className="flex items-center justify-between">
     
                   <span className="font-mono text-sm text-neutral-600">
                     {selectedProject.number}
                   </span>
     
                   <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-neutral-500">
                     {selectedProject.status}
                   </span>
     
                 </div>
     
     
                 {/* Project title */}
     
                 <h3 className="mt-14 text-4xl font-semibold tracking-tight md:text-5xl">
                   {selectedProject.title}
                 </h3>
     
     
                 {/* Description */}
     
                 <p className="mt-6 leading-relaxed text-neutral-400">
                   {selectedProject.description}
                 </p>
     
     
                 {/* Technologies */}
     
                 <div className="mt-8">
     
                   <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-600">
                     Built with
                   </p>
     
                   <div className="flex flex-wrap gap-2">
     
                     {selectedProject.technologies.map((tech) => (
     
                       <span
                         key={tech}
                         className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-neutral-400"
                       >
                         {tech}
                       </span>
     
                     ))}
     
                   </div>
     
                 </div>
     
     
                 {/* GitHub */}
     
                 {selectedProject.github &&
                   selectedProject.github !== "#" && (
                     <a
                       href={selectedProject.github}
                       target="_blank"
                       rel="noreferrer"
                       className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                     >
                       View on GitHub
                       <ArrowUpRight size={16} />
                     </a>
                   )}
     
               </motion.div>
     
             ) : (
     
               <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
     
                 <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10">
     
                   <ArrowUpRight
                     size={22}
                     className="text-neutral-600"
                   />
     
                 </div>
     
                 <p className="text-lg text-neutral-400">
                   Select a project
                 </p>
     
                 <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-600">
                   Explore the projects I’ve worked on and the technologies behind them.
                 </p>
     
               </div>
     
             )}
     
           </div>
     
         </div>
     
       </div>
     </section>

      {/* ==========================================
          EDUCATION
      ========================================== */}

      <section
        id="education"
        className="border-t border-white/5 px-6 py-32 lg:px-8"
      >
<div className="mb-12">
  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
    Education
  </p>

  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
    Academic{" "}
    <span className="text-neutral-500">
      journey.
    </span>
  </h2>
</div>

<div className="relative ml-2 border-l border-white/10 pl-8 md:ml-4 md:pl-12">
  {/* B.Tech */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="relative mb-12"
  >
    <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-black bg-white md:-left-[57px]" />

    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            2023 — 2027
          </p>

          <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
            B.Tech Computer Engineering
          </h3>

          <p className="mt-2 text-sm text-neutral-400">
            K. J. Somaiya Institute of Technology
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
          CGPA 7.10 / 10
        </div>
      </div>

      <p className="mt-6 text-sm leading-7 text-neutral-500">
        Currently pursuing a Bachelor of Technology in Computer Engineering.
      </p>
    </div>
  </motion.div>

  {/* HSC */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="relative mb-12"
  >
    <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-black bg-white/60 md:-left-[57px]" />

    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            Higher Secondary Education
          </p>

          <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
            HSC
          </h3>

          <p className="mt-2 text-sm text-neutral-400">
            Maharashtra State Board
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
          72.33%
        </div>
      </div>

      <p className="mt-6 text-sm leading-7 text-neutral-500">
        Higher Secondary Certificate with a strong foundation for
        undergraduate engineering studies.
      </p>
    </div>
  </motion.div>

  {/* SSC */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative"
  >
    <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full border-2 border-black bg-white/40 md:-left-[57px]" />

    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
            Secondary Education
          </p>

          <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
            SSC
          </h3>

          <p className="mt-2 text-sm text-neutral-400">
            Maharashtra State Board
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
          95.20%
        </div>
      </div>

      <p className="mt-6 text-sm leading-7 text-neutral-500">
        Secondary School Certificate with a strong academic foundation.
      </p>
    </div>
  </motion.div>
</div>
      </section>
      {/* ==========================================
          CERTIFICATIONS
      ========================================== */}
      
      <section
        id="certifications"
        className="border-t border-white/5 px-6 py-32 lg:px-8"
      >
      
        <div className="mx-auto max-w-7xl">
      
          <SectionHeading
            eyebrow="06 / Certifications"
            title="Always learning."
          />
      
          <div className="grid gap-4 md:grid-cols-2">
      
            {certifications.map((cert, index) => (
      
              <motion.div
                key={cert.title}
      
                initial={{
                  opacity: 0,
                  y: 25,
                }}
      
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
      
                viewport={{
                  once: true,
                }}
      
                transition={{
                  delay: index * 0.08,
                }}
      
                whileHover={{
                  y: -4,
                }}
      
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-8"
              >
      
                {/* Subtle hover glow */}
      
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-all duration-500 group-hover:bg-white/[0.08]"
                />
      
      
                <div className="relative z-10 flex items-start justify-between gap-6">
      
                  {/* NUMBER */}
      
                  <span className="font-mono text-sm text-neutral-600">
                    {cert.number}
                  </span>
      
      
                  {/* ARROW */}
      
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
      
                </div>
      
      
                {/* CERTIFICATE INFO */}
      
                <div className="relative z-10 mt-12">
      
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
                    {cert.issuer}
                  </p>
      
                  <h3 className="max-w-md text-2xl font-semibold leading-tight text-neutral-200 transition group-hover:text-white">
                    {cert.title}
                  </h3>
      
                </div>
      
              </motion.div>
      
            ))}
      
          </div>
      
        </div>
      
      </section>

      {/* ==========================================
          CONTACT
      ========================================== */}

      <section
        id="contact"
        className="border-t border-white/5 px-6 py-32 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">


          <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 text-center md:px-12">


            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-600">
              07 / Contact
            </p>


            <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">

              Let’s build something{" "}

              <span className="text-neutral-500">
                interesting.
              </span>

            </h2>


            <p className="mx-auto mt-6 max-w-xl text-neutral-500">

              Have a project, opportunity, or idea?
              Feel free to reach out.

            </p>


            {/* EMAIL */}

            <a
              href="mailto:aryan.pagar@somaiya.edu"
              className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-neutral-200"
            >

              <Mail size={18} />

              Get in touch

            </a>


            {/* SOCIAL LINKS */}

            <div className="mt-10 flex justify-center gap-4">

              <a
                href="https://github.com/ezaryan"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-neutral-400 transition hover:text-white"
              >

                <Code2 size={19} />

              </a>


              <a
                href="https://linkedin.com/in/aryan-p-1425a4290"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-neutral-400 transition hover:text-white"
              >

                <BriefcaseBusiness size={19} />

              </a>

            </div>

          </div>


          {/* FOOTER */}

          <footer className="flex flex-col justify-between gap-4 py-8 text-sm text-neutral-600 md:flex-row">

            <p>
              © {new Date().getFullYear()} Aryan Pagar.
            </p>


            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 transition hover:text-white"
            >

              Back to top

              <ArrowUp size={15} />

            </button>

          </footer>

        </div>

      </section>

    </main>
  );
}


export default App;