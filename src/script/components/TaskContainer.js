import {
  ATTRIBUTE_DATA_COMPLETED,
  ATTRIBUTE_DATA_DATE_END,
  ATTRIBUTE_DATA_DATE_START,
  TASK_DATE_LABEL_END,
  TASK_DATE_LABEL_START,
} from '../constants.js'
import CreateElement from '../module/create-element.js'
import { TaskButton, TaskDate, TaskTitle } from './index.js'

export function TaskContainer({ content, restProps }) {
  const fragmentButtons = new DocumentFragment()
  fragmentButtons.append(
    TaskButton({
      icon: '☑️',
      className: 'basis-1/2 py-3 px-5 hover:bg-green-50',
    })
  )
  fragmentButtons.append(
    TaskButton({
      icon: '🗑️',
      className: 'basis-1/2 py-3 px-5 hover:bg-red-50',
    })
  )

  const fragmentInner = new DocumentFragment()
  fragmentInner.append(TaskTitle({ content }))
  fragmentInner.append(
    TaskDate({
      label: `${TASK_DATE_LABEL_START}:`,
      timestamp: restProps[ATTRIBUTE_DATA_DATE_START],
    })
  )

  if (restProps[ATTRIBUTE_DATA_DATE_END]) {
    fragmentInner.append(
      TaskDate({
        label: `${TASK_DATE_LABEL_END}:`,
        timestamp: restProps[ATTRIBUTE_DATA_DATE_END],
      })
    )
  }

  const fragmentContainer = new DocumentFragment()
  fragmentContainer.append(
    new CreateElement({
      content: fragmentInner,
      props: {
        className: 'p-4 col-span-4 grid grid-cols-2 gap-4',
      },
    }).init()
  )
  fragmentContainer.append(
    new CreateElement({
      content: fragmentButtons,
      props: { className: 'flex flex-col' },
    }).init()
  )

  const classNames = restProps[ATTRIBUTE_DATA_COMPLETED]
    ? 'border rounded grid grid-cols-5 gap-2 shadow-md hover:shadow-xl border-green-500 bg-green-50'
    : 'border rounded grid grid-cols-5 gap-2 shadow-md hover:shadow-xl'

  const taskProps = {
    content: fragmentContainer,
    props: {
      ...restProps,
      className: classNames,
    },
  }
  return new CreateElement(taskProps).init()
}
