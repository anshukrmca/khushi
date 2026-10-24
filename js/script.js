/**
 * FOR KHUSHI, WITH LOVE ♡
 * Main Interactive Application Script with Hindi Poetry & Cute Panda Animations
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA STATE & LOCAL STORAGE PERSISTENCE
  // ==========================================================================

  const DEFAULT_DATA = {
    version: '2.0', // Version bump to ensure new Hindi text & user photos load
    herName: 'Khushi',
    authorName: 'With all my love & heart ♡',
    letterContent: `अगर तुम यह खत पढ़ रही हो, तो एक गहरी और सुकून भरी सांस लो और जान लो कि तुम इस दुनिया में मेरे लिए सबसे ज्यादा अनमोल और खास हो।

जिस दिन से तुम मेरी जिंदगी में आई हो, हर सुबह और हसीन लगने लगी है। तुम्हारी वो प्यारी सी हंसी, तुम्हारी वो मासूम बातें और जिस तरह तुम मेरा ख्याल रखती हो—वो मेरे दिल को एक ऐसा सुकून देता है जो लफ्जों में कभी बयां नहीं हो सकता।

जब भी जिंदगी में कोई परेशानी या थकावट होती है, तुम्हारा एक बार प्यार से देख लेना या मुस्कुरा देना मेरी सारी तकलीफें मिटा देता है। तुम सिर्फ मेरी मोहब्बत नहीं हो, तुम मेरा सबसे महफूज घर (safe haven) हो।

शुक्रिया मेरी जिंदगी को खुशियों से भरने के लिए, मुझे समझने के लिए, और मेरे साथ हर पल मुस्कुराने के लिए। मैं वादा करता हूँ कि आने वाले हर दिन, हर मौसम में तुम्हारा हाथ ऐसे ही थामे रखूँगा और तुम्हें दुनिया का सबसे खुश इंसान बनाऊँगा।`,
    memories: [
      {
        src: 'assets/images/IMG_2495.png',
        tag: '🎨 हमारी प्यारी कार्टून दुनिया • Dream Cafe',
        title: 'लाल टेबल और ढेर सारी मीठी बातें',
        text: 'सामने तुम बैठी हो, चेहरे पर वो प्यारी सी मुस्कान... इस कार्टून जैसी जादुई दुनिया में भी और असली जिंदगी में भी, तुम ही मेरी सबसे पसंदीदा साथी हो।',
        date: 'Two hearts, infinite smiles ♡'
      },
      {
        src: 'assets/images/ac279f4b-f24b-419d-b2a8-31da8d25d9c9.jpeg',
        tag: '💛 मेरी खिली हुई धूप • Radiant Sunshine',
        title: 'पीले लिबास में तुम्हारी वो मासूम अदा',
        text: 'जब तुम इस तरह मुस्कुराती हो, तो जैसे चारों तरफ फूल खिल जाते हैं। तुम्हारी सादगी और नूर के आगे पूरी दुनिया की खूबसूरती फीकी है।',
        date: 'Suraj ki pehli kiran jaisi ♡'
      },
      {
        src: 'assets/images/IMG_1822.jpeg',
        tag: '🌹 सादगी और नजाकत • Pure Grace',
        title: 'साड़ी में तुम्हारा वो दिलकश अंदाज',
        text: 'तुम्हारी ये तस्वीर जब भी देखता हूँ, दिल की धड़कनें तेज हो जाती हैं। तुम्हारी सादगी में ही वो जादू है जो हर पल मुझे तुम्हारा दीवाना बना देता है।',
        date: 'Kudrat ka sabse haseen tohfa ♡'
      },
      {
        src: 'assets/images/IMG_1664.png',
        tag: '📱 दो स्क्रीन, एक धड़कन • Linked Hearts',
        title: 'स्क्रीन पर भी और दिल में भी सिर्फ तुम',
        text: 'फोन की स्क्रीन अनलॉक हो या दिन का कोई भी पल, तुम्हारी तस्वीर देखते ही चेहरे पर एक सुकून भरी मुस्कान आ जाती है। हम हमेशा साथ हैं।',
        date: 'Always by each other\'s side ♡'
      }
    ],
    reasons: [
      {
        icon: '🌸',
        title: 'तेरी वो जादुई मुस्कान (The Magic In Your Smile)',
        desc: 'तुम्हारी एक सच्ची मुस्कान मेरे दिनभर की सारी थकान और उदासी को एक पल में मिटा देती है। तुम्हारी हंसी ही मेरा सबसे पसंदीदा सुकून है।',
        tag: '#मेरीपसंदीदामुस्कान'
      },
      {
        icon: '🕊️',
        title: 'तेरा मासूम और खूबसूरत दिल (Purest Soul)',
        desc: 'जिस मासूमियत और अपनत्व से तुम सबका ख्याल रखती हो, वो मुझे हर दिन एक बेहतर इंसान बनने की प्रेरणा देता है।',
        tag: '#नेकऔरमासूमदिल'
      },
      {
        icon: '☕',
        title: 'तेरे साथ हर खामोशी भी मीठी है (Comfort in Silence)',
        desc: 'हमें बात करने की भी जरूरत नहीं पड़ती। बस तुम्हारा मेरे पास बैठे होना ही पूरी दुनिया की सबसे बड़ी दौलत लगता है।',
        tag: '#रूहकासुकून'
      },
      {
        icon: '🎶',
        title: 'तेरी वो खिलखिलाती हंसी (Unfiltered Laughter)',
        desc: 'जब तुम किसी बात पर खुलकर हंसती हो, वो खिलखिलाहट मेरे कानों के लिए दुनिया का सबसे खूबसूरत संगीत बन जाती है।',
        tag: '#कानोंमेंमिसरी'
      },
      {
        icon: '✨',
        title: 'तेरा मुझ पर अटूट भरोसा (Your Faith In Me)',
        desc: 'जब कभी मैं खुद पर शक करता हूँ, तुम्हारी आँखों का विश्वास मुझे हर मुश्किल से लड़ने की ताकत देता है।',
        tag: '#मेरीहिम्मत'
      },
      {
        icon: '💫',
        title: 'आम दिनों को खास बना देना (Everyday Magic)',
        desc: 'रास्ते की सैर हो या एक कप चाय, तुम्हारे साथ बिताया हर एक छोटा सा लम्हा जिंदगी भर की खूबसूरत याद बन जाता है।',
        tag: '#जादुईलम्हे'
      },
      {
        icon: '🌙',
        title: 'मेरा सबसे महफूज ठिकाना (My Safe Harbor)',
        desc: 'बाहर की दुनिया चाहे कितनी भी शोर भरी क्यों न हो, तुम्हारे पास आते ही मेरा दिल पूरी तरह शांत और महफूज महसूस करता है।',
        tag: '#सुकूनकाशहर'
      },
      {
        icon: '🧸',
        title: 'तेरी प्यारी-प्यारी आदतें और नखरे (Adorable Quirks)',
        desc: 'तुम्हारे बोलने का वो प्यारा अंदाज, वो छोटी-छोटी बातों पर मचलना और मुंह बनाना—तुम हर अंदाज में बेहद क्यूट हो।',
        tag: '#क्यूटपांडा'
      },
      {
        icon: '💌',
        title: 'तेरा बेपनाह ख्याल रखना (The Way You Care)',
        desc: 'खाना खाया या नहीं पूछना, तबियत का ख्याल रखना और वो छोटी-छोटी बातें नोटिस करना जो कोई और कभी नहीं देखता।',
        tag: '#अनमोलपरवाह'
      },
      {
        icon: '💖',
        title: 'क्योंकि तुम सिर्फ तुम हो - मेरी खुशी (My One & Only)',
        desc: '8 अरब लोगों में से सिर्फ एक तुम हो। तुम जैसी न कोई थी, न कोई होगी। तुम मेरी जिंदगी का सबसे अनमोल तोहफा हो खुशी।',
        tag: '#मेरीपूरीकायनात'
      }
    ]
  };

  // Check version to ensure new Hindi text & user's memory photos load
  let siteData = JSON.parse(localStorage.getItem('khushi_site_data') || 'null');
  if (!siteData || siteData.version !== DEFAULT_DATA.version) {
    siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveSiteData();
  }

  function saveSiteData() {
    localStorage.setItem('khushi_site_data', JSON.stringify(siteData));
  }

  // ==========================================================================
  // 2. CUTE FLOATING PANDA WIDGET WITH HINDI SPEECH BUBBLE
  // ==========================================================================

  const floatingPanda = document.getElementById('floatingPanda');
  const pandaBubble = document.getElementById('pandaBubble');
  const hindiQuotes = [
    'खुशी, तुम मेरी सबसे प्यारी मुस्कान हो! 💖',
    'जैसे पांडा को बाम्बू, वैसे मुझे तुम पसंद हो! 🐼',
    'तुम्हारी हंसी = मेरा पूरा दिन बन गया! 🌸',
    'हाथ थामे रखना हमेशा, छोड़ना मत! 🤝',
    'लाखों में एक नहीं, तुम मेरी पूरी दुनिया हो! 💫',
    'आई लव यू सो मच, मेरी क्यूट खुशी! 🐾✨'
  ];
  let quoteIndex = 0;

  if (floatingPanda && pandaBubble) {
    floatingPanda.addEventListener('click', (e) => {
      quoteIndex = (quoteIndex + 1) % hindiQuotes.length;
      pandaBubble.innerHTML = `<span>${hindiQuotes[quoteIndex]}</span>`;
      
      // Spawn heart burst around the panda
      const rect = floatingPanda.getBoundingClientRect();
      spawnClickBurst(rect.left + 35, rect.top + 35);
      
      initAudioContext();
      playWarmChime(659.25, 0.05); // High cute bell
      playWarmChime(783.99, 0.15);
    });
  }

  // ==========================================================================
  // 3. FLOATING PETALS & PARTICLES CANVAS
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
    if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(e.target.tagName)) return;
    spawnClickBurst(e.clientX, e.clientY);
  });

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

  // ==========================================================================
  // 4. ROMANTIC SYNTHESIZER AUDIO (WEB AUDIO API + MP3 UPLOAD)
  // ==========================================================================

  let audioCtx = null;
  let isPlaying = false;
  let synthInterval = null;
  let customAudio = null;

  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicLabel = document.getElementById('musicLabel');
  const musicDropdown = document.getElementById('musicDropdown');
  const customAudioInput = document.getElementById('customAudioInput');

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
      playWarmChime(freq, idx * 0.18);
    });
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

  musicToggleBtn.addEventListener('click', toggleMusic);

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
  // 5. ACTIVE SECTION TRACKER & NAVIGATION DOTS
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
  // 6. POLAROID GALLERY & LIGHTBOX MODAL
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
  // 7. INTERACTIVE 3D ENVELOPE & LOVE LETTER
  // ==========================================================================

  const envelopeBox = document.getElementById('envelopeBox');
  const waxSeal = document.getElementById('waxSeal');
  const foldLetterBtn = document.getElementById('foldLetterBtn');
  const letterGreeting = document.getElementById('letterSalutation');
  const letterBodyContent = document.getElementById('letterBodyContent');
  const letterAuthor = document.getElementById('letterAuthor');

  function updateLetterDOM() {
    letterGreeting.textContent = `My Dearest ${siteData.herName}, मेरी प्यारी खुशी,`;
    letterAuthor.textContent = siteData.authorName;

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
    initAudioContext();
    playWarmChime(523.25, 0.05); // C5
    playWarmChime(659.25, 0.15); // E5
  }

  foldLetterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    envelopeBox.classList.remove('opened');
  });

  // ==========================================================================
  // 8. REASONS WHY I LOVE YOU DECK & CAROUSEL
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

      reasonCounterText.textContent = `वजह #${index + 1} (Reason ${index + 1} of ${list.length})`;
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
  // 9. FINALE SURPRISE: PLAYFUL RUNAWAY 'NO' (MOBILE & DESKTOP) & CELEBRATION
  // ==========================================================================

  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const proposalBox = document.getElementById('proposalBox');
  const celebrationBox = document.getElementById('celebrationBox');
  const replayCelebrationBtn = document.getElementById('replayCelebrationBtn');

  function dodgeButton(e) {
    if (e) e.preventDefault();
    const maxX = window.innerWidth < 600 ? 60 : 120;
    const maxY = 45;
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  noBtn.addEventListener('mouseenter', dodgeButton);
  noBtn.addEventListener('touchstart', dodgeButton);
  noBtn.addEventListener('click', dodgeButton);

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
    siteData.authorName = inputYourName.value.trim() || 'With all my love & heart ♡';
    siteData.letterContent = inputLetterText.value.trim() || DEFAULT_DATA.letterContent;

    saveSiteData();
    updateLetterDOM();
    closePersonalizeModal();
    alert('बदलाव सेव हो गए! Personalization saved successfully 💖');
  });

  resetDefaultsBtn.addEventListener('click', () => {
    if (confirm('वापस मूल सुंदर शब्दों पर रीसेट करें? Reset custom text to default?')) {
      siteData.herName = DEFAULT_DATA.herName;
      siteData.authorName = DEFAULT_DATA.authorName;
      siteData.letterContent = DEFAULT_DATA.letterContent;
      saveSiteData();
      updateLetterDOM();
      closePersonalizeModal();
    }
  });

  // ==========================================================================
  // 11. REAL PHOTO MANAGER MODAL
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
    document.getElementById('fileSlot3'),
    document.getElementById('fileSlot4')
  ];
  const captionSlots = [
    document.getElementById('captionSlot1'),
    document.getElementById('captionSlot2'),
    document.getElementById('captionSlot3'),
    document.getElementById('captionSlot4')
  ];

  function openPhotoManager() {
    captionSlots.forEach((slot, i) => {
      if (slot) {
        slot.value = siteData.memories[i] ? siteData.memories[i].text : '';
      }
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
      if (!fileSlots[i]) continue;
      const file = fileSlots[i].files[0];
      if (file) {
        try {
          const dataUrl = await readFileAsDataURL(file);
          if (siteData.memories[i]) {
            siteData.memories[i].src = dataUrl;
          }
        } catch (err) {
          console.error('Error reading file:', err);
        }
      }
      if (captionSlots[i] && captionSlots[i].value.trim()) {
        if (siteData.memories[i]) {
          siteData.memories[i].text = captionSlots[i].value.trim();
        }
      }
    }

    saveSiteData();
    applyPhotosToDOM();
    closePhotoManager();
    alert('तस्वीरें अपडेट हो गईं! Photos updated! 📸✨');
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
    if (confirm('तस्वीरें रीसेट करें? Reset back to original memory images?')) {
      siteData.memories = JSON.parse(JSON.stringify(DEFAULT_DATA.memories));
      saveSiteData();
      applyPhotosToDOM();
      closePhotoManager();
    }
  });

  // Escape key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePhotoModal();
      closePersonalizeModal();
      closePhotoManager();
      if (allReasonsModal) allReasonsModal.hidden = true;
      document.body.style.overflow = '';
    }
  });

});
