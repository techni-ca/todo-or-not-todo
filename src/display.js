function display(Project, Task, defaultProject) {
  const tabBar = document.querySelector('.tab-bar')
  const lastTab = tabBar.firstElementChild

  Project.LIST.forEach(p => {
    const thisSpan = document.createElement('span')
    thisSpan.classList.add('tab')
    thisSpan.textContent = p.title
    tabBar.insertBefore(thisSpan, lastTab)
  })

  /*
  when active is other than the first one, the one before the active gets class before-active
  */
  const activeTab = tabBar.firstElementChild
  activeTab.classList.add('active')

  const list = document.createElement('ul')
  list.textContent = defaultProject.description
  defaultProject.tasks.forEach(t => {
    const item = document.createElement('li')
    item.textContent = Task.LIST[t].toString()
    list.appendChild(item)
  })
  const page = document.querySelector('.page')
  page.appendChild(list)
}

export { display }
