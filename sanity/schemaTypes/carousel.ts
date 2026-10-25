import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Image slider',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Width',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Inside the text column', value: 'column' },
          { title: 'Full screen width', value: 'wide' },
        ],
      },
      initialValue: 'column',
    }),
    defineField({
      name: 'slides',
      type: 'array',
      validation: Rule => Rule.min(2),
      of: [
        {
          type: 'object',
          name: 'slide',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
              validation: Rule => Rule.required(),
            }),
            defineField({ name: 'caption', type: 'string' }),
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        },
      ],
    }),
  ],
  preview: {
    select: { slides: 'slides', layout: 'layout' },
    prepare: ({ slides, layout }) => ({
      title: 'Image slider',
      subtitle: `${slides?.length ?? 0} slides · ${layout === 'wide' ? 'full width' : 'in column'}`,
    }),
  },
});
