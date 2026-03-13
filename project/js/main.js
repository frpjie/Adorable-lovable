async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(path);
  el.innerHTML = await res.text();
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (!btn || !mobileNav) return;
  btn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('site-header', '/project/components/header.html');
  await loadComponent('site-footer', '/project/components/footer.html');
  initMobileMenu();
});
