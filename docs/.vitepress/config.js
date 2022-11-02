import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Easy to Use, Open Source Learning Management System';

export default defineConfig({
  lang: 'en-US',
  title: 'Frappe LMS',
  description: tagline,
  titleTemplate: tagline,
  appearance: true,
  lastUpdated: true,
	outDir: "../lms_docs/public/docs",
	base: "/assets/lms_docs/docs/",

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/assets/lms_docs/docs/favicon.png' }],
    ['link', { rel: 'stylesheet', href:'/assets/lms_docs/docs/style.css' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/pateljannat/lms_docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/lms' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Frappe Technologies Pvt. Ltd.',
    },
  },
});

function nav() {
  return [
        {
        text: 'Home',
        link: 'https://frappelms.com/',
        },
        {
            text: 'About US',
            link: 'https://frappelms.com/about-us',
        },
        {
            text: 'Pricing',
            link: 'https://frappelms.com/pricing',
        }
  ];
}