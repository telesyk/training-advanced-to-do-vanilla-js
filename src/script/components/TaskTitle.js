import CreateElement from '../module/create-element.js'

export function TaskTitle({ content }) {
  return new CreateElement({
    tagName: 'h5',
    content,
    props: { className: 'font-bold col-span-2' },
  }).init()
}
