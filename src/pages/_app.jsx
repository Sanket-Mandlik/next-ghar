import '../../globals.css'; // Global styles
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MyContextProvider } from '../context/MyContext'; // Context provider
import Navbar from '../components/Navbar'; // Navbar
import Footer from '../components/Footer'; // Footer
import ContactIcons from '../components/ContactIcons'; // ✅ WhatsApp Icon component
import Head from 'next/head'; // ✅ Import Head
import Popup from '../components/Popup'; // Popup component

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
        {/* ✅ Preload LCP image used in Hero */}
        <link
          rel="preload"
          as="image"
          href="/assets/project1.webp"
          imagesrcset="/assets/project1.webp"
          type="image/webp"
        />
      </Head>
      <div className="w-screen overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
        {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
        <ContactIcons /> {/* ✅ WhatsApp icon fixed at bottom-right */}
      </div>
    </MyContextProvider>
  );
}

export default MyApp;
