import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {structure} from './structure/index'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 's8txvu4t',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'fr', title: 'Français'},
        {id: 'en', title: 'English'},
      ],
      schemaTypes: ['projects'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
