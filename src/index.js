import { Project } from './project'
import { inputOutput } from './io'

Project.populate()
inputOutput.addProjects(Project.LIST)
