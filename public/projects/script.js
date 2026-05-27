/* ==========================================
   INSPIDEV — Cinematic Anti-Gravity Script
   ========================================== */

gsap.registerPlugin(ScrollTrigger);
document.body.style.overflowY = 'hidden';

// ==========================================
// ELEMENTS
// ==========================================
const theLogo = document.getElementById('the-logo');
const progressTrack = document.getElementById('progress-track');
const progressBar = document.getElementById('progress-bar');
const mainContent = document.getElementById('main-content');

// ==========================================
// 1. CENTER LOGO + BAR ON SCREEN
// ==========================================
function centerLoaderElements() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const logoW = theLogo.offsetWidth;
    const logoH = theLogo.offsetHeight;
    const trackW = progressTrack.offsetWidth;

    theLogo.style.left = (vw / 2 - logoW / 2) + 'px';
    theLogo.style.top = (vh / 2 - logoH / 2 - 25) + 'px';

    progressTrack.style.left = (vw / 2 - trackW / 2) + 'px';
    progressTrack.style.top = (vh / 2 + logoH / 2 + 15) + 'px';
}
centerLoaderElements();
window.addEventListener('resize', centerLoaderElements);

// ==========================================
// 2. BLOB INIT
// ==========================================
const mainBlobs = document.querySelectorAll('.blob');
mainBlobs.forEach(blob => {
    const a = Math.random() * Math.PI * 2;
    const d = Math.max(window.innerWidth, window.innerHeight) * 1.5;
    gsap.set(blob, { x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 3, opacity: 0 });
});

const smallBlobs = document.querySelectorAll('.s-blob');
smallBlobs.forEach(blob => {
    const a = Math.random() * Math.PI * 2;
    const d = Math.max(window.innerWidth, window.innerHeight);
    gsap.set(blob, { x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 2, opacity: 0 });
});

// ==========================================
// 3. BLOB CONTINUOUS FLOAT
// ==========================================
const animateBlobs = (selector, dur, sv) => {
    document.querySelectorAll(selector).forEach(blob => {
        gsap.to(blob, {
            x: () => (Math.random() - 0.5) * 100,
            y: () => (Math.random() - 0.5) * 100,
            rotation: () => Math.random() * 360,
            scale: () => 1 - sv + Math.random() * (sv * 2),
            duration: () => dur + Math.random() * 4,
            ease: "sine.inOut", yoyo: true, repeat: -1
        });
        gsap.to(blob, {
            borderTopLeftRadius: () => `${40 + Math.random() * 30}%`,
            borderTopRightRadius: () => `${40 + Math.random() * 30}%`,
            borderBottomLeftRadius: () => `${40 + Math.random() * 30}%`,
            borderBottomRightRadius: () => `${40 + Math.random() * 30}%`,
            duration: () => (dur - 1) + Math.random() * 3,
            ease: "sine.inOut", yoyo: true, repeat: -1
        });
    });
};

// ==========================================
// 4. MOUSE REPULSION
// ==========================================
document.addEventListener('mousemove', e => {
    const mx = e.clientX, my = e.clientY;
    document.querySelectorAll('.blob').forEach(blob => {
        const r = blob.getBoundingClientRect();
        const bx = r.left + r.width / 2, by = r.top + r.height / 2;
        const dx = mx - bx, dy = my - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
            gsap.to(blob, {
                x: `-=${dx * 0.15}`, y: `-=${dy * 0.15}`,
                duration: 0.8, ease: "power2.out", overwrite: "auto"
            });
            gsap.delayedCall(1, () => {
                if (!gsap.isTweening(blob)) {
                    gsap.to(blob, {
                        x: () => (Math.random() - 0.5) * 100,
                        y: () => (Math.random() - 0.5) * 100,
                        duration: 4 + Math.random() * 4,
                        ease: "sine.inOut", yoyo: true, repeat: -1
                    });
                }
            });
        }
    });
});

// ==========================================
// 5. FAKE LOADING
// ==========================================
let progress = 0;

const progressSim = setInterval(() => {
    if (progress < 88) {
        progress += Math.random() * 7;
        if (progress > 88) progress = 88;
        progressBar.style.width = `${progress}%`;
    }
}, 200);

// Blobs fly in during loading
gsap.to(mainBlobs, {
    x: 0, y: 0, scale: 1, opacity: 1,
    duration: 3.5, ease: "power3.out", stagger: 0.25
});
gsap.to(smallBlobs, {
    x: 0, y: 0, scale: 1, opacity: 1,
    duration: 3, ease: "power3.out", stagger: 0.12
});

// ==========================================
// 6. ON LOAD — SEAMLESS CINEMATIC TRANSITION
// ==========================================
window.addEventListener('load', () => {
    clearInterval(progressSim);

    gsap.to(progressBar, {
        width: '100%',
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: beginTransition
    });
});

function beginTransition() {
    const tl = gsap.timeline();

    // Sit at 100% for a moment
    tl.to({}, { duration: 0.5 });

    // === PHASE A: Bar collapses from BOTH SIDES to center ===
    // We keep the track centered and shrink its width so it visually collapses inward
    const trackRect = progressTrack.getBoundingClientRect();
    const trackCenterX = trackRect.left + trackRect.width / 2;

    tl.to(progressTrack, {
        width: 14,
        height: 14,
        borderRadius: '50%',
        left: trackCenterX - 7, // keep centered as it shrinks
        duration: 1.2,
        ease: "expo.inOut"
    });

    tl.to(progressBar, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
    }, "-=0.5");

    // === PHASE B: Dot stays in place, Apple blur fade ===
    tl.to(progressTrack, {
        filter: 'blur(20px)',
        opacity: 0,
        scale: 2.2,
        duration: 1.0,
        ease: "power2.out"
    }, "+=0.1");

    // === PHASE C: Show main content underneath ===
    tl.call(() => {
        mainContent.classList.remove('main-hidden');
        mainContent.style.opacity = '0';
        mainContent.style.pointerEvents = '';
    }, null, "-=0.6");

    tl.to(mainContent, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.3");

    // === PHASE D: Logo glides from center to hero landing ===
    tl.call(() => {
        const landing = document.getElementById('logo-landing');
        const landingRect = landing.getBoundingClientRect();

        // Match the size of the landing container precisely
        const targetW = landingRect.width;
        const targetLeft = landingRect.left;
        const targetTop = landingRect.top;

        gsap.to(theLogo, {
            left: targetLeft,
            top: targetTop,
            width: targetW,
            duration: 1.8,
            ease: "expo.inOut",
            onComplete: () => {
                // Change positioning to relative inside landing container so it is fully responsive on resize and scrolls naturally
                theLogo.style.position = 'absolute';
                theLogo.style.left = '0';
                theLogo.style.top = '0';
                theLogo.style.width = '100%';
                theLogo.style.height = '100%';
                landing.appendChild(theLogo);
                
                // Trigger the molten orange glow CSS animation
                theLogo.classList.add('molten-active');
            }
        });
    }, null, "-=0.4");

    // === PHASE E: Reveal ESTB (floating animation) ===
    gsap.set('#hero-estb', { y: 20 });
    tl.to('#hero-estb', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out"
    }, "+=0.6");

    // ESTB floating animation — continuous gentle bob and subtle sway
    tl.call(() => {
        gsap.to('#hero-estb', {
            y: -12,
            rotation: 1.5,
            duration: 3.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    });

    // === PHASE F: Social balls pop in ===
    tl.to('#social-links', {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.8");

    tl.from('.social-ball', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.6)"
    }, "-=0.4");

    // === PHASE G: Menu toggle button fades in ===
    gsap.set('#menu-toggle', { scale: 0, opacity: 0 });
    tl.to('#menu-toggle', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5");

    // === UNLOCK & START FLOATS ===
    tl.call(() => {
        document.body.style.overflowY = 'auto';
        animateBlobs('.blob', 5, 0.15);
        animateBlobs('.s-blob', 3, 0.1);

        // Social balls gentle float
        gsap.utils.toArray('.social-ball').forEach(btn => {
            gsap.to(btn, {
                y: () => -6 - Math.random() * 5,
                duration: () => 1.6 + Math.random() * 0.8,
                ease: "sine.inOut", yoyo: true, repeat: -1
            });
        });
    });
}

// ==========================================
// 8. INTERACTIVE HAMBURGER & GLASS DRAWER
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const navGlassBox = document.getElementById('nav-glass-box');

if (menuToggle && navGlassBox) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navGlassBox.classList.toggle('active');
    });

    // Close drawer when clicking any link inside it
    const navLinks = navGlassBox.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navGlassBox.classList.remove('active');
        });
    });

    // Close drawer when clicking outside the nav box and button
    document.addEventListener('click', (e) => {
        if (navGlassBox.classList.contains('active') && 
            !navGlassBox.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navGlassBox.classList.remove('active');
        }
    });
}

// ==========================================
// 7. SCROLL ANIMATIONS
// ==========================================
const morphSymbol = document.getElementById('morph-symbol');
if (morphSymbol) {
    gsap.to(morphSymbol, {
        y: -30, rotation: 5,
        duration: 3, ease: "sine.inOut",
        yoyo: true, repeat: -1
    });

    ScrollTrigger.create({
        trigger: "#million-dollar",
        start: "top 60%",
        end: "center 40%",
        scrub: true,
        onUpdate: self => {
            if (self.progress > 0.5) {
                if (morphSymbol.textContent !== "?") {
                    morphSymbol.textContent = "?";
                    gsap.to(morphSymbol, { color: '#ff7b00', scale: 1.2, rotationY: 180, duration: 0.4 });
                }
            } else {
                if (morphSymbol.textContent !== "$") {
                    morphSymbol.textContent = "$";
                    gsap.to(morphSymbol, { color: '#ffffff', scale: 1, rotationY: 0, duration: 0.4 });
                }
            }
        }
    });
}

gsap.from('.md-text', {
    scrollTrigger: { trigger: "#million-dollar", start: "top 70%" },
    y: 80, opacity: 0, duration: 1.2, ease: "power3.out"
});

gsap.from('#final-section .large-text', {
    scrollTrigger: { trigger: "#final-section", start: "top 75%" },
    scale: 0.8, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.5)"
});
