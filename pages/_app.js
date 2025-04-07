import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ClerkProvider>
  )
}

export default MyApp
