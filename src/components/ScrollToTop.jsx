import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current location (URL) from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, scroll to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;