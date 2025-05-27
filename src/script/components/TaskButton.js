import CreateElement from '../module/create-element.js'

export function TaskButton({ icon, className }) {
  return new CreateElement({
    tagName: 'button',
    content: icon,
    props: { className },
  }).init()
}
