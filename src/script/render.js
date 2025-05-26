import { ROOT_ELEMENT_SELECTOR } from './constants.js'
import mockData from './mockData.js'

const initData = null // development only

// const createTaskElement = () => {}

function CreateElement({ tagName, content, props }) {
  this.tagName = tagName
  this.content = content
  this.props = props
  this.element = document.createElement(this.tagName || 'div')
}
CreateElement.prototype.setAttributes = function () {
  if (!this.props) return

  for (let prop in this.props) {
    if (prop === 'className') {
      this.element.className = this.props[prop]
    }

    this.element.setAttribute(prop, this.props[prop])
  }
}
CreateElement.prototype.init = function () {
  this.element.innerHTML = this.content || ''
  this.setAttributes()

  return this.element
}

export default function render() {
  const data = initData || mockData
  const taskProps = {
    tagName: 'div',
    content: '',
    props: {
      className: 'p-4 border rounded',
    },
  }
  const fragment = new DocumentFragment()

  data.forEach(task => {
    const element = new CreateElement({
      ...taskProps,
      content: task.title,
      props: {
        ...taskProps.props,
        'data-completed': task.completed,
        'data-tags': task.tags.join(', '),
        'data-create-date': new Date(task.createDate).toUTCString(),
        'data-complete-date': task.completeDate
          ? new Date(task.completeDate).toUTCString()
          : '',
      },
    }).init()

    fragment.append(element)
  })

  document.querySelector(ROOT_ELEMENT_SELECTOR).append(fragment)
}
