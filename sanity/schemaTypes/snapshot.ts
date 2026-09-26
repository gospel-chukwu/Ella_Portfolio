import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'snapshot',
  title: 'Snapshot',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
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
    defineField({ name: 'media', type: 'file' }),
  ],
});
