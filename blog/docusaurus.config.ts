import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Akshay's Blog",
  tagline: 'Software Engineering, Web Development & Technology',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://akshaydwarakanath.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AkshayDwarakanath', // Usually your GitHub org/user name.
  projectName: 'AkshayDwarakanath.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs, we only want blog
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent Posts',
          routeBasePath: '/', // Blog at root of /blog/
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} Akshay Dwarakanath`,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],
  
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Akshay's Blog",
      logo: {
        alt: 'Akshay Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://akshaydwarakanath.github.io/',
          label: '← Back to Portfolio',
          position: 'right',
          target: '_self',
        },
        {to: '/tags', label: 'Tags', position: 'left'},
        {to: '/archive', label: 'Archive', position: 'left'},
        {
          href: 'https://github.com/AkshayDwarakanath',
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
            {
              label: 'Home',
              href: 'https://akshaydwarakanath.github.io/',
              target: '_self',
            },
            {
              label: 'About',
              href: 'https://akshaydwarakanath.github.io/about',
              target: '_self',
            },
            {
              label: 'Projects',
              href: 'https://akshaydwarakanath.github.io/',
              target: '_self',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'All Posts',
              to: '/',
            },
            {
              label: 'Tags',
              to: '/tags',
            },
            {
              label: 'Archive',
              to: '/archive',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AkshayDwarakanath',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/akshaydwarakanath',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akshay Dwarakanath. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
