const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Afficher pop-up de confirmation au retour de Basin
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    
    if (params.get('success') === 'true') {
        Swal.fire({
            title: '✅ Message reçu!',
            text: 'Merci, je vous recontacterai très rapidement.',
            icon: 'success',
            confirmButtonText: 'Fermer',
            confirmButtonColor: '#173a30',
            background: '#F5EFE7',
            color: '#1F2933'
        });
        
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 500);
        
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});