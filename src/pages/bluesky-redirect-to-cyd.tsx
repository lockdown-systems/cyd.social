import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function BlueskyRedirectToCydDev(): React.JSX.Element {
  useEffect(() => {
    const protocol = window.location.href.includes('redirect-to-cyd-dev') ? 'cyd-dev' : 'cyd';
    const url = `${protocol}://bluesky-oauth/${window.location.search}`;
    console.log('Redirecting to', url);
    window.location.href = url;
  }, []);

  return (
    <Layout
      title="Redirecting to Cyd to finish Bluesky authentication..."
      description="Redirecting to Cyd application to complete Bluesky authentication"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Redirecting to Cyd to finish Bluesky authentication...</h1>
            <noscript>
              <p>Logging into your Bluesky account within Cyd requires JavaScript.</p>
            </noscript>
            <p>If your browser asks you if you want to open Cyd, say yes.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
