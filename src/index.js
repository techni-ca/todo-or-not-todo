import { Project, Task } from './taskClasses'
import { inputOutput } from './io'

// insert some sample data
const defaultProject = new Project('General', 'This is the default project.')
const otherProject = new Project('Specific', 'This is the other project.')
;[
  ['task 1', 'task 1 description\nLine 2\nLine3', new Date(Date.now() + 24 * 3600000), 3],
  ['task 2', 'task 2 description', new Date(Date.now() + 48 * 3600000), 2],
  ['task 3', 'task 3 description', new Date(Date.now() + 72 * 3600000), 1]
].forEach(t => new Task(defaultProject, t[0], t[1], t[2], t[3]))
;[
  ['task A', 'task A description', new Date(Date.now() + 96 * 3600000), 1],
  ['task B', 'task B description', new Date(Date.now() + 120 * 3600000), 2],
  ['task C', 'task C description', new Date(Date.now() + 144 * 3600000), 3]
].forEach(t => new Task(otherProject, t[0], t[1], t[2], t[3]))

inputOutput.addProjects(Project.LIST)
