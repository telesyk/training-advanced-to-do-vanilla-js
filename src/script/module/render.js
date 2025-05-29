import MOCK_DATA from '../mockData.js'
import {
  SELECTOR_ROOT_ELEMENT,
  ATTRIBUTE_DATA_DATE_END,
  ATTRIBUTE_DATA_DATE_START,
  ATTRIBUTE_DATA_COMPLETED,
  DEFAULT_LOCAL_DATE_STRING,
} from '../constants.js'
import { Task } from '../components/index.js'

const initData = null // development only

export default function render() {
  const data = initData || MOCK_DATA
  const fragment = new DocumentFragment()

  data.forEach(task => {
    const element = Task({
      content: task.title,
      restProps: {
        id: task.id,
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

  document.querySelector(SELECTOR_ROOT_ELEMENT).append(fragment)
}
