// The accent re-tints the whole workspace, remembered here.
const root = document.documentElement;
const accent = store.get('fernly:accent', 'forest');

$('[data-accents]', view).addEventListener('change', (e) => {
  const v = e.target.value;
  if (v === 'forest') delete root.dataset.accent;
  else root.dataset.accent = v;
  store.set('fernly:accent', v);
  gsap.fromTo(e.target.nextElementSibling,
    { scale: .6, rotation: -20 },
    { scale: 1, rotation: 0, duration: .6, ease: 'back.out(2.5)' });
  toast(`Accent set to ${e.target.parentElement.textContent.trim()}`);
});
