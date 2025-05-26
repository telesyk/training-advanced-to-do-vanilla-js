### 🗂️ File/Folder Structure

```pgsql
task-manager/
├── index.html                # Main HTML entry point
├── style.css                 # TailwindCSS import (optional if using CDN)
├── script/
│   ├── main.js               # App entry point
│   ├── taskFactory.js        # Task creation using closures
│   ├── taskManager.js        # TaskManager class (add, complete, list tasks)
│   ├── logger.js             # Logger using call/apply
│   ├── storage.js            # Async mock server with Promises
│   └── utils.js              # HOFs: filter, sort, map tasks
└── README.md

```
