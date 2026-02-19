import '../../globals.css'; // Global styles
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MyContextProvider } from '../context/MyContext'; // Context provider
import Navbar from '../components/Navbar'; // Navbar
import Footer from '../components/Footer'; // Footer
import ContactIcons from '../components/ContactIcons'; // WhatsApp Icon component
import Head from 'next/head'; // Import Head
import Script from 'next/script'; // Import Script
import Popup from '../components/Popup'; // Popup component
import { Montserrat } from 'next/font/google'; // Import Montserrat

// Initialize Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], // Use only the weights you actually need
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show the popup after 7 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fixLayout = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.width = '100vw';
      document.documentElement.style.width = '100vw';
    };

    router.events.on('routeChangeComplete', fixLayout);
    fixLayout();

    return () => {
      router.events.off('routeChangeComplete', fixLayout);
    };
  }, [router]);

  return (
    <MyContextProvider>
      <Head>
        <title>Make My Ghar | Best Interior Designers in Pune</title>
        {/* Favicon links */}
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </Head>

      {/* Google Tag Manager - Global Base Code */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L9PDETZMR7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L9PDETZMR7');
        `}
      </Script>

      {/* Microsoft Clarity - Global Base Code */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vjt74rgcen");
        `}
      </Script>
      <div className={`w-screen overflow-x-hidden min-h-screen flex flex-col ${montserrat.className}`}>
        <Navbar />
        <main className="flex-grow w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
        {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
        <ContactIcons /> {/* WhatsApp icon fixed at bottom-right */}
      </div>
    </MyContextProvider>
  );
}

export default MyApp;
