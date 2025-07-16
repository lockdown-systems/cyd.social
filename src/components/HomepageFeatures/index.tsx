import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Backup Your Data",
    image: "/img/feature-backup.png",
    description: (
      <>
        Save a searchable copy of your data from tech platforms locally on your
        computer.
      </>
    ),
  },
  {
    title: "Delete Your Data",
    image: "/img/feature-delete.png",
    description: (
      <>Delete your tweets, likes, direct messages, and other data from X.</>
    ),
  },
  {
    title: "Migrate Your Data",
    image: "/img/feature-migrate.png",
    description: (
      <>
        Migrate your tweets from closed platforms like X into open platforms
        like Bluesky.
      </>
    ),
  },
  {
    title: "Private and Secure",
    image: "/img/feature-private.png",
    description: (
      <>
        Cyd runs directly on your computer, not on our servers. We don't have
        access to any of your accounts, or to any of the data in them.
      </>
    ),
  },
  {
    title: "Enshittification-Proof",
    image: "/img/feature-enshittification.png",
    description: (
      <>
        Cyd doesn't rely on third-party APIs from hostile tech platforms like X
        and Facebook.
      </>
    ),
  },
  {
    title: "Open Source",
    image: "/img/feature-open-source.png",
    description: (
      <>
        Cyd is open source software developed by Lockdown Systems Collective for
        the social good. The code is available on GitHub.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} className={styles.featurePng} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
