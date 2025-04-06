import '../../globals.css'; // Global styles
import { useEffect, useState } from 'react';
import { MyContextProvider } from '../context/MyContext'; // Context provider
import Navbar from '../components/Navbar'; // Navbar
import Footer from '../components/Footer'; // Footer
import Popup from '../components/Popup'; // Popup component

function MyApp({ Component, pageProps }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 3 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MyContextProvider>
      <div className="w-full min-h-screen flex flex-col">
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
