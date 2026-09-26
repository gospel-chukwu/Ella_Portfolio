import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'thumbnail', type: 'image' }),
    defineField({
      name: 'category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Mobile Apps', value: 'mobile-apps' },
          { title: 'Websites', value: 'websites' },
          { title: 'Web Apps', value: 'web-apps' },
          { title: 'Branding', value: 'branding' },
          { title: 'Dashboards', value: 'dashboards' },
        ],
      },
    }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'shortDescription', type: 'text', rows: 3 }),
    defineField({
      name: 'linkType',
      type: 'string',
      options: { list: ['external', 'caseStudy'] },
    }),
    defineField({
      name: 'externalUrl',
      type: 'url',
      hidden: ({ document }) => document?.linkType !== 'external',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        {
          type: 'file',
          name: 'video',
          title: 'Video',
          options: { accept: 'video/*' },
        },
        { type: 'sectionMarker' },
      ],
      hidden: ({ document }) => document?.linkType !== 'caseStudy',
    }),
  ],
});
