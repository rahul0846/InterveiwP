import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import UserName from "../pages/UserName";
import Dashboard from "../pages/Dashboard";
import Technology from "../pages/Technology";
import Questions from "../pages/Questions";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/name" element={<UserName />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;