import starterHTML from './index.html'
import './style.css'
import { Project } from './taskClasses'

class Tab {
  static LIST = []
  constructor (project) {
    const tabBar = document.querySelector('.tab-bar')
    const lastTab = document.getElementById('add')
    this.element = document.createElement('span')
    this.project = project
    Tab.LIST.push(this)
    this.element.classList.add('tab')
    this.element.textContent = this.project.title
    this.element.style.flexBasis = `${Tab.tabSize}%`
    tabBar.insertBefore(this.element, lastTab)
    this.active = false
  }

  static findTab (project) {
    for (let i = 0; i < Tab.LIST.length; i++) {
      if (Tab.LIST[i].project === project) return Tab.LIST[i]
    }
    return null
  }

  static findActive () {
    for (let i = 0; i < Tab.LIST.length; i++) {
      if (Tab.LIST[i].active) return i
    }
    return null
  }

  static deactivateAll () {
    Tab.LIST.forEach(tab => {
      tab.active = false
    })
    document.querySelectorAll('.active').forEach(element => element.classList.remove('active'))
    document.getElementById('left')?.remove()
    document.getElementById('right')?.remove()
  }

  static moveActive (change) {
    const oldIndex = Tab.findActive()
    const newIndex = oldIndex + change
    if (newIndex < 0 || newIndex >= Tab.LIST.length) return null
    Tab.deactivateAll()

    const activeProject = Tab.LIST[oldIndex].project
    Tab.LIST[oldIndex].project = Tab.LIST[newIndex].project
    Tab.LIST[newIndex].project = activeProject

    Tab.LIST[newIndex].element.textContent = Tab.LIST[newIndex].project.title
    Tab.LIST[oldIndex].element.textContent = Tab.LIST[oldIndex].project.title

    Tab.LIST[newIndex].makeActive()
  }

  makeActive () {
    const left = document.createElement('span')
    const right = document.createElement('span')
    left.id = 'left'
    right.id = 'right'
    left.className = 'tab'
    right.className = 'tab'
    left.textContent = '<'
    right.textContent = '>'
    this.element.classList.add('active')
    this.element.before(left)
    this.element.after(right)

    left.addEventListener('click', () => Tab.moveActive(-1))
    right.addEventListener('click', () => Tab.moveActive(1))

    this.active = true
  }

  editTitle () {
    const oldTitle = this.element.textContent
    if (oldTitle === '' || this.active !== true) return
    const inputBox = document.createElement('input')
    inputBox.value = oldTitle
    inputBox.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Escape': inputBox.value = '' // falls through
        case 'Enter': inputBox.blur()
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

class Input {
  constructor (display) {
    this.output = display
  }

  watchAllTabs () {
    Tab.LIST.forEach(tab => this.watchTab(tab))
    document.getElementById('add').addEventListener('click', () => {
      const newProject = new Project('New Project', 'New Project Description')
      this.watchTab(new Tab(newProject))
      this.output.activateTab(newProject)
    })
  }

  watchTab (tab) {
    tab.element.addEventListener('click', () => {
      if (tab.active) {
        tab.editTitle()
      } else {
        this.output.activateTab(tab.project)
      }
    })
  }
}

class Output {
  constructor (list) {
    document.body.innerHTML = starterHTML
    list.forEach(project => new Tab(project))
  }

  activateTab (project) {
    const tabToActivate = Tab.findTab(project)
    if (tabToActivate === null) return false
    Tab.deactivateAll()
    tabToActivate.makeActive()

    const fragment = document.createDocumentFragment()
    project.tasks.forEach(task => {
      const item = document.createElement('li')
      item.textContent = task.toString()
      fragment.appendChild(item)
    })
    document.getElementById('tasklist').replaceChildren(fragment)
    document.getElementById('description').textContent = project.description
  }
}

export { Input, Output }
