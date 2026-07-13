// Mobile / PC toggle
const toggleBtns = document.querySelectorAll('.toggle-btn');
const panels = { mobile: document.getElementById('panel-mobile'), pc: document.getElementById('panel-pc') };

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    const target = btn.dataset.target;
    Object.keys(panels).forEach(key => {
      panels[key].style.display = key === target ? '' : 'none';
    });
    resetReadout();
  });
});

// Click-flow readout
const readout = document.getElementById('clickReadout');
const cfText = readout.querySelector('.cf-text');
const defaultText = 'Tap any highlighted element above to preview what happens next.';

function resetReadout(){
  cfText.textContent = defaultText;
}

document.querySelectorAll('.hotspot').forEach(el => {
  el.addEventListener('click', () => {
    const tip = el.dataset.tip;
    if (tip){
      cfText.textContent = '→ ' + tip;
      readout.scrollIntoView({ behavior:'smooth', block:'nearest' });
    }
  });
});

// Simple scroll-reveal for sections
const revealTargets = document.querySelectorAll('.section-inner');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});

