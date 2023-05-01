import HTML from './index.html'
import './style.css'
import { Project, Task } from './taskClasses'
import { Display } from './display'
document.body.innerHTML = HTML

// insert some sample data
const defaultProject = new Project(
  'General',
  'This is the default project.'
)
const otherProject = new Project(
  'Specific',
  'This is the other project.'
)
;[
  ['task 1', new Date(Date.now() + (24 * 3600000))],
  ['task 2', new Date(Date.now() + (48 * 3600000))],
  ['task 3', new Date(Date.now() + (72 * 3600000))]
].forEach(t => new Task(defaultProject, t[0], t[1]))
;[
  ['task A', new Date(Date.now() + (96 * 3600000))],
  ['task B', new Date(Date.now() + (120 * 3600000))],
  ['task C', new Date(Date.now() + (144 * 3600000))]
].forEach(t => new Task(otherProject, t[0], t[1]))

const myDisplay = new Display()
myDisplay.project(defaultProject)
myDisplay.project(otherProject)
