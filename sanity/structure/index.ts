import type {StructureResolver} from 'sanity/structure'
import {CodeBlockIcon, ProjectsIcon, TranslateIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('techs').title('Technologies').icon(CodeBlockIcon),
      S.divider(),
      S.documentTypeListItem('projects')
        .title('Projects')
        .icon(ProjectsIcon)
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('FR Projects')
                .schemaType('projects')
                .icon(TranslateIcon)
                .child(
                  S.documentList()
                    .title('French translated projects')
                    .schemaType('projects')
                    .filter('_type == "projects" && language == "fr"'),
                ),
              S.listItem()
                .title('EN Projects')
                .schemaType('projects')
                .icon(TranslateIcon)
                .child(
                  S.documentList()
                    .title('English translated projects')
                    .schemaType('projects')
                    .filter('_type == "projects" && language == "en"'),
                ),
            ]),
        ),
    ])
