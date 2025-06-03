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
│   ├── mockData.js               # Initial data on a first load
│   ├── utils.js                  # Helpers: filter, sort, map tasks
│   ├── components/
│   │   ├── index.js              # A component hub
│   │   └── [components-name].js  # Single component
│   └── module/
│       ├── render.js             # Display the list of tasks
│       ├── handlers.js           # Cover all Handler's for actions
│       ├── actions.js            # Cover used Actiion's: onClick, onKeyUp
│       ├── store-manager.js      # Managing of the apps store (localStorage)
│       └── create-element.js     # CreateElement class (setAttributes, setContent, init)
└── README.md

```

### TaskStore (`store-manager.js`)

It exports a `TaskStore` constructor function that manages a task list using the browser's `localStorage` for persistence.
The store is initialized with either existing data from `localStorage` or fallback mock data.
It exposes two main methods:

- `get()`: Returns a shallow copy of the current task list.
- `update(newState)`: Replaces the stored task list with a new state, updates the internal store, and triggers a UI re-render.

Arrow functions are used to ensure the correct context for `this` within the returned methods.

### actions (`actions.js`)

This module sets up global event listeners to handle user interactions in the to-do application.
It exports the actions function, which attaches `click` and `keyup` event listeners to the document:

- On `click`, it determines the action type (add, remove, complete, sort, or filter) based on the clicked element and delegates the logic to the appropriate handler function.
- On `keyup`, it listens for the Enter key in input fields to trigger the add action.

### handlers (`handlers.js`)

This module defines handler functions for core task operations in the to-do application.
It exports functions to filter, sort, add, remove, and complete tasks:

- `handleFilter(filterType)`: Filters tasks based on the provided filter type and updates the store.
- `handleSorting()`: Sorts tasks by date using a utility function.
- `handleAdd(value)`: Adds a new task with the given title to the store.
- `handleRemove(itemId)`: Removes the task with the specified ID from the store.
- `handleComplete(itemId)`: Toggles the completion status of the specified task and updates its completion date.

Each handler interacts with the `TaskStore` for persistent storage and ensures the UI is updated accordingly.
These functions are intended to be used as callbacks for user actions triggered in the UI.

### render (`render.js`)

This module provides the main rendering logic for the to-do application's task list UI.
It exports a single `render` function that:

- Retrieves the current list of tasks from persistent storage using `TaskStore`.
- Clears the root DOM element where tasks are displayed.
- If there are no tasks, renders an "empty list" placeholder.
- Otherwise, iterates over the tasks, skipping any that are hidden, and creates a `Task` component for each visible task, passing relevant properties (such as title, completion status, and dates).
- Appends all rendered task elements to the root element in the DOM.

This function ensures the UI always reflects the current state of the task data and is called after any operation that modifies the task list.

### CreateElement (`create-element.js`)

This module provides a utility for creating and configuring DOM elements in a structured, reusable way.
It exports the `CreateElement` constructor function, which allows you to:

- Specify a tag name, content, and a set of properties (such as classes or attributes) for the new element.
- Use prototype methods to set attributes (`setAttributes`) and content (`setContent`) on the element.
- Call the `init` method to fully configure the element and return it, ready to be inserted into the DOM.

This utility simplifies dynamic element creation and ensures consistent handling of attributes and content throughout the application.
