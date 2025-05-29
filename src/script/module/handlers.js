import render from './render'
import TaskStore from './store-manager'

export const handleFilter = () => {
  console.log('hadnle filter')
}

export const handleSorting = () => {
  console.log('hadnle sorting')
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
  render()
}

export const handleRemove = itemId => {
  new TaskStore().remove(+itemId)
  render()
}

export const handleComplete = itemId => {
  const storage = new TaskStore()
  const currentTask = storage.get().find(item => item.id === +itemId)

  storage.update({
    ...currentTask,
    completed: !currentTask.completed,
  })
  render()
}
