import HTML from './index.html'
import './style.css'
import { display } from './display'

class Project {
  tasks = []
  static LIST = []
  constructor (title, description) {
    this.title = title
    this.description = description
    Project.LIST.push(this)
  }

  add (id) {
    this.tasks.push(id)
  }

  remove (id) {
    // find member of this.tasks that has id=id and delete
  }
}
class Task {
  id
  projectId
  description
  timeCreated

  static LIST = []
  constructor (description, dueDate) {
    this.description = description
    this.dueDate = dueDate
    for (let i = 0; i <= Task.LIST.length; i++) {
      if (Task.LIST[i] === undefined) {
        this.id = i
        Task.LIST[i] = this
        defaultProject.add(i)
        break
      }
    }
    this.timeCreated = Date.now()
  }

  static listAll () {
    console.table(Task.taskList)
  }

  delete () {
    delete Task.taskList[this.id]
  }

  toString () {
    return `Task#${this.id} (${this.description}) is due ${this.dueDate.toDateString()}`
  }
}
// insert some sample data
const defaultProject = new Project(
  'General',
  'This is the default project yada yada yada'
)
;[
  ['task 1', new Date(Date.now() + (24 * 60 * 60 * 1000))],
  ['task 2', new Date(Date.now() + (48 * 60 * 60 * 1000))],
  ['task 3', new Date(Date.now() + (72 * 60 * 60 * 1000))]
].forEach(t => new Task(t[0], t[1]))

document.body.innerHTML = HTML
display(Project, Task, defaultProject)
