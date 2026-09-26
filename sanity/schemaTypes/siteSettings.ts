import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'clients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'logo', type: 'image' }),
            defineField({ name: 'name', type: 'string' }), // for alt text, not necessarily displayed
          ],
        },
      ],
    }),
  ],
});
