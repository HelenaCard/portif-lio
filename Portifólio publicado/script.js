
// Load Python animation
lottie.loadAnimation({
    container: document.getElementById('pythonAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets5.lottiefiles.com/packages/lf20_2znxgjyt.json' // Python animation
});

// Load AI animation
lottie.loadAnimation({
    container: document.getElementById('aiAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_it8yjgsk.json' // AI/Robot animation
});

// Load Data animation
lottie.loadAnimation({
    container: document.getElementById('dataAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_qp1q7mct.json' // Data Analytics animation
});

// Load Avatar animation
lottie.loadAnimation({
    container: document.getElementById('avatarAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_w98qte06.json' // Female engineer character
});

// Create binary background
function createBinaryBackground() {
    const binaryContainer = document.createElement('div');
    binaryContainer.className = 'binary-overlay';
    document.body.appendChild(binaryContainer);

    for (let i = 0; i < 50; i++) {
        const binaryText = document.createElement('div');
        binaryText.className = 'binary-text';
        binaryText.style.left = Math.random() * 100 + 'vw';
        binaryText.style.top = Math.random() * 100 + 'vh';
        binaryText.textContent = Math.random().toString(2).substr(2);
        document.body.appendChild(binaryText);
    }
}



createBinaryBackground();



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.skill-card, .education-card, .btn').forEach((el) => {
    observer.observe(el);
});


