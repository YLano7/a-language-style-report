(() => {
  const progress = document.querySelector('.reading-progress span');
  const themeButton = document.querySelector('[data-action="theme"]');
  const printButton = document.querySelector('[data-action="print"]');
  const tocLinks = [...document.querySelectorAll('.toc a')];
  const sections = [...document.querySelectorAll('main .section[id]')];

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };

  const setTheme = (night) => {
    document.body.classList.toggle('night', night);
    themeButton.textContent = night ? '纸张模式' : '夜读模式';
    themeButton.setAttribute('aria-pressed', String(night));
    localStorage.setItem('a-report-theme', night ? 'night' : 'paper');
  };

  const savedTheme = localStorage.getItem('a-report-theme');
  setTheme(savedTheme === 'night');

  themeButton.addEventListener('click', () => setTheme(!document.body.classList.contains('night')));
  printButton.addEventListener('click', () => window.print());
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      tocLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
    }, { rootMargin: '-15% 0px -70% 0px', threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
  }
})();

