import {defineField, defineType} from 'sanity'
import {CodeBlockIcon} from '@sanity/icons'

export const techsType = defineType({
  name: 'techs',
  title: 'Technologies',
  type: 'document',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tech name',
      type: 'string',
    }),
    defineField({
      type: 'image',
      name: 'icon',
      title: 'Tech icon',
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Type of tech',
      options: {
        list: [
          {
            title: 'Framework',
            value: 'framework',
          },
          {
            title: 'Software',
            value: 'software',
          },
          {
            title: 'Language',
            value: 'language',
          },
        ],
      },
    }),
    defineField({
      type: 'boolean',
      name: 'learning',
      title: 'Currently learning',
    }),
  ],
})
