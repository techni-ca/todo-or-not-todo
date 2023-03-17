import HTML from './index.html'
import './style.css'
class Task {
  id
  description
  timeCreated
  dueDate
  status // current, priority, suspended, abandoned?
  // requisites = []
  // requiredBy = []

  static taskList = []
  constructor (description, dueDate) {
    this.description = description
    this.dueDate = dueDate
    for (let i = 0; i <= Task.taskList.length; i++) {
      if (Task.taskList[i] === undefined) {
        this.id = i
        Task.taskList[i] = this
        break
      }
    }
    this.timeCreated = Date.now()
  }

  static listAll () {
    console.table(Task.taskList)
  }
  /*
  isRequiredBy (id) {
    console.log(`${this.id} is required by ${id}`)
    this.requiredBy.push(id)
  }

  requires (id) {
    console.log(`${this.id} requires ${id}`)
    this.requisites.push(id)
    Task.taskList[id].isRequiredBy(this.id)
  }
  */

  delete () {
    delete Task.taskList[this.id]
  }
}
// insert some sample data

;[('task 1', 'x'), ('task 2', 'y'), ('task 3', 'z')].forEach(
  (a, b) => new Task(a, b)
)

Task.listAll()

document.body.innerHTML = HTML
console.table(HTML)
