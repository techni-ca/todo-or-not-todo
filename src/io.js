import starterHTML from './index.html'
import './styles/default.css'
import './styles/tab.css'
import './styles/page.css'
import { Project } from './project'
import { Tab } from './tab'
import { Page } from './page'

class IO {
  constructor () {
    if (!IO._instance) {
      IO._instance = this
      document.body.innerHTML = starterHTML
      this.page = new Page(this)
      this.watchAddTab()
    }
    return IO._instance
  }

  deleteProject (project) {
    if (project.delete()) {
      this.activateTab(Tab.activeTab.deleteTab())
    }
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
      this.page.closeTasks()
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
        this.addTab(new Project('', ''))
      )
    })
  }
}

export const inputOutput = new IO()
