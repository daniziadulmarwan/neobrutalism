import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import AdmissionPage from "./pages/Admission";
import StudentLife from "./pages/StudentLife";
import AcademicPage from "./pages/Academic";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/academic" element={<AcademicPage />} />
      <Route path="/admission" element={<AdmissionPage />} />
      <Route path="/student-life" element={<StudentLife />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
