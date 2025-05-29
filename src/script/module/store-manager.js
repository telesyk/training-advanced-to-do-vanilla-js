import { STORAGE_NAME } from '../constants.js'
import mockData from '../mockData.js'

export default function TaskStore() {
  this.store = JSON.parse(localStorage.getItem(STORAGE_NAME)) || mockData // for development
  // this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')

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
    update: currentItem => {
      const updatedStorage = this.store.map(item =>
        item.id === currentItem.id ? currentItem : item
      )
      localStorage.setItem(STORAGE_NAME, JSON.stringify(updatedStorage))
      this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')
    },
    remove: id => {
      const updatedStorage = this.store.filter(item => item.id !== id)
      localStorage.setItem(STORAGE_NAME, JSON.stringify(updatedStorage))
      this.store = JSON.parse(localStorage.getItem(STORAGE_NAME) || '[]')
    },
  }
}
