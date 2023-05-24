export class Tab {
  static LIST = []
  static activeTab = null

  constructor (project) {
    this.project = project
    Tab.LIST.push(this)
    this.element = document.createElement('span')
    this.element.classList.add('tab')
    this.element.tabIndex = 0
    this.resetTitle()
    document
      .querySelector('.tab-bar')
      .insertBefore(this.element, document.getElementById('add'))
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
    this.element.contentEditable = 'false'
    document.getElementById('left')?.remove()
    document.getElementById('right')?.remove()
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
    if (this.project.title === '') {
      this.makeTitleEditable()
    } else {
      const abortMouse = new AbortController()
      const abortKey = new AbortController()
      document.addEventListener('click', () => { this.makeClickable(abortKey) }, { once: true, signal: abortMouse.signal })
      document.addEventListener('keyup', () => { this.makeClickable(abortMouse) }, { once: true, signal: abortKey.signal })
    }
    Tab.activeTab = this
    this.element.classList.add('active')

    this.displayMoveArrows()

    return true
  }

  displayMoveArrows () {
    const index = Tab.LIST.indexOf(this)

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
    const active = Tab.activeTab
    active.makeInactive()

    active.project.switchWith(this.project)
    ;[active.project, this.project] = [this.project, active.project]

    this.resetTitle()
    active.resetTitle()

    this.makeActive()
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
