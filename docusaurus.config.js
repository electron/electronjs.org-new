/** @type {import('@docusaurus/types').DocusaurusConfig} */
const fiddleEmbedder = require('./src/transformers/fiddle-embedder.js');

module.exports = {
  title: 'Electron',
  tagline: 'Build cross-platform desktop apps with JavaScript, HTML, and CSS',
  url: 'https://electronjs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'electron', // Usually your GitHub org/user name.
  projectName: 'electron', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Electron',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          type: 'doc',
          docId: 'get-started/quick-start',
          position: 'left',
        },
        {
          label: 'API',
          type: 'doc',
          docId: 'api/accelerator',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/electron/electron',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/electron',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/electron',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/electronjs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/electron/electron',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/electron/electronjs.org-new',
          remarkPlugins: [fiddleEmbedder],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://example.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
