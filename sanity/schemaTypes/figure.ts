import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'figure',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
    defineField({
      name: 'framed',
      type: 'boolean',
      title: 'Show on grey card',
      initialValue: false,
    }),
    defineField({
      name: 'attach',
      title: 'Image position in card',
      type: 'string',
      description:
        'Floating leaves space around the image. The other options make it touch the edge(s) of the card.',
      options: {
        list: [
          { title: 'Floating (space all around)', value: 'none' },
          { title: 'Bottom', value: 'bottom' },
          { title: 'Bottom right', value: 'bottom-right' },
          { title: 'Bottom left', value: 'bottom-left' },
          { title: 'Right', value: 'right' },
          { title: 'Left', value: 'left' },
          { title: 'Top', value: 'top' },
          { title: 'Top right', value: 'top-right' },
          { title: 'Top left', value: 'top-left' },
        ],
      },
      initialValue: 'none',
      hidden: ({ parent }) => !parent?.framed,
    }),
  ],
});
