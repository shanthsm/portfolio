// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shanthalingaiah SM',
  tagline: 'Senior Informational Developer | Technical Writer | Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://shanthsm.github.io', // Change to your deployment URL
  baseUrl: '/portfolio/', // Change to '/' if deploying to root
  organizationName: 'shanthsm', // GitHub username
  projectName: 'portfolio', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // No docs section for portfolio
        blog: false, // Disable blog
        pages: true,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Shanthalingaiah SM',
        logo: {
          alt: 'Portfolio Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://www.linkedin.com/in/shanthalingaiah-sm/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/shanthsm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shanthalingaiah-sm/' },
              { label: 'GitHub', href: 'https://github.com/shanthsm' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Shanthalingaiah SM. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
