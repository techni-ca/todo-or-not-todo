import { Task } from './task.js'

export class Project {
  static LIST = []
  tasks = []

  _title
  get title () {
    return this._title
  }

  set title (newTitle) {
    this._title = newTitle
    this.storeProjects()
  }

  _description
  get description () {
    return this._description
  }

  set description (newDescription) {
    this._description = newDescription
    this.storeProjects()
  }

  static populate () {
    const storedList = JSON.parse(localStorage.getItem('projects'))
    if (storedList === null) {
      // eslint-disable-next-line no-new
      new Project('General', 'This is the default project.')
    } else {
      storedList.forEach(storedProject => {
        if (storedProject !== null) {
          const thisProject = new Project(storedProject._title, storedProject._description)
          storedProject.tasks.forEach(storedTask => {
            if (storedTask !== null) {
              // eslint-disable-next-line no-new
              new Task(
                thisProject,
                storedTask._title,
                storedTask._description,
                new Date(storedTask._dueDate),
                storedTask._priority
              )
            }
          })
        }
      })
    }
  }

  constructor (title, description) {
    this._title = title
    this._description = description
    Project.LIST.push(this)
    this.storeProjects()
  }

  storeProjects () {
    localStorage.setItem('projects', JSON.stringify(Project.LIST))
  }

  switchWith (that) {
    const index1 = Project.LIST.indexOf(this)
    const index2 = Project.LIST.indexOf(that)
    Project.LIST[index1] = that
    Project.LIST[index2] = this
    this.storeProjects()
  }

  add (task) {
    this.tasks.push(task)
    this.storeProjects()
  }

  remove (task) {
    const index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
    this.storeProjects()
    return true
  }

  delete () {
    if (this.tasks.length > 0) {
      return false
    } else {
      const index = Project.LIST.indexOf(this)
      Project.LIST.splice(index, 1)
      this.storeProjects()
      return true
    }
  }
}
