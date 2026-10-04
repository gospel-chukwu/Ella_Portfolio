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
      name: 'thumbnailFit',
      title: 'Thumbnail Display',
      type: 'string',
      options: {
        list: [
          { title: 'Fill card (cover)', value: 'cover' },
          { title: 'Centered (contain)', value: 'contain' },
        ],
      },
      initialValue: 'cover',
    }),
    defineField({
      name: 'thumbnailAlignY',
      title: 'Thumbnail Vertical Position',
      type: 'string',
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'bottom' },
          { title: 'Top', value: 'top' },
        ],
      },
      initialValue: 'center',
      hidden: ({ document }) => document?.thumbnailFit !== 'contain', // only matters when not full-bleed
    }),
    defineField({
      name: 'thumbnailAlignX',
      title: 'Thumbnail Horizontal Position',
      type: 'string',
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'center',
      hidden: ({ document }) => document?.thumbnailFit !== 'contain',
    }),
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
