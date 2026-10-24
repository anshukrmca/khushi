/**
 * FOR MY KHUSHI ♡ — INTERACTIVE JAVASCRIPT MASTER
 * Matches Reference Mockup with Video Reel, Moments Filter, and Anshu's Heartfelt Letter
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA STATE (WITH ANSHU'S HEARTFELT NOTE FOR KHUSHI)
  // ==========================================================================

  const DEFAULT_DATA = {
    herName: 'Khushi',
    authorName: '— Tumhara Anshu 💌',
    letterContent: `Pata nahi main apne dil ki baat tumhe kitni achhe se samjha paunga, lekin aaj main tumse kuch kehna chahta hoon, bilkul dil se.

Mujhe pata hai ki sirf “I love you” keh dene se sab kuch theek nahi ho jaata. Relationship mein pyaar ke saath trust, understanding, respect aur efforts bhi zaroori hote hain. Agar meri kisi baat ya mere kisi action se tumhe hurt hua hai, toh mujhe sach mein afsos hai. Main tumhari feelings ko samajhna chahta hoon, na ki unhe galat prove karna.

Khushi, tum mere liye sirf ek person nahi ho jisse main pyaar karta hoon. Tumhare saath judi chhoti-chhoti baatein, tumhari smile, humari conversations aur humare moments mere liye bahut special hain. ❤️

Main yeh nahi kehta ki humare beech kabhi problems nahi aayengi, ya main hamesha perfect rahunga. Lekin main itna zaroor chahta hoon ki agar tumhare dil mein ab bhi humare rishte ke liye thodi si bhi jagah hai, toh hum ek baar phir se ek-dusre ko samajhne ki koshish karein.

Main sirf tumhe wapas paane ke liye promises nahi karna chahta. Main apne actions se dikhana chahta hoon ki main kahan better ho sakta hoon aur humare relationship ko kaise aur healthy bana sakta hoon.

Main tumse ek aur chance maang raha hoon, koi majboori nahi bana raha. Main chahta hoon ki agar hum dobara shuru karein, toh woh tumhari khushi, tumhari marzi aur hum dono ke trust ke saath ho.

Tumhe agar time chahiye, toh main uski respect karunga. Main bas chahta tha ki tum ek baar mere dil ki baat suno. 🥺💗

I still choose you, Khushi. Isliye nahi ki humara past perfect tha, balki isliye ki mere dil mein aaj bhi humare future ko behtar banane ki umeed hai.

Agar tum bhi chaho, toh kya hum ek baar phir se, dheere-dheere, ek nayi understanding ke saath shuru kar sakte hain?

Hamesha tumhari khushi ki dua karne wala. ❤️`,
    reasons: [
      {
        icon: '🌸',
        title: 'You Care • तेरी बेपनाह परवाह',
        desc: 'The way you care about me, our dreams, and all the little details in life means everything. Your pure heart makes you completely irreplaceable.',
        img: 'assets/images/image-1.png',
        tag: '#MyFavoriteCare ♡'
      },
      {
        icon: '💛',
        title: 'Your Smile • तेरी खिली हुई धूप',
        desc: 'The genuine warmth in your smile lights up even the darkest days. Seeing you truly happy is my favorite reward in the entire universe.',
        img: 'assets/images/image-3.png',
        tag: '#PureSunshine ♡'
      },
      {
        icon: '☕',
        title: 'Comfort in Silence • रूह का सुकून',
        desc: 'We do not even need words. Just sitting right beside you, holding your hand, feels richer than anything else in the world.',
        img: 'assets/images/image-2.png',
        tag: '#MyPeacefulPlace ♡'
      },
      {
        icon: '🌅',
        title: 'Shared Horizons • हर सफर में साथ',
        desc: 'Looking towards the future, knowing you are standing by my side, turns every dream into an exciting adventure.',
        img: 'assets/images/image-4.png',
        tag: '#GoldenHorizon ♡'
      },
      {
        icon: '🎶',
        title: 'Your Sweet Laugh • कानों में मिसरी',
        desc: 'That cute, uncontrolled giggle you do when something is hilarious is the absolute sweetest melody on earth.',
        img: 'assets/images/image-1.png',
        tag: '#SweetestSound ♡'
      },
      {
        icon: '✨',
        title: 'How You Believe In Me • मेरी हिम्मत',
        desc: 'When self-doubt creeps in, the gentle faith you have in me gives me the courage to conquer whatever lies ahead.',
        img: 'assets/images/image-5.png',
        tag: '#MyGreatestStrength ♡'
      },
      {
        icon: '💫',
        title: 'Everyday Magic • जादुई लम्हे',
        desc: 'A simple car ride, sharing snacks, or walking under the evening breeze—everything turns memorable with you.',
        img: 'assets/images/image-6.png',
        tag: '#MagicInTheSimple ♡'
      },
      {
        icon: '🧸',
        title: 'Adorable Quirks • तेरी नटखट अदाएं',
        desc: 'The cute faces you make, your little expressions, and the funny ways you show excitement are so uniquely you.',
        img: 'assets/images/image-3.png',
        tag: '#EndlesslyCute ♡'
      },
      {
        icon: '🌙',
        title: 'My Safe Haven • महफूज ठिकाना',
        desc: 'No matter how chaotic the outside world gets, with you I feel deeply understood, safe, and loved beyond measure.',
        img: 'assets/images/image-2.png',
        tag: '#MySafeHarbor ♡'
      },
      {
        icon: '💖',
        title: 'I Still Choose You • सिर्फ तुम',
        desc: 'Out of 8 billion people, there is only one Khushi. Aaj bhi mere dil mein humare future ko behtar banane ki umeed hai. Hamesha sirf tum.',
        img: 'assets/images/image-4.png',
        tag: '#IStillChooseYou ♡'
      }
    ]
  };

  let siteData = DEFAULT_DATA;

  // ==========================================================================
  // 2. CUTE FLOATING PANDA WIDGET
  // ==========================================================================

  const floatingPanda = document.getElementById('floatingPanda');
  const pandaBubble = document.getElementById('pandaBubble');
  const hindiQuotes = [
    'Khushi ❤️ I still choose you! 🥺',
    'जैसे पांडा को बाम्बू, वैसे मुझे सिर्फ तुम पसंद हो! 🐼',
    'तुम्हारी मुस्कान मेरे लिए सबसे अनमोल है! 🌸',
    'हाथ थामे रखना हमेशा, छोड़ना मत! 🤝',
    'लाखों में एक नहीं, तुम मेरी पूरी दुनिया हो! 💫',
    'Hamesha tumhari khushi ki dua karne wala — Anshu 💌'
  ];
  let quoteIndex = 0;

  if (floatingPanda && pandaBubble) {
    floatingPanda.addEventListener('click', () => {
      quoteIndex = (quoteIndex + 1) % hindiQuotes.length;
      pandaBubble.innerHTML = `<span>${hindiQuotes[quoteIndex]}</span>`;
      
      const rect = floatingPanda.getBoundingClientRect();
      spawnClickBurst(rect.left + 35, rect.top + 35);

      initAudioContext();
      playWarmChime(659.25, 0.05);
      playWarmChime(783.99, 0.15);
    });
  }

  // ==========================================================================
  // 3. FLOATING PETALS CANVAS
  // ==========================================================================

  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const colors = [
    'rgba(255, 182, 193, 0.75)',
    'rgba(251, 113, 139, 0.65)',
    'rgba(254, 205, 214, 0.8)',
    'rgba(255, 228, 230, 0.7)',
    'rgba(244, 63, 104, 0.5)'
  ];

  class RomanticParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = Math.random() * 11 + 7;
      this.speedY = Math.random() * 0.85 + 0.4;
      this.speedX = Math.random() * 0.7 - 0.35;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 1.4 - 0.7;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.type = Math.random() > 0.4 ? 'petal' : 'heart';
      this.opacity = Math.random() * 0.6 + 0.35;
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.015) * 0.6 + this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      if (this.type === 'heart') {
        const s = this.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.5, s * 0.5, 0, s * 1.5);
        ctx.bezierCurveTo(s * 1.5, s * 0.5, s, -s * 0.5, 0, s * 0.3);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.5, this.size * 0.8, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 35; i++) {
    particles.push(new RomanticParticle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  function spawnClickBurst(x, y) {
    for (let i = 0; i < 7; i++) {
      const p = new RomanticParticle();
      p.x = x;
      p.y = y;
      p.speedX = (Math.random() - 0.5) * 4.5;
      p.speedY = (Math.random() - 0.7) * 3.5;
      p.size = Math.random() * 11 + 6;
      p.type = 'heart';
      particles.push(p);
      if (particles.length > 55) particles.shift();
    }
  }

  window.addEventListener('click', (e) => {
    if (['INPUT', 'TEXTAREA', 'BUTTON', 'A', 'VIDEO'].includes(e.target.tagName)) return;
    spawnClickBurst(e.clientX, e.clientY);
  });

  // ==========================================================================
  // 4. ROMANTIC MUSIC PLAYER (SYNTHESIZER)
  // ==========================================================================

  let audioCtx = null;
  let isPlaying = false;
  let synthInterval = null;

  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicLabel = document.getElementById('musicLabel');

  const chordNotes = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 392.00]  // G6
  ];
  let chordIndex = 0;

  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playWarmChime(freq, delay = 0) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(850, audioCtx.currentTime + delay);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.07, audioCtx.currentTime + delay + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + 2.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + 3);
  }

  function playRomanticChord() {
    const chord = chordNotes[chordIndex];
    chord.forEach((freq, idx) => {
      playWarmChime(freq, idx * 0.18);
    });
    if (Math.random() > 0.3) {
      playWarmChime(chord[2] * 2, 0.7);
    }
    chordIndex = (chordIndex + 1) % chordNotes.length;
  }

  function toggleMusic() {
    initAudioContext();
    if (!isPlaying) {
      playRomanticChord();
      synthInterval = setInterval(playRomanticChord, 3600);
      isPlaying = true;
      musicToggleBtn.classList.add('playing');
      musicLabel.textContent = 'Pause';
    } else {
      if (synthInterval) clearInterval(synthInterval);
      isPlaying = false;
      musicToggleBtn.classList.remove('playing');
      musicLabel.textContent = 'Music';
    }
  }

  musicToggleBtn.addEventListener('click', toggleMusic);

  // ==========================================================================
  // 5. VIDEO REEL CONTROLS
  // ==========================================================================

  const reelVideo = document.getElementById('romanticReelVideo');
  const reelPlayBtn = document.getElementById('reelPlayBtn');

  if (reelVideo && reelPlayBtn) {
    reelPlayBtn.addEventListener('click', () => {
      if (reelVideo.paused) {
        reelVideo.play();
        reelPlayBtn.textContent = '⏸ Pause Reel';
      } else {
        reelVideo.pause();
        reelPlayBtn.textContent = '▶ Play Reel';
      }
    });

    reelVideo.addEventListener('play', () => {
      reelPlayBtn.textContent = '⏸ Pause Reel';
    });
    reelVideo.addEventListener('pause', () => {
      reelPlayBtn.textContent = '▶ Play Reel';
    });
  }

  // ==========================================================================
  // 6. MOMENTS CATEGORY FILTER
  // ==========================================================================

  const filterPills = document.querySelectorAll('.filter-pill');
  const momentCards = document.querySelectorAll('.moment-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      momentCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox for moments
  const photoModal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDate = document.getElementById('modalDate');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openPhotoModal(src, title, desc, date) {
    modalImg.src = src;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalDate.textContent = date;
    photoModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    photoModal.hidden = true;
    document.body.style.overflow = '';
  }

  momentCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-src');
      const title = card.getAttribute('data-title');
      const desc = card.getAttribute('data-desc');
      const date = card.getAttribute('data-date');
      openPhotoModal(src, title, desc, date);
    });
  });

  modalCloseBtn.addEventListener('click', closePhotoModal);
  modalBackdrop.addEventListener('click', closePhotoModal);

  // ==========================================================================
  // 7. A LETTER FOR YOU (3D ENVELOPE)
  // ==========================================================================

  const envelopeBox = document.getElementById('envelopeBox');
  const waxSeal = document.getElementById('waxSeal');
  const foldLetterBtn = document.getElementById('foldLetterBtn');
  const editLetterBtn = document.getElementById('editLetterBtn');

  function openEnvelope() {
    envelopeBox.classList.add('opened');
    initAudioContext();
    playWarmChime(523.25, 0.05);
    playWarmChime(659.25, 0.15);
  }

  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  if (foldLetterBtn) {
    foldLetterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      envelopeBox.classList.toggle('opened');
    });
  }

  // ==========================================================================
  // 8. REASONS WHY MY HEART CHOSE YOU (3-CARD PANORAMA)
  // ==========================================================================

  let currentReasonIdx = 0;
  const reasonsList = siteData.reasons;

  const reasonCounterText = document.getElementById('reasonCounterText');
  const reasonProgressFill = document.getElementById('reasonProgressFill');
  const reasonBadge = document.getElementById('reasonBadge');
  const reasonIcon = document.getElementById('reasonIcon');
  const activeReasonImg = document.getElementById('activeReasonImg');
  const reasonTitle = document.getElementById('reasonTitle');
  const reasonDesc = document.getElementById('reasonDescription');
  const reasonTag = document.getElementById('reasonTag');

  const prevCardPreview = document.getElementById('prevCardPreview');
  const prevCardImg = document.getElementById('prevCardImg');
  const prevCardTitle = document.getElementById('prevCardTitle');

  const nextCardPreview = document.getElementById('nextCardPreview');
  const nextCardImg = document.getElementById('nextCardImg');
  const nextCardTitle = document.getElementById('nextCardTitle');

  const prevReasonBtn = document.getElementById('prevReasonBtn');
  const nextReasonBtn = document.getElementById('nextReasonBtn');
  const shuffleReasonBtn = document.getElementById('shuffleReasonBtn');
  const viewAllReasonsBtn = document.getElementById('viewAllReasonsBtn');

  function updateReasonCard(index) {
    const total = reasonsList.length;
    const current = reasonsList[index];
    const prev = reasonsList[(index - 1 + total) % total];
    const next = reasonsList[(index + 1) % total];

    reasonCounterText.textContent = `Reason ${index + 1} of ${total}`;
    reasonProgressFill.style.width = `${Math.round(((index + 1) / total) * 100)}%`;

    reasonBadge.textContent = `Reason #${index + 1}`;
    reasonIcon.textContent = current.icon;
    activeReasonImg.src = current.img;
    activeReasonImg.alt = current.title;
    reasonTitle.textContent = current.title;
    reasonDesc.textContent = current.desc;
    reasonTag.textContent = current.tag;

    prevCardImg.src = prev.img;
    prevCardTitle.textContent = prev.title.split('•')[0];

    nextCardImg.src = next.img;
    nextCardTitle.textContent = next.title.split('•')[0];
  }

  updateReasonCard(currentReasonIdx);

  nextReasonBtn.addEventListener('click', () => {
    currentReasonIdx = (currentReasonIdx + 1) % reasonsList.length;
    updateReasonCard(currentReasonIdx);
    if (currentReasonIdx === reasonsList.length - 1) {
      spawnClickBurst(window.innerWidth / 2, window.innerHeight / 2);
    }
  });

  prevReasonBtn.addEventListener('click', () => {
    currentReasonIdx = (currentReasonIdx - 1 + reasonsList.length) % reasonsList.length;
    updateReasonCard(currentReasonIdx);
  });

  shuffleReasonBtn.addEventListener('click', () => {
    let nextI;
    do {
      nextI = Math.floor(Math.random() * reasonsList.length);
    } while (nextI === currentReasonIdx && reasonsList.length > 1);
    currentReasonIdx = nextI;
    updateReasonCard(currentReasonIdx);
  });

  if (prevCardPreview) {
    prevCardPreview.addEventListener('click', () => {
      currentReasonIdx = (currentReasonIdx - 1 + reasonsList.length) % reasonsList.length;
      updateReasonCard(currentReasonIdx);
    });
  }

  if (nextCardPreview) {
    nextCardPreview.addEventListener('click', () => {
      currentReasonIdx = (currentReasonIdx + 1) % reasonsList.length;
      updateReasonCard(currentReasonIdx);
    });
  }

  // All Reasons Modal
  const allReasonsModal = document.getElementById('allReasonsModal');
  const allReasonsCloseBtn = document.getElementById('allReasonsCloseBtn');
  const allReasonsBackdrop = document.getElementById('allReasonsBackdrop');
  const allReasonsList = document.getElementById('allReasonsList');

  viewAllReasonsBtn.addEventListener('click', () => {
    allReasonsList.innerHTML = reasonsList.map((r, i) => `
      <div class="reason-list-item">
        <span class="item-badge">#${i + 1} ${r.icon}</span>
        <div class="item-text">
          <h4>${r.title}</h4>
          <p>${r.desc}</p>
        </div>
      </div>
    `).join('');
    allReasonsModal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  allReasonsCloseBtn.addEventListener('click', () => {
    allReasonsModal.hidden = true;
    document.body.style.overflow = '';
  });
  allReasonsBackdrop.addEventListener('click', () => {
    allReasonsModal.hidden = true;
    document.body.style.overflow = '';
  });

  // ==========================================================================
  // 9. FINALE PROPOSAL & CELEBRATION (RUNAWAY BUTTON & YES CELEBRATION)
  // ==========================================================================

  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const proposalBox = document.getElementById('proposalBox');
  const celebrationBox = document.getElementById('celebrationBox');
  const replayCelebrationBtn = document.getElementById('replayCelebrationBtn');

  function dodgeNoButton(e) {
    if (e) e.preventDefault();
    const maxX = window.innerWidth < 600 ? 70 : 130;
    const maxY = 50;
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  noBtn.addEventListener('mouseenter', dodgeNoButton);
  noBtn.addEventListener('touchstart', dodgeNoButton);
  noBtn.addEventListener('click', dodgeNoButton);

  yesBtn.addEventListener('click', () => {
    proposalBox.style.display = 'none';
    celebrationBox.classList.remove('hidden');

    initAudioContext();
    playWarmChime(523.25, 0.0);
    playWarmChime(659.25, 0.15);
    playWarmChime(783.99, 0.3);
    playWarmChime(1046.50, 0.45);

    for (let i = 0; i < 35; i++) {
      setTimeout(() => {
        spawnClickBurst(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight * 0.7
        );
      }, i * 65);
    }
  });

  replayCelebrationBtn.addEventListener('click', () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        spawnClickBurst(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight * 0.7
        );
      }, i * 60);
    }
  });

  // ==========================================================================
  // 10. PERSONALIZATION SETTINGS MODAL
  // ==========================================================================

  const personalizeModal = document.getElementById('personalizeModal');
  const settingsCloseBtn = document.getElementById('settingsCloseBtn');
  const settingsBackdrop = document.getElementById('settingsBackdrop');
  const personalizeForm = document.getElementById('personalizeForm');
  const inputHerName = document.getElementById('inputHerName');
  const inputYourName = document.getElementById('inputYourName');
  const inputLetterText = document.getElementById('inputLetterText');
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');

  function openPersonalizeModal() {
    inputHerName.value = siteData.herName;
    inputYourName.value = siteData.authorName;
    inputLetterText.value = siteData.letterContent;
    personalizeModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closePersonalizeModal() {
    personalizeModal.hidden = true;
    document.body.style.overflow = '';
  }

  editLetterBtn.addEventListener('click', openPersonalizeModal);
  settingsCloseBtn.addEventListener('click', closePersonalizeModal);
  settingsBackdrop.addEventListener('click', closePersonalizeModal);

  personalizeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    siteData.herName = inputHerName.value.trim() || 'Khushi';
    siteData.authorName = inputYourName.value.trim() || '— Tumhara Anshu 💌';
    siteData.letterContent = inputLetterText.value.trim() || DEFAULT_DATA.letterContent;

    document.getElementById('letterSalutation').textContent = `${siteData.herName} ❤️🥺`;
    document.getElementById('letterAuthor').textContent = siteData.authorName;

    const paras = siteData.letterContent.split('\n\n').filter(p => p.trim());
    document.getElementById('letterBodyContent').innerHTML = paras.map(p => `<p>${p.trim()}</p>`).join('');

    closePersonalizeModal();
    alert('Changes saved successfully! 💖');
  });

  resetDefaultsBtn.addEventListener('click', () => {
    if (confirm('Reset custom letter back to Anshu\'s original heartfelt note?')) {
      siteData.herName = DEFAULT_DATA.herName;
      siteData.authorName = DEFAULT_DATA.authorName;
      siteData.letterContent = DEFAULT_DATA.letterContent;
      
      document.getElementById('letterSalutation').textContent = `Khushi ❤️🥺`;
      document.getElementById('letterAuthor').textContent = siteData.authorName;
      const paras = siteData.letterContent.split('\n\n').filter(p => p.trim());
      document.getElementById('letterBodyContent').innerHTML = paras.map(p => `<p>${p.trim()}</p>`).join('');

      closePersonalizeModal();
    }
  });

  // Escape key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePhotoModal();
      closePersonalizeModal();
      allReasonsModal.hidden = true;
      document.body.style.overflow = '';
    }
  });

});
