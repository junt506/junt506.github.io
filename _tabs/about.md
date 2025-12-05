---
title: About
icon: fas fa-user-ninja
order: 4
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Audiowide&display=swap');

  /* Synthwave Background with Parallax */
  .about-container {
    position: relative;
    overflow: hidden;
    padding: 2rem;
    min-height: 100vh;
  }


  /* Title Styles */
  .retro-title {
  position: relative;
  font-family: 'Exo', sans-serif;
  font-size: clamp(2rem, 8vw, 5rem); /* responsive scaling */
  text-align: center;
  transform: skew(-10deg);
  margin: 2rem auto;
  z-index: 50;
  letter-spacing: 0.05em;
  max-width: 90vw;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.1;
  padding: 0 1rem;
}

.retro-title .retro-back {
  display: inline-block; /* was block — changed to inline-block for better wrapping */
  color: #a3c8ff;
  text-shadow:
    0 0 5px #6eb5ff,
    0 0 20px #165ff3,
    0 0 40px #165ff3;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
}


  /* Subtitle */
  .subtitle {
  text-align: center;
  font-family: 'Share Tech Mono', monospace;
  color: #62ea00;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  text-shadow: 0 0 12px #62ea00;
  margin: 1.5rem auto 3rem;
  max-width: 90vw;
  line-height: 1.4;
  word-wrap: break-word;
  white-space: normal;
  padding: 0 1rem;
}


  /* Profile Image */
  .about-img {
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    margin: 1rem auto;
    display: block;
    position: relative;
    z-index: 50;
    border: 2px solid #ae81ff;
    box-shadow:
      0 0 15px rgba(174, 129, 255, 0.4),
      0 0 30px rgba(174, 129, 255, 0.2);
  }

  /* Image Gallery with 3D Cards - Better Mobile Support */
  .image-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin: 3rem 0;
    position: relative;
    z-index: 50;
    perspective: 1000px;
  }

  .image-row img {
    flex: 1 1 300px;
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    border: 3px solid transparent;
    position: relative;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    box-shadow: 
      0 10px 30px rgba(174, 129, 255, 0.3),
      inset 0 0 20px rgba(174, 129, 255, 0.1);
  }

  @media (min-width: 768px) {
    .image-row img {
      max-width: 400px;
    }
  }

  .image-row img::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 15px;
    padding: 3px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .image-row img:hover::before {
    opacity: 1;
  }

  .image-row img:hover {
    transform: translateY(-20px) rotateY(15deg) rotateX(5deg) scale(1.1);
    box-shadow: 
      0 30px 60px rgba(255, 0, 255, 0.4),
      0 0 100px rgba(0, 255, 255, 0.3),
      inset 0 0 30px rgba(174, 129, 255, 0.2);
    filter: brightness(1.2) contrast(1.1);
  }

  /* Interactive Badges - Simple Bright Green with Fixed Z-Index */
  .badge {
    display: inline-block;
    background: linear-gradient(45deg, #1a1a1a, #2d2d2d);
    color: #62ea00;
    padding: 0.5em 1em;
    border-radius: 25px;
    font-size: 0.9em;
    margin: 0.3em;
    font-family: 'Share Tech Mono', monospace;
    position: relative;
    z-index: 50;
    overflow: hidden;
    border: 1px solid #62ea00;
    text-shadow: 0 0 5px #62ea00;
    transition: all 0.3s ease;
  }

  .badge::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #62ea00, transparent);
    transition: left 0.5s ease;
  }

  .badge:hover {
    color: #000;
    background: #62ea00;
    box-shadow: 0 0 20px #62ea00;
    transform: scale(1.1);
  }

  .badge:hover::before {
    left: 100%;
  }

  /* Highlight Text with Neon Glow */
  .highlight-inline {
  display: inline;
  font-size: 1em;
  padding: 0 0.3em;
  border-radius: 0.25em;
  background: linear-gradient(145deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.1));
  text-shadow: 0 0 5px #ff00ff;
  box-shadow: inset 0 0 5px rgba(255, 0, 255, 0.2);
}


  /* Section Titles with Cyberpunk Style */
  .section-title,
  .about-container h3,
  .about-container h4 {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    color: transparent !important;
    background: linear-gradient(90deg, #ae81ff, #ff00ff, #ae81ff);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    margin-top: 4rem !important;
    margin-bottom: 1.5rem !important;
    font-family: 'Audiowide', 'Orbitron', monospace !important;
    font-weight: 700 !important;
    font-size: 2rem !important;
    position: relative !important;
    padding-left: 40px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;
    z-index: 50 !important;
  }

  h4 {
    font-size: 1.6rem !important;
    margin-top: 3rem !important;
  }

  .section-title::before,
  .about-container h3::before,
  .about-container h4::before {
    content: '▶';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #62ea00;
    font-size: 1.5rem;
    animation: blink 1s ease-in-out infinite, rotate 2s linear infinite;
    text-shadow: 0 0 20px #62ea00;
  }

  @keyframes rotate {
    from { transform: translateY(-50%) rotate(0deg); }
    to { transform: translateY(-50%) rotate(360deg); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* Special styling for tall image */
  .tall-image {
    height: 350px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .tall-image {
      height: auto !important;
      width: 100% !important;
      max-width: 350px !important;
    }
  }

  /* Special styling for book image */
  .book-image {
    transform: rotate(-90deg);
    transform-origin: center;
    width: 250px !important;
  }

  @media (max-width: 768px) {
    .book-image {
      transform: none !important;
      width: 100% !important;
      max-width: 350px !important;
    }
  }

  /* HR Styles */
  hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ae81ff, transparent);
    margin: 4rem 0;
    position: relative;
    z-index: 50;
  }

  /* Paragraphs with better readability */
  p {
    position: relative;
    z-index: 50;
    line-height: 1.9;
    color: #f0f0f0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1.1rem;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }

  /* Terminal Effect for Code/Tech Terms */
  code {
    font-family: 'Share Tech Mono', monospace;
    background: rgba(98, 234, 0, 0.2);
    color: #62ea00;
    padding: 0.3em 0.6em;
    border-radius: 6px;
    border: 1px solid #62ea00;
    box-shadow: 
      0 0 5px rgba(98, 234, 0, 0.5),
      inset 0 0 5px rgba(98, 234, 0, 0.2);
    transition: all 0.3s;
    position: relative;
    z-index: 50;
  }

  code:hover {
    background: rgba(98, 234, 0, 0.3);
    box-shadow: 
      0 0 10px rgba(98, 234, 0, 0.7),
      inset 0 0 10px rgba(98, 234, 0, 0.3);
    transform: scale(1.05);
  }


  /* Mobile Responsive with Style */
  @media (max-width: 768px) {
    .about-container {
      padding: 1rem;
    }
    .section-title,
    .about-container h3 {
      font-size: 1.5rem !important;
      padding-left: 25px !important;
    }
    .about-container h4 {
      font-size: 1.3rem !important;
    }
    .image-row {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .image-row img {
      width: 100%;
      max-width: 350px;
      margin: 0 auto;
      display: block;
    }
    .badge {
      font-size: 0.85rem;
      padding: 0.4em 0.8em;
      margin: 0.2em;
    }
  }

  /* Main content divs */
  .about-container > div {
    position: relative;
    z-index: 50;
  }

  /* Performance optimizations */
  .about-img,
  .badge,
  .image-row img {
    will-change: transform;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
</style>

<div class="about-container">
  <div style="text-align: center; margin-bottom: 2rem;">
    <img src="/assets/img/mev3.jpg" alt="Jeremy Montes" class="about-img" />
  </div>

  <h1 class="retro-title">
  <span class="retro-back">Jeremy Montes</span>
  </h1>


  <div class="subtitle">
   Security Enthusiast · Cool Guy · Obsessed with the Unknown
  </div>

  <p>I'm Jeremy, but online I go by <span class="highlight highlight-inline">Qewave</span>. This website is my personal playground and documentation hub. If you're looking for my more corporate side, click the LinkedIn icon in the bottom left on this site. Here, I post my CTF writeups, hacking stuff, notes, random tech rants, and other things I find useful or worth sharing.</p>

  <p>You'll notice the retro 80s vibes throughout the site. There's something about that neon/purple aesthetic that just hits my soul. When I'm not doing security stuff, I'm probably reading whatever book I'm reviewing next, vibing to music (Japanese jazz, neo-soul, or corridos, House music and everything in between), hitting the gym or actually going outside to hike and play tennis. You know, touching grass and all that.</p>

  <div class="image-row">
    <img src="https://i.postimg.cc/sx16F4xL/IMG-0906.jpg"
         alt="Workshop photo" />
  </div>

  <hr>

  <h3 class="section-title">Early Days</h3>

  <p>I've been into "hacking" since I was 16. I started out by modifying games to unlock unreleased skins just to flex. In high school, I never really knew what career path I wanted. The funny part is I was always talking about tech, coding, or software projects without realizing that this was what I was meant to do. It finally clicked senior year.</p>

  <hr>

<h3 class="section-title">Breaking into Cyber</h3>
<p>Since then, I've earned my associate's degree in Computer Science with a focus on Networking & Security, and I'm continuing coursework in the same field. I'm planning to pursue a bachelor's degree in the same field with a focus on defensive security. I've attended nearly every major security event and conference in California, helped found the first Cybersecurity Club at my college (and became its representative), secured a SysOps/Security internship, won a few CTFs, picked up some certs like <code>Security+</code>, <code>PSAA</code> and <code>CCNA</code>, and built tons of personal labs and projects. As far as certs go, I think they're useful for getting past HR filters, providing baseline knowledge, filling in gaps, and demonstrating commitment (especially for the harder exams), particularly early in your career. But once you have that foot in the door, I think what actually separates you from the thousands of other people with the same cert is whether you can actually do the work. I'd rather spend all my time spinning up labs, breaking/analyzing things, and building projects that prove I understand both the theory and practice. I learn security by doing security, not just studying for multiple-choice exams. Moving forward, I'm focused on pursuing certs that are hands-on and teach practical skills.</p>

  <div class="image-row">
    <img src="https://i.postimg.cc/2ys8f3HQ/PXL-20250324-231930647.jpg"
         alt="Workshop photo" />
    <img src="https://i.postimg.cc/xTQ46M39/rush.webp"
         alt="Workshop photo" />
  </div>

  <hr>

  <h3 class="section-title">What Keeps Me Going</h3>

  <p> I love figuring things out. Especially in security, that constant mystery combined with a cat and mouse game is what keeps me on my toes. That's why I've been obsessed with <span class="highlight highlight-inline">Malware Analysis</span> and <span class="highlight highlight-inline">Threat Hunting</span>.</p>

  <h4>Electronics and IoT</h4>
  <p>I was always into electronics, but things really clicked after finishing my Arduino internship at college. Once that wrapped up, I was hungry for more, so I grabbed a big electronics kit and dove into some books. At that point I was torn between going the electrical engineering/hardware route or sticking with computer science. But seeing how I could build practically anything with just copper, modules, and code - that really opened my eyes. I love building stuff, and electronics is where I get to show that off the most. After getting comfortable with schematics and working on my own projects, I naturally drifted into IoT security, radio frequency work, and started making my own hacking gadgets and PCBs.</p>

  <div class="image-row">
    <img src="https://i.postimg.cc/fLgrHrCF/IMG-4875.webp"
         alt="Workshop photo" />
    <img src="https://i.postimg.cc/HWrYpGqr/image.webp"
         alt="Workshop photo" />
    <img src="https://i.postimg.cc/W4QQ2dTF/cyberdeck.jpg"
         alt="Workshop photo" />
    <img src="https://i.postimg.cc/L4krp475/wires.webp"
         alt="Workshop photo" />
  </div>

  <div class="image-row">
    <img src="https://i.postimg.cc/Y9hHqgy5/IMG-5415.jpg" alt="Workshop photo" style="max-width: 300px;" />
    <img src="https://i.postimg.cc/RhK2NT1D/books.webp" alt="Workshop photo" style="transform: rotate(-90deg); transform-origin: center; width: 250px;" />
  </div>

  <h4>CTF's and Stuff</h4>
  <p>I just started with CTFs  in 2024, but I only really got serious about it this year. I find myself gravitating towards forensics and reverse engineering challenges, plus hardware ones. While a lot of CTFs are pretty gamified and not always that useful for real-world application, some actually make you think and help sharpen your technical and problem-solving skills. Sometimes I'll burn a whole day on one challenge and come up empty, other times I'll dominate. What I love most about CTFs is the team communication and problem-solving, then reading writeups afterward and talking with other teams about their approaches once the competition wraps up. It's just cool because you don't see many other fields where you can learn and practice new stuff from random competitions that pop up basically every week.</p>

  <div class="image-row">
    <img src="https://i.postimg.cc/CxL6g02t/1746214331685.jpg"
         alt="Workshop photo" />
    <img src="https://i.postimg.cc/L8CQ47Ks/rev.jpg"
         alt="Workshop photo" class="tall-image" />
  </div>

  <hr>

  <h3 class="section-title">Stuff I Like Doing</h3>

  <div style="text-align: center; margin: 2rem 0;">
    <div class="badge">Malware Analysis</div>
    <div class="badge">Reverse Engineering</div>
    <div class="badge">Forensics</div>
    <div class="badge">Electronics & Microcontrollers</div>
    <div class="badge">IoT Hacking</div>
    <div class="badge">Touching Grass</div>
  </div>

</div>

<script>
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Interactive Hover Effects for Images
  const setupImageHover = () => {
    // Check if device supports mouse events (not touch-only)
    if (window.matchMedia("(hover: hover)").matches) {
      document.querySelectorAll('.image-row img').forEach(img => {
        img.addEventListener('mousemove', (e) => {
          const rect = img.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        });
        
        img.addEventListener('mouseleave', () => {
          img.style.transform = '';
        });
      });
    }
  };

  // Call setup immediately
  setupImageHover();

  // Also setup after a delay to catch any late-loading images
  setTimeout(setupImageHover, 1000);

  // Add random glitch effect
  setInterval(() => {
    if (Math.random() > 0.95) {
      document.body.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
      setTimeout(() => {
        document.body.style.transform = '';
      }, 50);
    }
  }, 3000);
});
</script>