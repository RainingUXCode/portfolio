import { useState, type ChangeEvent, type FormEvent } from "react";
import { assetUrl } from "../lib/assets";

const infoCards = [
  {
    img: "heartwhite",
    color: "from-brand-pink to-brand-purple",
    title: "Pronta para novos desafios!",
    desc: "Sempre aberta a projetos criativos",
  },
  {
    img: "coffeewhite",
    color: "from-brand-green to-brand-blue",
    title: "Tempo de resposta",
    desc: "Geralmente respondo em 24h",
  },
  {
    img: "speech",
    color: "from-orange-300 to-brand-pink",
    title: "Idiomas",
    desc: "Português • Inglês • JavaScript",
  },
];

const socialCards = [
  {
    name: "GitHub",
    link: "https://github.com/RainingUXCode",
    icon: "githubwhite-32x32.svg",
    color: "from-gray-400 to-gray-700",
    borderHover: "hover:border-gray-400 dark:hover:border-gray-400",
    desc: "Confira meus códigos",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raínne-carvalho-lima-87923b236",
    icon: "linkedin-32x32.svg",
    color: "from-blue-300 to-blue-700",
    borderHover: "hover:border-blue-400 dark:hover:border-blue-400",
    desc: "Conecte-se comigo",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ray.carvalho",
    icon: "instagram.svg",
    color: "from-pink-400 to-purple-500",
    borderHover: "hover:border-pink-400 dark:hover:border-pink-400",
    desc: "Conecte-se comigo",
  },
  {
    name: "Behance",
    link: "https://www.behance.net/rainingdesign",
    icon: "behance.svg",
    color: "from-sky-300 to-sky-600",
    borderHover: "hover:border-sky-400 dark:hover:border-sky-400",
    desc: "Veja outros projetos",
  },
];

const cardSurfaceClass =
  "relative overflow-hidden rounded-[24px] border border-[rgba(198,180,232,0.28)] bg-[rgba(253,251,252,0.78)] shadow-[0_14px_36px_rgba(198,180,232,0.12),inset_0_1px_0_rgba(255,255,255,0.46)] backdrop-blur-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(198,180,232,0.18)] dark:border-[rgba(198,180,232,0.1)] dark:bg-dark-card dark:shadow-sm";

const fieldClass =
  "rounded-[14px] border border-[rgba(160,150,178,0.30)] bg-[#FDFBFC] px-4 py-3 text-[14px] text-text-primary shadow-none outline-none transition-colors placeholder:text-[rgba(98,105,126,0.62)] focus:border-[rgba(240,174,200,0.70)] dark:border-[rgba(198,180,232,0.12)] dark:bg-[rgba(16,16,33,0.72)] dark:text-white dark:placeholder:text-[#919ab5]/70";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Contato via Portfolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      [
        `Nome: ${formData.name}`,
        `E-mail: ${formData.email}`,
        "",
        "Mensagem:",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:rainne.carvalho@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-[linear-gradient(135deg,rgba(251,246,249,0.72),rgba(246,240,255,0.54),rgba(235,247,255,0.36))] dark:bg-[linear-gradient(135deg,rgba(35,35,52,0.62),rgba(34,28,52,0.52),rgba(16,16,33,0.44))] backdrop-blur-xl shadow-[inset_0_36px_80px_rgba(253,251,252,0.14),inset_0_-36px_80px_rgba(240,174,200,0.10)] dark:shadow-[inset_0_36px_90px_rgba(255,255,255,0.035),inset_0_-36px_90px_rgba(240,174,200,0.07)] py-[80px] overflow-hidden"
    >
      <div className="container mx-auto max-w-[1280px] px-4 md:px-[24px]">
        <div
          className="mx-auto mb-[56px] max-w-[760px] text-center"
          data-aos="fade-up"
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0AEC8] dark:text-brand-pink">
            Contato
          </p>
          <h2 className="font-lexend text-[32px] font-medium leading-tight text-text-primary dark:text-dark-text-primary md:text-[36px]">
            Vamos conversar!
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[18px] font-normal leading-relaxed text-text-secondary dark:text-[#c3c9da]">
            Adoraria saber sobre seu projeto ou vaga. Vamos criar algo incrível
            juntos?
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div
            className="flex h-full flex-col gap-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {infoCards.map((item) => (
              <div
                key={item.title}
                className={`group flex flex-1 items-center gap-4 p-4 hover:border-[rgba(240,174,200,0.42)] dark:hover:border-[rgba(198,180,232,0.3)] ${cardSurfaceClass}`}
              >
                <span
                  className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                />
                <span
                  className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br ${item.color} shadow-[0_12px_28px_rgba(198,180,232,0.18)] transition-transform duration-300 group-hover:scale-105`}
                >
                  <img
                    src={assetUrl(`imgs/${item.img}-24x24.svg`)}
                    className="h-6 w-6"
                    alt={item.title}
                  />
                </span>
                <div className="relative">
                  <h3 className="font-lexend text-[17px] font-medium text-text-primary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid h-full grid-cols-2 gap-6">
            {socialCards.map((social, i) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`group flex min-h-[174px] flex-col justify-center p-[24px] text-center ${cardSurfaceClass} ${social.borderHover}`}
                data-aos="fade-left"
                data-aos-delay={200 + i * 100}
              >
                <span
                  className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${social.color} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                />
                <span
                  className={`relative mx-auto mb-[12px] flex h-[64px] w-[64px] items-center justify-center rounded-[16px] bg-gradient-to-br ${social.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <img
                    src={assetUrl(`imgs/${social.icon}`)}
                    className="h-8 w-8"
                    alt={social.name}
                  />
                </span>
                <div className="relative">
                  <h3 className="font-lexend text-[18px] font-medium text-text-primary dark:text-white">
                    {social.name}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-text-secondary dark:text-[#919ab5]">
                    {social.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-[48px] w-full rounded-[24px] border border-[rgba(160,150,178,0.26)] bg-[rgba(253,251,252,0.86)] p-5 shadow-[0_18px_44px_rgba(198,180,232,0.16),inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-lg dark:border-[rgba(198,180,232,0.1)] dark:bg-dark-card dark:shadow-sm"
          data-aos="fade-up"
          data-aos-delay="260"
        >
          <h3 className="mb-4 text-center font-lexend text-[18px] font-medium text-text-primary dark:text-white">
            Envie uma mensagem
          </h3>

          <div className="grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-[13px] font-medium text-text-primary dark:text-white">
                  Nome
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="Seu nome"
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-[13px] font-medium text-text-primary dark:text-white">
                  E-mail
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                  placeholder="seu@email.com"
                />
              </label>
            </div>

            <label className="grid gap-1.5">
              <span className="text-[13px] font-medium text-text-primary dark:text-white">
                Mensagem
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${fieldClass} resize-none leading-relaxed`}
                placeholder="Escreva sua mensagem..."
              />
            </label>

            <div className="mt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex w-full max-w-[260px] items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-pink to-brand-purple px-[16px] py-[11px] font-lexend text-[14px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:brightness-110 sm:w-auto sm:min-w-[220px]"
              >
                Enviar por e-mail
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
