import TaskStore from './store-manager'

export const handleFilter = () => {
  console.log('hadnle filter')
}

export const handleSorting = sortBy => {
  console.log('hadnle sorting', sortBy)
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
  })
}
