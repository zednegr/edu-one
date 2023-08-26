import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// *Css
import "./App.css";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// *Pages
import Login from "../screen/login/login";
import Home from "./pages/home/home";
import Students from "./pages/students/students";
import Teacher from "./pages/teachers/teachers";
import RootLayout from "./layouts/rootLayout";
import Groups from "./pages/groups/groups";
import Courses from "./pages/courses/courses";
import Courseinner from "./pages/courseinner/courseinner";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="students/list" element={<Students />} />
        <Route path="teachers/list" element={<Teacher />} />
        <Route path="groups/list" element={<Groups />} />
        <Route path="courses/list" element={<Courses />} />
        <Route path="courses/list/courseinner/:id" element={<Courseinner />} />
      </Route>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
