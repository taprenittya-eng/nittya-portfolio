import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpeg";

function App() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFlowerShower, setShowFlowerShower] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");

      if (!contactSection) return;

      const contactTop = contactSection.getBoundingClientRect().top;

      setShowScrollIndicator(contactTop > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // One-time flower shower on page load / refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlowerShower(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          Nittya<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>

        </div>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >

              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#journey" onClick={closeMenu}>
                Journey
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>

              <a
                href="#contact"
                className="mobile-connect"
                onClick={closeMenu}
              >
                Let's Connect →
              </a>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <main id="home" className="hero">

        <div className="blob blob-one"></div>
        <div className="blob blob-two"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hello">
            HELLO, I'M
          </p>

          <h1>
            Nittya <span>Tapre</span>
          </h1>

          <h2>
            Electronics & Telecommunication
            <br />
            Engineering Student
          </h2>

          <p className="description">
            I’m an Electronics & Telecommunication Engineering student
            passionate about software development, web technologies and
            creative design. I enjoy turning ideas into meaningful digital
            experiences.
          </p>

          <div className="hero-buttons">
           <a
            href="#projects"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "13px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              color: "#ffffff",
              background: "#8b6fc9",
              border: "1px solid #8b6fc9",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
           >
            Explore My Work →
           </a>

            <a
              href="/webdev_nittya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary resume-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: "#6f58a8",
                background: "#ffffff",
                border: "1px solid #d8ccef",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              View My Resume ↗
            </a>
          
            <a
              href="#contact"
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: "#6f58a8",
                background: "#ffffff",
                border: "1px solid #d8ccef",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Let's Connect
            </a>
          </div>

        </motion.div>


        {/* Flower Shower */}
        {showFlowerShower && (
          <div className="flower-shower" aria-hidden="true">
            {Array.from({ length: 42 }, (_, index) => {
              const flowers = ["✿", "❀", "✽", "✾", "❁"];
              const flower = flowers[index % flowers.length];

              return (
                <span
                  key={index}
                  className={`falling-flower flower-${index % 2 === 0 ? "purple" : "pink"}`}
                  style={{
                    left: `${(index * 37) % 101}%`,
                    animationDelay: `${(index % 14) * 0.14}s`,
                    animationDuration: `${2.8 + (index % 6) * 0.22}s`,
                    fontSize: `${12 + (index % 5) * 4}px`,
                    transform: `rotate(${(index * 29) % 360}deg)`
                  }}
                >
                  {flower}
                </span>
              );
            })}
          </div>
        )}

        <div className="hero-flower-placeholder" aria-hidden="true"></div>


        {/* Scroll Indicator */}

        {showScrollIndicator && (
          <motion.div
            className="scroll-indicator"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              y: [0, 8, 0]
            }}
            transition={{
              opacity: {
                duration: 0.5
              },
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span>↓</span>
            Scroll to explore
          </motion.div>
        )}

      </main>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section id="about" className="about-section">

        <motion.div
          className="about-heading"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >

          <p className="section-label">
            GET TO KNOW ME
          </p>

          <h2>
            A little <span>about me.</span>
          </h2>

        </motion.div>


        <div className="about-content">

          <motion.div
            className="about-card"
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
          >

            <div className="about-avatar">
  <img src={profile}  alt="Nittya Tapre" />
</div>

            <div className="about-mini-info">

              <div>
                <strong>ETC</strong>
                <span>Engineering</span>
              </div>

              <div>
                <strong>2027</strong>
                <span>Graduation</span>
              </div>

            </div>

          </motion.div>


          <motion.div
            className="about-text"
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
          >

            <h3>
              Building my journey, one project at a time.
            </h3>

            <p>
              I am an Electronics & Telecommunication Engineering
              student with a strong interest in software development,
              web development and creative design.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas into
              practical projects. My engineering background also gives
              me an interest in connecting software with real-world
              technology.
            </p>

            <p>
              Currently, I am focused on strengthening my programming
              skills, building meaningful projects and preparing myself
              for opportunities in the IT industry.
            </p>

            <div className="about-tags">

              <span>Software Development</span>
              <span>Web Development</span>
              <span>UI / Design</span>
              <span>IoT</span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SKILLS SECTION
      ===================================================== */}

      <section id="skills" className="skills-section">

        <motion.div
          className="skills-heading"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >

          <p className="section-label">
            MY TOOLKIT
          </p>

          <h2>
            Skills & <span>technologies.</span>
          </h2>

          <p>
            Technologies and tools I use to turn ideas into
            practical projects and digital experiences.
          </p>

        </motion.div>


        <div className="skills-grid">

          {/* Programming */}

          <motion.div
            className="skill-card"
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="skill-icon">
              {"</>"}
            </div>

            <h3>
              Programming
            </h3>

            <div className="skill-list">
              <span>Java</span>
              <span>C++</span>
            </div>

          </motion.div>


          {/* Web Development */}

          <motion.div
            className="skill-card"
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="skill-icon">
              🌐
            </div>

            <h3>
              Web Development
            </h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

          </motion.div>


          {/* Tools */}

          <motion.div
            className="skill-card"
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="skill-icon">
              ⚙
            </div>

            <h3>
              Tools & Technologies
            </h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>

          </motion.div>


          {/* Design */}

          <motion.div
            className="skill-card"
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="skill-icon">
              ✦
            </div>

            <h3>
              Design & Creative
            </h3>

            <div className="skill-list">
              <span>UI Design</span>
              <span>Graphic Design</span>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}

      <section id="projects" className="projects-section">

        <motion.div
          className="projects-heading"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >

          <p className="section-label">
            MY WORK
          </p>

          <h2>
            Featured <span>projects.</span>
          </h2>

          <p>
            A selection of projects where I explore software
            development, web technologies, AI and real-world
            engineering solutions.
          </p>

        </motion.div>


        <div className="projects-grid">


          {/* =================================================
              PLACE READY AI
          ================================================= */}

          <motion.article
            className="project-card"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="project-image placeready-project">

              <div className="project-image-content">

                <span className="project-symbol">
                  AI
                </span>

                <span className="project-image-label">
                  Voice AI Interview Coach
                </span>

              </div>

            </div>


            <div className="project-content">

              <div className="project-top">

                <div className="project-type">
                  AI • UX Case Study
                </div>

                <div className="project-year">
                  2026
                </div>

              </div>


              <h3>
                PlaceReadyAI
              </h3>


              <p>
                Built an AI-powered voice mock interview coach
                that evaluates spoken answers for grammar,
                filler words, confidence and STAR format.
              </p>


              <p className="project-extra">
                Submitted as part of India.RUNS Ideathon
                (Redrob × Hack2Skill) — Track 3:
                Everyday AI Innovation Challenge.
              </p>


              <div className="project-tags">

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Claude AI API</span>
                <span>UX</span>

              </div>


              <div className="project-actions">

                <a
                  href="#contact"
                  className="project-link"
                >
                  View Project →
                </a>

                <a
                  href="https://placeready-ai.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  Live Demo ↗
                </a>

              </div>

            </div>

          </motion.article>


          {/* =================================================
              WARMLY
          ================================================= */}

          <motion.article
            className="project-card"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="project-image warmly-project">

              <div className="project-image-content">

                <span className="project-symbol">
                  W
                </span>

                <span className="project-image-label">
                  Modern Web Experience
                </span>

              </div>

            </div>


            <div className="project-content">

              <div className="project-top">

                <div className="project-type">
                  Web Development • UI/UX
                </div>

                <div className="project-year">
                  2026
                </div>

              </div>


              <h3>
                Warmly
              </h3>


              <p>
                Designed and developed a responsive personal
                website with a focus on modern UI, layout,
                visual hierarchy and user experience.
              </p>


              <p className="project-extra">
                Used Claude AI for AI-assisted development while
                independently defining design requirements,
                content structure, styling and UI details.
              </p>


              <div className="project-tags">

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>Claude AI</span>

              </div>


              <div className="project-actions">

                <a
                  href="#contact"
                  className="project-link"
                >
                  View Project →
                </a>

                <a
                  href="https://warmlywebsite.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                   Live Demo ↗
                </a>

              </div>

            </div>

          </motion.article>


          {/* =================================================
              TASKFLOW
          ================================================= */}

          <motion.article
            className="project-card"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="project-image taskflow-project">

              <div className="project-image-content">

                <span className="project-symbol">
                  TF
                </span>

                <span className="project-image-label">
                  Task Management API
                </span>

              </div>

            </div>


            <div className="project-content">

              <div className="project-top">

                <div className="project-type">
                  Backend • REST API
                </div>

                <div className="project-year">
                  2026
                </div>

              </div>


              <h3>
                TaskFlow
              </h3>


              <p>
                Developed a task management REST API using
                Java and Spring Boot with CRUD operations for
                creating, updating, retrieving and deleting tasks.
              </p>


              <p className="project-extra">
                Integrated MySQL with Spring Data JPA for
                persistent storage, filtering by completion
                status, request validation and global exception
                handling.
              </p>


              <div className="project-tags">

                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>JPA</span>
                <span>REST API</span>
                <span>Git/GitHub</span>

              </div>


              <div className="project-actions">

                <a
                  href="#contact"
                  className="project-link"
                >
                  View Project →
                </a>

                <a
                  href="https://github.com/taprenittya-eng/taskflow"
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </motion.article>


          {/* =================================================
              RTI PROJECT
          ================================================= */}

          <motion.article
            className="project-card"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            whileHover={{
              y: -8
            }}
          >

            <div className="project-image rti-project">

              <div className="project-image-content">

                <span className="project-symbol">
                  RTI
                </span>

                <span className="project-image-label">
                  Radio Tomography Imaging
                </span>

              </div>

            </div>


            <div className="project-content">

              <div className="project-top">

                <div className="project-type">
                  IoT • Electronics
                </div>

                <div className="project-year">
                  2026
                </div>

              </div>


              <div className="ongoing-badge">
                Ongoing Final-Year Engineering Project
              </div>


              <h3>
                Human Detection using Radio Tomography Imaging
              </h3>


              <p>
                Developing a radio-based sensing system that
                analyzes changes in signal strength between nodes
                to detect objects and visualize their location
                using heatmaps.
              </p>


              <p className="project-extra">
                The system uses ESP32 nodes, RSSI-based
                measurements and real-time visualization,
                with MQTT being explored for dashboard-based
                monitoring.
              </p>


              <div className="project-tags">

                <span>ESP32</span>
                <span>RTI</span>
                <span>RSSI</span>
                <span>MQTT</span>
                <span>IoT</span>

              </div>


              <div className="project-actions">

                <a
                  href="#contact"
                  className="project-link"
                >
                  Project Details →
                </a>

                <span className="project-status">
                  In Progress
                </span>

              </div>

            </div>

          </motion.article>


          {/* =================================================
              PORTFOLIO NOTE
          ================================================= */}

          <motion.div
            className="portfolio-note"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
          >

            <span className="portfolio-note-icon">
              ✦
            </span>

            <p>
              <strong>And of course...</strong> one of the
              projects had to be this very website you're
              currently watching and enjoying. 👀
            </p>

            <span className="portfolio-note-small">
              Designed & developed with a little help from
              caffeine ☕ and creativity.
            </span>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY SECTION
      ===================================================== */}

      <section id="journey" className="journey-section">

        <motion.div
          className="journey-heading"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7
          }}
        >

          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Learning, building & <span>growing.</span>
          </h2>

          <p>
            A little timeline of what I've been learning,
            building and exploring along the way.
          </p>

        </motion.div>


        <div className="timeline">


          {/* 2023 - 2027 */}

          <motion.div
            className="timeline-item"
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span>
                2023 — 2027
              </span>

              <h3>
                Electronics & Telecommunication Engineering
              </h3>

              <p>
                Building a foundation in electronics,
                communication systems, programming and
                engineering while exploring software
                development alongside my core field.
              </p>

            </div>

          </motion.div>


          {/* 2026 */}

          <motion.div
            className="timeline-item"
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span>
                2026
              </span>

              <h3>
                Exploring Software & Web Development
              </h3>

              <p>
                Working with Java, C++, JavaScript, React
                and backend technologies while building
                projects that combine technology with
                creative design.
              </p>

            </div>

          </motion.div>


          {/* India RUNS */}

          <motion.div
            className="timeline-item"
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span>
                2026
              </span>

              <h3>
                India.RUNS Ideathon
              </h3>

              <p>
                Built PlaceReadyAI, an AI-powered voice
                mock interview coach, as part of the
                Everyday AI Innovation Challenge.
              </p>

            </div>

          </motion.div>


          {/* Final Year Project */}

          <motion.div
            className="timeline-item"
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span>
                2026 — Ongoing
              </span>

              <h3>
                Final-Year Engineering Project
              </h3>

              <p>
                Developing a Human Detection system using
                Radio Tomography Imaging, combining
                electronics, sensing and software
                visualization.
              </p>

            </div>

          </motion.div>


          <div className="journey-note">

            ✦ And somewhere along the way, graphic design &
            UI/UX became part of my learning and growing
            journey — from 2019 to now.

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section id="contact" className="contact-section">

        <motion.div
          className="contact-container"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
        >

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Have an idea?
            <br />
            <span>
              Let's make it happen.
            </span>
          </h2>

          <p className="contact-text">
            Whether it's an internship opportunity, a project,
            a collaboration or just a hello — my inbox is always open.
          </p>


          <a
            href="mailto:taprenittya@gmail.com"
            className="email-button"
          >
            Say hello →
          </a>


          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/nittya-tapre/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/taprenittya-eng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.behance.net/nittyatapre"
              target="_blank"
              rel="noreferrer"
              className="behance-link"
            >
              Behance ↗
            </a>

            <a
              href="mailto:taprenittya@gmail.com"
            >
              Email
            </a>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-top">

          <div>

            <h3>
              Nittya<span>.</span>
            </h3>

            <p>
              Electronics & Telecommunication Engineering
              student exploring software, design and
              everything in between.
            </p>

          </div>


          <a
            href="#home"
            className="back-to-top"
          >
            Back to top ↑
          </a>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Nittya Tapre. Made with curiosity & creativity.
          </p>

          <p>
            Built with Love <span>❤︎</span>
          </p>

        </div>

      </footer>


        <style>{`
          .flower-shower {
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            pointer-events: none;
            z-index: 50;
          }

          .falling-flower {
            position: absolute;
            top: -40px;
            font-family: Georgia, "Times New Roman", serif;
            line-height: 1;
            opacity: 0;
            animation-name: flowerFall;
            animation-timing-function: ease-in;
            animation-fill-mode: forwards;
            will-change: transform, top, opacity;
          }

          .flower-purple {
            color: #8f6ac8;
            text-shadow: 0 0 10px rgba(143, 106, 200, 0.18);
          }

          .flower-pink {
            color: #e59ab8;
            text-shadow: 0 0 10px rgba(229, 154, 184, 0.18);
          }

          @keyframes flowerFall {
            0% {
              top: -8vh;
              opacity: 0;
              transform: translate3d(0, -20px, 0) rotate(0deg);
            }

            12% {
              opacity: 0.9;
            }

            78% {
              opacity: 0.72;
            }

            100% {
              top: 108vh;
              opacity: 0;
              transform: translate3d(35px, 0, 0) rotate(260deg);
            }
          }

          .hero-flower-placeholder {
            width: min(42vw, 520px);
            height: min(42vw, 520px);
            min-width: 320px;
            min-height: 320px;
          }

          @media (max-width: 900px) {
            .hero-flower-placeholder {
              width: 320px;
              height: 320px;
              min-width: 280px;
              min-height: 280px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .falling-flower {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
            }
          }
        `}</style>

    </div>
  );
}

export default App;
