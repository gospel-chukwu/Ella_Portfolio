import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import sectionMarker from './sectionMarker'
import snapshot from './snapshot'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, sectionMarker, snapshot, siteSettings],
}
