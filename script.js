// Menu Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Formspree initialization
window.formspree = window.formspree || function () { 
  (formspree.q = formspree.q || []).push(arguments); 
};

formspree('initForm', { 
  formElement: '#contact-form', 
  formId: 'mgobzdaz' 
});

// Pop-up joli après envoi
document.getElementById('contact-form').addEventListener('formspree:submit', function(e) {
    Swal.fire({
        title: '✅ Message reçu!',
        text: 'Merci, je vous recontacterai très rapidement.',
        icon: 'success',
        confirmButtonText: 'Fermer',
        confirmButtonColor: '#173a30',
        background: '#F5EFE7',
        color: '#1F2933'
    });
    document.getElementById('contact-form').reset();
});