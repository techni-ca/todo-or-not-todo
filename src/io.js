import starterHTML from './index.html'
import './style.css'
import { Project } from './taskClasses'

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
    this.element.style.flexBasis = `${Tab.tabSize}%`
    document
      .querySelector('.tab-bar')
      .insertBefore(this.element, document.getElementById('add'))
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
    const oldTitle = this.element.textContent
    if (oldTitle === '') return
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

class Page {
  constructor () {
    this.description = document.getElementById('description')
    this.description.addEventListener('click', () => {
      this.editDescription()
    })
    this.tasklist = document.getElementById('tasklist')
  }

  projectDetails (project) {
    this.project = project
    const fragment = document.createDocumentFragment()
    project.tasks.forEach(task => {
      const item = document.createElement('li')
      item.textContent = task.toString()
      fragment.appendChild(item)
    })
    this.tasklist.replaceChildren(fragment)
    this.description.textContent = project.description
  }

  editDescription () {
    const oldDescription = this.description.textContent
    if (oldDescription === '') return
    const inputBox = document.createElement('input')
    inputBox.value = oldDescription
    inputBox.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Escape':
          inputBox.value = '' // falls through
        case 'Enter':
          inputBox.blur()
      }
    })
    inputBox.addEventListener('blur', () => {
      if (inputBox.value !== '') {
        this.project.description = inputBox.value
      }
      this.description.textContent = this.project.description
    })
    this.description.textContent = ''
    this.description.appendChild(inputBox)
    inputBox.focus({ focusVisible: true })
  }
}

class IO {
  constructor () {
    if (!IO._instance) {
      IO._instance = this
      document.body.innerHTML = starterHTML
      this.page = new Page()
      this.watchAddTab()
    }
    return IO._instance
  }

  addProjects (list) {
    list.forEach(project => this.addTab(project))
    this.activateTab(Tab.activeTab)
  }

  activateTab (tabToActivate) {
    tabToActivate.makeActive()
    this.page.projectDetails(tabToActivate.project)
  }

  addTab (project) {
    const newTab = new Tab(project)
    this.watchTab(newTab)
    return newTab
  }

  watchTab (tab) {
    tab.element.addEventListener('click', () => {
      if (tab.isActive()) {
        tab.editTitle()
      } else {
        this.activateTab(tab)
      }
    })
  }

  watchAddTab () {
    document.getElementById('add').addEventListener('click', () => {
      this.activateTab(
        this.addTab(new Project('New Project', 'New Project Description'))
      )
    })
  }
}

const inputOutput = new IO()
export { inputOutput }
