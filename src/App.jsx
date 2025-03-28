import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppRedirect from "./pages/AppRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
