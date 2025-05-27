export default function CreateElement({ tagName, content, props }) {
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
    } else {
      this.element.setAttribute(prop, this.props[prop])
    }
  }
}
CreateElement.prototype.setContent = function () {
  if (!this.content) {
    this.element.textContent = ''
    return
  }
  if (this.content instanceof String) {
    this.element.textContent = this.content
    return
  }
  this.element.append(this.content)
}
CreateElement.prototype.init = function () {
  this.setContent()
  this.setAttributes()

  return this.element
}
