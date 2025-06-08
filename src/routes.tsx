import { Route, Routes, useLocation } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { AnimatePresence } from "motion/react";
import Contact from "./pages/Contact";

const MainRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* 
        Pass location and key to Routes to enable animation of route changes.
        The key ensures AnimatePresence correctly detects route changes.
      */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/:project_id"
          element={
            <PageWrapper>
              <Project />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
