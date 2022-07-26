export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62dfea76a141fb1ad4537c31',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k1dfpbez',
                  apiId: 'acf6e307-d9a2-4e4b-9dca-c21d7c7f2fda'
                },
                {
                  buildHookId: '62dfea772678a4222ccbf43c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dv89yee2',
                  apiId: 'd45a8402-8c99-4c7d-9ad5-1b332737b599'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MagicMart/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dv89yee2.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
