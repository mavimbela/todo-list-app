/**
 * Storage Module
 * Handles all local storage operations for tasks
 */

const Storage = (() => {
    const STORAGE_KEY = 'todos';
    const THEME_KEY = 'theme';

    /**
     * Get all tasks from local storage
     * @returns {Array} Array of task objects
     */
    const getTasks = () => {
        try {
            const tasks = localStorage.getItem(STORAGE_KEY);
            return tasks ? JSON.parse(tasks) : [];
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return [];
        }
    };

    /**
     * Save tasks to local storage
     * @param {Array} tasks - Array of task objects to save
     */
    const saveTasks = (tasks) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            if (error.name === 'QuotaExceededError') {
                alert('Storage quota exceeded! Please delete some tasks.');
            }
        }
    };

    /**
     * Add a new task
     * @param {string} text - Task text
     * @returns {Object} The created task object
     */
    const addTask = (text) => {
        const tasks = getTasks();
        const task = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        tasks.push(task);
        saveTasks(tasks);
        return task;
    };

    /**
     * Delete a task by ID
     * @param {number} id - Task ID
     */
    const deleteTask = (id) => {
        let tasks = getTasks();
        tasks = tasks.filter(task => task.id !== id);
        saveTasks(tasks);
    };

    /**
     * Toggle task completion status
     * @param {number} id - Task ID
     */
    const toggleTask = (id) => {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            saveTasks(tasks);
        }
    };

    /**
     * Delete all completed tasks
     */
    const clearCompleted = () => {
        let tasks = getTasks();
        tasks = tasks.filter(task => !task.completed);
        saveTasks(tasks);
    };

    /**
     * Get tasks by filter type
     * @param {string} filter - 'all', 'active', or 'completed'
     * @returns {Array} Filtered tasks
     */
    const getFilteredTasks = (filter = 'all') => {
        const tasks = getTasks();
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    };

    /**
     * Get task statistics
     * @returns {Object} Object with total, active, and completed counts
     */
    const getStats = () => {
        const tasks = getTasks();
        return {
            total: tasks.length,
            active: tasks.filter(t => !t.completed).length,
            completed: tasks.filter(t => t.completed).length
        };
    };

    /**
     * Get theme preference from storage
     * @returns {string} 'light-mode' or 'dark-mode'
     */
    const getTheme = () => {
        return localStorage.getItem(THEME_KEY) || 'light-mode';
    };

    /**
     * Save theme preference
     * @param {string} theme - 'light-mode' or 'dark-mode'
     */
    const setTheme = (theme) => {
        localStorage.setItem(THEME_KEY, theme);
    };

    /**
     * Export all tasks as JSON
     * @returns {string} JSON string of tasks
     */
    const exportTasks = () => {
        return JSON.stringify(getTasks(), null, 2);
    };

    /**
     * Import tasks from JSON
     * @param {string} jsonString - JSON string of tasks
     * @returns {boolean} Success status
     */
    const importTasks = (jsonString) => {
        try {
            const tasks = JSON.parse(jsonString);
            if (Array.isArray(tasks)) {
                saveTasks(tasks);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error importing tasks:', error);
            return false;
        }
    };

    /**
     * Clear all data from storage
     */
    const clearAll = () => {
        if (confirm('Are you sure you want to delete ALL tasks? This cannot be undone.')) {
            localStorage.removeItem(STORAGE_KEY);
        }
    };

    return {
        getTasks,
        saveTasks,
        addTask,
        deleteTask,
        toggleTask,
        clearCompleted,
        getFilteredTasks,
        getStats,
        getTheme,
        setTheme,
        exportTasks,
        importTasks,
        clearAll
    };
})();
