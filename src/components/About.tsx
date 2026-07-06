import { assetUrl } from "../lib/assets";

export const aboutTechnologies = [
  "HTML",
  "Tailwind CSS",
  "Javascript",
  "Typescript",
  "React",
  "Java",
  "PHP",
  "C",
  "MySQL",
  "Git",
  "Figma",
  "Photoshop",
];

const journeyTimeline = ["Design", "Marketing Digital", "ADS"];

const learningPath = ["UI/UX Design", "Front-end", "Back-end", "Full-stack"];

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-72px)] items-center bg-[linear-gradient(135deg,rgba(251,246,249,0.78),rgba(246,240,255,0.54),rgba(253,251,252,0.48))] dark:bg-[linear-gradient(135deg,rgba(35,35,52,0.62),rgba(28,25,48,0.52),rgba(16,16,33,0.42))] backdrop-blur-xl shadow-[inset_0_36px_80px_rgba(253,251,252,0.16),inset_0_-36px_80px_rgba(198,180,232,0.12)] dark:shadow-[inset_0_36px_90px_rgba(255,255,255,0.035),inset_0_-36px_90px_rgba(198,180,232,0.08)] py-[80px] overflow-hidden"
    >
      <div className="container mx-auto max-w-[1280px] px-4 md:px-[24px]">
        <div
          className="mx-auto mb-[56px] max-w-[760px] text-center"
          data-aos="fade-up"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0AEC8] dark:text-brand-pink">
            Sobre mim
          </p>
          <h2 className="font-lexend text-[32px] font-medium leading-tight text-text-primary dark:text-dark-text-primary md:text-[36px]">
            Design e c�digo, na mesma pessoa
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[18px] font-normal leading-relaxed text-text-secondary dark:text-[#c3c9da]">
            Seis anos transformando ideias em experi�ncia visual � agora tamb�m
            em c�digo.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-[48px] items-start">
          <div
            className="lg:col-span-3 space-y-4 text-base font-normal leading-relaxed text-text-secondary dark:text-[#919ab5]"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p>
              Ol�! Sou uma desenvolvedora de software, atualmente cursando
              An�lise e Desenvolvimento de Sistemas (ADS). Minha jornada com a
              programa��o � recente, mas a paix�o por transformar ideias em
              c�digo �{" "}
              <span className="font-semibold text-[#F0AEC8] dark:text-brand-pink">
                intensa
              </span>{" "}
              e{" "}
              <span className="font-semibold text-[#C6B4E8] dark:text-[#C6B4E8]">
                crescente
              </span>
              .
            </p>
            <p>
              Esta nova �rea � enriquecida por uma base de seis anos de
              experi�ncia profissional em{" "}
              <span className="font-semibold text-[#AECFE0] dark:text-[#AECFE0]">
                Design
              </span>{" "}
              e uma forma��o em{" "}
              <span className="font-semibold text-[#A9C8AC] dark:text-[#A9C8AC]">
                Marketing Digital
              </span>
              . Isso me permite criar solu��es que n�o apenas funcionam, mas que
              tamb�m oferecem uma experi�ncia de usu�rio excepcional e um apelo
              visual diferenciado. ??
            </p>
            <div
              className="mt-9 space-y-6 border-l border-[rgba(240,174,200,0.18)] pl-5 dark:border-[rgba(198,180,232,0.14)]"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              {[
                {
                  label: "Jornada",
                  items: journeyTimeline,
                  color: "from-brand-pink to-brand-purple",
                  text: "text-[#F0AEC8]",
                  darkText: "dark:text-brand-pink",
                },
                {
                  label: "Evolu��o",
                  items: learningPath,
                  color: "from-[#AECFE0] to-[#A9C8AC]",
                  text: "text-[#AECFE0]",
                  darkText: "dark:text-[#AECFE0]",
                },
              ].map((group) => (
                <div key={group.label} className="relative">
                  <span
                    className={`absolute -left-[25px] top-[5px] h-2.5 w-2.5 rounded-full bg-gradient-to-br ${group.color} shadow-[0_0_18px_rgba(240,174,200,0.45)]`}
                  />
                  <p
                    className={`mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] ${group.text} ${group.darkText}`}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {group.items.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-[14px] text-text-secondary dark:text-[#c3c9da]"
                      >
                        <span>{item}</span>
                        {index < group.items.length - 1 && (
                          <span
                            className={`h-px w-8 bg-gradient-to-r ${group.color} opacity-45`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {/* Cards de Skills */}
            {[
              {
                img: "code",
                title: "Programa��o",
                desc: "Desenvolvimento web com foco em front-end.",
              },
              {
                img: "art",
                title: "Design",
                desc: "Cria��o de interfaces e identidade visual.",
              },
              {
                img: "heartwhite",
                title: "Crescimento",
                desc: "Compromisso constante com o aprendizado.",
              },
              {
                img: "coffeewhite",
                title: "Caf� & C�digo",
                desc: "Combina��o perfeita para criar.",
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="group relative flex h-full flex-col gap-[12px] overflow-hidden rounded-[24px] border border-[rgba(198,180,232,0.28)] bg-[rgba(253,251,252,0.76)] p-[24px] shadow-[0_14px_36px_rgba(198,180,232,0.12),inset_0_1px_0_rgba(255,255,255,0.48)] backdrop-blur-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[rgba(240,174,200,0.42)] hover:shadow-[0_18px_44px_rgba(198,180,232,0.18)] dark:border-[rgba(198,180,232,0.1)] dark:bg-dark-card dark:shadow-sm dark:hover:border-[rgba(198,180,232,0.3)]"
                data-aos="fade-left"
                data-aos-delay={200 + idx * 100}
              >
                <span className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
                <span className="relative w-[48px] h-[48px] rounded-[16px] shrink-0 flex items-center justify-center bg-gradient-to-br from-brand-pink to-brand-purple shadow-[0_12px_28px_rgba(198,180,232,0.18)] transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={assetUrl(`imgs/${skill.img}-24x24.svg`)}
                    className="w-6 h-6"
                    alt={skill.title}
                  />
                </span>
                <div className="relative">
                  <h3 className="font-lexend text-[16px] font-medium text-text-primary dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
