// Fungsi toggle preview di card
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.btn-toggle');
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            targetEl.style.display = targetEl.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Smooth scroll untuk navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            targetEl.scrollIntoView({ behavior: 'smooth' });
        });
    });
});