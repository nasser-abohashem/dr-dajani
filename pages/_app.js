import Head from "next/head";
import Navbar from "@/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon_dajani-192.png" />
        <meta name="theme-color" content="#4c6138" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icons/icon_dajani-192.png" />
        <title>الرئيسية| موقع د. حمود الدعجاني</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap"
          rel="stylesheet"
        />

        <meta charSet="UTF-8" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

