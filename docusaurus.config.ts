import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Base URL configuration
const baseUrl = "/";

const config: Config = {
  title: "Cyd",
  tagline: "Tech platforms can't be trusted.",
  favicon: "img/icon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: "https://cyd.social",
  baseUrl,

  // GitHub pages deployment config
  organizationName: "lockdown-systems",
  projectName: "cyd.social",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        pages: {},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-lunr-search",
      {
        languages: ["en"],
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/help-shape-the-future-of-cyd/",
            to: "https://lockdown.systems/help-shape-the-future-of-cyd/",
          },
          {
            from: "/migrate-your-tweets-to-bluesky-with-the-latest-version-of-cyd/",
            to: "https://lockdown.systems/migrate-your-tweets-to-bluesky-with-the-latest-version-of-cyd/",
          },
          {
            from: "/cyd-is-now-open-source/",
            to: "https://lockdown.systems/cyd-is-now-open-source/",
          },
          {
            from: "/want-to-quit-x-in-2025-heres-how-to-do-it-the-right-way-with-cyd/",
            to: "https://lockdown.systems/want-to-quit-x-in-2025-heres-how-to-do-it-the-right-way-with-cyd/",
          },
          {
            from: "/backup-and-delete-your-bookmarks-from-x-with-the-latest-version-of-cyd/",
            to: "https://lockdown.systems/backup-and-delete-your-bookmarks-from-x-with-the-latest-version-of-cyd/",
          },
          {
            from: "/cyd-is-approximately-a-bazillion-times-faster-now/",
            to: "https://lockdown.systems/cyd-is-approximately-a-bazillion-times-faster-now/",
          },
          {
            from: "/delete-all-your-tweets-for-free-with-cyd/",
            to: "https://lockdown.systems/delete-all-your-tweets-for-free-with-cyd/",
          }
        ],
      },
    ],
  ],

  themeConfig: {
    image: "img/cyd-social-card.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: "Cyd Logo",
        src: "img/cyd.svg",
      },
      items: [
        { to: "/", label: "Home", position: "left", exact: true },
        { to: "/pricing/", label: "Pricing", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          label: "Docs",
          position: "left",
        },
        {
          label: "Collective",
          to: "https://lockdown.systems/",
          position: "left",
        },
        {
          type: "html",
          position: "left",
          value: "<div class='navbar__separator'></div>",
        },
        {
          to: "https://opencollective.com/lockdown-systems",
          label: "Donate",
          position: "right",
        },
        {
          to: "/download/",
          html: `<img src="${baseUrl}img/white-download.svg" alt="" class="buttonIcon" /> Download Cyd`,
          className: "buttonSecondary buttonSmall",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          html: `
            <div style="width: 100%; box-sizing: border-box; padding: 0 1rem;">
              <div style="display: flex; justify-content: center; align-items: center; column-gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
                <a href="https://bsky.app/profile/cyd.social" style="display: inline-block;"><img src="${baseUrl}img/bluesky-brands.svg" alt="Bluesky" rel="me" style="width: 24px; height: 24px;"></a>
                <a href="https://infosec.exchange/@cyd" style="display: inline-block;"><img src="${baseUrl}img/mastodon-brands.svg" alt="Mastodon" rel="me" style="width: 24px; height: 24px;"></a>
                <a href="https://x.com/cyd_social" style="display: inline-block;"><img src="${baseUrl}img/x-twitter-brands.svg" alt="X Twitter" rel="me" style="width: 24px; height: 24px;"></a>
                <a href="https://github.com/lockdown-systems/cyd/" style="display: inline-block;"><img src="${baseUrl}img/github-brands.svg" alt="GitHub" rel="me" style="width: 24px; height: 24px;"></a>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; column-gap: 20px; flex-wrap: wrap;">
                <a href="${baseUrl}privacy/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Privacy Policy</a>
                <a href="${baseUrl}terms/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Terms of Use</a>
                <a href="${baseUrl}contact/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Contact</a>
                <a href="${baseUrl}credits/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Credits</a>
                <a href="/blog" style="text-decoration: none; color: var(--ifm-footer-link-color);">Development Blog</a>
                <a href="https://dash.cyd.social/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Manage Cyd Account</a>
              </div>
              <p style="font-size: 0.8em; width: 100%; margin: 20px auto 0; text-align: center; box-sizing: border-box; overflow-wrap: break-word;">Cyd is a project of <a href="https://lockdown.systems/">Lockdown Systems</a>, a worker owned collective. Our fiscal sponsor is <a href="https://www.lucyparsonslabs.com">Lucy Parsons Labs</a>, a 501(c)(3) nonprofit.</p>
            </div>
          `,
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "cyd.social",
    },
  ],
};

export default config;
