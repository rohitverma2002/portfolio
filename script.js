// Typing Animation and Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen Animation
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-text');
    const mainContent = document.querySelector('.main-content');
    const text = "ROHIT";
    let charIndex = 0;

    function typeLoadingText() {
        if (charIndex < text.length) {
            loadingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeLoadingText, 200);
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                mainContent.classList.remove('hidden');
                setTimeout(() => {
                    loadingScreen.classList.add('remove');
                    // Start hero text animation after loading screen is removed
                    startHeroAnimation();
                }, 500);
            }, 3000);
        }
    }

    // Hero Text Animation - Updated with more professional titles
    function startHeroAnimation() {
        const heroTextContainer = document.querySelector('.hero-text');
        const words = ['Final Year Undergraduate', 'Aspiring Data Analyst', 'Tech Enthusiast'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Remove character
                charIndex--;
            } else {
                // Add character
                charIndex++;
            }

            // Create text with cursor
            heroTextContainer.innerHTML = `
                <span>${currentWord.substring(0, charIndex)}</span>
                <span class="cursor"></span>
            `;

            // Typing speed
            let typeSpeed = isDeleting ? 50 : 100;

            // If word is complete
            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at end of word
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                // Move to next word
                wordIndex = (wordIndex + 1) % words.length;
                // Pause before typing next word
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        // Start the typing effect
        typeEffect();
    }

    // Start the loading animation
    typeLoadingText();
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Video Background
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('heroVideo');
    
    // Set initial playback speed
    video.playbackRate = 1.0;

    // Ensure video plays smoothly after tab becomes active
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            // Tab is active, reset playback rate
            video.play().catch(() => {});
            video.playbackRate = 1.0;
        }
    });

    // Ensure video plays on load
    video.play().catch((error) => {
        console.error("Video autoplay failed:", error);
    });
});
