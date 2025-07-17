import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Cyd",
  tagline: "Tech platforms can't be trusted.",
  favicon: "img/icon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: "https://cyd.social;",
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "lockdown-systems",
  projectName: "cyd.social",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false, // Disable docs
        blog: false, // Disable blog
        theme: {
          customCss: "./src/css/custom.css",
        },
        pages: {},
      } satisfies Preset.Options,
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
          to: "https://opencollective.com/lockdown-systems",
          label: "Donate",
          position: "left",
        },
        {
          label: "Collective",
          to: "https://lockdown.systems/",
        },
        {
          to: "https://dash.cyd.social/",
          label: "Manage Account",
          position: "right",
        },
        {
          to: "/download/",
          html: '<img src="/img/white-download.svg" alt="" class="buttonIcon" /> Download Cyd',
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
            <div style="width: 100%;">
              <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
                <a href="https://bsky.app/profile/cyd.social" style="display: inline-block;"><img src="/img/bluesky-brands.svg" alt="Bluesky" rel="me" style="width: 24px; height: 24px;"></a>
                <a href="https://infosec.exchange/@cyd" style="display: inline-block;"><img src="/img/mastodon-brands.svg" alt="Mastodon" rel="me" style="width: 24px; height: 24px;"></a>
                <a href="https://x.com/cyd_social" style="display: inline-block;"><img src="/img/x-twitter-brands.svg" alt="X Twitter" rel="me" style="width: 24px; height: 24px;"></a>
                <a href="https://github.com/lockdown-systems/cyd/" style="display: inline-block;"><img src="/img/github-brands.svg" alt="GitHub" rel="me" style="width: 24px; height: 24px;"></a>
              </div>
              <div style="display: flex; justify-content: center; align-items: center; gap: 30px; flex-wrap: wrap;">
                <a href="/privacy/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Privacy Policy</a>
                <a href="/terms/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Terms of Use</a>
                <a href="/contact/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Contact</a>
                <a href="/credits/" style="text-decoration: none; color: var(--ifm-footer-link-color);">Credits</a>
              </div>
            </div>
          `,
        },
      ],
      copyright: "Cyd is a project of Lockdown Systems LLC",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
