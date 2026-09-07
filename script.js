// =========================================================
// 0. 전역 버터 스무스 스크롤 엔진 (Butter-Smooth Inertia Momentum Scroll)
// =========================================================
(function initGlobalSmoothScroll() {
  // 터치 기반 모바일 기기는 시스템 기본 고유 터치 스크롤 보존
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  let currentY = window.scrollY;
  let targetY = window.scrollY;
  let isRunning = false;
  const ease = 0.055; // 더 완만하고 느긋하게 감속되는 슬로우 모션 관성 계수

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function getMaxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function render() {
    const diff = targetY - currentY;

    if (Math.abs(diff) > 0.4) {
      currentY = lerp(currentY, targetY, ease);
      window.scrollTo(0, currentY);
      requestAnimationFrame(render);
    } else {
      currentY = targetY;
      window.scrollTo(0, currentY);
      isRunning = false;
    }
  }

  function onWheel(e) {
    // Ctrl 키 조합(브라우저 확대/축소) 또는 가로 스크롤 우선인 경우 네이티브 동작 유지
    if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    e.preventDefault();

    let delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 28; // Firefox Line mode
    else if (e.deltaMode === 2) delta *= window.innerHeight * 0.6; // Page mode

    // 휠 관성 누적: 이동량을 기존 대비 대폭 줄여 느리고 차분한 스크롤 속도 부여
    const maxScroll = getMaxScroll();
    targetY = Math.max(0, Math.min(maxScroll, targetY + delta * 0.58));

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  }

  // 브라우저 스크롤바 직접 드래그 또는 외부 스크롤 시 위치 동기화
  window.addEventListener('scroll', () => {
    if (!isRunning) {
      currentY = window.scrollY;
      targetY = window.scrollY;
    }
  }, { passive: true });

  window.addEventListener('wheel', onWheel, { passive: false });

  // 앵커 링크(#) 부드러운 감속 이동 연동
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') return;

    const targetElement = document.querySelector(hash);
    if (!targetElement) return;

    e.preventDefault();
    const rect = targetElement.getBoundingClientRect();
    const maxScroll = getMaxScroll();
    targetY = Math.max(0, Math.min(maxScroll, window.scrollY + rect.top));

    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  });

  // 키보드 방향키 및 PageUp/Down 지원 (느린 템포에 맞춰 보정)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    let delta = 0;
    const pageStep = window.innerHeight * 0.6;

    switch (e.key) {
      case 'ArrowDown':
        delta = 70;
        break;
      case 'ArrowUp':
        delta = -70;
        break;
      case 'PageDown':
      case ' ':
        delta = pageStep;
        break;
      case 'PageUp':
        delta = -pageStep;
        break;
      case 'Home':
        targetY = 0;
        break;
      case 'End':
        targetY = getMaxScroll();
        break;
      default:
        return;
    }

    if (delta !== 0) {
      const maxScroll = getMaxScroll();
      targetY = Math.max(0, Math.min(maxScroll, targetY + delta));
    }

    e.preventDefault();
    if (!isRunning) {
      isRunning = true;
      requestAnimationFrame(render);
    }
  });

  // 창 리사이즈 시 스크롤 한계 보정
  window.addEventListener('resize', () => {
    targetY = Math.max(0, Math.min(getMaxScroll(), targetY));
    currentY = window.scrollY;
  }, { passive: true });
})();

// 스크롤 방향 감지 스마트 헤더 (내리면 자연스럽게 숨겨지고, 올리면 다시 나타남)
(function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const isHomePage = document.body.classList.contains('home-body');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = Math.max(0, window.scrollY);
    const scrollDelta = currentScrollY - lastScrollY;

    // 홈 화면인 경우: 중앙 로고가 네비게이션 바로 이동 완료할 때까지는 헤더 숨김 방지
    const hideThreshold = isHomePage ? Math.min(Math.max(window.innerHeight * 0.55, 360), 540) : 60;

    // 최상단 근처 또는 애니메이션 구간에서는 항상 노출
    if (currentScrollY <= (isHomePage ? hideThreshold : 40)) {
      header.classList.remove('header-hidden');
    } 
    // 아래로 스크롤 시 (임계값 5px 초과 & threshold 초과): 숨김
    else if (scrollDelta > 5 && currentScrollY > hideThreshold) {
      header.classList.add('header-hidden');
    } 
    // 위로 스크롤 시 (임계값 -5px 미만): 다시 나타남
    else if (scrollDelta < -5) {
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

// 홈 화면 전용: 화면 중앙 대형 로고 -> 스크롤 시 네비게이션 좌상단으로 축소 도킹 인터랙션
(function initHomeHeroLogoScroll() {
  const body = document.body;
  if (!body.classList.contains('home-body')) return;

  const logoContainer = document.querySelector('.header-logo');
  const logoLink = document.querySelector('.header-logo a');
  const logoImg = document.querySelector('.header-logo-img');
  if (!logoContainer || !logoLink || !logoImg) return;

  let ticking = false;

  // 완만하고 부드러운 감속 가속 이징 (easeInOutCubic)
  function easeInOutCubic(p) {
    return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
  }

  function updateLogo() {
    const scrollY = Math.max(0, window.scrollY);
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // 애니메이션이 완료되는 스크롤 거리 (화면 높이의 55%, 360px ~ 540px)
    const animDistance = Math.min(Math.max(vh * 0.55, 360), 540);
    const rawProgress = Math.min(1, Math.max(0, scrollY / animDistance));

    // 0: 최상단(중앙 거대 로고), 1: 네비게이션 바 원래 위치 안착
    const progress = easeInOutCubic(rawProgress);
    const t = 1 - progress; // 1 -> 0

    if (t <= 0.0001) {
      // 완전히 네비게이션 바로 안착된 상태
      logoLink.style.transform = '';
      logoImg.style.filter = 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))';
      ticking = false;
      return;
    }

    // 네비게이션 바 로고의 기본 좌표 및 크기 측정
    // .header-logo(부모)는 transform되지 않으므로 안정적인 기준 좌표를 제공
    const isMobile = vw <= 768;
    const baseHeight = isMobile ? 20 : 26;
    const baseWidth = baseHeight * (717 / 141); // 원본 가로세로 비율 약 5.085

    const parentRect = logoContainer.getBoundingClientRect();
    const baseCenterX = parentRect.left + baseWidth / 2;
    const baseCenterY = parentRect.top + parentRect.height / 2;

    // 홈 화면 전체 뷰포트의 정중앙 좌표
    const targetCenterX = vw / 2;
    const targetCenterY = vh / 2;

    // 중앙에 크게 위치할 때의 목표 너비 및 배율
    const targetWidth = isMobile
      ? Math.min(vw * 0.85, 420)
      : Math.min(vw * 0.70, 640);
    const maxScale = Math.max(1, targetWidth / baseWidth);

    // 스크롤 진행도에 따른 현재 스케일 및 이동 좌표 보간
    const currentScale = 1 + (maxScale - 1) * t;
    const currentDeltaX = (targetCenterX - baseCenterX) * t;
    const currentDeltaY = (targetCenterY - baseCenterY) * t;

    // 그림자 깊이 보간 (중앙에 있을 때 더 풍부한 그림자)
    const shadowY = 2 + 18 * t;
    const shadowBlur = 10 + 32 * t;
    const shadowAlpha = 0.5 + 0.35 * t;

    logoLink.style.transform = `translate3d(${currentDeltaX.toFixed(2)}px, ${currentDeltaY.toFixed(2)}px, 0) scale(${currentScale.toFixed(4)})`;
    logoImg.style.filter = `drop-shadow(0 ${shadowY.toFixed(1)}px ${shadowBlur.toFixed(1)}px rgba(0, 0, 0, ${shadowAlpha.toFixed(2)}))`;

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateLogo);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateLogo();
  }, { passive: true });

  // 초기 로드 시 즉각 실행
  updateLogo();
  if (logoImg.complete) {
    updateLogo();
  } else {
    logoImg.addEventListener('load', updateLogo, { once: true });
  }
})();

// 불씨 느낌의 순수 그라디언트 커서 & 부드러운 잔상 효과
(function initEmberCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  // 1. 메인 부드러운 불씨 빛
  const glow = document.createElement('div');
  glow.className = 'ember-gradient-cursor';

  // 2. 뒤따라오는 넓고 투명한 잔상 오라
  const trail = document.createElement('div');
  trail.className = 'ember-cursor-trail';

  document.body.appendChild(trail);
  document.body.appendChild(glow);
  document.documentElement.classList.add('custom-cursor-active');

  let mouseX = -200;
  let mouseY = -200;

  // 메인 빛 좌표
  let glowX = -200;
  let glowY = -200;

  // 넓은 잔상 좌표 (더 긴 지연과 부드러운 관성)
  let trailX = -200;
  let trailY = -200;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    // 메인 불빛 (보간 0.3)
    glowX += (mouseX - glowX) * 0.3;
    glowY += (mouseY - glowY) * 0.3;
    glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

    // 잔상 오라 (더 느리고 부드럽게 따라와서 잔상이 넓게 늘어짐, 보간 0.12)
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const interactives = 'a, button, input, [role="button"], .project-card, .masonry-project-item, .detail-project-card, .fullwidth-image-item, .gateway-card, .archive-year-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      glow.classList.add('hovered');
      trail.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      glow.classList.remove('hovered');
      trail.classList.remove('hovered');
    }
  });

  window.addEventListener('mousedown', () => {
    glow.classList.add('clicked');
    trail.classList.add('clicked');
  });

  window.addEventListener('mouseup', () => {
    glow.classList.remove('clicked');
    trail.classList.remove('clicked');
  });
})();

// =========================================================
// 프로젝트 페이지: 화면 중앙 고정 타이포 스크롤 연동
// - 스크롤에 따라 현재 화면 중앙에 위치한 프로젝트 작품명/작가명으로 자동 변경
// - 이미지 밝기 감지: 어두우면 전체 순백색(#ffffff), 밝으면 전체 칠흑블랙(#000000) 투명도 100% 적용
// =========================================================
(function initFixedCenterCaption() {
  if (!document.body.classList.contains('projects-body')) return;

  const fixedCaption = document.getElementById('project-fixed-caption');
  if (!fixedCaption) return;

  const captionInner = fixedCaption.querySelector('.fixed-caption-inner');
  const titleEl = document.getElementById('fixed-caption-title');
  const artistEl = document.getElementById('fixed-caption-artist');
  const badgeEl = document.getElementById('fixed-caption-badge');
  const items = Array.from(document.querySelectorAll('.masonry-project-item'));
  const footer = document.getElementById('site-footer');

  if (items.length === 0) return;

  let currentTitle = '';
  let currentTheme = '';
  let isTicking = false;

  // 이미지 밝기(루미넌스) 판별 함수 (32x32 캔버스 샘플링 + 파일명 fallback)
  function detectImageBrightness(img) {
    if (!img) return 'light';
    if (img._cachedTheme) return img._cachedTheme;

    const src = (img.src || '').toLowerCase();
    // 파일명 기반 사전 분석: sample-01, sample-02, sample-06은 밝은 배경
    const isBrightByName = src.includes('sample-01') || src.includes('sample-02') || src.includes('sample-06');

    if (!img.complete || img.naturalWidth === 0) {
      return isBrightByName ? 'dark' : 'light';
    }

    try {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 32, 32);
      const data = ctx.getImageData(0, 0, 32, 32).data;

      let totalLuminance = 0;
      const pixelCount = data.length / 4;
      for (let i = 0; i < data.length; i += 4) {
        totalLuminance += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      }
      const avg = totalLuminance / pixelCount;
      // 평균 밝기 128 이상이면 밝은 배경 -> 텍스트는 검은색(theme-dark), 미만이면 흰색(theme-light)
      const theme = avg >= 125 ? 'dark' : 'light';
      img._cachedTheme = theme;
      return theme;
    } catch (e) {
      const theme = isBrightByName ? 'dark' : 'light';
      img._cachedTheme = theme;
      return theme;
    }
  }

  function updateCaption() {
    const centerY = window.innerHeight / 2;

    // 푸터가 화면 중앙에 도달하면 타이포 박스 자연스럽게 숨김
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      if (footerRect.top <= centerY + 60) {
        fixedCaption.classList.add('caption-hidden');
        isTicking = false;
        return;
      }
    }

    // 현재 화면 중앙선(y = window.innerHeight / 2)에 걸쳐있는 프로젝트 찾기
    let activeItem = null;
    for (let i = 0; i < items.length; i++) {
      const rect = items[i].getBoundingClientRect();
      if (rect.top <= centerY && rect.bottom >= centerY) {
        activeItem = items[i];
        break;
      }
    }

    // 경계 지점 대비: 가장 중앙에 가까운 아이템 대체 탐색
    if (!activeItem) {
      let minDistance = Infinity;
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(itemCenter - centerY);
        if (dist < minDistance) {
          minDistance = dist;
          activeItem = item;
        }
      });
    }

    if (activeItem) {
      fixedCaption.classList.remove('caption-hidden');

      const title = activeItem.querySelector('.overlay-work-title')?.textContent?.trim() || '';
      const artist = activeItem.querySelector('.overlay-artist-name')?.textContent?.trim() || '';
      const isTeam = !!activeItem.querySelector('.project-team-badge');

      // 이미지 밝기 감지하여 타이포 전체 색상(화이트/블랙 100% 투명도) 적용
      const img = activeItem.querySelector('img');
      const theme = detectImageBrightness(img);

      if (theme !== currentTheme) {
        currentTheme = theme;
        if (theme === 'dark') {
          // 밝은 배경 -> 글자 전체 칠흑 블랙(#000000)
          fixedCaption.classList.remove('theme-light');
          fixedCaption.classList.add('theme-dark');
        } else {
          // 어두운 배경 -> 글자 전체 순백색(#ffffff)
          fixedCaption.classList.remove('theme-dark');
          fixedCaption.classList.add('theme-light');
        }
      }

      if (title && title !== currentTitle) {
        currentTitle = title;

        // 애니메이션 및 지연 없이 즉각적으로 변경
        if (titleEl) titleEl.textContent = title;
        if (artistEl) artistEl.textContent = artist;
        if (badgeEl) badgeEl.style.display = isTeam ? 'inline-block' : 'none';
      }
    }

    isTicking = false;
  }

  function onScroll() {
    if (!isTicking) {
      window.requestAnimationFrame(updateCaption);
      isTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateCaption(); // 초기 로드 시 첫 번째 작품으로 셋업
})();

