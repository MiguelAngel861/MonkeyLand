// Smooth scroll function
function scrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Dirección copiada al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Add click handler to server IP code
document.addEventListener('DOMContentLoaded', () => {
    const serverIp = document.querySelector('.server-ip');
    if (serverIp) {
        serverIp.style.cursor = 'pointer';
        serverIp.addEventListener('click', () => {
            copyToClipboard(serverIp.textContent.trim());
        });
        serverIp.title = 'Haz clic para copiar';
    }
});

// Navbar active link highlighting
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.style.color = '');
            link.style.color = 'var(--primary-color)';
        });
    });
});
