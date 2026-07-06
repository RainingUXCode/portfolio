import { useRef } from "react";
import { assetUrl } from "../lib/assets";

const projectsData = [
  {
    title: "Rick & Morty API App",
    desc: "Aplicação com Next.js (App Router) consumindo a Rick & Morty API, com deploy contínuo na Vercel.",
    media: "Next.js • React • TS",
    image: assetUrl("imgs/projects/rickmorty.png"),
    video: assetUrl("videos/rickmorty.mp4"),
    tag: "Destaque",
    tagVariant: "pink",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    primaryLabel: "GitHub",
    secondaryLabel: "Demo",
    primaryLink: "https://github.com/RainingUXCode/wsFrontend-Fabrica26.1",
    secondaryLink: "https://ws-frontend-fabrica26-1-seven.vercel.app",
  },
  {
    title: "Portal Escolar",
    desc: "Sistema com autenticação e controle de acesso, testado com PHPUnit (unitários) e Playwright (E2E).",
    media: "PHP • MySQL • Tests",
    image: assetUrl("imgs/projects/portal-escolar.png"),
    video: assetUrl("videos/portal.mp4"),
    tech: ["PHP", "MySQL", "Playwright", "PHPUnit"],
    primaryLabel: "GitHub",
    secondaryLabel: "Demo",
    primaryLink: "https://github.com/RainingUXCode/portal-escolar-web",
    secondaryLink: "https://colegioesperanca.infinityfreeapp.com",
  },
  {
    title: "IAvalia",
    desc: "Extensão universitária para a Secretaria de Educação da Paraíba. Código não publicado por confidencialidade.",
    media: "React • Figma • API Rest",
    image: assetUrl("imgs/projects/iavalia.jpeg"),
    tag: "Confidencial",
    tagVariant: "blue",
    tech: ["React", "Figma", "Scrum", "API Rest"],
    primaryLabel: "Privado",
    secondaryLabel: "Detalhes",
    primaryLink: "#",
    secondaryLink: "#",
    primaryDisabled: true,
  },
  {
    title: "Café Leblanc",
    desc: "Sistema em Java aplicando Programação Orientada a Objetos, com SRP explícito entre as classes.",
    media: "Java • POO",
    image: assetUrl("imgs/projects/cafe-leblanc.png"),
    video: assetUrl("videos/cafe-leblanc.mp4"),
    tech: ["Java", "POO"],
    primaryLabel: "GitHub",
    secondaryLabel: "Demo",
    primaryLink: "https://github.com/RainingUXCode/leblanc-cafe-poo",
    secondaryLink: "https://www.online-ide.com/Oy8EngzXLR",
  },
];

type Project = (typeof projectsData)[number];

const isPlaceholderLink = (link?: string) => !link || link === "#";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!project.video || !videoRef.current) return;

    document
      .querySelectorAll<HTMLVideoElement>("video[data-project-preview]")
      .forEach((video) => {
        if (video !== videoRef.current) {
          video.pause();
          video.currentTime = 0;
        }
      });

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => undefined);
  };

  const handleMouseLeave = () => {
    if (!project.video || !videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <article
      className="group relative flex h-full min-h-[392px] flex-col overflow-hidden rounded-[24px] border border-[rgba(198,180,232,0.28)] bg-[rgba(253,251,252,0.78)] shadow-[0_14px_38px_rgba(198,180,232,0.13),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[rgba(240,174,200,0.42)] hover:shadow-[0_18px_46px_rgba(198,180,232,0.20)] dark:border-[rgba(198,180,232,0.1)] dark:bg-dark-card dark:shadow-sm dark:hover:border-[rgba(198,180,232,0.3)]"
      data-aos="fade-up"
      data-aos-delay={120 + index * 70}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
      <div className="relative h-[156px] overflow-hidden bg-[linear-gradient(135deg,rgba(240,174,200,0.22),rgba(198,180,232,0.22))]">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
        />

        {project.video && (
          <>
            <video
              ref={videoRef}
              data-project-preview
              muted
              playsInline
              preload="metadata"
              loop
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
            >
              <source src={project.video} type="video/mp4" />
            </video>
            <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[rgba(16,16,33,0.42)] text-white shadow-[0_12px_30px_rgba(16,16,33,0.22)] backdrop-blur-md transition-all duration-300 group-hover:scale-95 group-hover:opacity-0">
              <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-white" />
            </span>
          </>
        )}

        {project.tag && (
          <span
            className={`absolute left-3 top-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-[0_8px_24px_rgba(16,16,33,0.14)] ${
              project.tagVariant === "blue"
                ? "bg-[linear-gradient(90deg,#AECFE0,#C6B4E8)]"
                : "bg-[linear-gradient(90deg,#F0AEC8,#C6B4E8)]"
            }`}
          >
            {project.tag}
          </span>
        )}

        <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(16,16,33,0.48))] px-5 pb-3 pt-10 text-center font-mono text-[12px] text-white/86">
          {project.media}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="font-lexend text-[18px] font-medium text-text-primary dark:text-white">
            {project.title}
          </h3>
          <p className="text-[13.5px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
            {project.desc}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-[10px] border border-[rgba(174,207,224,0.34)] bg-[rgba(174,207,224,0.20)] px-[9px] py-[3px] text-[11px] font-semibold text-[rgba(76,96,116,0.92)] dark:border-[rgba(174,207,224,0.18)] dark:bg-[rgba(174,207,224,0.16)] dark:text-[#b9c7d8]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <a
            href={
              project.primaryDisabled || isPlaceholderLink(project.primaryLink)
                ? undefined
                : project.primaryLink
            }
            target={
              project.primaryDisabled || isPlaceholderLink(project.primaryLink)
                ? undefined
                : "_blank"
            }
            rel={
              project.primaryDisabled || isPlaceholderLink(project.primaryLink)
                ? undefined
                : "noreferrer"
            }
            aria-disabled={
              project.primaryDisabled || isPlaceholderLink(project.primaryLink)
            }
            className={`inline-flex flex-1 items-center justify-center rounded-[10px] border border-[#F0AEC8] px-[16px] py-[10px] text-[14px] font-semibold text-[#F0AEC8] transition-colors dark:border-brand-pink dark:text-brand-pink ${
              project.primaryDisabled || isPlaceholderLink(project.primaryLink)
                ? "pointer-events-none cursor-not-allowed opacity-45"
                : "hover:bg-[rgba(240,174,200,0.16)]"
            }`}
          >
            {project.primaryLabel}
          </a>
          <a
            href={
              isPlaceholderLink(project.secondaryLink)
                ? undefined
                : project.secondaryLink
            }
            target={
              isPlaceholderLink(project.secondaryLink) ? undefined : "_blank"
            }
            rel={
              isPlaceholderLink(project.secondaryLink)
                ? undefined
                : "noreferrer"
            }
            aria-disabled={isPlaceholderLink(project.secondaryLink)}
            className={`inline-flex flex-1 items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-pink to-brand-purple px-[16px] py-[10px] text-[14px] font-semibold text-white transition-all duration-300 ${
              isPlaceholderLink(project.secondaryLink)
                ? "pointer-events-none cursor-not-allowed opacity-55"
                : "hover:-translate-y-[2px] hover:brightness-110"
            }`}
          >
            {project.secondaryLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[linear-gradient(135deg,rgba(235,247,255,0.50),rgba(253,251,252,0.44),rgba(246,240,255,0.42))] dark:bg-[linear-gradient(135deg,rgba(16,16,33,0.24),rgba(31,30,50,0.34),rgba(16,16,33,0.22))] backdrop-blur-md shadow-[inset_0_28px_70px_rgba(174,207,224,0.12),inset_0_-28px_70px_rgba(240,174,200,0.08)] dark:shadow-[inset_0_28px_80px_rgba(174,207,224,0.045),inset_0_-28px_80px_rgba(240,174,200,0.045)] py-[80px] overflow-hidden"
    >
      <div className="container mx-auto max-w-[1280px] px-4 md:px-[24px]">
        <div
          className="mx-auto mb-[56px] max-w-[760px] text-center"
          data-aos="fade-up"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0AEC8] dark:text-brand-pink">
            Projetos
          </p>
          <h2 className="font-lexend text-[32px] font-medium leading-tight text-text-primary dark:text-dark-text-primary md:text-[36px]">
            Alguns dos meus trabalhos
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[18px] font-normal leading-relaxed text-text-secondary dark:text-[#c3c9da]">
            Do front-end com React ao back-end testado — projetos reais, com
            propósito real.
          </p>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
