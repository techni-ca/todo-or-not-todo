export class Task {
  // project is private so JSON.Stringify doesn't worry about circular references
  #project
  _title
  _description
  _dueDate
  _priority

  get project () {
    return this.#project
  }

  get title () {
    return this._title
  }

  set title (newTitle) {
    this._title = newTitle
    this.getProject().storeProjects()
  }

  get description () {
    return this._description
  }

  set description (newDescription) {
    this._description = newDescription
    this.getProject().storeProjects()
  }

  get dueDate () {
    return this._dueDate
  }

  set dueDate (newDueDate) {
    this._dueDate = newDueDate
    this.getProject().storeProjects()
  }

  get priority () {
    return this._priority
  }

  set priority (newPriority) {
    switch (newPriority) {
      case 'high':
      case 'medium':
      case 'low':
        this._priority = newPriority
        this.getProject().storeProjects()
        break
      default:
        throw new Error('Not a valid Priority')
    }
  }

  constructor (project, title, description, dueDate, priority) {
    this.#project = project
    this._title = title
    this._description = description
    this._dueDate = dueDate
    this._priority = priority
    project.add(this)
  }

  getProject () {
    return this.#project
  }

  moveToProject (project) {
    this.delete()
    this.#project = project
    project.add(this)
  }

  delete () {
    return this.getProject().remove(this)
  }
}
