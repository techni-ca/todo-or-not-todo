export class Task {
  constructor (project, title, description, dueDate, priority) {
    project.add(this)
    this.project = project
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  moveToProject (project) {
    this.project.remove(this)
    this.project = project
    this.project.add(this)
  }

  delete () {
    return this.project.remove(this)
  }
}
