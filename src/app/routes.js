// routes.js (or AppRoutes.js) - Minor cleanup/comments added
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom"; // useLocation can be imported directly
import withRouter from "../hooks/withRouter" // Keep if needed by specific pages or legacy reasons
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Ensure CSS classes like 'page-enter', 'page-exit', etc. are defined elsewhere (e.g., App.css)
/* Example CSS:
.page-enter { opacity: 0; transform: scale(0.95); }
.page-enter-active { opacity: 1; transform: scale(1); transition: opacity 400ms, transform 400ms; }
.page-exit { opacity: 1; transform: scale(1); }
.page-exit-active { opacity: 0; transform: scale(0.95); transition: opacity 400ms, transform 400ms; }
*/

// Using useLocation hook directly inside the component is often cleaner
const AnimatedRoutesInternal = () => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}> {/* Avoids adding an extra div */}
      <CSSTransition
        key={location.pathname} // Using pathname is generally sufficient and stable
        timeout={400} // Match CSS duration (enter/exit combined or max)
        classNames="page"
        unmountOnExit
      >
        {/* The Routes component itself doesn't animate, it just renders the matching route */}
        {/* CSSTransition animates the element rendered by the matched Route */}
        <Routes location={location}>
            {/* These page components (Home, About...) are now expected
                to manage their own loading state and render <Loader />
                or their content */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} /> {/* Or a proper 404 */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

// Exported component
function AppRoutes() {
  return (
    <div className="s_c"> {/* Your container class */}
      <AnimatedRoutesInternal />
      <Socialicons /> {/* Rendered outside the transition group */}
    </div>
  );
}

export default AppRoutes;

// Note: Removed withRouter HOC wrapper around AnimatedRoutes as useLocation()
// hook serves the purpose directly within the component. If withRouter is strictly
// needed for other reasons (e.g., legacy class components down the tree needing router props),
// you might need to keep it.