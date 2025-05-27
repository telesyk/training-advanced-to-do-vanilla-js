import CreateElement from '../module/create-element.js'

export function TaskDate({ timestamp, label }) {
  const fragment = new DocumentFragment()

  fragment.append(
    new CreateElement({
      tagName: 'strong',
      content: label,
      props: { className: 'font-bold mr-2' },
    }).init()
  )
  fragment.append(
    new CreateElement({
      tagName: 'span',
      content: timestamp,
    }).init()
  )

  return new CreateElement({
    content: fragment,
    props: { className: 'text-gray-800 text-xs' },
  }).init()
}
