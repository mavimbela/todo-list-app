/**
 * Main Application Module
 * Initializes and coordinates the application
 */

const App = (() => {
    /**
     * Initialize the application
     */
    const init = () => {
        // Initialize theme first (prevents flash of wrong theme)
        Theme.init();

        // Initialize UI
        UI.init();

        // Set up keyboard shortcuts
        setupKeyboardShortcuts();

        // Log initialization
        console.log('✅ To-Do List App initialized successfully');
        console.log('📊 Tasks loaded:', Storage.getTasks().length);
    };

    /**
     * Set up keyboard shortcuts
     */
    const setupKeyboardShortcuts = () => {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + N: Focus input field
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                UI.focusInput();
            }

            // Escape: Blur input field
            if (e.key === 'Escape') {
                document.getElementById('todoInput').blur();
            }
        });
    };

    /**
     * Get app version
     * @returns {string} Version number
     */
    const getVersion = () => {
        return '1.0.0';
    };

    /**
     * Get application info
     * @returns {Object} App information
     */
    const getInfo = () => {
        return {
            name: 'To-Do List App',
            version: getVersion(),
            author: 'Your Name',
            description: 'A modern to-do list application with local storage',
            repository: 'https://github.com/mavimbela/todo-list-app'
        };
    };

    return {
        init,
        getVersion,
        getInfo
    };
})();

// Initialize the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App.init);
} else {
    App.init();
}
