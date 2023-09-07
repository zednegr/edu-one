import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// *Pages
import Login from "../../screen/login/login";
import Home from "../pages/home/home";
import Students from "../pages/students/students";
import Teacher from "../pages/teachers/teachers";
import RootLayout from "../layouts/rootLayout";
import Groups from "../pages/groups/groups";
import Courses from "../pages/courses/courses";
import CourseInner from "../pages/courses/courses_inner/course_inner";
import ProtectedRoute from "./ProtectedRoute";
import Rooms from "../pages/rooms/rooms";

function Authentication() {
  return (
    <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Home />} />
          <Route path="students/list" element={<Students />} />
          <Route path="teachers/list" element={<Teacher />} />
          <Route path="groups/list" element={<Groups />} />
          <Route path="courses/list" element={<Courses />} />
          <Route path="courses/list/courseinner" element={<CourseInner />} />
          <Route path="rooms/list" element={<Rooms />} />
        </Route>
      {/* <Route path="*" element={<RootLayout />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Authentication;
