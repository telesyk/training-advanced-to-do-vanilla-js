import TaskStore from './store-manager.js'
import {
  SELECTOR_ROOT_ELEMENT,
  ATTRIBUTE_DATA_DATE_END,
  ATTRIBUTE_DATA_DATE_START,
  ATTRIBUTE_DATA_COMPLETED,
  DEFAULT_LOCAL_DATE_STRING,
} from '../constants.js'
import { Task, EmptyList } from '../components/index.js'

export default function render() {
  const storage = new TaskStore().get()
  const fragment = new DocumentFragment()

  document.querySelector(SELECTOR_ROOT_ELEMENT).innerHTML = ''

  if (!storage || storage.length < 1) {
    const elementEmptyList = EmptyList()

    fragment.append(elementEmptyList)
  } else {
    storage.forEach(task => {
      if (task.hidden) return

      const element = Task({
        content: task.title,
        restProps: {
          id: task.id,
          hidden: task.hidden,
          [ATTRIBUTE_DATA_COMPLETED]: task.completed,
          [ATTRIBUTE_DATA_DATE_START]: new Date(
            task.dateCreate
          ).toLocaleDateString(DEFAULT_LOCAL_DATE_STRING),
          [ATTRIBUTE_DATA_DATE_END]: task.dateComplete
            ? new Date(task.dateComplete).toLocaleDateString(
                DEFAULT_LOCAL_DATE_STRING
              )
            : '',
        },
      })

      fragment.append(element)
    })
  }

  document.querySelector(SELECTOR_ROOT_ELEMENT).append(fragment)
}
