// Shared by the support and privacy pages: frosted header, reading progress, contents highlight, reveals.
(function () {
  const $$ = (s) => [...document.querySelectorAll(s)];
  const header = document.querySelector('.top');
  const bar = document.querySelector('.progress');
  const links = $$('.toc a');
  const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  let ticking = false;

  function update() {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header && header.classList.toggle('scrolled', y > 8);
    bar && bar.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(4) : '0');
    if (targets.length) {
      let on = 0;
      targets.forEach((t, i) => { if (t.getBoundingClientRect().top < innerHeight * .3) on = i; });
      if (y >= max - 2) on = targets.length - 1;
      links.forEach((a, i) => a.classList.toggle('on', i === on));
    }
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();

  const io = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
})();
