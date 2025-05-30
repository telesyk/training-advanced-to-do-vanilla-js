import { ATTRIBUTE_DATA_ACTION, EVENT_ACTION, SORTING_TYPE } from './constants'

export function sortByDate(tasks) {
  const buttonSort = document.querySelector(
    `[${ATTRIBUTE_DATA_ACTION}=${EVENT_ACTION.sortByDate}]`
  )
  const currentSortType = buttonSort.dataset.sortType
  const sortedTasks = tasks.sort((a, b) => {
    return Date.parse(a.dateCreate) - Date.parse(b.dateCreate)
  })

  if (currentSortType === SORTING_TYPE.DESC) {
    buttonSort.dataset.sortType = SORTING_TYPE.ASC
    return sortedTasks
  }

  buttonSort.dataset.sortType = SORTING_TYPE.DESC
  return sortedTasks.reverse()
}

export function filterTasks(tasks, filterType) {
  switch (filterType) {
    case EVENT_ACTION.filterCompleted:
      return tasks.filter(task => !!task.completed)
    case EVENT_ACTION.filterInProgress:
      return tasks.filter(task => !task.completed)
    default:
      return tasks
  }
}
