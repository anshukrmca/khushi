/**
 * FOR KHUSHI, WITH LOVE ♡
 * Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA STATE & LOCAL STORAGE PERSISTENCE
  // ==========================================================================

  const DEFAULT_DATA = {
    herName: 'Khushi',
    authorName: 'With all my love ♡',
    letterContent: `If you are reading this, I want you to take a gentle breath and know how deeply, completely, and endlessly cherished you are.

From the moment you came into my life, everything took on a softer glow and a warmer melody. You have this rare and effortless grace—the way your eyes light up when you laugh, the kindness you show to everyone around you, and how even the most ordinary day turns extraordinary just because you are in it.

Whenever the world feels loud or overwhelming, thinking of you is my instant peace. You are my comfort, my favorite laugh, and my safest home. I don't just love you for who you are; I love who I become when I am standing by your side.

Thank you for being my constant warmth, my sweetest companion, and the reason my heart smiles without even trying. No matter where life takes us, I promise to celebrate you, protect your peace, and love you more with every passing sunrise.`,
    memories: [
      {
        src: 'assets/images/memory-01.jpg',
        tag: '☕ Warm Cafe Afternoons',
        title: 'Hands Held Across the Table',
        text: 'The world outside was rushing, but right there, sipping warm coffee and looking into your eyes, everything felt completely still and peaceful.',
        date: 'A day etched in my heart ♡'
      },
      {
        src: 'assets/images/memory-02.jpg',
        tag: '🌅 Golden Hour Whispers',
        title: 'Walking Beside the Waves',
        text: 'Barefoot in the soft sand, the ocean glowing golden pink, with your laughter matching the rhythm of the waves. My happiest place is right next to you.',
        date: 'Sunset memories with you ♡'
      },
      {
        src: 'assets/images/memory-03.jpg',
        tag: '✨ Under the Starlit Sky',
        title: 'Counting Stars, Wishing on You',
        text: 'Wrapped under a warm blanket with fairy lights dancing above. People search their whole lives for a falling star, but my wish already came true with you.',
        date: 'Under the moonlight ♡'
      }
    ],
    reasons: [
      {
        icon: '🌸',
        title: 'The Magic In Your Smile',
        desc: 'Your genuine smile has this quiet superpower to turn my worst, most exhausting days into pure warmth in a split second.',
        tag: '#MyFavoriteView'
      },
      {
        icon: '🕊️',
        title: 'Your Beautiful, Pure Heart',
        desc: 'The genuine kindness and empathy you show to everyone around you inspires me every single day to be a better person.',
        tag: '#PurestSoul'
      },
      {
        icon: '☕',
        title: 'Even Silence Feels Comfortable',
        desc: 'We don’t even have to say a word. Just sitting in the same room with you, doing nothing at all, feels like the richest place in the world.',
        tag: '#MyComfortZone'
      },
      {
        icon: '🎶',
        title: 'Your Cute Laughter',
        desc: 'That uncontrollable, unfiltered giggle you get when something is genuinely hilarious is my absolute favorite sound in the universe.',
        tag: '#MusicToMyEars'
      },
      {
        icon: '✨',
        title: 'How You Believe In Me',
        desc: 'When I doubt myself, the gentle faith you have in me gives me the strength to conquer whatever lies ahead.',
        tag: '#MyBiggestCheerleader'
      },
      {
        icon: '💫',
        title: 'Ordinary Days Turn Special',
        desc: 'A grocery run, waiting in traffic, or sharing a simple tea—everything becomes an adventure and a cherished memory with you.',
        tag: '#MagicInTheEveryday'
      },
      {
        icon: '🌙',
        title: 'You Are My Safe Haven',
        desc: 'No matter how chaotic or stormy life gets outside, in your presence I feel deeply understood, safe, and completely loved.',
        tag: '#SafeHarbor'
      },
      {
        icon: '🧸',
        title: 'Your Adorable Quirks',
        desc: 'The little habits, funny expressions, and unique ways you express excitement that are so uniquely, undeniably you.',
        tag: '#EndlesslyCute'
      },
      {
        icon: '💌',
        title: 'How Much You Care',
        desc: 'The gentle check-ins, the thoughtful questions, and the way you notice the little details nobody else ever does.',
        tag: '#TreasuredMoments'
      },
      {
        icon: '💖',
        title: 'Simply Because You Are You',
        desc: 'Out of all 8 billion people, there is only one Khushi. You are irreplaceable, incomparable, and the greatest gift in my life.',
        tag: '#MyOneAndOnly'
      }
    ]
  };

  // Load from local storage or fallback to defaults
  let siteData = JSON.parse(localStorage.getItem('khushi_site_data') || 'null');
  if (!siteData) {
    siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  function saveSiteData() {
    localStorage.setItem('khushi_site_data', JSON.stringify(siteData));
  }

  // ==========================================================================
  // 2. FLOATING PETALS & PARTICLES CANVAS
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
  const PARTICLE_COUNT = 38;
  const colors = [
    'rgba(255, 182, 193, 0.7)',
    'rgba(251, 113, 139, 0.65)',
    'rgba(254, 205, 214, 0.8)',
    'rgba(255, 228, 230, 0.75)',
    'rgba(244, 63, 104, 0.5)'
  ];

  class RomanticParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = Math.random() * 12 + 8;
      this.speedY = Math.random() * 0.9 + 0.4;
      this.speedX = Math.random() * 0.8 - 0.4;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 1.5 - 0.75;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.type = Math.random() > 0.4 ? 'petal' : 'heart';
      this.opacity = Math.random() * 0.6 + 0.3;
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
        // Draw delicate mini heart
        const s = this.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.5, s * 0.5, 0, s * 1.5);
        ctx.bezierCurveTo(s * 1.5, s * 0.5, s, -s * 0.5, 0, s * 0.3);
        ctx.fill();
      } else {
        // Draw soft romantic rose petal
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.5, this.size * 0.8, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
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

  // Burst hearts on click
  window.addEventListener('click', (e) => {
    // Only spawn particle burst if not clicking form inputs
    if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(e.target.tagName)) return;
    spawnClickBurst(e.clientX, e.clientY);
  });

  function spawnClickBurst(x, y) {
    for (let i = 0; i < 6; i++) {
      const p = new RomanticParticle();
      p.x = x;
      p.y = y;
      p.speedX = (Math.random() - 0.5) * 4;
      p.speedY = (Math.random() - 0.7) * 3;
      p.size = Math.random() * 10 + 6;
      p.type = 'heart';
      particles.push(p);
      if (particles.length > 55) particles.shift();
    }
  }

  // ==========================================================================
  // 3. ROMANTIC SYNTHESIZER AUDIO (WEB AUDIO API + MP3 UPLOAD)
  // ==========================================================================

  let audioCtx = null;
  let isPlaying = false;
  let synthInterval = null;
  let customAudio = null;

  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicLabel = document.getElementById('musicLabel');
  const musicDropdown = document.getElementById('musicDropdown');
  const customAudioInput = document.getElementById('customAudioInput');

  // Ambient chord notes (Lofi Piano / Music box progression in F# Major / Db)
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

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, audioCtx.currentTime + delay);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + delay + 0.1);
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
      // Arpeggiate lightly for music-box feel
      playWarmChime(freq, idx * 0.18);
    });
    // Add soft gentle high bell sparkle
    if (Math.random() > 0.3) {
      playWarmChime(chord[2] * 2, 0.7);
    }
    chordIndex = (chordIndex + 1) % chordNotes.length;
  }

  function toggleMusic() {
    if (customAudio && customAudio.src) {
      if (customAudio.paused) {
        customAudio.play();
        setMusicPlayingState(true);
      } else {
        customAudio.pause();
        setMusicPlayingState(false);
      }
      return;
    }

    initAudioContext();
    if (!isPlaying) {
      playRomanticChord();
      synthInterval = setInterval(playRomanticChord, 3600);
      setMusicPlayingState(true);
    } else {
      if (synthInterval) clearInterval(synthInterval);
      setMusicPlayingState(false);
    }
  }

  function setMusicPlayingState(playing) {
    isPlaying = playing;
    if (playing) {
      musicToggleBtn.classList.add('playing');
      musicLabel.textContent = 'Pause Music';
    } else {
      musicToggleBtn.classList.remove('playing');
      musicLabel.textContent = 'Play Music';
    }
  }

  musicToggleBtn.addEventListener('click', (e) => {
    // If clicking right side or double clicking, toggle dropdown
    toggleMusic();
  });

  // Long press / right click on music btn opens song upload dropdown
  musicToggleBtn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    musicDropdown.classList.toggle('show');
  });

  customAudioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      if (synthInterval) clearInterval(synthInterval);
      if (!customAudio) customAudio = new Audio();
      customAudio.src = URL.createObjectURL(file);
      customAudio.loop = true;
      customAudio.play().then(() => {
        setMusicPlayingState(true);
        musicDropdown.classList.remove('show');
      });
    }
  });

  // ==========================================================================
  // 4. ACTIVE SECTION TRACKER & NAVIGATION DOTS
  // ==========================================================================

  const sections = document.querySelectorAll('section');
  const navDots = document.querySelectorAll('.nav-dot');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navDots.forEach(dot => {
      dot.classList.remove('active');
      if (dot.getAttribute('href') === `#${current}`) {
        dot.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // 5. POLAROID GALLERY & LIGHTBOX MODAL
  // ==========================================================================

  const memoryCards = document.querySelectorAll('.polaroid-card');
  const photoModal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDate = document.getElementById('modalDate');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openPhotoModal(index) {
    const memory = siteData.memories[index] || siteData.memories[0];
    modalImg.src = memory.src;
    modalImg.alt = memory.title;
    modalTitle.textContent = memory.title;
    modalDesc.textContent = memory.text;
    modalDate.textContent = memory.date;
    photoModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    photoModal.hidden = true;
    document.body.style.overflow = '';
  }

  memoryCards.forEach((card, idx) => {
    card.addEventListener('click', () => openPhotoModal(idx));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPhotoModal(idx);
      }
    });
  });

  modalCloseBtn.addEventListener('click', closePhotoModal);
  modalBackdrop.addEventListener('click', closePhotoModal);

  // ==========================================================================
  // 6. INTERACTIVE 3D ENVELOPE & LOVE LETTER
  // ==========================================================================

  const envelopeBox = document.getElementById('envelopeBox');
  const waxSeal = document.getElementById('waxSeal');
  const foldLetterBtn = document.getElementById('foldLetterBtn');
  const letterGreeting = document.getElementById('letterSalutation');
  const letterBodyContent = document.getElementById('letterBodyContent');
  const letterAuthor = document.getElementById('letterAuthor');

  function updateLetterDOM() {
    letterGreeting.textContent = `My Dearest ${siteData.herName},`;
    letterAuthor.textContent = siteData.authorName;

    // Split letter content by paragraph
    const paras = siteData.letterContent.split('\n\n').filter(p => p.trim());
    letterBodyContent.innerHTML = paras.map(p => `<p>${p.trim()}</p>`).join('');
  }
  updateLetterDOM();

  waxSeal.addEventListener('click', (e) => {
    e.stopPropagation();
    openLetter();
  });

  envelopeBox.addEventListener('click', (e) => {
    if (!envelopeBox.classList.contains('opened')) {
      openLetter();
    }
  });

  function openLetter() {
    envelopeBox.classList.add('opened');
    // Soft sound effect
    initAudioContext();
    playWarmChime(523.25, 0.05); // C5
    playWarmChime(659.25, 0.15); // E5
  }

  foldLetterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    envelopeBox.classList.remove('opened');
  });

  // ==========================================================================
  // 7. REASONS WHY I LOVE YOU DECK & CAROUSEL
  // ==========================================================================

  let currentReasonIndex = 0;
  const reasonCard = document.getElementById('reasonActiveCard');
  const reasonIcon = document.getElementById('reasonIcon');
  const reasonBadge = document.getElementById('reasonBadge');
  const reasonTitle = document.getElementById('reasonTitle');
  const reasonDesc = document.getElementById('reasonDescription');
  const reasonTag = document.getElementById('reasonTag');
  const reasonCounterText = document.getElementById('reasonCounterText');
  const reasonProgressFill = document.getElementById('reasonProgressFill');

  const nextReasonBtn = document.getElementById('nextReasonBtn');
  const prevReasonBtn = document.getElementById('prevReasonBtn');
  const shuffleReasonBtn = document.getElementById('shuffleReasonBtn');
  const viewAllReasonsBtn = document.getElementById('viewAllReasonsBtn');

  function renderReason(index) {
    const list = siteData.reasons;
    const item = list[index];

    reasonCard.classList.add('animating-out');

    setTimeout(() => {
      reasonIcon.textContent = item.icon;
      reasonBadge.textContent = `Reason #${index + 1}`;
      reasonTitle.textContent = item.title;
      reasonDesc.textContent = item.desc;
      reasonTag.textContent = item.tag;

      reasonCounterText.textContent = `Reason ${index + 1} of ${list.length}`;
      const percentage = Math.round(((index + 1) / list.length) * 100);
      reasonProgressFill.style.width = `${percentage}%`;

      reasonCard.classList.remove('animating-out');
      reasonCard.classList.add('animating-in');

      setTimeout(() => {
        reasonCard.classList.remove('animating-in');
      }, 300);
    }, 200);
  }

  nextReasonBtn.addEventListener('click', () => {
    currentReasonIndex = (currentReasonIndex + 1) % siteData.reasons.length;
    renderReason(currentReasonIndex);
    // If reached last card, trigger mini celebration
    if (currentReasonIndex === siteData.reasons.length - 1) {
      spawnClickBurst(window.innerWidth / 2, window.innerHeight / 2);
    }
  });

  prevReasonBtn.addEventListener('click', () => {
    currentReasonIndex = (currentReasonIndex - 1 + siteData.reasons.length) % siteData.reasons.length;
    renderReason(currentReasonIndex);
  });

  shuffleReasonBtn.addEventListener('click', () => {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * siteData.reasons.length);
    } while (nextIdx === currentReasonIndex && siteData.reasons.length > 1);
    currentReasonIndex = nextIdx;
    renderReason(currentReasonIndex);
  });

  // All Reasons Modal
  const allReasonsModal = document.getElementById('allReasonsModal');
  const allReasonsCloseBtn = document.getElementById('allReasonsCloseBtn');
  const allReasonsBackdrop = document.getElementById('allReasonsBackdrop');
  const allReasonsList = document.getElementById('allReasonsList');

  viewAllReasonsBtn.addEventListener('click', () => {
    allReasonsList.innerHTML = siteData.reasons.map((r, i) => `
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
  // 8. FINALE SURPRISE: PLAYFUL RUNAWAY 'NO' & CELEBRATION
  // ==========================================================================

  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const proposalBox = document.getElementById('proposalBox');
  const celebrationBox = document.getElementById('celebrationBox');
  const replayCelebrationBtn = document.getElementById('replayCelebrationBtn');

  // Playfully make "No" button dodge away
  function dodgeButton() {
    const maxX = 120;
    const maxY = 50;
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  noBtn.addEventListener('mouseenter', dodgeButton);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    dodgeButton();
  });
  noBtn.addEventListener('click', dodgeButton);

  yesBtn.addEventListener('click', () => {
    proposalBox.style.display = 'none';
    celebrationBox.classList.remove('hidden');

    // Chime harmony
    initAudioContext();
    playWarmChime(523.25, 0.0);
    playWarmChime(659.25, 0.15);
    playWarmChime(783.99, 0.3);
    playWarmChime(1046.50, 0.45);

    // Fire big celebration particle burst
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        spawnClickBurst(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight * 0.7
        );
      }, i * 70);
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
  // 9. PERSONALIZATION SETTINGS MODAL
  // ==========================================================================

  const quickPersonalizeBtn = document.getElementById('quickPersonalizeBtn');
  const editLetterBtn = document.getElementById('editLetterBtn');
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

  quickPersonalizeBtn.addEventListener('click', openPersonalizeModal);
  editLetterBtn.addEventListener('click', openPersonalizeModal);
  settingsCloseBtn.addEventListener('click', closePersonalizeModal);
  settingsBackdrop.addEventListener('click', closePersonalizeModal);

  personalizeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    siteData.herName = inputHerName.value.trim() || 'Khushi';
    siteData.authorName = inputYourName.value.trim() || 'With all my love ♡';
    siteData.letterContent = inputLetterText.value.trim() || DEFAULT_DATA.letterContent;

    saveSiteData();
    updateLetterDOM();
    closePersonalizeModal();
    alert('Personalization saved successfully! 💖');
  });

  resetDefaultsBtn.addEventListener('click', () => {
    if (confirm('Reset custom text back to original lovely defaults?')) {
      siteData.herName = DEFAULT_DATA.herName;
      siteData.authorName = DEFAULT_DATA.authorName;
      siteData.letterContent = DEFAULT_DATA.letterContent;
      saveSiteData();
      updateLetterDOM();
      closePersonalizeModal();
    }
  });

  // ==========================================================================
  // 10. REAL PHOTO MANAGER MODAL
  // ==========================================================================

  const managePhotosBtn = document.getElementById('managePhotosBtn');
  const photoManagerModal = document.getElementById('photoManagerModal');
  const photoMgrCloseBtn = document.getElementById('photoMgrCloseBtn');
  const photoMgrBackdrop = document.getElementById('photoMgrBackdrop');
  const savePhotosBtn = document.getElementById('savePhotosBtn');
  const resetPhotosBtn = document.getElementById('resetPhotosBtn');

  const fileSlots = [
    document.getElementById('fileSlot1'),
    document.getElementById('fileSlot2'),
    document.getElementById('fileSlot3')
  ];
  const captionSlots = [
    document.getElementById('captionSlot1'),
    document.getElementById('captionSlot2'),
    document.getElementById('captionSlot3')
  ];

  function openPhotoManager() {
    captionSlots.forEach((slot, i) => {
      slot.value = siteData.memories[i] ? siteData.memories[i].text : '';
    });
    photoManagerModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closePhotoManager() {
    photoManagerModal.hidden = true;
    document.body.style.overflow = '';
  }

  managePhotosBtn.addEventListener('click', openPhotoManager);
  photoMgrCloseBtn.addEventListener('click', closePhotoManager);
  photoMgrBackdrop.addEventListener('click', closePhotoManager);

  // Helper to read file as DataURL
  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  savePhotosBtn.addEventListener('click', async () => {
    for (let i = 0; i < fileSlots.length; i++) {
      const file = fileSlots[i].files[0];
      if (file) {
        try {
          const dataUrl = await readFileAsDataURL(file);
          siteData.memories[i].src = dataUrl;
        } catch (err) {
          console.error('Error reading file:', err);
        }
      }
      if (captionSlots[i].value.trim()) {
        siteData.memories[i].text = captionSlots[i].value.trim();
      }
    }

    saveSiteData();
    applyPhotosToDOM();
    closePhotoManager();
    alert('Photos updated! 📸✨');
  });

  function applyPhotosToDOM() {
    const cards = document.querySelectorAll('.polaroid-card');
    cards.forEach((card, idx) => {
      const mem = siteData.memories[idx];
      if (mem) {
        const img = card.querySelector('.polaroid-img');
        const text = card.querySelector('.memory-text');
        if (img) img.src = mem.src;
        if (text) text.textContent = mem.text;
      }
    });
  }
  applyPhotosToDOM();

  resetPhotosBtn.addEventListener('click', () => {
    if (confirm('Reset back to original dream illustrations?')) {
      siteData.memories = JSON.parse(JSON.stringify(DEFAULT_DATA.memories));
      saveSiteData();
      applyPhotosToDOM();
      closePhotoManager();
    }
  });

  // Esc key closes any open modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePhotoModal();
      closePersonalizeModal();
      closePhotoManager();
      allReasonsModal.hidden = true;
      document.body.style.overflow = '';
    }
  });

});
