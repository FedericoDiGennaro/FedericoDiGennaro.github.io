(() => {
  const root = document.documentElement;
  let savedTheme;
  try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Keep the default dark theme. */ }
  let theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark';

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

})();
