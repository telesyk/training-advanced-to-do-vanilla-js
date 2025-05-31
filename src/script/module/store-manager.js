import { STORAGE_NAME } from '../constants.js'
import mockData from '../mockData.js'
import render from './render.js'

export default function TaskStore(storeName) {
  this.storeName = storeName || STORAGE_NAME
  this.store = JSON.parse(localStorage.getItem(this.storeName)) || mockData

  return {
    // Use Arrow-Functions to keep the correct CONTEXT of 'this'
    get: () => [...this.store],
    update: newState => {
      localStorage.setItem(this.storeName, JSON.stringify([...newState]))
      this.store = JSON.parse(localStorage.getItem(this.storeName) || '[]')
      render()
    },
  }
}
