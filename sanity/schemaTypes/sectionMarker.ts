import { defineType, defineField } from "sanity";


export default defineType({
  name: 'sectionMarker',
  title: 'Section',
  type: 'object',
  fields: [defineField({ name: 'title', type: 'string' })],
});
