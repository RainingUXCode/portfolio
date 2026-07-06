export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,rgba(253,251,252,0.70),rgba(246,240,255,0.52),rgba(235,247,255,0.34))] dark:bg-[linear-gradient(135deg,rgba(16,16,33,0.64),rgba(24,22,39,0.58))] backdrop-blur-xl shadow-[inset_0_22px_46px_rgba(198,180,232,0.08)] py-[28px]">
      <div
        className="container mx-auto max-w-7xl px-4 text-center"
        data-aos="fade-up"
      >
        <div className="flex justify-center items-center gap-[8px]">
          <span className="w-[32px] h-[32px] bg-gradient-to-br from-brand-pink to-brand-purple rounded-[12px] flex items-center justify-center shadow-md">
            <img
              src="/imgs/code-16x16.svg"
              className="w-4.5 h-4.5"
              alt="Code"
            />
          </span>
          <span className="font-semibold text-[16px] text-text-primary dark:text-white">
            RainingUXCode
          </span>
        </div>
        <p className="italic my-3 text-[14px] text-text-secondary dark:text-[#919ab5]">
          "Código é poesia, design é arte e café é combustível"
        </p>
        <div className="h-px max-w-[320px] mx-auto my-4 bg-brand-pink opacity-50"></div>
        <div className="max-w-sm mx-auto">
          <p className="text-[13px] inline-flex items-center gap-1.5 text-text-secondary dark:text-[#919ab5]">
            Raínne Carvalho Lima © 2026 | Feito com{" "}
            <img
              src="/imgs/heartpink-16x16.svg"
              className="w-4 h-4"
              alt="Heart"
            />{" "}
            e muito ☕
          </p>
          <p className="text-[11.5px] mt-1 text-text-secondary dark:text-[#919ab5]">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
          <p className="text-[11.5px] mt-2 opacity-50 text-text-secondary dark:text-[#919ab5]">
            ( ◕‿◕ ) Obrigada por visitar meu cantinho da web!
          </p>
        </div>
      </div>
    </footer>
  );
}
