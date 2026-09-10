/**
 * UI Module
 * Handles all UI updates and interactions
 */

const UI = (() => {
    let currentFilter = 'all';

    /**
     * Initialize UI on page load
     */
    const init = () => {
        render();
        attachEventListeners();
    };

    /**
     * Render all UI elements
     */
    const render = () => {
        updateStats();
        renderTodos();
        updateEmptyState();
        updateClearButton();
    };

    /**
     * Render tasks in the list
     */
    const renderTodos = () => {
        const todoList = document.getElementById('todoList');
        const tasks = Storage.getFilteredTasks(currentFilter);

        todoList.innerHTML = '';

        if (tasks.length === 0) {
            return;
        }

        tasks.forEach(task => {
            const li = createTodoElement(task);
            todoList.appendChild(li);
        });
    };

    /**
     * Create a single todo list item element
     * @param {Object} task - Task object
     * @returns {HTMLElement} List item element
     */
    const createTodoElement = (task) => {
        const li = document.createElement('li');
        li.className = `todo-item ${task.completed ? 'completed' : ''}`;
        li.setAttribute('data-id', task.id);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = task.completed;
        checkbox.setAttribute('aria-label', `Mark ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`);
        checkbox.addEventListener('change', () => {
            Storage.toggleTask(task.id);
            li.classList.toggle('completed');
            updateStats();
        });

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = task.text;
        span.title = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '🗑️';
        deleteBtn.setAttribute('aria-label', `Delete ${task.text}`);
        deleteBtn.addEventListener('click', () => {
            Storage.deleteTask(task.id);
            render();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        return li;
    };

    /**
     * Update statistics display
     */
    const updateStats = () => {
        const stats = Storage.getStats();
        document.getElementById('totalCount').textContent = stats.total;
        document.getElementById('activeCount').textContent = stats.active;
        document.getElementById('completedCount').textContent = stats.completed;
    };

    /**
     * Update empty state visibility
     */
    const updateEmptyState = () => {
        const emptyState = document.getElementById('emptyState');
        const todoList = document.getElementById('todoList');
        const tasks = Storage.getFilteredTasks(currentFilter);
        const isEmpty = tasks.length === 0 && (currentFilter === 'all' || Storage.getStats().total === 0);

        if (isEmpty) {
            emptyState.classList.add('active');
            todoList.style.display = 'none';
        } else {
            emptyState.classList.remove('active');
            todoList.style.display = 'block';
        }
    };

    /**
     * Update clear completed button state
     */
    const updateClearButton = () => {
        const clearBtn = document.getElementById('clearCompletedBtn');
        const stats = Storage.getStats();
        clearBtn.disabled = stats.completed === 0;
    };

    /**
     * Attach event listeners
     */
    const attachEventListeners = () => {
        // Todo form submission
        const form = document.getElementById('todoForm');
        form.addEventListener('submit', handleAddTodo);

        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilterChange);
        });

        // Clear completed button
        const clearBtn = document.getElementById('clearCompletedBtn');
        clearBtn.addEventListener('click', handleClearCompleted);
    };

    /**
     * Handle adding a new todo
     * @param {Event} e - Submit event
     */
    const handleAddTodo = (e) => {
        e.preventDefault();
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (text === '') {
            input.focus();
            return;
        }

        Storage.addTask(text);
        input.value = '';
        input.focus();

        // Reset filter to 'all' to see new task
        setFilter('all');
        render();
    };

    /**
     * Handle filter button click
     * @param {Event} e - Click event
     */
    const handleFilterChange = (e) => {
        const filter = e.target.getAttribute('data-filter');
        setFilter(filter);
    };

    /**
     * Set active filter
     * @param {string} filter - 'all', 'active', or 'completed'
     */
    const setFilter = (filter) => {
        currentFilter = filter;

        // Update active button
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });

        render();
    };

    /**
     * Handle clear completed button click
     */
    const handleClearCompleted = () => {
        const stats = Storage.getStats();
        if (stats.completed === 0) return;

        const confirmed = confirm(
            `Delete ${stats.completed} completed task${stats.completed > 1 ? 's' : ''}? This cannot be undone.`
        );

        if (confirmed) {
            Storage.clearCompleted();
            render();
        }
    };

    /**
     * Focus the input field (for keyboard shortcuts)
     */
    const focusInput = () => {
        document.getElementById('todoInput').focus();
    };

    return {
        init,
        render,
        setFilter,
        focusInput,
        createTodoElement
    };
})();
