// ==============================
// 导航栏滚动效果
// ==============================
const navbar = document.getElementById('navbar');

function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ==============================
// Modal 通用逻辑
// ==============================
let activeModal = null;
let lastFocused = null;

function openModal(modal) {
  lastFocused = document.activeElement;
  activeModal = modal;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  if (!activeModal) return;
  const modal = activeModal;
  activeModal = null;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
  modal.dispatchEvent(new Event('modalclose'));

  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.modal').forEach(modal => {
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (!activeModal) return;

  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  // 焦点锁定在弹窗内
  if (e.key === 'Tab') {
    const focusable = activeModal.querySelectorAll('button, iframe, [href], [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// 卡片支持鼠标点击和键盘（Enter / Space）打开
function onActivate(el, label, handler) {
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.setAttribute('aria-label', `${label}: ${el.querySelector('h3').textContent}`);
  el.addEventListener('click', handler);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  });
}

// ==============================
// 视频 Modal
// ==============================
// 各页面只放自己需要的 Modal，所以先判断是否存在
const videoModal  = document.getElementById('modal');
const modalIframe = document.getElementById('modal-iframe');

if (videoModal) {
  document.querySelectorAll('.card[data-video]').forEach(card => {
    onActivate(card, 'Play', () => {
      modalIframe.src = card.dataset.video + '?autoplay=1&rel=0';
      modalIframe.title = card.querySelector('h3').textContent;
      openModal(videoModal);
    });
  });

  videoModal.addEventListener('modalclose', () => {
    modalIframe.src = 'about:blank';   // 停止播放
  });
}

// ==============================
// 图片 Modal
// ==============================
const imgModal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');

if (imgModal) {
  document.querySelectorAll('.art-card').forEach(card => {
    onActivate(card, 'View', () => {
      const img = card.querySelector('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      openModal(imgModal);
    });
  });

  imgModal.addEventListener('modalclose', () => {
    modalImg.removeAttribute('src');
  });
}

// ==============================
// 图片加载失败时显示占位背景，而不是破图图标
// ==============================
document.querySelectorAll('.card-thumb img').forEach(img => {
  const markBroken = () => img.closest('.card-thumb').classList.add('is-broken');
  if (img.complete && img.naturalWidth === 0) markBroken();
  img.addEventListener('error', markBroken);
});

// ==============================
// 滚动进入动画（Intersection Observer）
// ==============================
const cards = document.querySelectorAll('.card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card, i) => {
    card.style.setProperty('--reveal-delay', `${(i % 3) * 0.08}s`);
    card.classList.add('reveal');
    observer.observe(card);
  });
}

// ==============================
// Footer 年份自动更新
// ==============================
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
