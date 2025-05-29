export const handleFilter = () => {
  console.log('hadnle filter')
}

export const handleSorting = () => {
  console.log('hadnle sorting')
}

export const handleAdd = value => {
  /*
   * - Take the Value {String} of new Task
   *   - Return if no any value or empty
   * - Create the rest  of params/details of the Task
   * - Update main State with new Task
   * - Update the list - re-rendering
   */
  if (!value) return
  console.log('hadnle add', value)
}

export const handleRemove = eventTarget => {
  console.log('hadnle remove', eventTarget)
}

export const handleComplete = eventTarget => {
  console.log('hadnle complete', eventTarget)
}
