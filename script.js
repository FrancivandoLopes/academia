document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        alert(`Obrigado, ${formData.get('name')}! Sua mensagem foi enviada.`);
        contactForm.reset();
    });
});
