const themeButton = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  themeLabel.textContent = nextTheme === 'light' ? 'Light' : 'Dark';
}
applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme.matches ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
  savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(savedTheme);
  try { localStorage.setItem('portfolio-theme', savedTheme); } catch {}
});
systemTheme.addEventListener('change', event => {
  if (!savedTheme) applyTheme(event.matches ? 'light' : 'dark');
});
