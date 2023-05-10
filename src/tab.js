class Tab {
  static LIST = []
  static activeTab = null

  constructor (project) {
    if (Tab.activeTab === null) {
      Tab.activeTab = this
    }
    this.element = document.createElement('span')
    this.project = project
    Tab.LIST.push(this)
    this.element.classList.add('tab')
    this.element.textContent = this.project.title
    document
      .querySelector('.tab-bar')
      .insertBefore(this.element, document.getElementById('add'))
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

  makeActive () {
    if (Tab.activeTab !== null) {
      Tab.activeTab.element.classList.remove('active')
    }

    Tab.activeTab = this
    this.element.classList.add('active')

    this.displayMoveArrows()
  }

  displayMoveArrows () {
    const index = Tab.LIST.indexOf(this)

    document.getElementById('left')?.remove()
    const prevTab = Tab.LIST[index - 1]
    if (prevTab !== undefined) {
      const left = document.createElement('span')
      left.addEventListener('click', () => prevTab.moveActive())
      this.element.before(
        Object.assign(left, {
          id: 'left',
          className: 'tab',
          textContent: '<'
        })
      )
    }

    document.getElementById('right')?.remove()
    const nextTab = Tab.LIST[index + 1]
    if (nextTab !== undefined) {
      const right = document.createElement('span')
      right.addEventListener('click', () => nextTab.moveActive())
      this.element.after(
        Object.assign(right, {
          id: 'right',
          className: 'tab',
          textContent: '>'
        })
      )
    }
  }

  moveActive () {
    ;[this.project, Tab.activeTab.project] = [
      Tab.activeTab.project,
      this.project
    ]
    ;[this.element.textContent, Tab.activeTab.element.textContent] = [
      Tab.activeTab.element.textContent,
      this.element.textContent
    ]
    this.makeActive()
  }

  editTitle () {
    if (this.element.childElementCount > 0) return
    const oldTitle = this.element.textContent
    const inputBox = document.createElement('input')
    inputBox.value = oldTitle
    inputBox.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Escape':
          inputBox.value = '' // falls through
        case 'Enter':
          inputBox.blur()
      }
    })
    inputBox.addEventListener('beforeinput', e => {
      if (e.data !== null) {
        if (
          e.data.length +
            inputBox.value.length +
            inputBox.selectionStart -
            inputBox.selectionEnd >
          20
        ) {
          e.preventDefault()
        }
      }
    })
    inputBox.addEventListener('blur', () => {
      if (inputBox.value !== '') {
        this.project.title = inputBox.value
      }
      this.element.textContent = this.project.title
    })
    this.element.textContent = ''
    this.element.appendChild(inputBox)
    inputBox.focus({ focusVisible: true })
  }
}

export { Tab }
