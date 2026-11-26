const NAV_HTML = `
    <a href="index.html">about</a>
    <a href="news.html">news</a>
    <a href="publications.html">publications</a>
    <a href="vlog.html">vlog</a>
    <a href="achievements.html">achievements</a>
    <a href="archive.html">archive</a>
    <button id="dark-mode-toggle">🌙</button>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject the shared nav markup (single source of truth, see NAV_HTML above)
    const navContainer = document.getElementById('site-nav');
    if (navContainer) navContainer.innerHTML = NAV_HTML;

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
