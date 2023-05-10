export class Project {
  static LIST = []
  tasks = []

  constructor (title, description) {
    this.title = title
    this.description = description
    Project.LIST.push(this)
  }

  add (task) {
    this.tasks.push(task)
  }

  remove (task) {
    const index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1)
    return true
  }

  delete () {
    if (this.tasks.length > 0) {
      return false
    } else {
      const index = Project.LIST.indexOf(this)
      Project.LIST.splice(index, 1)
      return true
    }
  }
}
