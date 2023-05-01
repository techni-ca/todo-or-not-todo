import { Project } from './taskClasses'

class Display {
  project (activeProject) {
    const tabBar = document.querySelector('.tab-bar')
    const lastTab = tabBar.firstElementChild

    let lastSpan = null
    Project.LIST.forEach(p => {
      const thisSpan = document.createElement('span')
      thisSpan.classList.add('tab')
      if (p === activeProject) {
        thisSpan.classList.add('active')
        if (lastSpan !== null) {
          lastSpan.classList.add('before-active')
        }
      }
      thisSpan.textContent = p.title
      tabBar.insertBefore(thisSpan, lastTab)
      lastSpan = thisSpan
    })

    const list = document.createElement('ul')
    list.textContent = activeProject.description
    activeProject.tasks.forEach(t => {
      const item = document.createElement('li')
      item.textContent = t.toString()
      list.appendChild(item)
    })
    const page = document.querySelector('.page')
    page.appendChild(list)
  }
}

export { Display }
