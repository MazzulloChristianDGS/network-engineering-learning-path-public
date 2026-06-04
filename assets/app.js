(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const yearTarget = document.querySelector("[data-current-year]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  function iconSun() {
    return `
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M4.93 4.93l1.41 1.41"></path>
        <path d="M17.66 17.66l1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="M6.34 17.66l-1.41 1.41"></path>
        <path d="M19.07 4.93l-1.41 1.41"></path>
      </svg>
    `;
  }

  function iconMoon() {
    return `
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }

  function applyTheme(theme) {
    currentTheme = theme;
    root.setAttribute("data-theme", theme);
    if (toggle) {
      const nextTheme = theme === "dark" ? "light" : "dark";
      toggle.setAttribute("aria-label", `Passa al tema ${nextTheme}`);
      toggle.setAttribute("title", `Passa al tema ${nextTheme}`);
      toggle.innerHTML = theme === "dark" ? iconSun() : iconMoon();
    }
  }

  function markCurrentNav() {
    if (!navLinks.length) return;
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      const normalized = href.split("/").pop();
      if (normalized === currentPath || (currentPath === "" && normalized === "index.html")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  applyTheme(currentTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  markCurrentNav();
})();
