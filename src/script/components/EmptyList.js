import CreateElement from '../module/create-element'

export function EmptyList() {
  return new CreateElement({
    content: EmptyListContent(),
    props: {
      className: 'min-h-64 flex justify-center items-center',
    },
  }).init()
}

function EmptyListContent() {
  return new CreateElement({
    content: '📂 The List is empty yet',
    props: {
      className: 'p-8 md:p-16 xl:p-24 text-2xl font-bold opacity-25',
    },
  }).init()
}
