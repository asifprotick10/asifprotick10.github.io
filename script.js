const toggleButton = document.getElementById('dark-mode-toggle');
let isDarkMode = true; // Default to dark mode

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isDarkMode = !isDarkMode;

    // Change the icon based on the mode
    if (isDarkMode) {
        toggleButton.innerHTML = "🌙"; // Moon icon for dark mode
    } else {
        toggleButton.innerHTML = "☀️"; // Sun icon for light mode
    }

    // Save preference in local storage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Load saved theme preference
if (localStorage.getItem('darkMode') === 'disabled') {
    document.body.classList.add('light-mode');
    toggleButton.innerHTML = "☀️"; // Sun icon for light mode
}
