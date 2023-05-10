import { Project, Task } from './taskClasses'

function resizeTextarea (element) {
  element.rows = 1
  while (element.clientHeight < element.scrollHeight) {
    element.rows = element.rows + 1
  }
}
function myDateFormat (date) {
  const yyyy = '' + date.getFullYear()
  const mm = ('0' + (date.getMonth() + 1)).slice(-2)
  const dd = ('0' + date.getDate()).slice(-2)
  return `${yyyy}-${mm}-${dd}`
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
    project.tasks.forEach(task => {
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
    const newTask = new Task(
      this.project,
      '',
      '',
      new Date(Date.now()),
      9
    )
    this.projectDetails(this.project)
    this.taskElements.forEach(taskElement => {
      if (taskElement.task === newTask) {
        this.openTask(taskElement.element, taskElement.task)
      }
    })
  }

  editTaskTitle (element) {
    if (element.childElementCount > 0) return
    const oldTitle = element.textContent
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
        if (
          e.data.length +
            inputBox.value.length +
            inputBox.selectionStart -
            inputBox.selectionEnd >
          100
        ) {
          e.preventDefault()
        }
      }
    })
    inputBox.addEventListener('blur', () => {
      if (inputBox.value !== '') {
        this.currentTask.title = inputBox.value
      }
      element.textContent = this.currentTask.title
    })
    element.textContent = ''
    element.appendChild(inputBox)
    inputBox.focus({ focusVisible: true })
  }

  completeTask () {
    if (this.currentTask.delete()) {
      this.projectDetails(this.project)
    }
  }

  editTaskDescription (element) {
    if (element.childElementCount > 0) return
    const oldDescription = element.textContent
    const inputBox = document.createElement('textarea')
    inputBox.value = oldDescription

    inputBox.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Escape':
          inputBox.value = '' // falls through
        case 'Tab':
          inputBox.blur()
          e.preventDefault()
      }
    })
    inputBox.addEventListener('input', () => {
      resizeTextarea(inputBox)
    })
    inputBox.addEventListener('blur', () => {
      inputBox.value = inputBox.value.trim()
      if (inputBox.value !== '') {
        this.currentTask.description = inputBox.value
      }
      element.textContent = this.currentTask.description
    })
    element.textContent = ''
    element.appendChild(inputBox)
    resizeTextarea(inputBox)
    inputBox.focus({ focusVisible: true })
  }

  editDueDate (element) {
    const datePicker = Object.assign(document.createElement('input'), {
      id: 'date',
      type: 'date',
      value: myDateFormat(this.currentTask.dueDate),
      onblur: () => {
        this.currentTask.dueDate = new Date(datePicker.value + 'T12:00:00')
        datePicker.remove()
        Object.assign(element, {
          textContent: `${this.currentTask.dueDate.toDateString()}`,
          onclick: e => this.editDueDate(e.target)
        })
      }
    })
    element.onclick = ''
    element.parentNode.appendChild(datePicker)
    datePicker.focus({ focusVisible: true })
  }

  editPriority (element) {
    const priorityList = Object.assign(document.createElement('select'), {
      id: 'priorityList',
      size: '9'
    })
    for (let i = 1; i < 10; i++) {
      priorityList.appendChild(Object.assign(document.createElement('option'), {
        value: i,
        textContent: i,
        selected: (i === this.currentTask.priority),
        onclick: () => {
          this.currentTask.priority = i
          priorityList.remove()
          Object.assign(element, {
            textContent: `${this.currentTask.priority}`,
            onclick: e => this.editPriority(e.target)
          })
        }
      }))
    }
    const translateY = 10.5 * (9 - this.currentTask.priority)
    priorityList.style.transform = `translateY(${translateY}%)`
    element.onclick = ''
    element.parentNode.appendChild(priorityList)
    priorityList.focus({ focusVisible: true })
  }

  openTask (element, task) {
    const details = Object.assign(document.createElement('div'), {
      className: 'details'
    })
    details.appendChild(
      Object.assign(document.createElement('button'), {
        className: 'completed',
        textContent: 'X',
        onclick: () => this.completeTask()
      })
    )
    if (Project.LIST.length > 1) {
      const moveDiv = details.appendChild(
        Object.assign(document.createElement('div'), {
          className: 'move'
        })
      )
      moveDiv.appendChild(
        Object.assign(document.createElement('button'), {
          className: 'moveButton',
          textContent: 'Move to a different Project'
        })
      )
      const moveLinks = moveDiv.appendChild(
        Object.assign(document.createElement('div'), {
          className: 'moveLinks'
        })
      )
      if (Project.LIST.length < 7) {
        moveLinks.style.height = 'auto'
      }
      Project.LIST.forEach(project => {
        if (project !== this.project) {
          moveLinks.appendChild(
            Object.assign(document.createElement('a'), {
              href: '#',
              textContent: project.title,
              onclick: () => {
                this.currentTask.moveToProject(project)
                this.projectDetails(this.project)
              }
            })
          )
        }
      })
    }

    details.appendChild(
      Object.assign(document.createElement('div'), {
        className: 'description',
        textContent: task.description,
        onclick: e => this.editTaskDescription(e.target)
      })
    )
    details.appendChild(
      Object.assign(document.createElement('div'), {
        className: 'duedate',
        textContent: `${task.dueDate.toDateString()}`,
        onclick: e => this.editDueDate(e.target)
      })
    )
    details.appendChild(
      Object.assign(document.createElement('div'), {
        className: 'priority',
        textContent: task.priority,
        onclick: e => this.editPriority(e.target)
      })
    )
    this.closeTasks()
    this.currentTask = task
    element.classList.add('current')
    element.after(details)
  }

  editDescription () {
    if (this.description.childElementCount > 0) return
    this.closeTasks()
    const oldDescription = this.description.textContent
    const inputBox = document.createElement('textarea')
    inputBox.value = oldDescription
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
    inputBox.addEventListener('input', () => {
      resizeTextarea(inputBox)
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
    resizeTextarea(inputBox)
    inputBox.focus({ focusVisible: true })
  }
}

export { Page }
