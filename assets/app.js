(function () {
  var button = document.querySelector('[data-theme-toggle]');
  var root = document.documentElement;
  var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function applyTheme(nextTheme) {
    root.setAttribute('data-theme', nextTheme);
    if (button) {
      button.setAttribute(
        'aria-label',
        nextTheme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'
      );
      button.innerHTML =
        nextTheme === 'dark'
          ? '<span aria-hidden="true">&#9728;</span>'
          : '<span aria-hidden="true">&#9680;</span>';
    }
  }

  applyTheme(theme);

  if (button) {
    button.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
    });
  }
})();
