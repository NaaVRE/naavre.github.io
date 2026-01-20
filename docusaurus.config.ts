import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'NaaVRE',
  tagline: 'Notebook as a Virtual Research Environment',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://naavre.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '',

  // GitHub pages deployment config.
  organizationName: 'NaaVRE',
  projectName: 'naavre.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/NaaVRE/naavre.github.io/blob/main/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/NaaVRE/naavre.github.io/blob/main/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'NaaVRE',
      logo: {
        alt: 'NaaVRE logo',
        src: 'img/logo-compact-light.svg',
        srcDark: 'img/logo-compact-dark.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation'
        },
        {
          href: 'https://github.com/NaaVRE',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'About NaaVRE',
              href: '/docs/about'
            },
            {
              label: 'Getting started',
              href: '/docs/tutorials'
            },
            {
              label: 'NaaVRE documentation',
              href: '/docs/NaaVRE_documentation'
            }
          ]
        },
        {
          title: 'NaaVRE',
          items: [
            {
              label: 'Collaborative virtual labs',
              href: 'https://beta.naavre.net/vreapp'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NaaVRE'
            },
            {
                label: 'Plan your own virtual lab',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSdbF6lrAYUx2CH7oxpjKWAa3mH2bSIPKJB5BkRa3xZStTcJOg/viewform'
            },
            {
                label: 'Get in touch',
                href: 'mailto:vlic@lifewatch.eu'
            }
          ]
        }
      ],

      copyright: `The development of NaaVRE is partially supported by the University of Amsterdam and LifeWatch ERIC. <br />
                    © ${new Date().getFullYear()} LifeWatch ERIC / UvA`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
