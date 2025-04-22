// App.js
import React, { useEffect } from "react"; // Keep useEffect for ScrollToTop
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter"; // Keep if ScrollToTop needs it
import AppRoutes from "./routes";             // Your routing component
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
// Removed AnimatePresence from framer-motion if it was here for global loading
// Loader component is not directly used here anymore
import "./App.css"; // Ensure CSS for transitions is here or imported

// Компонент для скроллинга вверх
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    // Added a small delay consistent with previous advice
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100); // Adjust if needed based on your transition times
    return () => clearTimeout(timer);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  // REMOVED: Global loading state and related useEffect
  // const [loading, setLoading] = useState(true);
  // useEffect(() => { ... setLoading(false) ... }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* Анимация курсора */}
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <ScrollToTop>
        <Headermain />
        {/* AppRoutes now handles the switching and transitions */}
        {/* No conditional rendering based on global loading here */}
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}