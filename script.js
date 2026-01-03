document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800, // Duração da animação em milissegundos
    once: true, // A animação acontece apenas uma vez
  });

  // --- LÓGICA DO MODO ESCURO (THEME TOGGLE) ---
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeIconLight = document.getElementById("theme-icon-light");
  const themeIconDark = document.getElementById("theme-icon-dark");

  // Função para aplicar o tema e atualizar o ícone
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      if (themeIconDark) themeIconDark.classList.add("is-visible");
      if (themeIconLight) themeIconLight.classList.remove("is-visible");
    } else {
      document.documentElement.classList.remove("dark");
      if (themeIconLight) themeIconLight.classList.add("is-visible");
      if (themeIconDark) themeIconDark.classList.remove("is-visible");
    }
  };

  // Verifica o tema salvo no localStorage ou a preferência do sistema
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  // Adiciona o evento de clique ao botão de toggle
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      applyTheme(isDark);
    });
  }

  // --- LÓGICA DO CARROSSEL DE PROJETOS ---
  const slider = document.getElementById("slider");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  if (slider && prevButton && nextButton) {
    let originalSlides = Array.from(slider.children);
    let isTransitioning = false;
    let visibleSlides = 3;

    const updateVisibleSlides = () => {
      if (window.innerWidth < 768) {
        visibleSlides = 1;
      } else if (window.innerWidth < 1024) {
        visibleSlides = 2;
      } else {
        visibleSlides = 3;
      }
      setupCarousel();
    };

    const setupCarousel = () => {
      if (originalSlides.length === 0) return;
      const slidesToCloneEnd = originalSlides.slice(0, visibleSlides);
      const slidesToCloneStart = originalSlides.slice(
        originalSlides.length - visibleSlides
      );

      slider.innerHTML = "";
      slidesToCloneStart.forEach((slide) =>
        slider.appendChild(slide.cloneNode(true))
      );
      originalSlides.forEach((slide) =>
        slider.appendChild(slide.cloneNode(true))
      );
      slidesToCloneEnd.forEach((slide) =>
        slider.appendChild(slide.cloneNode(true))
      );

      currentIndex = visibleSlides;
      updateSlider(false);
    };

    let currentIndex;

    const updateSlider = (withTransition = true) => {
      if (slider.children.length === 0) return;
      slider.style.transition = withTransition
        ? "transform 0.5s ease-in-out"
        : "none";
      const slideWidth = slider.children[0].offsetWidth;
      const offset = -currentIndex * slideWidth;
      slider.style.transform = `translateX(${offset}px)`;
    };

    const handlePrev = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      updateSlider();
    };

    const handleNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      updateSlider();
    };

    slider.addEventListener("transitionend", () => {
      isTransitioning = false;
      if (currentIndex >= originalSlides.length + visibleSlides) {
        currentIndex = visibleSlides;
        updateSlider(false);
      }
      if (currentIndex < visibleSlides) {
        currentIndex = originalSlides.length + visibleSlides - 1;
        if (currentIndex < originalSlides.length) {
          currentIndex = originalSlides.length + currentIndex;
        }
        updateSlider(false);
      }
    });

    prevButton.addEventListener("click", handlePrev);
    nextButton.addEventListener("click", handleNext);
    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();
  }

  // --- LÓGICA DO MENU MOBILE ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenuCloseButton = document.getElementById(
    "mobile-menu-close-button"
  );
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const openMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      setTimeout(() => mobileMenu.classList.add("is-open"), 10);
    }
  };

  const closeMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("is-open");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }, 300);
    }
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      if (mobileMenu && mobileMenu.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobileMenuCloseButton) {
    mobileMenuCloseButton.addEventListener("click", closeMenu);
  }

  // Adiciona a funcionalidade de ROLAGEM SUAVE e FECHAR aos links de navegação
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // 1. Previne o salto instantâneo padrão do link
      event.preventDefault();

      // 2. Fecha o menu mobile
      closeMenu();

      // 3. Pega o ID da seção (ex: "#about") a partir do link clicado
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // 4. Se a seção existir, rola suavemente até ela
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // 100ms de atraso
      }
    });
  });

  const themeToggleButtonMobile = document.getElementById(
    "theme-toggle-mobile"
  );
  if (themeToggleButton && themeToggleButtonMobile) {
    themeToggleButtonMobile.innerHTML = themeToggleButton.innerHTML;
    themeToggleButtonMobile.addEventListener("click", () => {
      themeToggleButton.click();
    });
  }
});
