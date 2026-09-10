/**
 * Theme Module
 * Handles light/dark mode toggling and persistence
 */

const Theme = (() => {
    const LIGHT_MODE = 'light-mode';
    const DARK_MODE = 'dark-mode';

    /**
     * Initialize theme on page load
     */
    const init = () => {
        const savedTheme = Storage.getTheme();
        applyTheme(savedTheme);
        attachEventListener();
    };

    /**
     * Apply theme to the page
     * @param {string} theme - 'light-mode' or 'dark-mode'
     */
    const applyTheme = (theme) => {
        document.body.className = theme;
        updateThemeButton(theme);
        Storage.setTheme(theme);
    };

    /**
     * Update theme button emoji
     * @param {string} theme - Current theme
     */
    const updateThemeButton = (theme) => {
        const btn = document.getElementById('themeToggle');
        if (btn) {
            btn.textContent = theme === LIGHT_MODE ? '🌙' : '☀️';
        }
    };

    /**
     * Toggle between light and dark mode
     */
    const toggle = () => {
        const currentTheme = document.body.className;
        const newTheme = currentTheme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
        applyTheme(newTheme);
    };

    /**
     * Attach click listener to theme button
     */
    const attachEventListener = () => {
        const btn = document.getElementById('themeToggle');
        if (btn) {
            btn.addEventListener('click', toggle);
        }
    };

    /**
     * Detect system preference for dark mode
     * @returns {boolean} True if system prefers dark mode
     */
    const prefersDarkMode = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    return {
        init,
        applyTheme,
        toggle,
        LIGHT_MODE,
        DARK_MODE
    };
})();
