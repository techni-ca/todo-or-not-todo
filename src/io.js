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
    tabBar.insertBefore(this.element, lastTab)
  }

  static findTab (project) {
    for (let i = 0; i < Tab.LIST.length; i++) {
      if (Tab.LIST[i].project === project) return Tab.LIST[i]
    }
    return null
  }

  static deactivateAll () {
    Tab.LIST.forEach(t => {
      t.element.classList.remove('before-active')
      t.element.classList.remove('active')
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
}

class Input {
  constructor (display) {
    this.display = display
  }

  watchAllTabs () {
    Tab.LIST.forEach(t => this.watchTab(t))
    document.getElementById('add').addEventListener('click', () => {
      const newProject = new Project('New Project', 'New Project Description')
      this.watchTab(new Tab(newProject))
      this.display.activateTab(newProject)
    })
  }

  watchTab (tab) {
    tab.element.addEventListener('click', () => this.display.activateTab(tab.project))
  }
}

class Output {
  constructor (list) {
    document.body.innerHTML = HTML
    list.forEach(p => {
      return new Tab(p)
    })
  }

  activateTab (project) {
    const tabToActivate = Tab.findTab(project)
    if (tabToActivate === null) return false

    Tab.deactivateAll()
    tabToActivate.makeActive()

    const list = document.createElement('ul')
    list.textContent = project.description
    project.tasks.forEach(t => {
      const item = document.createElement('li')
      item.textContent = t.toString()
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
