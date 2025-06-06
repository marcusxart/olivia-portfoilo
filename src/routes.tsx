import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { AnimatePresence } from "motion/react";

const MainRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route path="/project" element={<Navigate to="/" replace />} />
        <Route
          path="/project/:project_id"
          element={
            <PageWrapper>
              <Project />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
