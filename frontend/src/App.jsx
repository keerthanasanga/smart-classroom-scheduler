import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TimetableView from "./pages/TimetableView";
import FacultyManagement from "./pages/FacultyManagement";
import RoomManagement from "./pages/RoomManagement";
import SubjectManagement from "./pages/SubjectManagement";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timetable" element={<TimetableView />} />
        <Route path="/faculty" element={<FacultyManagement />} />
        <Route path="/rooms" element={<RoomManagement />} />
        <Route path="/subjects" element={<SubjectManagement />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
