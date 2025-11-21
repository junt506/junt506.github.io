const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const loopBtn = document.getElementById('loop-btn');
const seek = document.getElementById('seek');
const time = document.getElementById('time');
const volume = document.getElementById('volume');
const songTitle = document.getElementById('song-title');
const audioPlayer = document.getElementById('audio-player');

// SVG icons
const playIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
const pauseIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>`;

// Load volume from localStorage
let savedVolume = localStorage.getItem('player-volume');
if (savedVolume === null) {
  savedVolume = 70;
  localStorage.setItem('player-volume', savedVolume);
}
volume.value = savedVolume;
audio.volume = savedVolume / 100;

// Check if player is visible
function isPlayerVisible() {
  return audioPlayer && audioPlayer.offsetParent !== null;
}

// Initialize player function
let song;
let isInitialized = false;

function initializePlayer() {
  if (isInitialized) return;
  isInitialized = true;

  // Restore position and song with timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  fetch('/assets/music/song.json', { signal: controller.signal })
  .then(res => {
    clearTimeout(timeoutId);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    const today = new Date().getDate();
    song = data[today % data.length];
    audio.src = song.audio;
    songTitle.textContent = `${song.title} — ${song.author}`;

    const savedTime = localStorage.getItem('player-time');
    const savedSrc = localStorage.getItem('player-src');

    if (savedSrc === song.audio && savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    // Try to autoplay if browser allows
    const shouldResume = localStorage.getItem('player-was-playing') === 'true';
    if (shouldResume) {
      audio.play().then(() => {
        playBtn.innerHTML = pauseIcon;
      }).catch(() => {
        playBtn.innerHTML = playIcon;
        localStorage.setItem('player-was-playing', 'false');
      });
    } else {
      playBtn.innerHTML = playIcon;
    }
  })
  .catch(error => {
    clearTimeout(timeoutId);
    console.error('Failed to load song:', error);
    if (error.name === 'AbortError') {
      songTitle.textContent = 'Load timeout - tap to retry';
    } else {
      songTitle.textContent = `Error: ${error.message}`;
    }
    playBtn.innerHTML = playIcon;

    // Allow retry on button click
    playBtn.addEventListener('click', () => {
      if (!song) {
        songTitle.textContent = 'Reloading...';
        location.reload();
      }
    }, { once: true });
  });
}

// Initialize player immediately if visible, otherwise wait
if (isPlayerVisible()) {
  initializePlayer();
} else {
  // Use IntersectionObserver to detect when player becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isInitialized) {
        initializePlayer();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  if (audioPlayer) {
    observer.observe(audioPlayer);
  }
}

// Play/Pause toggle
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    // Check if audio source is loaded
    if (!audio.src) {
      console.error('No audio source loaded');
      songTitle.textContent = 'No audio source loaded';
      return;
    }

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        playBtn.innerHTML = pauseIcon;
        localStorage.setItem('player-was-playing', 'true');
      }).catch(error => {
        console.error('Play failed:', error);
        songTitle.textContent = `Play failed: ${error.message}`;
        playBtn.innerHTML = playIcon;
        localStorage.setItem('player-was-playing', 'false');
      });
    }
  } else {
    audio.pause();
    playBtn.innerHTML = playIcon;
    localStorage.setItem('player-was-playing', 'false');
  }
});

// Loop toggle - update opacity instead of icon
const wasLooping = localStorage.getItem('player-loop') === 'true';
audio.loop = wasLooping;
loopBtn.style.opacity = audio.loop ? '1' : '0.5';

loopBtn.addEventListener('click', () => {
  audio.loop = !audio.loop;
  loopBtn.style.opacity = audio.loop ? '1' : '0.5';
  localStorage.setItem('player-loop', audio.loop);
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  seek.value = audio.currentTime;
  time.textContent = `${format(audio.currentTime)} / ${format(audio.duration)}`;
  localStorage.setItem('player-time', audio.currentTime);
});

// Set duration when loaded
audio.addEventListener('loadedmetadata', () => {
  seek.max = audio.duration;
  localStorage.setItem('player-src', audio.src);
});

// Seek
seek.addEventListener('input', () => {
  audio.currentTime = seek.value;
});

// Volume
volume.addEventListener('input', () => {
  audio.volume = volume.value / 100;
  localStorage.setItem('player-volume', volume.value);
});

// Format time helper
function format(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
