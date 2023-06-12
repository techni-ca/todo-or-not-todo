import indexHTML from './html/index.html'
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
      document.body.innerHTML = indexHTML
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
    this.activateTab(Tab.LIST[0])
  }

  activateTab (tabToActivate) {
    if (tabToActivate.makeActive()) {
      this.page.projectDetails(tabToActivate.project)
    }
  }

  addTab (project) {
    const newTab = new Tab(project)
    this.watchTab(newTab)
    return newTab
  }

  watchTab (tab) {
    tab.element.addEventListener('focus', (e) => {
      this.activateTab(tab)
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
