import React from "react";
import Layout from "@theme/Layout";
import styles from "./404.module.css";

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found"
      description="The page you are looking for could not be found."
    >
      <main className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Page Not Found</h1>
            <img
              src="/img/omgkevin2.svg"
              alt="Page Not Found"
              className={styles.image}
            />
            <div className={styles.buttonContainer}>
              <a href="/" className="buttonPrimary">
                Go to Homepage
              </a>
              <a href="/download/" className="buttonSecondary buttonSmall">
                Download Cyd
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
