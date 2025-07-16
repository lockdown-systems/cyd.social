import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Cyd",
  tagline: "Tech platforms can't be trusted.",
  favicon: "img/icon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://cyd.social;",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "lockdown-systems",
  projectName: "cyd.social",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        pages: {
          // Enable pages (this is for static pages)
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
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
        { to: "/pricing/", label: "Pricing", position: "left" },
        {
          to: "https://opencollective.com/lockdown-systems",
          label: "Donate",
          position: "left",
        },
        {
          to: "https://lockdown.systems/#/portal/signup",
          label: "Newsletter",
          position: "left",
        },
        {
          to: "https://dash.cyd.social/",
          label: "Manage Account",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Claw back your data",
        src: "img/clawred.svg",
        height: 300,
      },
      links: [
        {
          html: `<a href="https://bsky.app/profile/cyd.social"><img src="/img/bluesky-brands.svg" alt="Bluesky" rel="me"></a>`,
        },
        {
          html: `<a href="https://infosec.exchange/@cyd"><img src="/img/mastodon-brands.svg" alt="Mastodon" rel="me"></a>`,
        },
        {
          html: `<a href="https://x.com/cyd_social"><img src="/img/x-twitter-brands.svg" alt="X Twitter" rel="me"></a>`,
        },
        {
          html: `<a href="https://github.com/lockdown-systems/cyd/"><img src="/img/github-brands.svg" alt="GitHub" rel="me"></a>`,
        },
        {
          label: "Privacy Policy",
          to: "/privacy/",
        },
        {
          label: "Terms of Use",
          to: "/terms/",
        },
        {
          label: "Contact",
          to: "/contact/",
        },
        {
          label: "Lockdown Systems",
          to: "https://lockdown.systems/",
        },
        {
          label: "Credits",
          to: "/credits/",
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
