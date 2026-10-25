import { type SchemaTypeDefinition } from 'sanity';
import project from './project';
import sectionMarker from './sectionMarker';
import snapshot from './snapshot';
import siteSettings from './siteSettings';
import figure from './figure';
import carousel from './carousel';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, sectionMarker, snapshot, siteSettings, figure, carousel],
};
