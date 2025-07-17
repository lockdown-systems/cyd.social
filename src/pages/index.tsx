import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useParallax } from "@site/src/hooks/useParallax";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const scrollY = useParallax();

  // Calculate parallax transforms
  const titleTransform = Math.min(scrollY * 0.5, 100);
  const imageTransform = scrollY * 0.3;

  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading
              as="h1"
              className={styles.heroTitle}
              style={{
                transform: `translateY(-${titleTransform}px)`,
                position: scrollY > 100 ? "sticky" : "relative",
                top: scrollY > 100 ? "2rem" : "auto",
              }}
            >
              Tech platforms can't be trusted.
            </Heading>
            <p className={styles.heroSubtitle}>
              It's time to regain control of your data. Backup and delete all of
              your tweets, and migrate them to Bluesky.
            </p>
            <div className={styles.heroButtons}>
              <Link className="buttonPrimary" to="/download/">
                <img
                  src={useBaseUrl("/img/white-download.svg")}
                  alt=""
                  className="buttonIcon"
                />
                Download Cyd
              </Link>
              <Link className="buttonSecondary" to="https://docs.cyd.social/">
                <img
                  src={useBaseUrl("/img/white-read.svg")}
                  alt=""
                  className="buttonIcon"
                />
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div
          className={styles.heroImage}
          style={{
            transform: `translateY(${imageTransform}px)`,
          }}
        >
          <img
            src={useBaseUrl("/img/clawred.svg")}
            alt="Claw back your data"
            className={styles.clawImage}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Cyd - Claw back your data from Big Tech"
      description="Automatically delete your data from tech platforms, except for what you want to keep"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
