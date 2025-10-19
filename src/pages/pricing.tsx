import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./pricing.module.css";

interface FeatureItem {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price?: string;
  priceNote?: string;
  buttonText: string;
  buttonUrl: string;
  buttonStyle: "free" | "premium";
  featuresHeader: string;
  features: FeatureItem[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description:
      "Cyd can help you save a local copy of your data and delete all your tweets for free.",
    buttonText: "Get Cyd Now",
    buttonUrl: "/download/",
    buttonStyle: "free",
    featuresHeader: "Features for X platform",
    features: [
      { text: "Unlimited X accounts", included: true },
      {
        text: "Save a backup of your tweets, retweets, likes, bookmarks, and direct messages",
        included: true,
      },
      { text: "Delete all your tweets", included: true },
      { text: "Unfollow everyone", included: false },
      { text: "Delete your likes", included: false },
      { text: "Delete your bookmarks", included: false },
      { text: "Delete your direct messages", included: false },
      { text: "Migrate your tweets to Bluesky", included: false },
    ],
  },
  {
    name: "Premium",
    description:
      "With a premium plan, you can selectively delete other data too.",
    price: "$36",
    priceNote: "/year (plus taxes)",
    buttonText: "Get Premium",
    buttonUrl: "https://dash.cyd.social/#/dashboard/buy",
    buttonStyle: "premium",
    featuresHeader: "Features for X platform",
    features: [
      { text: "Everything in the free plan", included: true },
      {
        text: "Delete your tweets, except the ones you want to keep!",
        included: true,
      },
      { text: "Unfollow everyone", included: true },
      { text: "Delete your likes", included: true },
      { text: "Delete your bookmarks", included: true },
      { text: "Delete your direct messages", included: true },
      { text: "Migrate your tweets to Bluesky", included: true },
    ],
  },
  {
    name: "Cyd for Teams",
    description:
      "Give your employees privacy, peace of mind, and protection from doxing and harassment.",
    price: "$36",
    priceNote: "/user/year (plus taxes)",
    buttonText: "Get Cyd for Teams",
    buttonUrl: "https://dash.cyd.social/#/teams/new",
    buttonStyle: "premium",
    featuresHeader: "Features",
    features: [
      {
        text: "Employees get all features of individual Premium plans, for all tech platforms",
        included: true,
      },
      { text: "Centralized user management and billing", included: true },
      {
        text: "Supports auto-enrollment based on email domain",
        included: true,
      },
      { text: "Supports manually inviting users by email", included: true },
      { text: "Seats are transferrable", included: true },
    ],
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className={styles.pricingColumn}>
      <div className={styles.pricingHeader}>
        <h2>{plan.name}</h2>
        <p className={styles.description}>{plan.description}</p>
        {plan.price && (
          <p className={styles.price}>
            <strong>{plan.price}</strong>
            <span className={styles.priceNote}>{plan.priceNote}</span>
          </p>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <a
          href={plan.buttonUrl}
          className={
            plan.buttonStyle === "free"
              ? "buttonSecondaryOutline buttonSmall"
              : "buttonSecondary buttonSmall"
          }
        >
          {plan.buttonText}
        </a>
      </div>

      <p className={styles.featuresHeader}>{plan.featuresHeader}</p>

      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <img
              src={
                feature.included
                  ? useBaseUrl("/img/circle-check-solid.svg")
                  : useBaseUrl("/img/circle-xmark-regular.svg")
              }
              alt={feature.included ? "Included" : "Not included"}
              className={styles.featureIcon}
            />
            <div className={styles.featureText}>{feature.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <Layout
      title="Pricing - Take control of your data with Cyd"
      description="Cyd is the product, not you. Delete as much of your data as you want, from as many accounts as you want."
    >
      <main className={styles.mainSection}>
        <div className={styles.container}>
          <article className={styles.article}>
            <header className={styles.articleHeader}>
              <h1 className={styles.articleTitle}>
                Take control of your data with Cyd.
              </h1>
              <p className={styles.articleExcerpt}>
                Cyd is the product, not you. With Cyd, you can delete as much of
                your data as you want, from as many of your accounts as you
                want.
              </p>
            </header>

            <section className={styles.content}>
              <div className={styles.pricingContainer}>
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}
