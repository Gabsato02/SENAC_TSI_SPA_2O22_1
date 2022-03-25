import React from 'react';
import Helmet from 'react-helmet';

export default function SEO({ title = 'Senacgram' }) {
  return (
    <Helmet>
      <title>{`${title} - Senacgram 🤪`}</title>
    </Helmet>
  );
}
