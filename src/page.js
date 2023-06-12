import taskHTML from './html/task.html'
import { Project } from './project'
import { Task } from './task'

function myDateFormat (date) {
  const yyyy = '' + date.getFullYear()
  const mm = ('0' + (date.getMonth() + 1)).slice(-2)
  const dd = ('0' + date.getDate()).slice(-2)
  return `${yyyy}-${mm}-${dd}`
}

export class Page {
  taskElements = []
  constructor (io) {
    this.io = io
    this.description = document.querySelector('.projectDescription')
    this.description.addEventListener('blur', () => {
      this.changeDescription()
    })
    this.tasklist = document.querySelector('.tasklist')
    document.getElementById('new').addEventListener('click', () => {
      this.newTask()
    })
    document.getElementById('delete').addEventListener('click', () => {
      this.deleteProject()
    })
  }

  projectDetails (project) {
    this.project = project
    this.clearTasks()
    project.tasks.forEach(task => {
      this.addTask(task)
    })
    this.description.innerHTML = this.project.description.replaceAll('\n', '<br>')

    if (project.tasks.length === 0 && Project.LIST.length > 1) {
      document.getElementById('delete').style.display = 'initial'
    } else {
      document.getElementById('delete').style.display = 'none'
    }
  }

  clearTasks () {
    this.tasklist.replaceChildren()
    this.taskElements = []
  }

  noNewline (e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.target.blur()
    }
  }

  closeAllBut (inElement) {
    if (inElement.open) {
      this.taskElements.forEach(taskElement => {
        if (taskElement.element !== inElement && taskElement.element.open) {
          taskElement.element.removeAttribute('open')
        }
      })
    }
  }

  addTask (task) {
    const template = document.createElement('template')
    template.innerHTML = taskHTML
    const item = Object.assign(template.content.firstChild, {
      ontoggle: (e) => this.closeAllBut(e.target),
      ondragstart: (e) => {
        e.dataTransfer.setData('type', 'task')
        Task.lastDragged = task
      },
      ondragend: (e) => {
        this.projectDetails(this.project)
      }
    })
    item.style.setProperty('--priority', `var(--${task.priority})`)
    Object.assign(item.querySelector('.taskTitle'), {
      textContent: task.title,
      onblur: (e) => this.changeTaskTitle(e.target, task),
      onkeydown: this.noNewline
    })
    Object.assign(item.querySelector('.taskDescription'), {
      innerHTML: task.description.replaceAll('\n', '<br>'),
      onblur: (e) => this.changeTaskDescription(e.target, task)
    })
    Object.assign(item.querySelector('.taskDuedate'), {
      textContent: task.dueDate.toDateString(),
      onclick: (e) => this.editDueDate(e.target, task)
    })
    Object.assign(item.querySelector('.taskDelete'), {
      onclick: () => this.deleteTask(task)
    })
    Object.assign(item.querySelector('.taskPriority'), {
      textContent: task.priority,
      onclick: (e) => this.changeTaskPriority(e.target, task),
      onkeydown: (e) => this.keydownPriority(e, task)
    })
    this.tasklist.appendChild(item)
    this.taskElements.push({ task, element: item })
  }

  changeDescription () {
    this.project.description = this.description.innerText.trim()
    this.description.innerHTML = this.project.description.replaceAll('\n', '<br>')
  }

  changeTaskTitle (element, task) {
    task.title = element.innerText.replaceAll('\n', '').trim()
    element.innerText = task.title
  }

  changeTaskDescription (element, task) {
    task.description = element.innerText.trim()
    element.innerHTML = task.description.replaceAll('\n', '<br>')
  }

  changeTaskPriority (element, task) {
    if (task.priority === 'low') task.priority = 'medium'
    else if (task.priority === 'medium') task.priority = 'high'
    else task.priority = 'low'
    element.textContent = task.priority
    element.parentElement.style.setProperty('--priority', `var(--${task.priority})`)
  }

  keydownPriority (e, task) {
    if (e.key === ' ') this.changeTaskPriority(e.target, task)
  }

  editDueDate (element, task) {
    const datePicker = Object.assign(document.createElement('input'), {
      id: 'datepicker',
      type: 'date',
      value: myDateFormat(task.dueDate),
      onblur: () => {
        task.dueDate = new Date(datePicker.value + 'T12:00:00')
        datePicker.remove()
        Object.assign(element, {
          textContent: task.dueDate.toDateString(),
          onclick: (e) => this.editDueDate(e.target, task)
        })
      }
    })
    element.textContent = ''
    element.onclick = ''
    element.parentElement.appendChild(datePicker)
    datePicker.focus({ focusVisible: true })
  }

  deleteTask (task) {
    task.delete()
    this.projectDetails(this.project)
  }

  deleteProject () {
    this.io.deleteProject(this.project)
  }

  newTask () {
    // eslint-disable-next-line no-new
    new Task(this.project, '', '', new Date(Date.now()), 'low')
    this.projectDetails(this.project)
  }
}
