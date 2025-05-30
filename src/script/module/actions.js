import {
  EVENT_ACTION,
  ATTRIBUTE_DATA_ACTION,
  SELECTOR_INPUT_ELEMENT,
} from '../constants.js'
import {
  handleAdd,
  handleFilter,
  handleSorting,
  handleComplete,
  handleRemove,
} from './handlers.js'

export function actions() {
  document.addEventListener('click', event => {
    const eventType = getEventType(event.target)

    if (!eventType) return

    switch (eventType) {
      case EVENT_ACTION.add:
        const elementInput = document.querySelector(SELECTOR_INPUT_ELEMENT)
        handleAdd(elementInput.value)
        elementInput.value = ''
        break
      case EVENT_ACTION.remove:
        handleRemove(event.target.dataset.id)
        break
      case EVENT_ACTION.complete:
        handleComplete(event.target.dataset.id)
        break
      case EVENT_ACTION.sortByDate:
        handleSorting()
        break
      case EVENT_ACTION.filterAll:
        handleFilter(EVENT_ACTION.filterAll)
        break
      case EVENT_ACTION.filterCompleted:
        handleFilter(EVENT_ACTION.filterCompleted)
        break
      case EVENT_ACTION.filterInProgress:
        handleFilter(EVENT_ACTION.filterInProgress)
        break
      default:
        break
    }
  })

  document.addEventListener('keyup', event => {
    const eventType = getEventType(event.target)

    if (!eventType || event.key !== 'Enter') return

    handleAdd(event.target.value)
    event.target.value = ''
  })
}

function getEventType(target) {
  if (target.hasAttribute(ATTRIBUTE_DATA_ACTION)) {
    return target.getAttribute(ATTRIBUTE_DATA_ACTION)
  }
}
