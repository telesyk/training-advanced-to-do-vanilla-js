import TaskStore from './store-manager'
import render from './render'
import { filterTasks, sortByDate } from '../utils'

export const handleFilter = filterType => {
  const tasks = new TaskStore().get()
  const filteredTasks = filterTasks(tasks, filterType)

  render(filteredTasks)
}

export const handleSorting = () => {
  const tasks = new TaskStore().get()
  const sortedTasks = sortByDate(tasks)

  render(sortedTasks)
}

export const handleAdd = value => {
  if (!value) return

  const currentList = new TaskStore().get()
  const taskItem = {
    id: Date.now(),
    title: value,
    completed: false,
    dateCreate: new Date(),
    dateComplete: null,
  }

  new TaskStore().update([...currentList, taskItem])
}

export const handleRemove = itemId => {
  if (!itemId) return

  const currentList = new TaskStore().get()
  const newList = currentList.filter(task => task.id !== +itemId)

  new TaskStore().update(newList)
}

export const handleComplete = itemId => {
  if (!itemId) return

  const currentList = new TaskStore().get()
  const newList = currentList.map(task => {
    if (task.id !== +itemId) return task

    return {
      ...task,
      completed: !task.completed,
      dateComplete: task.completed ? null : new Date(),
    }
  })

  new TaskStore().update(newList)
}
