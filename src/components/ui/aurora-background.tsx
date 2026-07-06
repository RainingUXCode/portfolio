"use client";
import { cn } from "../../lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[calc(100vh-72px)] w-full items-center justify-start bg-brand-background dark:bg-dark-bg transition-colors duration-500",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            // As suas cores
            `[--aurora:repeating-linear-gradient(100deg,#F0AEC8_10%,#C6B4E8_15%,#AECFE0_20%,#F0AEC8_25%,#A9C8AC_30%)]`,

            // Camada de fundo (Agora com opacidade fixa para garantir visibilidade)
            `absolute -inset-[50px] opacity-40 dark:opacity-30`,

            // Animação e tamanho
            `[background-image:var(--aurora)]`,
            `[background-size:200%_200%]`,
            `animate-aurora`,

            // Desfoque que mantém as cores presentes
            `blur-[40px]`,

            // Degradê para suavizar as bordas
            showRadialGradient &&
              `[mask-image:radial-gradient(circle_at_center,black,transparent_80%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
