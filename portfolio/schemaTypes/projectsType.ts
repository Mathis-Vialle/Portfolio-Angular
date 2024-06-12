import {defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export const projectsType = defineType({
  name: 'projects',
  title: 'Projects',
  icon: ProjectsIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Project summary',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imgs',
      title: 'Project images',
      type: 'array',
      of: [
        {
          name: 'img',
          title: 'New image',
          type: 'image',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'techsUsed',
      title: 'Project techs',
      type: 'array',
      of: [
        {
          name: 'techDetails',
          title: 'Tech and details',
          type: 'object',
          fields: [
            {
              name: 'tech',
              title: 'New tech',
              type: 'reference',
              to: [{type: 'techs'}],
              validation: (rule) => rule.required(),
            },
            {
              name: 'techUsage',
              title: 'Why was the tech used in this project',
              type: 'text',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              tech: 'tech.title',
              icon: 'tech.icon',
              techUsage: 'techUsage',
            },
            prepare(selection) {
              const {tech, icon, techUsage} = selection
              return {
                title: tech,
                media: icon,
                subtitle: techUsage,
              }
            },
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      locale: 'language',
      mainImage: 'imgs',
    },
    prepare(selection) {
      const {title, locale, mainImage} = selection

      return {
        title: title + ' | ' + locale.toUpperCase(),
        media: mainImage[0],
      }
    },
  },
})
