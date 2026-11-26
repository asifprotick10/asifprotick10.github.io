document.addEventListener('DOMContentLoaded', () => {
    // Highlight the current page in the nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[href]').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const toggleButton = document.getElementById('dark-mode-toggle');
    const isLightMode = localStorage.getItem('darkMode') === 'disabled';

    // Apply saved theme on page load
    if (isLightMode) {
        document.body.classList.add('light-mode');
        if (toggleButton) toggleButton.innerHTML = "☀️";
    } else {
        document.body.classList.remove('light-mode');
        if (toggleButton) toggleButton.innerHTML = "🌙";
    }

    // Toggle theme on button click
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isNowLight = document.body.classList.contains('light-mode');
            localStorage.setItem('darkMode', isNowLight ? 'disabled' : 'enabled');
            toggleButton.innerHTML = isNowLight ? "☀️" : "🌙";
        });
    }
});
