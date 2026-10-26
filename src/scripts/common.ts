// Behaviour shared by every page: WhatsApp click counting, scroll reveals and the phone
// WhatsApp bar.

// Count WhatsApp clicks (unit + button + language) via the Worker; sendBeacon survives the
// navigation to wa.me. Nothing personal is sent.
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[data-wa]');
  if (!a) return;
  const [unit, place] = a.dataset.wa!.split(':');
  navigator.sendBeacon?.('/api/wa', JSON.stringify({ unit, place, lang: document.documentElement.lang }));
});

// Scroll reveals, once each: the pixel T assembles, unit photos wipe in from the bottom.
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
}, { rootMargin: '0px 0px -12% 0px' });
document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach((el) => reveal.observe(el));

// Phone WhatsApp bar: hidden over the hero, the service picker, the contact block and the
// footer, which carry their own WhatsApp links.
const dock = document.querySelector<HTMLElement>('[data-dock]');
if (dock) {
  const seen = new Set<Element>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) e.isIntersecting ? seen.add(e.target) : seen.delete(e.target);
    dock.classList.toggle('on', seen.size === 0);
  });
  document.querySelectorAll('.hero, #layanan, #kontak, footer').forEach((el) => io.observe(el));
}
