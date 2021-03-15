export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604f9a502f4a0b2e705f1c63',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3kjba5w8',
                  apiId: '197c23db-2806-41c2-b9fa-7ea7e4a9d74a'
                },
                {
                  buildHookId: '604f9a502f4a0b302d5f199d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5rkej7cw',
                  apiId: '7488705e-5db5-4725-b8eb-54183a4c2e7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petrmbugua/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5rkej7cw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
