import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useParallax } from "@site/src/hooks/useParallax";
import styles from "./download.module.css";

interface PlatformInfo {
  name: string;
  displayName: string;
  icon: string;
  screenshot: string;
  downloads: Array<{
    label: string;
    url: string;
    arch?: string;
  }>;
}

function DetectedPlatformSection({ platform }: { platform: PlatformInfo }) {
  const scrollY = useParallax();

  // Calculate parallax transform for the screenshot
  const screenshotTransform = scrollY * 0.15;

  return (
    <section className={styles.heroSection}>
      <div className={styles.downloadContainer}>
        <div className={styles.downloadContent}>
          <div className={styles.contentInner}>
            <h1 className={styles.primaryTitle}>
              Cyd for {platform.displayName}
            </h1>
            <div className={styles.downloadWrapper}>
              {platform.downloads.map((download, index) => (
                <a key={index} className="buttonPrimary" href={download.url}>
                  <img
                    src={useBaseUrl("/img/white-download.svg")}
                    alt=""
                    className="buttonIcon"
                  />
                  {download.label}
                </a>
              ))}
            </div>
            <p className={styles.otherLinks}>
              <a href="#other-platforms">Other platforms</a>
            </p>
          </div>
        </div>
        <div
          className={styles.screenshotContainer}
          style={{
            transform: `translateY(${screenshotTransform}px)`,
          }}
        >
          <img
            className={styles.downloadScreenshot}
            src={useBaseUrl(platform.screenshot)}
            alt={`Cyd for ${platform.displayName}`}
          />
        </div>
      </div>
    </section>
  );
}

function AllPlatformsSection() {
  return (
    <section className={styles.allPlatformsSection} id="other-platforms">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Download Cyd for desktop platforms
        </h2>
        <div className={styles.platformGrid}>
          {Object.values(getPlatforms()).map((platform) => (
            <div key={platform.name} className={styles.platformCard}>
              <div className={styles.platformIcon}>
                <img
                  src={useBaseUrl(platform.icon)}
                  alt={`${platform.displayName} logo`}
                />
              </div>
              <div className={styles.platformContent}>
                <h3>{platform.displayName}</h3>
                <ul>
                  {platform.downloads.map((download, index) => (
                    <li key={index}>
                      <a href={download.url}>{download.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getPlatforms(): Record<string, PlatformInfo> {
  return {
    mac: {
      name: "mac",
      displayName: "Mac",
      icon: "/img/apple-brands.svg",
      screenshot: "/img/download-screenshot-mac.png",
      downloads: [
        {
          label: "Download",
          url: "https://api.cyd.social/download?platform=macos",
        },
      ],
    },
    windows: {
      name: "windows",
      displayName: "Windows",
      icon: "/img/windows-brands.svg",
      screenshot: "/img/download-screenshot-windows.png",
      downloads: [
        {
          label: "Download (x64)",
          url: "https://api.cyd.social/download?platform=windows",
          arch: "x64",
        },
        {
          label: "Download (arm64)",
          url: "https://api.cyd.social/download?platform=windows&arch=arm64",
          arch: "arm64",
        },
      ],
    },
    linux: {
      name: "linux",
      displayName: "Linux",
      icon: "/img/linux-brands.svg",
      screenshot: "/img/download-screenshot-linux.png",
      downloads: [
        {
          label: "Linux Instructions",
          url: "https://docs.cyd.social/docs/getting-started/download#cyd-for-linux",
        },
      ],
    },
  };
}

export default function Download() {
  const [detectedPlatform, setDetectedPlatform] = useState<PlatformInfo | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const platforms = getPlatforms();
      const platform = navigator.platform.toLowerCase();
      const userAgent = navigator.userAgent.toLowerCase();

      if (platform.includes("win") || userAgent.includes("windows")) {
        setDetectedPlatform(platforms.windows);
      } else if (platform.includes("mac") || userAgent.includes("mac")) {
        setDetectedPlatform(platforms.mac);
      } else if (platform.includes("linux") || userAgent.includes("linux")) {
        setDetectedPlatform(platforms.linux);
      }
    }
  }, []);

  return (
    <Layout
      title="Download Cyd"
      description="Download Cyd to start clawing back your data from Big Tech"
    >
      {detectedPlatform && (
        <DetectedPlatformSection platform={detectedPlatform} />
      )}
      <AllPlatformsSection />
    </Layout>
  );
}
