import { Routes, Route } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

