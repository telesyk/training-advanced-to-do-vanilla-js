import { ATTRIBUTE_DATA_ACTION, EVENT_ACTION, SORTING_TYPE } from './constants'

export function sortByDate(list) {
  const buttonSort = document.querySelector(
    `[${ATTRIBUTE_DATA_ACTION}=${EVENT_ACTION.sortByDate}]`
  )
  const currentSortType = buttonSort.dataset.sortType
  const sortedTasks = list.sort((a, b) => {
    return Date.parse(a.dateCreate) - Date.parse(b.dateCreate)
  })

  if (currentSortType === SORTING_TYPE.DESC) {
    buttonSort.dataset.sortType = SORTING_TYPE.ASC
    return sortedTasks
  }

  buttonSort.dataset.sortType = SORTING_TYPE.DESC
  return sortedTasks.reverse()
}

export function filterTasks(list, filterType) {
  switch (filterType) {
    case EVENT_ACTION.filterCompleted:
      return list.map(task => {
        if (task.completed) return { ...task, hidden: false }
        return {
          ...task,
          hidden: true,
        }
      })
    case EVENT_ACTION.filterInProgress:
      return list.map(task => {
        if (!task.completed) return { ...task, hidden: false }
        return {
          ...task,
          hidden: true,
        }
      })
    default:
      return list.map(task => {
        return { ...task, hidden: false }
      })
  }
}

export function getEventType(target) {
  if (target.hasAttribute(ATTRIBUTE_DATA_ACTION)) {
    return target.getAttribute(ATTRIBUTE_DATA_ACTION)
  }
}
