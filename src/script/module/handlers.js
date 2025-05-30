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

  const taskItem = {
    id: Date.now(),
    title: value,
    completed: false,
    dateCreate: new Date(),
    dateComplete: null,
  }

  new TaskStore().add(taskItem)
}

export const handleRemove = itemId => {
  new TaskStore().remove(+itemId)
}

export const handleComplete = itemId => {
  const storage = new TaskStore()
  const currentTask = storage.get().find(item => item.id === +itemId)

  storage.update({
    ...currentTask,
    completed: !currentTask.completed,
    dateComplete: currentTask.completed ? null : new Date(),
  })
}
