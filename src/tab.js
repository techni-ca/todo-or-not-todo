import { Task } from './task'

export class Tab {
  static LIST = []
  static activeTab = null

  constructor (project) {
    this.project = project
    Tab.LIST.push(this)
    this.element = document.createElement('span')
    this.element.classList.add('tab')
    this.element.addEventListener('dragover', (e) => { this.dragEvent(e) })
    this.element.addEventListener('drop', (e) => { this.dropEvent(e) })
    this.element.tabIndex = 0
    this.resetTitle()
    document
      .querySelector('.tab-bar')
      .insertBefore(this.element, document.getElementById('add'))
  }

  dragEvent (e) {
    if (!this.isActive()) e.preventDefault()
  }

  dropEvent (e) {
    if (e.dataTransfer.getData('type') === 'task') {
      Task.lastDragged.moveToProject(this.project)
    } else if (e.dataTransfer.getData('type') === 'tab') {
      this.moveActive()
    } else {
      console.log('what was dragged?')
    }
  }

  resetTitle () {
    this.element.innerText = this.project.title
  }

  deleteTab () {
    const index = Tab.LIST.indexOf(this)
    Tab.LIST.splice(index, 1)
    this.element.remove()
    if (Tab.LIST.length > 0) {
      if (index === Tab.LIST.length) {
        return Tab.LIST[index - 1]
      } else {
        return Tab.LIST[index]
      }
    }
    return null
  }

  isActive () {
    return this.element.classList.contains('active')
  }

  makeInactive () {
    if (this.clickableController !== undefined) {
      this.clickableController.abort()
      this.clickableController = undefined
    }
    if (this.editableController !== undefined) {
      this.editableController.abort()
      this.editableController = undefined
    }
    this.element.classList.remove('active')
    const beforeActive = this.element.previousElementSibling
    if (beforeActive !== null) {
      beforeActive.classList.remove('beforeactive')
    }
    this.element.draggable = false
    this.element.ondragstart = ''
    this.element.contentEditable = 'false'
    Tab.activeTab = null
  }

  makeClickable (otherEventController) {
    otherEventController.abort()
    this.clickableController = new AbortController()
    this.element.addEventListener(
      'click',
      () => {
        this.makeTitleEditable()
      },
      {
        once: true,
        signal: this.clickableController.signal
      }
    )
    this.element.addEventListener(
      'keydown',
      e => {
        if ((e.key === ' ') | (e.key === 'Enter')) {
          this.makeTitleEditable()
          e.preventDefault()
        }
      },
      {
        once: true,
        signal: this.clickableController.signal
      }
    )
  }

  makeActive () {
    if (Tab.activeTab === this) {
      return false
    }
    if (Tab.activeTab !== null) {
      Tab.activeTab.makeInactive()
    }
    Tab.activeTab = this
    if (this.project.title === '') {
      this.makeTitleEditable()
    } else {
      const abortMouse = new AbortController()
      const abortKey = new AbortController()
      document.addEventListener('click', () => { this.makeClickable(abortKey) }, { once: true, signal: abortMouse.signal })
      document.addEventListener('keyup', () => { this.makeClickable(abortMouse) }, { once: true, signal: abortKey.signal })
    }

    this.element.classList.add('active')
    const beforeActive = this.element.previousElementSibling
    if (beforeActive !== null) {
      beforeActive.classList.add('beforeactive')
    }
    this.element.draggable = true
    this.element.ondragstart = (e) => {
      e.dataTransfer.setData('type', 'tab')
    }

    return true
  }

  moveActive () {
    const active = Tab.activeTab
    active.makeInactive()

    active.project.switchWith(this.project)
    ;[active.project, this.project] = [this.project, active.project]

    this.resetTitle()
    active.resetTitle()

    this.element.focus()
  }

  makeTitleEditable () {
    const self = this
    function keydown (e) {
      this.removeAttribute('warning')
      if (e.key.length === 1) {
        const selectedLength = document.getSelection().toString().length
        const originalLength = e.target.innerText.length
        if (originalLength - selectedLength > 19) {
          e.preventDefault()
        }
      } else {
        switch (e.key) {
          case 'Escape':
            e.target.innerText = ''
            e.target.blur()
            break
          case 'Enter':
          case 'Tab':
            try {
              self.project.title = this.innerText
            } catch (err) {
              this.setAttribute('warning', err.message)
              e.preventDefault()
              return
            }
            e.target.blur()
        }
      }
    }
    function paste (e) {
      const selectedLength = document.getSelection().toString().length
      const originalLength = e.target.innerText.length
      const pastedLength = e.clipboardData.getData('text').length
      if (originalLength + pastedLength - selectedLength > 20) {
        e.preventDefault()
      }
    }
    function blur () {
      try {
        self.project.title = this.innerText
      } catch {}
      self.element.contentEditable = 'false'
      self.resetTitle()
    }

    if (this.element.isContentEditable) return
    this.element.contentEditable = 'true'
    this.editableController = new AbortController()
    const abort = { signal: this.editableController.signal }
    this.element.addEventListener('keydown', keydown, abort)
    this.element.addEventListener('paste', paste, abort)
    this.element.addEventListener('blur', blur, abort)
    const sel = window.getSelection()
    sel.selectAllChildren(this.element)
    sel.collapseToEnd()
  }
}
