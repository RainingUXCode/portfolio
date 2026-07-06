import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";

// Seus componentes
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="relative bg-brand-background dark:bg-dark-bg text-text-primary dark:text-dark-text-primary antialiased transition-colors duration-300 font-sans min-h-screen">
      <div className="global-aurora" aria-hidden="true"></div>

      {/* HEADER */}
      <header
        id="header"
        className="sticky top-0 z-50 bg-[rgba(253,251,252,0.88)] dark:bg-[rgba(35,35,52,0.8)] backdrop-blur-sm border-b border-[rgba(198,180,232,0.22)] dark:border-[rgba(107,115,255,0.1)]"
      >
        <div className="container mx-auto max-w-[1280px] px-4 md:px-[24px]">
          <div className="flex justify-between items-center h-[64px]">
            <a href="#home" className="flex items-center gap-[8px]">
              <span className="w-[32px] h-[32px] bg-gradient-to-br from-brand-pink to-brand-purple rounded-[12px] flex items-center justify-center shadow-sm">
                <img
                  src="/imgs/star-16x16.svg"
                  className="w-4 h-4"
                  alt="Estrela"
                />
              </span>
              <span className="font-semibold text-[14px] text-text-primary dark:text-white">
                RainingUXCode
              </span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="relative text-[14px] font-medium text-text-secondary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-brand-pink after:to-brand-purple after:transition-all after:duration-300 hover:text-text-primary hover:after:w-full dark:text-[#919ab5] dark:hover:text-white"
              >
                Início
              </a>
              <a
                href="#about"
                className="relative text-[14px] font-medium text-text-secondary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-brand-pink after:to-brand-purple after:transition-all after:duration-300 hover:text-text-primary hover:after:w-full dark:text-[#919ab5] dark:hover:text-white"
              >
                Sobre
              </a>
              <a
                href="#technologies"
                className="relative text-[14px] font-medium text-text-secondary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-brand-pink after:to-brand-purple after:transition-all after:duration-300 hover:text-text-primary hover:after:w-full dark:text-[#919ab5] dark:hover:text-white"
              >
                Tecnologias
              </a>
              <a
                href="#projects"
                className="relative text-[14px] font-medium text-text-secondary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-brand-pink after:to-brand-purple after:transition-all after:duration-300 hover:text-text-primary hover:after:w-full dark:text-[#919ab5] dark:hover:text-white"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="relative text-[14px] font-medium text-text-secondary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-brand-pink after:to-brand-purple after:transition-all after:duration-300 hover:text-text-primary hover:after:w-full dark:text-[#919ab5] dark:hover:text-white"
              >
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-pink to-brand-purple px-[16px] py-[8px] font-lexend text-[14px] font-medium text-white shadow-sm transition-opacity duration-150 hover:opacity-90"
              >
                Fale Comigo
              </a>

              <div className="relative">
                <button
                  onClick={() => {
                    toggleTheme();
                    const btn = document.getElementById("theme-toggle");
                    btn?.classList.add("animate-spin-once");
                    setTimeout(
                      () => btn?.classList.remove("animate-spin-once"),
                      500
                    );
                  }}
                  id="theme-toggle"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center transition-all duration-300"
                >
                  {isDark ? (
                    <svg
                      className="w-5 h-5 text-dark-text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  )}
                </button>
                <span className="absolute w-1.5 h-1.5 rounded-full animate-blink bg-brand-green top-0 -right-1.5"></span>
                <span
                  className="absolute w-1.5 h-1.5 rounded-full animate-blink bg-brand-pink bottom-0 -left-1.5"
                  style={{ animationDelay: "1.5s" }}
                ></span>
              </div>

              <button
                onClick={toggleMobileMenu}
                className={`md:hidden w-10 h-10 rounded-xl bg-[rgb(243,244,245)] dark:bg-dark-card flex items-center justify-center z-50 ${
                  isMobileMenuOpen ? "is-open" : ""
                }`}
              >
                <div className="hamburger-icon w-6 h-6 flex flex-col justify-around">
                  <span
                    className={`block w-full h-[2px] bg-text-primary dark:bg-[#f1f3f4] rounded-[2px] transition-all duration-300 ${
                      isMobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-[2px] bg-text-primary dark:bg-[#f1f3f4] rounded-[2px] transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-[2px] bg-text-primary dark:bg-[#f1f3f4] rounded-[2px] transition-all duration-300 ${
                      isMobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* DROPDOWN MOBILE */}
      <div
        className={`fixed top-[64px] left-0 right-0 rounded-b-3xl border-b border-[rgba(198,180,232,0.24)] shadow-[0_18px_50px_rgba(198,180,232,0.18)] z-50 p-6 flex flex-col justify-between backdrop-blur-lg bg-[rgba(253,251,252,0.9)] dark:border-[rgba(198,180,232,0.1)] dark:bg-[rgba(16,16,33,0.9)] transition-all duration-400 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-start space-y-8 mb-8">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-lg font-normal text-text-secondary dark:text-dark-text-primary"
          >
            Início
          </a>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-lg font-normal text-text-secondary dark:text-dark-text-primary"
          >
            Sobre
          </a>
          <a
            href="#technologies"
            onClick={closeMobileMenu}
            className="text-lg font-normal text-text-secondary dark:text-dark-text-primary"
          >
            Tecnologias
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="text-lg font-normal text-text-secondary dark:text-dark-text-primary"
          >
            Projetos
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="text-lg font-normal text-text-secondary dark:text-dark-text-primary"
          >
            Contato
          </a>
        </nav>
        <div className="w-full">
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="w-full text-center block rounded-[10px] bg-gradient-to-br from-brand-pink to-brand-purple px-[16px] py-[8px] font-lexend text-[14px] font-medium text-white shadow-sm transition-opacity duration-150 hover:opacity-90"
          >
            Fale Comigo
          </a>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL (Main) */}
      <main className="relative overflow-hidden">
        {/* HERO COM ACETERNITY AURORA */}
        <section id="home" className="relative min-h-[calc(100vh-72px)] w-full">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative z-10 container mx-auto flex min-h-[calc(100vh-72px)] max-w-[1280px] flex-col px-[24px]"
          >
            <div className="grid flex-1 items-center gap-[64px] py-[56px] md:grid-cols-2 md:py-[72px]">
              <div className="space-y-6 text-center md:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F0AEC8]/45 text-[#F0AEC8] dark:border-brand-pink/40 dark:text-brand-pink font-semibold text-sm backdrop-blur-sm">
                  <img src="/imgs/heartpink-16x16.svg" className="w-4 h-4" />
                  Portfólio Pessoal
                </span>
                <h1 className="text-4xl lg:text-6xl font-medium leading-[1.12] text-text-primary dark:text-white">
                  <span className="font-lexend font-medium">Olá! Eu sou</span>
                  <br />
                  <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent font-normal font-lexend">
                    Raínne
                  </span>
                </h1>
                <p className="text-[18px] text-text-secondary dark:text-[#919ab5]">
                Sou uma desenvolvedora com base em Design e UX/UI, especializada em Front-end e em constante evolução para me tornar Full Stack. ✨
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                  <a
                    href="#projects"
                    className="flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-brand-pink to-brand-purple px-[14px] py-[7px] font-lexend text-[14px] font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                  >
                    <img
                      src="/imgs/bigsmall-16x16.svg"
                      className="h-4 w-4"
                      alt="Projetos"
                    />
                    Ver Projetos
                  </a>
                  <a
                    href="#about"
                    className="flex items-center gap-2 rounded-[10px] border border-[#F0AEC8] bg-[rgba(253,251,252,0.32)] px-[14px] py-[7px] font-lexend text-[14px] font-medium text-[#F0AEC8] transition-colors hover:bg-[rgba(240,174,200,0.18)] dark:border-brand-pink dark:bg-transparent dark:text-brand-pink dark:hover:bg-[rgba(240,174,200,0.1)]"
                  >
                    <img
                      src="/imgs/heartpink-16x16.svg"
                      className="h-4 w-4"
                      alt="Sobre Mim"
                    />
                    Sobre Mim
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative z-0">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-brand-pink via-brand-purple to-brand-blue opacity-30 dark:opacity-40 rounded-[16px] blur-2xl z-[-1]"></div>

                  <div className="relative w-[444px] h-[246px] max-w-[calc(100vw-48px)] rounded-[16px] border border-brand-pink/35 bg-[#101021]/85 shadow-[0_24px_80px_rgba(198,180,232,0.18)] backdrop-blur-xl overflow-hidden">
                    <div className="flex items-center border-b border-white/10 bg-white/[0.04] px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-brand-pink shadow-[0_0_18px_rgba(240,174,200,0.75)]"></span>
                        <span className="h-3 w-3 rounded-full bg-brand-purple/80"></span>
                        <span className="h-3 w-3 rounded-full bg-[#6f748e]"></span>
                      </div>
                    </div>

                    <div className="px-5 py-4 font-mono text-[12px] sm:text-[13px] leading-[1.45rem] text-[#d7daf0]">
                      <div className="grid grid-cols-[1.7rem_1fr] gap-x-3">
                        <span className="text-[#6f748e]">01</span>
                        <span>
                          <span className="text-brand-purple">const</span>{" "}
                          <span className="text-[#d7daf0]">Raínne</span>{" "}
                          <span className="text-brand-purple">=</span>{" "}
                          <span className="text-[#d7daf0]">&#123;</span>
                        </span>
                        <span className="text-[#6f748e]">02</span>
                        <span>
                          <span className="text-brand-pink">code</span>
                          <span className="text-[#d7daf0]">: </span>
                          <span className="typewriter-text text-brand-green [--typewriter-chars:22ch] [--typewriter-steps:22] [--typewriter-delay:0s]">
                            'Front-end Developer'
                          </span>
                          <span className="text-[#d7daf0]">,</span>
                        </span>
                        <span className="text-[#6f748e]">03</span>
                        <span>
                          <span className="text-brand-pink">studying</span>
                          <span className="text-[#d7daf0]">: </span>
                          <span className="typewriter-text text-brand-blue [--typewriter-chars:12ch] [--typewriter-steps:12] [--typewriter-delay:1.8s]">
                            'Full Stack'
                          </span>
                          <span className="text-[#d7daf0]">,</span>
                        </span>
                        <span className="text-[#6f748e]">04</span>
                        <span>
                          <span className="text-brand-pink">skills</span>
                          <span className="text-[#d7daf0]">: [</span>
                          <span className="text-brand-blue">'UI/UX'</span>
                          <span className="text-[#d7daf0]">, </span>
                          <span className="text-brand-blue">'React'</span>
                          <span className="text-[#d7daf0]">, </span>
                        </span>
                        <span className="text-[#6f748e]">05</span>
                        <span className="pl-4">
                          <span className="text-brand-blue">'TypeScript'</span>
                          <span className="text-[#d7daf0]">, </span>
                          <span className="text-brand-blue">'PHP'</span>
                          <span className="text-[#d7daf0]">,</span>
                          <span className="text-brand-blue">'Java'</span>
                          <span className="text-[#d7daf0]">],</span>
                        </span>
                        <span className="text-[#6f748e]">06</span>
                        <span>
                          <span className="text-brand-pink">currentFocus</span>
                          <span className="text-[#d7daf0]">: </span>
                          <span className="typewriter-text text-brand-green [--typewriter-chars:24ch] [--typewriter-steps:24] [--typewriter-delay:3.6s]">
                            'Evoluir todos os dias'
                          </span>
                        </span>
                        <span className="text-[#6f748e]">07</span>
                        <span className="text-[#d7daf0]">&#125;;</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-[76px] left-1/2 flex -translate-x-1/2 justify-center md:left-auto md:right-0 md:translate-x-0">
                    <div className="inline-flex items-center gap-3 rounded-[12px] border border-white/10 bg-[#101021]/45 px-4 py-2 text-[14px] text-[#d7daf0] shadow-[0_12px_40px_rgba(198,180,232,0.12)] backdrop-blur-md">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-green shadow-[0_0_14px_rgba(169,200,172,0.8)]"></span>
                      Disponivel para oportunidades
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-7 -left-4 w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-purple rounded-2xl flex items-center justify-center shadow-md animate-float"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <img
                      src="/imgs/heartwhite-20x20.svg"
                      className="w-6 h-6"
                      alt="Coração"
                    />
                  </div>
                  {/* O class invasor foi corrigido para className abaixo! */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl flex items-center justify-center shadow-md animate-float"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <img
                      src="/imgs/bigsmall-24x24.svg"
                      className="w-6 h-6"
                      alt="Ícone Mágico"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-7 md:pb-8">
              <a
                href="#about"
                aria-label="Scroll down"
                className="group flex flex-col items-center gap-2 text-[#F0AEC8]/85 transition-colors duration-300 hover:text-[#F0AEC8] dark:text-brand-pink/65 dark:hover:text-brand-pink"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
                  Scroll
                </span>
                <span className="relative h-[34px] w-px overflow-hidden bg-[#F0AEC8]/28 dark:bg-brand-pink/20">
                  <span className="absolute left-0 top-0 h-3 w-px bg-[#F0AEC8]/85 shadow-[0_0_10px_rgba(240,174,200,0.42)] animate-scroll-cue dark:bg-brand-pink/80 dark:shadow-[0_0_10px_rgba(240,174,200,0.8)]"></span>
                </span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* RESTANTE DAS SEÇÕES */}
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

