const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('success-modal');

function openModal() {
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
    }
}

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
}

if (hamburger && navMenu) {
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        
        fetch('https://formspree.io/f/mgobzdaz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: '✅ Message reçu!',
                    text: 'Merci, je vous recontacterai très rapidement.',
                    icon: 'success',
                    confirmButtonText: 'Fermer',
                    confirmButtonColor: '#173a30',
                    background: '#F5EFE7',
                    color: '#1F2933'
                });
                contactForm.reset();
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi. Réessaie.');
        });
    });
}

window.closeModal = closeModal;