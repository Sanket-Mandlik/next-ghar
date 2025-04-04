import '../../globals.css'; // Corrected path to global styles
import { useEffect, useState } from 'react';
import { MyContextProvider } from '../context/MyContext'; // Adjust the path as needed
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer
import Popup from '../components/Popup'; // Import Popup

function MyApp({ Component, pageProps }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Show the popup 7 seconds after the app mounts
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <MyContextProvider>
      <Navbar /> {/* Navbar at the top */}
      <div className=" mx-auto"> {/* Consistent container for all pages */}
        <Component {...pageProps} />
      </div>
      <Footer /> {/* Footer at the bottom */}
      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />} {/* Popup */}
    </MyContextProvider>
  );
}

export default MyApp;