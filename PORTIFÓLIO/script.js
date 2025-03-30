
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

// Funcionalidade de compartilhamento de redes
const networkForm = document.getElementById('network-share-form');
const termsCheckbox = document.getElementById('terms-accept');
const submitButton = document.getElementById('share-submit');
const sharedNetworks = document.getElementById('shared-networks');

termsCheckbox.addEventListener('change', (e) => {
    submitButton.disabled = !e.target.checked;
});

networkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const networkCard = document.createElement('div');
    networkCard.className = 'network-card';
    networkCard.innerHTML = `
        <div class="network-name">${document.getElementById('share-name').value}</div>
        <div class="network-links">
            ${document.getElementById('share-linkedin').value ? `<a href="${document.getElementById('share-linkedin').value}" class="btn glow" target="_blank">LinkedIn</a>` : ''}
            ${document.getElementById('share-github').value ? `<a href="${document.getElementById('share-github').value}" class="btn glow" target="_blank">GitHub</a>` : ''}
            ${document.getElementById('share-instagram').value ? `<a href="${document.getElementById('share-instagram').value}" class="btn glow" target="_blank">Instagram</a>` : ''}
        </div>
        <div class="network-message">${document.getElementById('share-message').value}</div>
    `;

    sharedNetworks.insertBefore(networkCard, sharedNetworks.firstChild);
    networkForm.reset();
    submitButton.disabled = true;
});
