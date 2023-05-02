import HTML from './index.html'
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
  }

  static findTab (project) {
    for (let i = 0; i < Tab.LIST.length; i++) {
      if (Tab.LIST[i].project === project) return Tab.LIST[i]
    }
    return null
  }

  static deactivateAll () {
    Tab.LIST.forEach(tab => {
      tab.element.classList.remove('before-active')
      tab.element.classList.remove('active')
    })
  }

  makeActive () {
    const myIndex = Tab.LIST.indexOf(this)
    this.element.classList.add('active')
    if (myIndex > 0) {
      const prevTab = Tab.LIST[myIndex - 1]
      prevTab.element.classList.add('before-active')
    }
    this.active = true
  }

  changeTitle () {
    const oldTitle = this.element.textContent
    if (oldTitle === '') return
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
      if (tab.element.classList.contains('active')) {
        tab.changeTitle()
      } else {
        this.output.activateTab(tab.project)
      }
    })
  }
}

class Output {
  constructor (list) {
    document.body.innerHTML = HTML
    list.forEach(project => {
      return new Tab(project)
    })
  }

  activateTab (project) {
    const tabToActivate = Tab.findTab(project)
    if (tabToActivate === null) return false

    Tab.deactivateAll()
    tabToActivate.makeActive()

    const list = document.createElement('ul')
    list.textContent = project.description
    project.tasks.forEach(task => {
      const item = document.createElement('li')
      item.textContent = task.toString()
      list.appendChild(item)
    })
    const page = document.querySelector('.page')
    while (page.firstChild) {
      page.removeChild(page.firstChild)
    }
    page.appendChild(list)
  }
}

export { Input, Output }
