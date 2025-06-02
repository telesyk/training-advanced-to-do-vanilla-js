import {
  ATTRIBUTE_DATA_ACTION,
  CLASSNAME_LIST_NORMAL,
  CLASSNAME_LIST_REVERSE,
  EVENT_ACTION,
  SELECTOR_ROOT_ELEMENT,
} from './constants'

export function sortByDate() {
  const listElement = document.querySelector(SELECTOR_ROOT_ELEMENT)

  listElement.classList.toggle(CLASSNAME_LIST_NORMAL)
  listElement.classList.toggle(CLASSNAME_LIST_REVERSE)
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
