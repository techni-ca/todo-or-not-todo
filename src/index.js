import { Project } from './project'
import { inputOutput } from './io'

const defaultProject = new Project('General', 'This is the default project.')
inputOutput.addProjects([defaultProject])
