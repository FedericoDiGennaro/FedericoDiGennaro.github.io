(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Fall back to system preference. */ }
  let theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (preference.matches ? 'dark' : 'light');

  function applyTheme() {
    root.dataset.theme = theme;
    const button = document.querySelector('.theme-switch');
    if (button) button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    const color = document.querySelector('meta[name="theme-color"]');
    if (color) color.content = theme === 'dark' ? '#20221f' : '#f6f3ec';
  }
  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-switch');
    if (!button) return;
    button.hidden = false;
    applyTheme();
    button.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      savedTheme = theme;
      try { localStorage.setItem('theme', theme); } catch (_) { /* The current page still switches theme. */ }
      applyTheme();
    });
  });

  preference.addEventListener('change', event => {
    if (savedTheme !== 'dark' && savedTheme !== 'light') {
      theme = event.matches ? 'dark' : 'light';
      applyTheme();
    }
  });
})();
