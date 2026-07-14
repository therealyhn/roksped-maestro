import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import structure, {singletonTypes} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Rok Šped Plus',

  projectId: '7003ks3q',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  document: {
    actions: (previous, {schemaType}) =>
      singletonTypes.includes(schemaType)
        ? previous.filter(({action}) => !['duplicate', 'delete'].includes(action))
        : previous,
    newDocumentOptions: (previous) => previous.filter((item) => !singletonTypes.includes(item.templateId)),
  },

  schema: {
    types: schemaTypes,
  },
})
