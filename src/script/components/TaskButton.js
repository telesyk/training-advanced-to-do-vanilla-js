import CreateElement from '../module/create-element.js'

export function TaskButton({ icon, props }) {
  return new CreateElement({
    tagName: 'button',
    content: icon,
    props,
  }).init()
}
