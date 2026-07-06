import { aboutTechnologies } from "./About";

const technologyDetails: Record<
  string,
  {
    label: string;
    group: string;
    accent: string;
    icon: string;
  }
> = {
  HTML: {
    label: "HTML",
    group: "Estrutura",
    accent: "from-brand-pink to-brand-purple",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  "Tailwind CSS": {
    label: "Tailwind CSS",
    group: "Estilização",
    accent: "from-[#AECFE0] to-[#A9C8AC]",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  Javascript: {
    label: "JavaScript",
    group: "Interatividade",
    accent: "from-brand-green to-brand-pink",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  Typescript: {
    label: "TypeScript",
    group: "Front-end",
    accent: "from-brand-blue to-brand-purple",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  React: {
    label: "React",
    group: "Interface",
    accent: "from-[#AECFE0] to-brand-blue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  Java: {
    label: "Java",
    group: "Back-end",
    accent: "from-brand-purple to-brand-pink",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  PHP: {
    label: "PHP",
    group: "Back-end",
    accent: "from-[#C6B4E8] to-brand-blue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  C: {
    label: "C",
    group: "Back-end",
    accent: "from-brand-pink to-brand-green",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  MySQL: {
    label: "MySQL",
    group: "Banco de dados",
    accent: "from-brand-blue to-[#A9C8AC]",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  Figma: {
    label: "Figma",
    group: "UI/UX Design",
    accent: "from-brand-pink to-[#AECFE0]",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  Git: {
    label: "Git",
    group: "Versionamento",
    accent: "from-brand-green to-brand-purple",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  Photoshop: {
    label: "Photoshop",
    group: "Design",
    accent: "from-brand-blue to-[#AECFE0]",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
  },
};

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="flex min-h-[calc(100vh-72px)] items-center bg-[linear-gradient(135deg,rgba(246,240,255,0.62),rgba(235,247,255,0.50),rgba(245,250,246,0.38))] py-[80px] shadow-[inset_0_28px_70px_rgba(198,180,232,0.10),inset_0_-28px_70px_rgba(174,207,224,0.08)] backdrop-blur-md dark:bg-[linear-gradient(135deg,rgba(18,18,34,0.35),rgba(35,35,52,0.48),rgba(18,18,34,0.34))] dark:shadow-[inset_0_28px_80px_rgba(240,174,200,0.035),inset_0_-28px_80px_rgba(174,207,224,0.04)]"
    >
      <div className="container mx-auto max-w-[1280px] px-4 md:px-[24px]">
        <div
          className="mx-auto mb-[56px] max-w-[760px] text-center"
          data-aos="fade-up"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0AEC8] dark:text-brand-pink">
            Tecnologias
          </p>
          <h2 className="font-lexend text-[32px] font-medium leading-tight text-text-primary dark:text-dark-text-primary md:text-[36px]">
            Ferramentas do dia a dia
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[18px] font-normal leading-relaxed text-text-secondary dark:text-[#c3c9da]">
            Stack que uso para transformar ideias em interfaces bonitas,
            funcionais e bem construídas.
          </p>
        </div>

        <div
          className="grid items-start gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-stretch"
          data-aos="fade-up"
        >
          <div className="mx-auto flex w-full max-w-[520px] flex-col gap-5 lg:mx-0 lg:h-full">
            <div className="flex-1 rounded-[24px] border border-[rgba(198,180,232,0.30)] bg-[rgba(253,251,252,0.76)] p-6 text-left shadow-[0_14px_44px_rgba(198,180,232,0.12),inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-lg transition-all duration-300 dark:border-[rgba(198,180,232,0.12)] dark:bg-dark-card dark:shadow-none">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#F0AEC8] dark:text-brand-pink">
                Meu kit atual
              </p>
              <div className="mt-4 space-y-3">
                {[
                  [
                    "Interface",
                    "HTML, Tailwind CSS, JavaScript, TypeScript e React",
                  ],
                  ["Back-end", "Java, PHP, C e MySQL"],
                  ["Design", "Figma, Photoshop, UI/UX e versionamento com Git"],
                ].map(([label, desc]) => (
                  <div
                    key={label}
                    className="border-l border-[#F0AEC8]/35 pl-4 dark:border-brand-pink/35"
                  >
                    <p className="text-[15px] text-text-primary dark:text-white">
                      {label}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-[24px] border border-[rgba(174,207,224,0.28)] bg-[rgba(253,251,252,0.72)] p-6 text-left shadow-[0_14px_44px_rgba(174,207,224,0.10),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-lg transition-all duration-300 dark:border-[rgba(146,207,233,0.12)] dark:bg-dark-card dark:shadow-none">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#AECFE0] dark:text-[#AECFE0]">
                Em evolução
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
                Além da stack principal, sigo conectando fundamentos de código,
                organização de produto, testes automatizados e documentação de
                sistemas.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["API REST", "Scrum", "Playwright", "UML"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(198,180,232,0.28)] bg-[rgba(242,238,246,0.88)] px-3 py-1 text-[13px] text-text-secondary shadow-none dark:border-[rgba(198,180,232,0.10)] dark:bg-[rgba(16,16,33,0.64)] dark:text-[#c3c9da]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            {aboutTechnologies.map((technology, index) => {
              const tech = technologyDetails[technology];

              return (
                <div
                  key={technology}
                  className="group relative overflow-hidden rounded-[24px] border border-[rgba(198,180,232,0.28)] bg-[rgba(253,251,252,0.76)] p-5 shadow-[0_14px_36px_rgba(198,180,232,0.12),inset_0_1px_0_rgba(255,255,255,0.46)] backdrop-blur-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[rgba(240,174,200,0.42)] hover:shadow-[0_18px_44px_rgba(198,180,232,0.18)] dark:border-[rgba(198,180,232,0.1)] dark:bg-dark-card dark:shadow-sm dark:hover:border-[rgba(198,180,232,0.3)]"
                  data-aos="zoom-in"
                  data-aos-delay={160 + index * 35}
                >
                  <span
                    className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${tech.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] border border-white/80 bg-white/95 p-3 shadow-[0_12px_28px_rgba(16,16,33,0.12)] ring-1 ring-black/[0.03] dark:border-white/85 dark:bg-white/95 dark:shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
                      <img
                        src={tech.icon}
                        className="h-full w-full object-contain"
                        alt={`${tech.label} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-lexend text-[16px] font-medium text-text-primary dark:text-white">
                        {tech.label}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
                        {tech.group}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
