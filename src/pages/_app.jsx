import '../../globals.css'; // Global styles
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MyContextProvider } from '../context/MyContext'; // Context provider
import Navbar from '../components/Navbar'; // Navbar
import Footer from '../components/Footer'; // Footer
import Popup from '../components/Popup'; // Popup component

function MyApp({ Component, pageProps }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show the popup after 10 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fixLayout = () => {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.width = '100vw';
      document.documentElement.style.width = '100vw';
    };

    // Apply fix on every route change
    router.events.on('routeChangeComplete', fixLayout);

    // Apply it once on mount just in case
    fixLayout();

    return () => {
      router.events.off('routeChangeComplete', fixLayout);
    };
  }, [router]);

  return (
    <MyContextProvider>
      <div className="w-screen overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
        {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
      </div>
    </MyContextProvider>
  );
}

export default MyApp;
