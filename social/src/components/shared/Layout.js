import React from 'react';
import Navbar from './Navbar';
import SEO from './SEO';

export default function Layout({ title, children }) {
  return (
    <>
      <header>
        <SEO title={title} />
        <Navbar />
      </header>
      <main style={{ marginTop: '96px' }} className="text-center">
        {children}
      </main>
      <footer></footer>
    </>
  );
}
