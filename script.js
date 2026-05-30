// ==============================
// 导航栏滚动效果
// ==============================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==============================
// 视频 Modal
// ==============================
const videoModal    = document.getElementById('modal');
const modalIframe   = document.getElementById('modal-iframe');
const videoClose    = videoModal.querySelector('.modal-close');
const videoBackdrop = videoModal.querySelector('.modal-backdrop');

// 给所有音乐 card 绑定点击事件
document.querySelectorAll('.card[data-video]').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.video + '?autoplay=1&rel=0';
    modalIframe.src = src;
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeVideoModal() {
  videoModal.classList.add('hidden');
  modalIframe.src = '';              // 停止播放
  document.body.style.overflow = '';
}

videoClose.addEventListener('click', closeVideoModal);
videoBackdrop.addEventListener('click', closeVideoModal);

// ==============================
// 图片 Modal
// ==============================
const imgModal    = document.getElementById('img-modal');
const modalImg    = document.getElementById('modal-img');
const imgClose    = imgModal.querySelector('.modal-close');
const imgBackdrop = imgModal.querySelector('.modal-backdrop');

document.querySelectorAll('.art-card').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.querySelector('img').src;
    const alt = card.querySelector('img').alt;
    modalImg.src = src;
    modalImg.alt = alt;
    imgModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

function closeImgModal() {
  imgModal.classList.add('hidden');
  modalImg.src = '';
  document.body.style.overflow = '';
}

imgClose.addEventListener('click', closeImgModal);
imgBackdrop.addEventListener('click', closeImgModal);

// ==============================
// ESC 键关闭所有 Modal
// ==============================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
    closeImgModal();
  }
});

// ==============================
// 滚动进入动画（Intersection Observer）
// ==============================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `opacity 0.5s ease ${i * 0.08}s, 
                            transform 0.5s ease ${i * 0.08}s,
                            border-color 0.3s ease,
                            translateY 0.3s ease`;
  observer.observe(card);
});