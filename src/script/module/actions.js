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
    const eventType = getType(event.target)

    if (!eventType) return

    switch (eventType) {
      case EVENT_ACTION.add:
        const elementInput = document.querySelector(SELECTOR_INPUT_ELEMENT)
        handleAdd(elementInput.value)
        break
      case EVENT_ACTION.remove:
        handleRemove(event.target)
        break
      case EVENT_ACTION.complete:
        handleComplete(event.target)
        break
      case EVENT_ACTION.sortByDate:
        handleSorting()
        break
      case EVENT_ACTION.filterAll:
        handleFilter()
        break
      case EVENT_ACTION.filterCompleted:
        handleFilter()
        break
      case EVENT_ACTION.filterInProgress:
        handleFilter()
        break
      default:
        break
    }
  })

  document.addEventListener('change', event => {
    const eventType = getType(event.target)

    if (!eventType) return

    switch (eventType) {
      case EVENT_ACTION.onChangeAdd:
        handleAdd(event.target.value)
        break
      default:
        break
    }
  })
}

function getType(target) {
  if (target.hasAttribute(ATTRIBUTE_DATA_ACTION)) {
    return target.getAttribute(ATTRIBUTE_DATA_ACTION)
  }
}
