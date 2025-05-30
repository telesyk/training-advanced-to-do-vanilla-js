The project has no straight convention.
The achievement of this Test project is to practice different approaches.

### 🗂️ File/Folder Structure

```pgsql
task-manager/
├── index.html                    # Main HTML entry point
├── style.css                     # TailwindCSS import (optional if using CDN)
├── script/
│   ├── main.js                   # App entry point
│   ├── constants.js              # Most reusable values
│   ├── mockData.js               # Tempooral usage for the develepmoont process
│   ├── taskFactory.js            # ? Task creation using closures
│   ├── taskManager.js            # ? TaskManager class (add, complete, list tasks)
│   ├── logger.js                 # ? Logger using call/apply
│   ├── storage.js                # ? Async mock server with Promises
│   ├── utils.js                  # ? HOFs: filter, sort, map tasks
│   ├── components/
│   │   ├── index.js              # A component hub
│   │   └── [components-name].js  # Single component
│   └── module/
│       ├── render.js             # Display the list of tasks
│       ├── handlers.js           # Cover all used Handler's
│       ├── actions.js            # Cover all used Actiion's
│       └── create-element.js     # CreateElement class (setAttributes, setContent, init)
└── README.md

```
