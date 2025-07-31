# NodeJS small Project for beginners 

A modular Node.js application that includes a basic web server, an event logger, and a simple to-do list feature.

---

## 📁 Project Structure

```
NODEJS/
└── server/
    ├── index.html          # Homepage
    ├── about.html          # About page
    ├── contact.html        # Contact page
    ├── server.js           # Main HTTP server
    ├── EventLogger/
    │   ├── logger.js       # Logs events to a text file
    │   └── eventlog.txt    # Log output
    └── todo/
        ├── todo.js         # Simple task manager logic
        └── tasks.json      # Task storage (JSON)
```

---

## 🚀 Features

- 🖥️ Serves static HTML pages via Node's `http` module.
- 📂 Event Logger logs memory usage and custom messages to a file.
- ✅ To-Do list with JSON-based persistence.

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/Saniya2229/nodejs_notebook.git
cd nodejs_notebook/server
```

2. Install any required dependencies *(if needed)*:

```bash
npm install
```

> *Note: If you're using only native Node.js modules like `fs`, `os`, and `events`, `npm install` may not be needed.*

---

## ▶️ Running the Project

To start the Node.js server:

```bash
node server.js
```

Then open your browser at:

```
http://localhost:3000
```

---

## 🛠️ Developer Notes

- Memory usage is logged every 3 seconds to `eventlog.txt`.
- The todo feature uses `tasks.json` for simple local storage.
- Avoid pushing the `.git/` folder inside `/todo` to your GitHub repo.

---

## 📄 License

This project is for learning purposes. You can modify and use it freely.
