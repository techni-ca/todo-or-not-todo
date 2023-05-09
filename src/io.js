import starterHTML from './index.html'
import './style.css'
import { Project, Task } from './taskClasses'
function countLines (inString) {
  return (inString.match(/\n/g) || '').length + 1
}

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
    inputBox.addEventListener('beforeinput', e => {
      if (e.data !== null) {
        if (e.data.length + inputBox.value.length + inputBox.selectionStart - inputBox.selectionEnd > 20) {
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

class Page {
  taskElements = []
  constructor (io) {
    this.io = io
    this.description = document.getElementById('description')
    this.description.addEventListener('click', () => {
      this.editDescription()
    })
    this.tasklist = document.getElementById('tasklist')
    document.getElementById('new').addEventListener('click', () => {
      this.newTask()
    })
    document.getElementById('delete').addEventListener('click', () => {
      this.deleteProject()
    })
    this.currentTask = null
  }

  projectDetails (project) {
    this.project = project
    this.clearTasks()
    project.tasks.forEach((task) => {
      this.addTask(task)
    })
    this.description.textContent = project.description
    if (project.tasks.length === 0 && Project.LIST.length > 1) {
      document.getElementById('delete').style.display = 'flex'
    } else {
      document.getElementById('delete').style.display = 'none'
    }
  }

  clearTasks () {
    this.tasklist.replaceChildren()
    this.taskElements = []
  }

  addTask (task) {
    const item = document.createElement('li')
    item.textContent = task.title
    item.addEventListener('click', () => {
      if (item.classList.contains('current')) {
        this.editTaskTitle(item)
      } else {
        this.openTask(item, task)
      }
    })
    this.tasklist.appendChild(item)
    this.taskElements.push({ task, element: item })
  }

  closeTasks () {
    if (this.currentTask !== null) {
      const tasks = this.tasklist.childNodes
      tasks.forEach(node => {
        if (node.classList.contains('current')) {
          node.nextSibling.remove()
          node.classList.remove('current')
        }
      })
      this.currentTask = null
    }
  }

  deleteProject () {
    this.io.deleteProject(this.project)
  }

  newTask () {
    const newTask = new Task(this.project, 'New Task', 'New Task Description', new Date(Date.now()), 9)
    this.projectDetails(this.project)
    this.taskElements.forEach(taskElement => {
      if (taskElement.task === newTask) {
        this.openTask(taskElement.element, taskElement.task)
      }
    })
  }

  editTaskTitle (element) {
    console.log(`change ${element.className} from ${this.currentTask.title}`)
  }

  moveTaskToAnotherProject (element) {
  }

  completeTask (element) {
    if (this.currentTask.delete()) {
      this.projectDetails(this.project)
    }
  }

  editTaskDescription (element) {
    console.log(`change ${element.className} from ${this.currentTask.description}`)
  }

  editDueDate (element) {
    console.log(`change ${element.className} from ${this.currentTask.dueDate.toDateString()}`)
  }

  editPriority (element) {
    console.log(`change ${element.className} from ${this.currentTask.priority}`)
  }

  openTask (element, task) {
    const details = Object.assign(document.createElement('div'), {
      className: 'details'
    })
    details.appendChild(
      Object.assign(document.createElement('button'), {
        className: 'completed',
        textContent: 'X',
        onclick: (e) => this.completeTask(e.target)
      })
    )
    details.appendChild(
      Object.assign(document.createElement('button'), {
        className: 'move',
        textContent: 'Move to a different Project',
        onclick: (e) => this.moveTaskToAnotherProject(e.target)
      })
    )
    details.appendChild(
      Object.assign(document.createElement('div'), {
        className: 'description',
        textContent: task.description,
        onclick: (e) => this.editTaskDescription(e.target)
      })
    )
    details.appendChild(
      Object.assign(document.createElement('div'), {
        className: 'duedate',
        textContent: `${task.dueDate.toDateString()}`,
        onclick: (e) => this.editDueDate(e.target)
      })
    )
    details.appendChild(
      Object.assign(document.createElement('div'), {
        className: 'priority',
        textContent: task.priority,
        onclick: (e) => this.editPriority(e.target)
      })
    )
    this.closeTasks()
    this.currentTask = task
    element.classList.add('current')
    element.after(details)
  }

  editDescription () {
    this.closeTasks()
    const oldDescription = this.description.textContent
    if (oldDescription === '') return
    const inputBox = document.createElement('textarea')
    inputBox.value = oldDescription
    inputBox.rows = countLines(inputBox.value)
    inputBox.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Escape':
          inputBox.value = ''
          inputBox.blur()
          break
        case 'Enter':
          if (!e.shiftKey) inputBox.blur()
      }
    })
    inputBox.addEventListener('input', e => {
      inputBox.rows = countLines(inputBox.value)
    })
    inputBox.addEventListener('blur', () => {
      inputBox.value = inputBox.value.trim()
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
        this.addTab(new Project('New Project Title', 'New Project Description'))
      )
    })
  }
}

const inputOutput = new IO()
export { inputOutput }
