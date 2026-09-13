import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

// The URL Cyd registers with the operating system to receive a finished
// Bluesky authorization. A private-use URI scheme has no naming authority, so
// exactly one slash follows the colon (RFC 8252 section 7.1). This must match
// what Cyd handles: see blueskyOAuthCallbackURL() in the cyd repo.
const CYD_URL = 'social.cyd.api:/atproto-oauth-callback/';

export default function BlueskyRedirectToCyd(): React.JSX.Element {
  // The query string carries an authorization code, which is account-control
  // material, so it is never logged. It is only ever handed straight to Cyd.
  const [cydURL, setCydURL] = useState('');

  useEffect(() => {
    const url = `${CYD_URL}${window.location.search}`;
    setCydURL(url);
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
            {cydURL && (
              <p>
                If nothing happened, <a href={cydURL}>open Cyd</a>.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
