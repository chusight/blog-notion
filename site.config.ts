import { siteConfig } from './lib/site-config'

export default siteConfig({
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '69300519aa2a465aa70f4f12edd1e3e0',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'o-id',

  // basic site info (required)åå
  name: 'o-id',
  domain: 'o-id.cc',
  author: 'o-id',

  // open graph metadata (optional)
  description: "Notion blog",
  // socialImageTitle: 'HM_dev',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'chusight1',
  github: 'chusight',
  linkedin: '',
  instagram: 'onet2lee',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'hanmilLee/nextjs-notion-starter-kit',
 
  // Cusdis comment widget (optional)
  // cusdis: {
  //   appId: 'd39a1dc4-5580-4ad8-8d75-c6a486475b5a' // your website id
  // },
  
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '2c53271e47464ca59f021907db220508'
    },
    {
      title: 'Contact',
      pageId: 'b8b7971e749b41f487a1d00c40eb7a0d'
    }
  ]
})
