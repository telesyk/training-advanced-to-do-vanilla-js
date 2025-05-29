import { STORAGE_NAME } from '../constants.js'

export default function Store() {
  this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')

  return {
    // Use Arrow-Functions to keep the correct CONTEXT of 'this'
    get: () => [...this.store],
    add: newItem => {
      const isDuplicatedItem = this.store.find(item => item.id === newItem.id)
      if (isDuplicatedItem) return this.store

      localStorage.setItem(
        STORAGE_NAME,
        JSON.stringify([...this.store, newItem])
      )
      this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')
    },
    modify: currentItem => {
      const updatedStore = this.store.map(item =>
        item.id === currentItem.id ? currentItem : item
      )
      localStorage.setItem(STORAGE_NAME, JSON.stringify(updatedStore))
      this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')
    },
    remove: id => {
      const updatedStore = this.store.filter(item => item.id !== id)
      localStorage.setItem(STORAGE_NAME, JSON.stringify(updatedStore))
      this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')
    },
  }
}
