# Portfólio — Raínne Carvalho Lima

Aplicação web pessoal desenvolvida para apresentação profissional de trajetória, competências técnicas e projetos, voltada a processos seletivos para vagas de desenvolvimento Front-end e Full Stack.

[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-personal--use-lightgrey)](#licença)

**[Acessar aplicação em produção →](#)**

## Sumário

- [Visão geral](#visão-geral)
- [Stack técnica](#stack-técnica)
- [Arquitetura e estrutura de pastas](#arquitetura-e-estrutura-de-pastas)
- [Como executar o projeto](#como-executar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [Sistema de tema](#sistema-de-tema)
- [Deploy](#deploy)
- [Autora](#autora)

## Visão geral

O projeto é uma single-page application dividida em seções semânticas independentes, cada uma implementada como um componente isolado:

| Seção | Componente | Responsabilidade |
|---|---|---|
| Apresentação | `Hero` | Introdução, chamada para ação e indicação de disponibilidade |
| Perfil | `About` | Trajetória profissional e áreas de atuação |
| Stack | `Technologies` | Tecnologias em uso e em desenvolvimento |
| Portfólio | `Projects` | Projetos com link de repositório e/ou demonstração |
| Contato | `Contact` | Canais de contato e redes profissionais |
| Rodapé | `Footer` | Identificação e informações complementares |

## Stack técnica

**Core**
- React 19
- TypeScript
- Vite

**Estilização**
- Tailwind CSS v4
- Variáveis CSS customizadas (`color-mix()`) para theming claro/escuro

**Animação e interação**
- Framer Motion (`motion`)
- AOS (Animate On Scroll)

**Utilitários**
- `clsx` — composição condicional de classes
- `tailwind-merge` — resolução de conflitos de classes utilitárias

**Qualidade de código**
- ESLint
- typescript-eslint

## Arquitetura e estrutura de pastas

```
portfolio/
├── public/                 # Assets estáticos servidos diretamente (favicon, ícones)
├── src/
│   ├── components/         # Componentes de seção (Hero, About, Technologies, Projects, Contact, Footer)
│   ├── App.tsx              # Composição raiz das seções
│   ├── index.css             # Estilos globais, tokens de design e temas claro/escuro
│   ├── tailwind.config.js
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Como executar o projeto

**Requisitos:** Node.js 18 ou superior e npm.

```bash
# Clonar o repositório
git clone https://github.com/RainingUXCode/portfolio.git
cd portfolio

# Instalar dependências
npm install

# Executar em ambiente de desenvolvimento
npm run dev
```

A aplicação fica disponível em `http://localhost:5173` por padrão.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Compila TypeScript (`tsc -b`) e gera o build de produção |
| `npm run preview` | Serve localmente o build de produção para verificação |
| `npm run lint` | Executa a checagem de lint em todo o projeto |

## Sistema de tema

A paleta de cores segue a identidade visual **Verão Claro (Light Summer)** — tons frios e suaves (rosa, lavanda, azul acinzentado e verde sálvia). As cores-base são definidas como variáveis CSS e combinadas via `color-mix()`, o que permite derivar automaticamente todos os estados visuais (hover, bordas, superfícies) tanto no modo claro quanto no escuro, sem duplicar a paleta manualmente.

## Deploy

A aplicação é publicada via **Vercel**. O build de produção é gerado a partir do script `build`, descrito acima.

## Autora

**Raínne Carvalho Lima**
Desenvolvedora de Software · Análise e Desenvolvimento de Sistemas (UNIPÊ)

- GitHub: [github.com/RainingUXCode](https://github.com/RainingUXCode)
- LinkedIn: [linkedin.com/in/raínne-carvalho-lima-87923b236](https://linkedin.com/in/ra%C3%ADnne-carvalho-lima-87923b236)
- Behance: [behance.net/rainingdesign](https://behance.net/rainingdesign)
