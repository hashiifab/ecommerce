import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import BackButton from './BackButton';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecommerce</title>
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <div className="back-button-container">
          <BackButton />
        </div>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout