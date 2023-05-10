import { Project } from './taskClasses'
import { inputOutput } from './io'

// eslint-disable-next-line no-unused-vars
const defaultProject = new Project('General', 'This is the default project.')

inputOutput.addProjects(Project.LIST)
