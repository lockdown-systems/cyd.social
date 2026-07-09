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
  buttonText: string;
  buttonUrl: string;
  buttonStyle: "free" | "premium";
  monthlyPriceCents?: number;
  annualPriceCents?: number;
  billingRateSuffix?: string;
  featuresHeader?: string;
  features?: FeatureItem[];
  xFeaturesHeader?: string;
  xFeatures?: FeatureItem[];
  blueskyFeaturesHeader?: string;
  blueskyFeatures?: FeatureItem[];
}

type BillingPeriod = "monthly" | "annual";

const formatDollars = (cents: number) => (cents / 100).toFixed(0);

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description:
      "Cyd can help you save a local copy of your data and delete all your tweets for free.",
    buttonText: "Get Cyd Now",
    buttonUrl: "/download/",
    buttonStyle: "free",
    blueskyFeaturesHeader: "Bluesky Features",
    blueskyFeatures: [
      { text: "Unlimited Bluesky accounts", included: true },
      {
        text: "Backup posts, reposts, likes, bookmarks, and chats",
        included: true,
      },
      {
        text: "Delete posts, except for what you want to keep",
        included: false,
      },
      { text: "Delete reposts", included: false },
      { text: "Delete likes", included: false },
      { text: "Delete chats", included: false },
      { text: "Delete bookmarks", included: false },
      { text: "Unfollow everyone", included: false },
    ],
    xFeaturesHeader: "X Features",
    xFeatures: [
      { text: "Unlimited X accounts", included: true },
      {
        text: "Backup tweets, retweets, likes, bookmarks, and direct messages",
        included: true,
      },
      { text: "Delete all tweets", included: true },
      { text: "Unfollow everyone", included: false },
      { text: "Delete likes", included: false },
      { text: "Delete bookmarks", included: false },
      { text: "Delete direct messages", included: false },
      { text: "Migrate tweets to Bluesky", included: false },
    ],
  },
  {
    name: "Premium",
    description:
      "With Premium, you can selectively delete other data too.",
    buttonText: "Get Premium",
    buttonUrl: "https://dash.cyd.social/#/dashboard/buy",
    buttonStyle: "premium",
    monthlyPriceCents: 400,
    annualPriceCents: 3600,
    billingRateSuffix: " / month",
    blueskyFeaturesHeader: "Bluesky Features",
    blueskyFeatures: [
      { text: "Everything in the free plan", included: true },
      {
        text: "Delete posts, except for what you want to keep",
        included: true,
      },
      { text: "Delete reposts", included: true },
      { text: "Delete likes", included: true },
      { text: "Delete chats", included: true },
      { text: "Delete bookmarks", included: true },
      { text: "Unfollow everyone", included: true },
    ],
    xFeaturesHeader: "X Features",
    xFeatures: [
      { text: "Everything in the free plan", included: true },
      {
        text: "Delete tweets, except the ones you want to keep",
        included: true,
      },
      { text: "Unfollow everyone", included: true },
      { text: "Delete likes", included: true },
      { text: "Delete bookmarks", included: true },
      { text: "Delete direct messages", included: true },
      { text: "Migrate tweets to Bluesky", included: true },
    ],
  },
  {
    name: "Cyd for Teams",
    description:
      "Give your employees privacy, peace of mind, and protection from doxing and harassment.",
    buttonText: "Get Cyd for Teams",
    buttonUrl: "https://dash.cyd.social/#/teams/new",
    buttonStyle: "premium",
    monthlyPriceCents: 400,
    annualPriceCents: 3600,
    billingRateSuffix: " / user / month",
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

function intervalLabel(billingPeriod: BillingPeriod): string {
  return billingPeriod === "monthly" ? "1 Month" : "12 Months";
}

function intervalRateLabel(plan: PricingPlan, billingPeriod: BillingPeriod): string {
  const monthlyEquivalentCents =
    billingPeriod === "monthly"
      ? plan.monthlyPriceCents || 0
      : Math.round((plan.annualPriceCents || 0) / 12);

  return `$${formatDollars(monthlyEquivalentCents)}${plan.billingRateSuffix || " / month"}`;
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const [billingPeriod, setBillingPeriod] = React.useState<BillingPeriod>("annual");

  return (
    <div className={styles.pricingColumn}>
      <div className={styles.pricingHeader}>
        <h2>{plan.name}</h2>
        <p className={styles.description}>{plan.description}</p>
        {plan.buttonStyle === "premium" && (
          <div className={styles.billingToggleBlock}>
            <div className={styles.billingToggle} role="group" aria-label={`${plan.name} billing period`}>
              <button
                type="button"
                className={
                  billingPeriod === "monthly"
                    ? styles.billingToggleActive
                    : styles.billingToggleInactive
                }
                onClick={() => setBillingPeriod("monthly")}
              >
                1 Month
              </button>
              <button
                type="button"
                className={
                  billingPeriod === "annual"
                    ? styles.billingToggleActive
                    : styles.billingToggleInactive
                }
                onClick={() => setBillingPeriod("annual")}
              >
                12 Months
              </button>
            </div>
            <div className={styles.billingPrice}>
              <span className={styles.billingRate}>
                {intervalRateLabel(plan, billingPeriod)}
              </span>
            </div>
          </div>
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

      {plan.blueskyFeatures && (
        <>
          <p className={styles.featuresHeader}>{plan.blueskyFeaturesHeader}</p>
          <ul className={styles.features}>
            {plan.blueskyFeatures.map((feature, index) => (
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
        </>
      )}

      {plan.xFeatures && (
        <>
          <p className={styles.featuresHeader}>{plan.xFeaturesHeader}</p>
          <ul className={styles.features}>
            {plan.xFeatures.map((feature, index) => (
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
        </>
      )}

      {plan.features && (
        <>
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
        </>
      )}
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
