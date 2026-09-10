# To-Do List Application

A modern, feature-rich to-do list application with local storage, task filtering, and a clean user interface built with HTML, CSS, and vanilla JavaScript.

## Features

✅ **Add Tasks** - Create new to-do items with ease
✅ **Local Storage** - All tasks persist in browser storage
✅ **Mark Complete** - Check off completed tasks
✅ **Delete Tasks** - Remove tasks you no longer need
✅ **Filter Tasks** - View All, Active, or Completed tasks
✅ **Task Counter** - See total, active, and completed task counts
✅ **Clear Completed** - Bulk remove all completed tasks
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Dark/Light Mode** - Toggle between themes
✅ **Keyboard Support** - Press Enter to add tasks

## Live Demo

Visit: [https://github.com/mavimbela/todo-list-app](https://github.com/mavimbela/todo-list-app)

## Quick Start

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- No build tools required!

### Installation

1. Clone the repository
```bash
git clone https://github.com/mavimbela/todo-list-app.git
cd todo-list-app
```

2. Open in browser
```bash
# Option 1: Open directly
open index.html

# Option 2: Use Python (Python 3)
python -m http.server 8000
# Visit: http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server
# Visit: http://localhost:8080
```

## Project Structure

```
todo-list-app/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Main stylesheet
│   └── responsive.css  # Mobile responsive styles
├── js/
│   ├── app.js          # Main application logic
│   ├── storage.js      # Local storage management
│   ├── ui.js           # UI interaction handlers
│   └── theme.js        # Theme toggle functionality
├── assets/
│   └── icons/          # SVG and image assets
├── docs/
│   ├── API.md          # JavaScript API documentation
│   ├── ARCHITECTURE.md # System architecture
│   └── CONTRIBUTING.md # Contribution guidelines
├── tests/
│   ├── storage.test.js # Storage tests
│   └── app.test.js     # Application tests
├── package.json        # Project metadata
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How to Use

1. **Add a Task**
   - Type your task in the input field
   - Press Enter or click the Add button
   - Task appears in your list

2. **Complete a Task**
   - Click the checkbox next to the task
   - Task will be marked as complete
   - Strikethrough text indicates completion

3. **Delete a Task**
   - Click the trash/delete icon
   - Task is removed from the list

4. **Filter Tasks**
   - Click "All" to see all tasks
   - Click "Active" to see incomplete tasks only
   - Click "Completed" to see finished tasks only

5. **Toggle Theme**
   - Click the theme icon (sun/moon)
   - Switch between light and dark modes

6. **Clear Completed Tasks**
   - Click "Clear Completed" button
   - All finished tasks are removed

## Local Storage

Your tasks are automatically saved to browser's local storage. They persist even after:
- Closing the browser
- Refreshing the page
- Restarting your computer

Local storage limits:
- ~5-10 MB per site in most browsers
- Supports thousands of tasks

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No frameworks or dependencies
- **Local Storage API** - Browser data persistence

## Browser Support

| Browser | Support |
|---------|----------|
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |
| IE 11   | ❌ Not supported |

## Performance

- **Bundle Size**: < 50 KB (minified)
- **Load Time**: < 1 second
- **No external dependencies**
- **100% offline capable**

## Development

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
```

### Start Development Server
```bash
npm run dev
```

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details

## Roadmap

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Task subtasks
- [ ] Search functionality
- [ ] Drag and drop reordering
- [ ] Cloud sync option
- [ ] Mobile app

## Changelog

### Version 1.0.0 (Current)
- Initial release
- Basic CRUD operations
- Local storage persistence
- Filter functionality
- Theme toggle
- Responsive design

## Support

- 📖 [Documentation](docs/)
- 🐛 [Report Issues](https://github.com/mavimbela/todo-list-app/issues)
- 💬 [Discussions](https://github.com/mavimbela/todo-list-app/discussions)
- 📧 Email: support@example.com

## Acknowledgments

- Inspired by TodoMVC project
- Icons from Font Awesome
- Community feedback and contributions

---

**Made with ❤️ by the development team**
