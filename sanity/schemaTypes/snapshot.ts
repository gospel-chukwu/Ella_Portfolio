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
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      type: 'image',
      hidden: ({ document }) => document?.mediaType !== 'image',
    }),
    defineField({
      name: 'video',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ document }) => document?.mediaType !== 'video',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls position in the homepage grid (1-10). Must be unique — no two snapshots can share a number.',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(10)
          .custom(async (value, context) => {
            if (value === undefined) return true;

            const { document, getClient } = context;
            const client = getClient({ apiVersion: '2026-03-01' });

            const duplicates = await client.fetch(
              `count(*[_type == "snapshot" && order == $value && _id != $id])`,
              { value, id: document?._id.replace('drafts.', '') },
            );

            return duplicates === 0
              ? true
              : 'This order number is already used by another snapshot.';
          }),
    }),
  ],
});
